import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN, buildSiteUrl } from "../src/config/site.js";
import {
  indexableRoutePaths,
  publicRouteRegistry,
  quickReadingRoutePaths,
} from "../src/data/contentRoutes.js";
import {
  quickReadingArticles,
  quickReadingHub,
  quickReadingPages,
} from "../src/data/quickReadingContent.js";
import { buildContentSchemas } from "../src/utils/seoSchemas.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const failures = [];
const successes = [];
const forbiddenOrigin = ["fixoku", "com", "com"].join(".");

function check(condition, message) {
  if (condition) {
    successes.push(message);
  } else {
    failures.push(message);
  }
}

function isUnique(values) {
  return new Set(values).size === values.length;
}

const requiredQuickReadingRoutes = [
  "/hizli-okuma",
  "/hizli-okuma/nedir",
  "/hizli-okuma/neden-onemli",
  "/hizli-okuma/kimler-egitim-almali",
  "/hizli-okuma/firmalar-ve-egitim-modelleri",
  "/hizli-okuma/hizli-okursam-anlar-miyim",
];

check(
  requiredQuickReadingRoutes.every((routePath) => quickReadingRoutePaths.includes(routePath)),
  "Altı Hızlı Okuma route'u merkezi registry içinde kayıtlı.",
);
check(quickReadingRoutePaths.length === 6, "Hızlı Okuma route sayısı tam olarak 6.");
check(
  isUnique(publicRouteRegistry.map((route) => route.title)),
  "Indexlenebilir route title değerleri benzersiz.",
);
check(
  isUnique(publicRouteRegistry.map((route) => route.description)),
  "Indexlenebilir route meta description değerleri benzersiz.",
);
check(
  publicRouteRegistry.every((route) => route.title.length >= 45 && route.title.length <= 70),
  "Title uzunlukları doğal SEO hedef aralığında.",
);
check(
  publicRouteRegistry.every((route) => route.description.length >= 140 && route.description.length <= 165),
  "Meta description uzunlukları doğal SEO hedef aralığında.",
);

const canonicals = publicRouteRegistry.map((route) => buildSiteUrl(route.path));
check(isUnique(canonicals), "Canonical URL değerleri benzersiz.");
check(
  canonicals.every((canonical) => canonical.startsWith(SITE_ORIGIN)),
  "Bütün canonical URL değerleri merkezi production origin ile başlıyor.",
);
check(
  canonicals.every((canonical) => canonical === SITE_ORIGIN || !canonical.endsWith("/")),
  "Ana sayfa dışındaki canonical URL değerlerinde trailing slash yok.",
);
check(
  canonicals.every((canonical) => !canonical.includes("?") && !canonical.includes("#")),
  "Canonical URL değerlerinde query string veya hash yok.",
);

const layoutSource = await readFile(
  path.join(projectRoot, "src", "components", "content", "ContentPageLayout.jsx"),
  "utf8",
);
const hubSource = await readFile(
  path.join(projectRoot, "src", "pages", "content", "QuickReadingHub.jsx"),
  "utf8",
);
const articleSource = await readFile(
  path.join(projectRoot, "src", "pages", "content", "QuickReadingArticle.jsx"),
  "utf8",
);
check(
  (layoutSource.match(/<h1(?:\s|>)/g) ?? []).length === 1 &&
    (hubSource.match(/<h1(?:\s|>)/g) ?? []).length === 0 &&
    (articleSource.match(/<h1(?:\s|>)/g) ?? []).length === 0,
  "Ortak içerik mimarisi her sayfada tek H1 üretiyor.",
);

