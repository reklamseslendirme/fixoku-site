import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSiteUrl, normalizeRoutePath, SITE_ORIGIN } from "../src/config/site.js";
import { contentExplorerGroups } from "../src/data/contentExplorer.js";
import { businessIdentity, contactPhones } from "../src/data/legalContent.js";
import {
  getPrerenderOutputPath,
  indexableRoutePaths,
  legalRoutePaths,
  notFoundSeo,
  panelSeo,
  publicRouteRegistry,
} from "../src/data/contentRoutes.js";
import { buildContentSchemas } from "../src/utils/seoSchemas.js";
import { startRenderedServer } from "./rendered-server.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const distDirectory = path.join(projectRoot, "dist");
const failures = [];
const successes = [];
const forbiddenOrigin = ["fixoku", "com", "com"].join(".");

function check(condition, message) {
  if (condition) successes.push(message);
  else failures.push(message);
}

function decodeHtml(value = "") {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function capture(html, pattern) {
  const match = html.match(pattern);
  return match ? decodeHtml(match[1].trim()) : null;
}

function getMeta(html, attribute, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const keyPattern = new RegExp(`${attribute}\\s*=\\s*(["'])${escapedKey}\\1`, "i");

  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (!keyPattern.test(tag)) continue;
    const contentMatch = tag.match(/content\s*=\s*(["'])([\s\S]*?)\1/i);
    return contentMatch ? decodeHtml(contentMatch[2]) : null;
  }

  return null;
}

function countMeta(html, attribute, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    html.match(new RegExp(`<meta[^>]*${attribute}=["']${escapedKey}["'][^>]*>`, "gi")) ?? []
  ).length;
}

function getCanonical(html) {
  return (
    capture(
      html,
      /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
    ) ??
    capture(
      html,
      /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i,
    )
  );
}

function countCanonical(html) {
  return (html.match(/<link[^>]*rel=["']canonical["'][^>]*>/gi) ?? []).length;
}

function getJsonLd(html) {
  return [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => JSON.parse(match[1]),
  );
}

function getSchemaNodes(schemas) {
  return schemas.flatMap((schema) =>
    Array.isArray(schema?.["@graph"]) ? schema["@graph"] : [schema],
  );
}

function getSchemaTypes(schemas) {
  return getSchemaNodes(schemas).map((schema) => schema?.["@type"]);
}

function getH1Count(html) {
  return (html.match(/<h1(?:\s|>)/gi) ?? []).length;
}

function getVisibleText(html = "") {
  return decodeHtml(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function getHrefValues(html) {
  return [...html.matchAll(/<a\b[^>]*\shref=["']([^"']*)["'][^>]*>/gi)].map(
    (match) => decodeHtml(match[1]),
  );
}

function getInternalAssetPaths(html) {
  const paths = new Set();
  const patterns = [
    /<(?:script|img|source|video)[^>]*\ssrc=["'](\/[^"']+)["'][^>]*>/gi,
    /<link[^>]*rel=["']stylesheet["'][^>]*href=["'](\/[^"']+)["'][^>]*>/gi,
    /<link[^>]*href=["'](\/[^"']+)["'][^>]*rel=["']stylesheet["'][^>]*>/gi,
  ];

  for (const pattern of patterns) {
    for (const match of html.matchAll(pattern)) paths.add(match[1].split(/[?#]/, 1)[0]);
  }

  return [...paths];
}

function getDistPath(relativePath) {
  return path.join(distDirectory, ...relativePath.split("/"));
}

async function exists(filePath) {
  return stat(filePath).then((value) => value.isFile()).catch(() => false);
}

const renderedRoutes = [];

for (const route of publicRouteRegistry) {
  const relativePath = getPrerenderOutputPath(route.path);
  const filePath = getDistPath(relativePath);
  const filePresent = await exists(filePath);
  check(filePresent, `${route.path}: fiziksel HTML mevcut.`);
  if (!filePresent) continue;

  const html = await readFile(filePath, "utf8");
  const canonical = buildSiteUrl(route.path);
  const schemas = getJsonLd(html);
  const expectedSchemaTypes = getSchemaTypes(buildContentSchemas(route));
  const schemaTypes = getSchemaTypes(schemas);
  const assetPaths = getInternalAssetPaths(html);
  const assetChecks = await Promise.all(
    assetPaths.map((assetPath) => exists(getDistPath(assetPath.replace(/^\/+/, "")))),
  );

  check(capture(html, /<title[^>]*>([\s\S]*?)<\/title>/i) === route.title, `${route.path}: title doğru.`);
  check(getMeta(html, "name", "description") === route.description, `${route.path}: description doğru.`);
  check(getCanonical(html) === canonical, `${route.path}: self-canonical doğru.`);
  check(canonical.startsWith(SITE_ORIGIN), `${route.path}: canonical production origin kullanıyor.`);
  check(
    getMeta(html, "property", "og:title") === route.title &&
      getMeta(html, "property", "og:description") === route.description &&
      getMeta(html, "property", "og:url") === canonical &&
      getMeta(html, "property", "og:type") === route.openGraphType &&
      getMeta(html, "property", "og:locale") === "tr_TR",
    `${route.path}: Open Graph alanları doğru.`,
  );
  check(
    getMeta(html, "name", "twitter:card") === "summary" &&
      getMeta(html, "name", "twitter:title") === route.title &&
      getMeta(html, "name", "twitter:description") === route.description,
    `${route.path}: Twitter metadata doğru.`,
  );
  check(
    expectedSchemaTypes.length > 0 &&
      JSON.stringify(schemaTypes) === JSON.stringify(expectedSchemaTypes),
    `${route.path}: beklenen JSON-LD türleri doğru.`,
  );
  check(getH1Count(html) === 1, `${route.path}: prerender HTML içinde tek H1 var.`);
  check(html.includes(route.distinguishingText), `${route.path}: ayırt edici ana içerik mevcut.`);
  check(
    html.includes('<div id="root" data-render-mode="prerendered"><'),
    `${route.path}: prerender root dolu ve işaretli.`,
  );
  check(assetPaths.length >= 2 && assetChecks.every(Boolean), `${route.path}: HTML asset yolları mevcut dosyalara gidiyor.`);
  check(
    (html.match(/<title(?:\s|>)/gi) ?? []).length === 1 &&
      countMeta(html, "name", "description") === 1 &&
      countCanonical(html) === 1,
    `${route.path}: title, description ve canonical yinelenmiyor.`,
  );

  renderedRoutes.push({
    route: route.path,
    relativePath,
    html,
    hash: createHash("sha256").update(html).digest("hex"),
    title: route.title,
    canonical,
    schemas,
    schemaTypes,
  });
}

check(
  renderedRoutes.length === publicRouteRegistry.length,
  "Bütün indexlenebilir public route'lar prerender edildi.",
);
check(
  publicRouteRegistry.length === 42 && renderedRoutes.length === 42,
  "Public route ve prerender HTML sayısı 42/42.",
);
check(
  new Set(renderedRoutes.map((route) => route.hash)).size === renderedRoutes.length,
  "Public route HTML hash değerleri birbirinden farklı.",
);
check(
  contentExplorerGroups.length === 6 &&
    contentExplorerGroups.reduce((total, group) => total + group.items.length, 0) === 37,
  "Global Content Explorer altı grup ve 37 içerik öğesiyle değişmeden kaldı.",
);

const renderedByPath = new Map(renderedRoutes.map((item) => [item.route, item]));
const homeRendered = renderedByPath.get("/");
const contactRendered = renderedByPath.get("/iletisim");
const homeCanonical = buildSiteUrl("/");
const homeSchemaRoot = homeRendered?.schemas?.[0];
const homeSchemaNodes = getSchemaNodes(homeRendered?.schemas ?? []);
const homeOrganization = homeSchemaNodes.find((schema) => schema?.["@type"] === "Organization");
const homeWebsite = homeSchemaNodes.find((schema) => schema?.["@type"] === "WebSite");
const homeWebpage = homeSchemaNodes.find((schema) => schema?.["@type"] === "WebPage");
const homeContactPoints = homeOrganization?.contactPoint ?? [];
const homeIds = homeSchemaNodes.map((schema) => schema?.["@id"]).filter(Boolean);
const homeVisibleText = getVisibleText(homeRendered?.html);
const homeFooterHtml = homeRendered?.html.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] ?? "";
const homeFooterText = getVisibleText(homeFooterHtml);
const homeFooterHrefs = getHrefValues(homeFooterHtml);
const contactMainHtml = contactRendered?.html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? "";
const contactMainText = getVisibleText(contactMainHtml);
const contactMainHrefs = getHrefValues(contactMainHtml);
check(
  JSON.stringify(homeRendered?.schemaTypes) ===
    JSON.stringify(["Organization", "WebSite", "WebPage"]),
  "Ana sayfa ilk HTML Organization, WebSite ve WebPage şemalarını içeriyor.",
);
check(
  homeRendered?.schemas?.length === 1 &&
    homeSchemaRoot?.["@context"] === "https://schema.org" &&
    homeSchemaRoot?.["@graph"]?.length === 3 &&
    homeSchemaNodes.every((schema) => !schema?.["@context"]),
  "Ana sayfa ilk HTML tek JSON-LD graph ve tek kök @context içeriyor.",
);
check(
  homeRendered?.canonical === homeCanonical &&
    homeOrganization?.["@id"] === `${homeCanonical}#organization` &&
    homeWebsite?.["@id"] === `${homeCanonical}#website` &&
    homeWebpage?.["@id"] === `${homeCanonical}#webpage` &&
    homeOrganization?.legalName === "Fixoku Yayınları — Mavi Yeşil Ajans" &&
    !Object.hasOwn(homeOrganization, "founder") &&
    homeOrganization?.slogan === "Okuyan, Anlayan, Gelişen Nesiller" &&
    homeOrganization?.logo === buildSiteUrl("/brand/fixoku-logo-schema-512.png") &&
    homeWebsite?.url === homeRendered?.canonical &&
    homeWebpage?.url === homeRendered?.canonical &&
    homeContactPoints.length === 2 &&
    new Set(homeContactPoints.map((point) => point.telephone)).size === 2 &&
    JSON.stringify(homeContactPoints.map((point) => point.name)) ===
      JSON.stringify([contactPhones.mobile.label, contactPhones.office.label]) &&
    JSON.stringify(homeContactPoints.map((point) => point.telephone)) ===
      JSON.stringify([contactPhones.mobile.display, contactPhones.office.display]) &&
    homeContactPoints.every(
      (point) =>
        point.contactType === "customer service" &&
        point.areaServed === "TR" &&
        point.availableLanguage === "tr",
    ) &&
    new Set(homeIds).size === homeIds.length,
  "Ana sayfa rendered graph kimlikleri, iki benzersiz ContactPoint, canonical, yasal ad, slogan ve logo URL'si doğru.",
);
check(
  !homeRendered?.html.includes("localhost") &&
    ![
      "FAQPage",
      "LocalBusiness",
      "Product",
      "Course",
      "Review",
      "AggregateRating",
      "SearchAction",
    ].some((type) => homeRendered?.html.includes(`\"@type\":\"${type}\"`)),
  "Ana sayfa rendered graph localhost ve yasaklı schema türlerini içermiyor.",
);
check(
  [
    "Çocuğunuzun dikkat ve odaklanma seviyesini 2 dakikada ölçün, gelişim alanlarını uzman eğitmenimizle değerlendirin.",
    "Çocuğunuzun okuma hızını ve anlama becerisini ölçün, sonuçları uzman eğitmenimizle değerlendirin.",
    "Okuma Ölçümünü Başlat",
    "Fixoku Eğitim Kitapları",
    "21 Günlük Başarı Serüveni",
    "126 Egzersiz İçeriği",
    "9 Kategoride Ölçümleme ve Analiz",
    "1 Yıl Aktif Serbest Çalışma Alanı",
    "21 günlük eğitim sonunda öğrencilerin okuma hızında ve anlama becerilerinde belirgin gelişim elde edilmektedir.",
    "Yapay zekâ destekli yazılımımız, öğrencilerin gelişimini anlık olarak takip ederek eğitim sonunda detaylı veriler sunar.",
    "Uzman eğitmen eğitim vererek gelişimi takip eder.",
    "Eğitim nasıl yapılmaktadır?",
    "Eğitim online ya da yüz yüze olarak yapılabilir.",
  ].every((phrase) => homeVisibleText.includes(phrase)) &&
    ![
      "12.000+",
      "ortalama 2 kat",
      "ortalama iki kat",
      "2 kat okuma",
      "Fixoku Eğitim Deneyimi",
      "Eğitim online mı yapılmaktadır?",
      "Okuma Testini Başlat",
      "2 dakikalık test ile",
    ].some((phrase) => homeVisibleText.includes(phrase)) &&
    !/Fixoku Eğitim Kitabı(?!ları)/u.test(homeVisibleText),
  "Ana sayfa rendered görünür içeriği güncel Word metin sözleşmesine uyuyor.",
);
check(
  homeRendered?.html.includes('data-counter-target="3000"') &&
    homeVisibleText.includes("2.000+ öğrenci eğitim aldı") &&
    !homeVisibleText.includes("3.000+ öğrenci eğitim aldı"),
  "Rendered ana sayfada test hedefi 3000 ve eğitim alan öğrenci istatistiği bağımsız 2.000+.",
);
check(
  homeFooterText.includes("Çocuğunuzun Akademik Gelişimini Ertelemeyin") &&
    homeFooterText.includes("Fixoku, Mavi Yeşil Ajans kuruluşudur.") &&
    homeFooterText.includes("Fixoku Yayınları — Mavi Yeşil Ajans") &&
    !homeRendered?.html.includes("Ersin Usta") &&
    !homeFooterText.includes("Okuyan, Anlayan, Gelişen Nesiller") &&
    homeOrganization?.slogan === "Okuyan, Anlayan, Gelişen Nesiller",
  "Rendered footer kişi adını ve görünür sloganı kaldırırken Organization schema sloganını koruyor.",
);
check(
  JSON.stringify(contactRendered?.schemaTypes) ===
    JSON.stringify(["ContactPage", "BreadcrumbList"]) &&
    contactRendered?.html.includes('aria-label="İçerik yolu"') &&
    contactRendered?.html.includes('aria-current="page">İletişim'),
  "İletişim ilk HTML ContactPage, BreadcrumbList ve görünür breadcrumb içeriyor.",
);
check(
  (contactMainText.match(new RegExp(contactPhones.mobile.display.replace(/\+/g, "\\+"), "g")) ?? [])
    .length === 1 &&
    (contactMainText.match(new RegExp(contactPhones.office.display.replace(/\+/g, "\\+"), "g")) ?? [])
      .length === 1 &&
    contactMainHrefs.filter((href) => href === contactPhones.mobile.telUri).length === 1 &&
    contactMainHrefs.filter((href) => href === contactPhones.office.telUri).length === 1 &&
    contactMainHrefs.filter((href) => href.startsWith(contactPhones.mobile.whatsappUrl)).length === 1 &&
    !contactMainHrefs.some((href) => href.includes("wa.me/902324620743")),
  "Rendered iletişim alanı cep/WhatsApp ve ofis telefonlarını tekil, ayrı ve doğru bağlantılarla gösteriyor.",
);
check(
  homeFooterText.includes(contactPhones.mobile.label) &&
    homeFooterText.includes(contactPhones.mobile.display) &&
    homeFooterText.includes(contactPhones.office.label) &&
    homeFooterText.includes(contactPhones.office.display) &&
    homeFooterHrefs.filter((href) => href === contactPhones.mobile.telUri).length === 1 &&
    homeFooterHrefs.filter((href) => href === contactPhones.office.telUri).length === 1 &&
    !homeFooterHrefs.some((href) => href.includes("wa.me/902324620743")),
  "Rendered footer cep/WhatsApp ve ofis telefonlarını doğru tel URI'leriyle ayırt ediyor.",
);
check(
  legalRoutePaths.length === 3 &&
    legalRoutePaths.every((routePath) => {
      const rendered = renderedByPath.get(routePath);
      return (
        JSON.stringify(rendered?.schemaTypes) === JSON.stringify(["WebPage", "BreadcrumbList"]) &&
        rendered?.html.includes('aria-label="İçerik yolu"') &&
        rendered?.html.includes("Son güncelleme: 19 Temmuz 2026") &&
        !rendered?.html.includes('class="footer-cta-band"')
      );
    }),
  "Üç hukuki route ilk HTML'de metin, görünür breadcrumb, WebPage + BreadcrumbList içeriyor ve pazarlama CTA bandı göstermiyor.",
);

const combinedPublicHtml = renderedRoutes.map((item) => item.html).join("\n");
const allRenderedHrefs = renderedRoutes.flatMap((item) =>
  getHrefValues(item.html).map((href) => ({ route: item.route, href })),
);
const renderedHrefValues = allRenderedHrefs.map(({ href }) => href);
const knownPublicPaths = new Set(indexableRoutePaths);

function isValidRenderedInternalHref(href) {
  if (href.startsWith("#")) return href.length > 1;
  if (!href.startsWith("/")) return true;

  const url = new URL(href, SITE_ORIGIN);
  const pathname = normalizeRoutePath(url.pathname);
  if (!knownPublicPaths.has(pathname) && pathname !== "/panel") return false;

  if (url.search) {
    const params = [...url.searchParams.entries()];
    if (
      pathname !== "/" ||
      params.length !== 1 ||
      params[0][0] !== "test" ||
      !["reading", "attention"].includes(params[0][1])
    ) return false;
  }

  if (url.hash && pathname === "/" && url.hash !== "#testler") return false;
  return true;
}

const brokenRenderedLinks = allRenderedHrefs.filter(
  ({ href }) =>
    (href.startsWith("/") || href.startsWith("#")) &&
    !isValidRenderedInternalHref(href),
);
check(
  brokenRenderedLinks.length === 0,
  brokenRenderedLinks.length
    ? `Rendered karşılanmayan internal linkler: ${[
        ...new Set(brokenRenderedLinks.map(({ route, href }) => `${route} -> ${href}`)),
      ].join(", ")}`
    : "Rendered global internal linklerin tamamı gerçek route, hash veya izinli test query'sine gidiyor.",
);
check(
  allRenderedHrefs.every(({ href }) => href !== "#"),
  "Rendered public HTML içinde href=\"#\" bulunmuyor.",
);
check(
  combinedPublicHtml.includes('href="/#testler"') &&
    combinedPublicHtml.includes('href="/?test=reading"') &&
    combinedPublicHtml.includes('href="/?test=attention"'),
  "Rendered navigasyon mevcut test bölümü ile iki modal query hedefini içeriyor.",
);
check(
  renderedHrefValues.includes(contactPhones.mobile.telUri) &&
    renderedHrefValues.includes(contactPhones.office.telUri) &&
    renderedHrefValues.some((href) => href.startsWith(contactPhones.mobile.whatsappUrl)) &&
    renderedHrefValues
      .filter((href) => href.startsWith("https://wa.me/"))
      .every((href) => href.startsWith(contactPhones.mobile.whatsappUrl)) &&
    !renderedHrefValues.some((href) => href.includes("wa.me/902324620743")),
  "Rendered telefon hedefleri cep ve ofis hatlarını içeriyor; WhatsApp yalnız cep numarasını kullanıyor.",
);
check(
  businessIdentity.socialProfiles.every(
    (profile) => combinedPublicHtml.includes(`href="${profile}"`),
  ) &&
    combinedPublicHtml.includes('target="_blank"') &&
    combinedPublicHtml.includes('rel="noopener noreferrer"'),
  "Rendered footer dört doğrulanmış sosyal medya URL'sini güvenli dış bağlantı olarak içeriyor.",
);
const renderedLegalHtml = legalRoutePaths.map((routePath) => renderedByPath.get(routePath)?.html ?? "").join("\n").toLocaleLowerCase("tr-TR");
check(
  [
    "fixoku.com.tr",
    "dersfix.com",
    "tamamen güvende",
    "kırılması mümkün olmayan",
    "mail order",
    "paytr",
    "iyzico",
    "iyzigo",
  ].every((phrase) => !renderedLegalHtml.includes(phrase)),
  "Rendered hukuki içerikte eski domain, kesin güvenlik veya doğrulanmamış ödeme sağlayıcısı ifadesi yok.",
);

const panelPath = getDistPath("panel.html");
const panelPresent = await exists(panelPath);
check(panelPresent, "Panel HTML kabuğu mevcut.");
const panelHtml = panelPresent ? await readFile(panelPath, "utf8") : "";
check(getMeta(panelHtml, "name", "robots") === panelSeo.robots, "Panel ilk HTML noindex, nofollow.");
check(
  countCanonical(panelHtml) === 0 && getJsonLd(panelHtml).length === 0,
  "Panel HTML canonical ve JSON-LD içermiyor.",
);
check(
  panelHtml.includes('<div id="root" data-render-mode="client"></div>'),
  "Panel client mount kabuğu açık biçimde işaretli.",
);

const notFoundPath = getDistPath("404.html");
const notFoundPresent = await exists(notFoundPath);
check(notFoundPresent, "404.html mevcut.");
const notFoundHtml = notFoundPresent ? await readFile(notFoundPath, "utf8") : "";
check(getMeta(notFoundHtml, "name", "robots") === notFoundSeo.robots, "404 ilk HTML noindex, nofollow.");
check(
  countCanonical(notFoundHtml) === 0 &&
    getJsonLd(notFoundHtml).length === 0 &&
    countMeta(notFoundHtml, "property", "og:title") === 0,
  "404 canonical, JSON-LD ve indexlenebilir OG iddiası içermiyor.",
);
check(
  getH1Count(notFoundHtml) === 1 &&
    notFoundHtml.includes('href="/"') &&
    notFoundHtml.includes('href="/hizli-okuma"'),
  "404 görünür H1 ve dönüş bağlantıları içeriyor.",
);

const vercelConfig = JSON.parse(await readFile(path.join(projectRoot, "vercel.json"), "utf8"));
const rewrites = vercelConfig.rewrites ?? [];
const hasGlobalCatchAll = rewrites.some(({ source }) =>
  ["/(.*)", "/:path*", "/(.*)*"].includes(source),
);
check(!hasGlobalCatchAll, "Global SPA catch-all rewrite kaldırıldı.");
check(
  vercelConfig.cleanUrls === true &&
    vercelConfig.trailingSlash === false &&
    rewrites.length > 0 &&
    rewrites.every(({ source }) => source === "/panel" || source.startsWith("/panel/")),
  "Vercel clean URL ve yalnızca panel fallback yapılandırması doğru.",
);

const sitemap = await readFile(getDistPath("sitemap.xml"), "utf8");
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
check(
  sitemapPaths.length === 42 &&
    sitemapPaths.length === indexableRoutePaths.length &&
    indexableRoutePaths.every((routePath) => sitemapPaths.includes(routePath)),
  "Sitemap ile prerender public route listesi uyumlu.",
);

const ignoredDirectories = new Set([".git", "node_modules"]);
const wrongOriginFiles = [];

async function scanWrongOrigin(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await scanWrongOrigin(entryPath);
    } else if ((await stat(entryPath)).size < 5_000_000) {
      const content = await readFile(entryPath, "utf8").catch(() => "");
      if (content.includes(forbiddenOrigin)) wrongOriginFiles.push(path.relative(projectRoot, entryPath));
    }
  }
}

await scanWrongOrigin(projectRoot);
check(wrongOriginFiles.length === 0, "Repository ve build çıktısında hatalı production domain yok.");

const renderedServer = await startRenderedServer();
const httpRoutes = [
  ...indexableRoutePaths,
  "/panel",
  "/panel/ornek-alt-route",
  "/bilinmeyen-bir-route",
];
const httpResults = [];

try {
  for (const routePath of httpRoutes) {
    const response = await fetch(`${renderedServer.origin}${routePath}`);
    const html = await response.text();
    httpResults.push({
      route: routePath,
      status: response.status,
      title: capture(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      canonical: getCanonical(html),
      robots: getMeta(html, "name", "robots"),
      h1: capture(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() ?? null,
      hash: createHash("sha256").update(html).digest("hex"),
    });
  }
} finally {
  await renderedServer.close();
}

check(
  httpResults
    .filter((result) => indexableRoutePaths.includes(result.route))
    .every((result) => result.status === 200),
  "Bilinen public route'lar yerel statik sunucuda 200 dönüyor.",
);
check(
  httpResults
    .filter((result) => result.route === "/panel" || result.route.startsWith("/panel/"))
    .every((result) => result.status === 200 && result.robots === panelSeo.robots),
  "Panel ve panel alt route'ları 200 ve ilk HTML noindex dönüyor.",
);
const unknownResult = httpResults.find((result) => result.route === "/bilinmeyen-bir-route");
check(
  unknownResult?.status === 404 && unknownResult.robots === notFoundSeo.robots,
  "Bilinmeyen route gerçek 404 ve noindex HTML dönüyor.",
);

for (const message of successes) console.log(`✓ ${message}`);

console.log("\nRendered HTTP özeti:");
console.log(JSON.stringify(httpResults, null, 2));

if (failures.length) {
  for (const message of failures) console.error(`✗ ${message}`);
  process.exitCode = 1;
} else {
  console.log(`\nRendered SEO doğrulaması başarılı: ${successes.length} kontrol geçti.`);
}
