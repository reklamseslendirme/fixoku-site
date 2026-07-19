import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN, buildSiteUrl } from "../src/config/site.js";
import {
  attentionFocusArticles,
  attentionFocusHub,
  attentionFocusPages,
} from "../src/data/attentionFocusContent.js";
import {
  fixokuEducationArticles,
  fixokuEducationHub,
  fixokuEducationPages,
} from "../src/data/fixokuEducationContent.js";
import {
  attentionFocusRoutePaths,
  fixokuEducationRoutePaths,
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

const requiredAttentionFocusRoutes = [
  "/dikkat-ve-odaklanma",
  "/dikkat-ve-odaklanma/egitimi-nedir",
  "/dikkat-ve-odaklanma/ogrenmeye-etkisi",
  "/dikkat-ve-odaklanma/ogrencilerde-dikkat-zayifligi",
  "/dikkat-ve-odaklanma/hizli-okumanin-etkisi",
  "/dikkat-ve-odaklanma/fixoku-nasil-destekler",
];

const requiredFixokuEducationRoutes = [
  "/fixoku-egitimi",
  "/fixoku-egitimi/neden-fixoku",
  "/fixoku-egitimi/egitim-sureci",
  "/fixoku-egitimi/yazilim",
  "/fixoku-egitimi/hizli-okuma-kitabi",
  "/fixoku-egitimi/egzersiz-kitaplari",
  "/fixoku-egitimi/paragraf-kitaplari",
];

check(
  requiredQuickReadingRoutes.every((routePath) => quickReadingRoutePaths.includes(routePath)),
  "Altı Hızlı Okuma route'u merkezi registry içinde kayıtlı.",
);
check(quickReadingRoutePaths.length === 6, "Hızlı Okuma route sayısı tam olarak 6.");
check(
  requiredAttentionFocusRoutes.every((routePath) => attentionFocusRoutePaths.includes(routePath)),
  "Altı Dikkat ve Odaklanma route'u merkezi registry içinde kayıtlı.",
);
check(attentionFocusRoutePaths.length === 6, "Dikkat ve Odaklanma route sayısı tam olarak 6.");
check(
  requiredFixokuEducationRoutes.every((routePath) => fixokuEducationRoutePaths.includes(routePath)),
  "Yedi Fixoku Eğitimi route'u merkezi registry içinde kayıtlı.",
);
check(fixokuEducationRoutePaths.length === 7, "Fixoku Eğitimi route sayısı tam olarak 7.");
check(indexableRoutePaths.length === 23, "Toplam indexlenebilir public route sayısı tam olarak 23.");
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
  path.join(projectRoot, "src", "pages", "content", "TopicHub.jsx"),
  "utf8",
);
const articleSource = await readFile(
  path.join(projectRoot, "src", "pages", "content", "TopicArticle.jsx"),
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
  ...attentionFocusArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  attentionFocusHub.cta.primary.to,
  attentionFocusHub.cta.secondary?.to,
  ...fixokuEducationArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  fixokuEducationHub.cta.primary.to,
  fixokuEducationHub.cta.secondary?.to,
].filter(Boolean);
check(
  contentLinks.every((routePath) => knownRoutePaths.has(routePath)),
  "İlgili içerik ve CTA bağlantılarının tamamı gerçek route'lara gidiyor.",
);
const contentPages = [...quickReadingPages, ...attentionFocusPages, ...fixokuEducationPages];
check(
  contentPages.every(
    (page) => page.sections.length > 0 && new Set(page.sections.map((section) => section.id)).size === page.sections.length,
  ),
  "Her içerik sayfasındaki bölüm ID değerleri dolu ve benzersiz.",
);

const attentionContent = JSON.stringify(attentionFocusPages).toLocaleLowerCase("tr-TR");
const unsafeAttentionClaims = [
  /(?:en az|ortalama) (?:2|iki) kat/,
  /garanti (?:eder|sağlar|sunar)/,
  /kesin (?:başarı sağlar|sonuç verir)/,
  /(?:tanı koyar|tedavi eder)/,
  /her öğrenci için aynı sonuç/,
];
check(
  unsafeAttentionClaims.every((pattern) => !pattern.test(attentionContent)),
  "Dikkat ve Odaklanma içeriklerinde garanti, kesin sonuç, tanı veya tedavi iddiası bulunmuyor.",
);

const attentionRiskPage = attentionFocusPages.find(
  (page) => page.path === "/dikkat-ve-odaklanma/ogrencilerde-dikkat-zayifligi",
);
const attentionRiskContent = JSON.stringify(attentionRiskPage).toLocaleLowerCase("tr-TR");
check(
  attentionRiskContent.includes("tıbbi tanı") &&
    attentionRiskContent.includes("sağlık uzman"),
  "Dikkat güçlüğü içeriği tanı koymuyor ve gerektiğinde uzman değerlendirmesine yönlendiriyor.",
);

const fixokuEducationContent = JSON.stringify(fixokuEducationPages).toLocaleLowerCase("tr-TR");
const unsafeFixokuClaims = [
  /(?:en iyi|ilk ve tek|en gelişmiş|en donanımlı)/,
  /(?:en az|ortalama) (?:2|iki) kat/,
  /garanti (?:eder|sağlar|sunar|verir)/,
  /kesin (?:başarı sağlar|sonuç verir)/,
  /21 günde kesin/,
  /(?:sınırsız|kesintisiz) (?:bir|1) yıllık erişim/,
];
check(
  unsafeFixokuClaims.every((pattern) => !pattern.test(fixokuEducationContent)),
  "Fixoku Eğitimi içeriklerinde garanti, kesin sonuç veya doğrulanmamış karşılaştırmalı iddia bulunmuyor.",
);
check(
  fixokuEducationContent.includes("eğitmenin yerini almaz") &&
    fixokuEducationContent.includes("otomatik teşhis") &&
    fixokuEducationContent.includes("başarı garantisi"),
  "Yazılım ve ürün içerikleri yapay zekâ, ölçüm ve sonuç sınırlarını açıkça belirtiyor.",
);
check(
  schemaRoutes.every((route) => !["Product", "Offer", "AggregateRating"].includes(route.schemaType)),
  "Kitap sayfalarında uydurma Product, Offer veya AggregateRating şeması bulunmuyor.",
);

const headerSource = await readFile(
  path.join(projectRoot, "src", "components", "Header.jsx"),
  "utf8",
);
const footerSource = await readFile(
  path.join(projectRoot, "src", "components", "Footer.jsx"),
  "utf8",
);
check(
  headerSource.includes("attentionFocusArticles") &&
    headerSource.includes("ATTENTION_FOCUS_HUB_PATH") &&
    footerSource.includes('/dikkat-ve-odaklanma'),
  "Dikkat ve Odaklanma masaüstü, mobil ve footer navigasyonuna bağlı.",
);
check(
  headerSource.includes("fixokuEducationArticles") &&
    headerSource.includes("FIXOKU_EDUCATION_HUB_PATH") &&
    footerSource.includes('/fixoku-egitimi'),
  "Fixoku Eğitimi masaüstü, mobil ve footer navigasyonuna bağlı.",
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