const sitemapSource = await readFile(path.join(projectRoot, "public", "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
check(
  sitemapUrls.length === indexableRoutePaths.length &&
    indexableRoutePaths.every((routePath) => sitemapUrls.includes(buildSiteUrl(routePath))),
  "Sitemap ile merkezi indexlenebilir route registry birbiriyle uyumlu.",
);
check(
  !sitemapUrls.some((url) => new URL(url).pathname.startsWith("/panel")),
  "Panel route'ları sitemap dışında.",
);
check(
  !sitemapUrls.some((url) => new URL(url).pathname.includes("404")),
  "404 sitemap dışında.",
);

const schemaRoutes = publicRouteRegistry.filter((route) => route.schemaType);
check(
  schemaRoutes.every((route) =>
    buildContentSchemas(route).every((schema) => {
      JSON.parse(JSON.stringify(schema));
      return true;
    }),
  ),
  "WebPage/CollectionPage ve BreadcrumbList şemaları geçerli JSON üretiyor.",
);

const knownRoutePaths = new Set(indexableRoutePaths);
check(
  schemaRoutes.every((route) => route.breadcrumbs.every((item) => knownRoutePaths.has(item.path))),
  "Breadcrumb bağlantılarının tamamı gerçek route'lara gidiyor.",
);

const contentLinks = [
  ...quickReadingArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  quickReadingHub.cta.primary.to,
  quickReadingHub.cta.secondary?.to,
].filter(Boolean);
check(
  contentLinks.every((routePath) => knownRoutePaths.has(routePath)),
  "İlgili içerik ve CTA bağlantılarının tamamı gerçek route'lara gidiyor.",
);
check(
  quickReadingPages.every(
    (page) => page.sections.length > 0 && new Set(page.sections.map((section) => section.id)).size === page.sections.length,
  ),
  "Her içerik sayfasındaki bölüm ID değerleri dolu ve benzersiz.",
);

const robotsSource = await readFile(path.join(projectRoot, "public", "robots.txt"), "utf8");
check(
  robotsSource.includes(`Sitemap: ${buildSiteUrl("/sitemap.xml")}`),
  "Robots dosyası merkezi origin üzerinden doğru sitemap adresini gösteriyor.",
);

const ignoredDirectories = new Set([".git", "node_modules", "dist"]);
const repositoryFiles = [];

async function collectFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(entryPath);
    } else if ((await stat(entryPath)).size < 5_000_000) {
      repositoryFiles.push(entryPath);
    }
  }
}

await collectFiles(projectRoot);
const filesWithWrongOrigin = [];
const filesWithRepeatedOrigin = [];
const allowedOriginFiles = new Set([
  path.join(projectRoot, "src", "config", "site.js"),
  path.join(projectRoot, "public", "sitemap.xml"),
  path.join(projectRoot, "public", "robots.txt"),
]);

for (const filePath of repositoryFiles) {
  const contents = await readFile(filePath, "utf8").catch(() => "");
  if (contents.includes(forbiddenOrigin)) {
    filesWithWrongOrigin.push(path.relative(projectRoot, filePath));
  }
  if (contents.includes(SITE_ORIGIN) && !allowedOriginFiles.has(filePath)) {
    filesWithRepeatedOrigin.push(path.relative(projectRoot, filePath));
  }
}

check(
  filesWithWrongOrigin.length === 0,
  filesWithWrongOrigin.length
    ? `Hatalı domain bulunan dosyalar: ${filesWithWrongOrigin.join(", ")}`
    : "Repository içinde hatalı production domain bulunmuyor.",
);
check(
  filesWithRepeatedOrigin.length === 0,
  filesWithRepeatedOrigin.length
    ? `Production origin merkezi config dışında tekrarlandı: ${filesWithRepeatedOrigin.join(", ")}`
    : "Production origin yalnızca merkezi config ve üretilen SEO dosyalarında bulunuyor.",
);

for (const message of successes) {
  console.log(`✓ ${message}`);
}

if (failures.length) {
  for (const message of failures) {
    console.error(`✗ ${message}`);
  }
  process.exitCode = 1;
} else {
  console.log(`SEO doğrulaması başarılı: ${successes.length} kontrol geçti.`);
}
