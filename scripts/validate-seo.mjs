import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN, buildSiteUrl, normalizeRoutePath } from "../src/config/site.js";
import {
  attentionFocusArticles,
  attentionFocusHub,
  attentionFocusPages,
} from "../src/data/attentionFocusContent.js";
import { blogArticles, blogPages } from "../src/data/blogContent.js";
import { contentExplorerGroups } from "../src/data/contentExplorer.js";
import {
  corporateArticles,
  corporateHub,
  corporatePages,
} from "../src/data/corporateContent.js";
import {
  fixokuEducationArticles,
  fixokuEducationHub,
  fixokuEducationPages,
} from "../src/data/fixokuEducationContent.js";
import {
  knowledgeCenterCategories,
  knowledgeCenterHub,
  knowledgeCenterPages,
} from "../src/data/knowledgeCenterContent.js";
import { businessIdentity, legalPages } from "../src/data/legalContent.js";
import {
  attentionFocusRoutePaths,
  blogRoutePaths,
  corporateRoutePaths,
  fixokuEducationRoutePaths,
  indexableRoutePaths,
  knowledgeCenterRoutePaths,
  legalRoutePaths,
  publicRouteRegistry,
  quickReadingRoutePaths,
  trainingRoutePaths,
} from "../src/data/contentRoutes.js";
import {
  quickReadingArticles,
  quickReadingHub,
  quickReadingPages,
} from "../src/data/quickReadingContent.js";
import {
  trainingArticles,
  trainingHub,
  trainingPages,
} from "../src/data/trainingContent.js";
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

const requiredKnowledgeCenterCategories = [
  "Hızlı Okuma",
  "Dikkat",
  "Odaklanma",
  "Hafıza",
  "Öğrenme Teknikleri",
  "Sınav Hazırlığı",
  "Kitap Okuma",
  "Verimli Ders Çalışma",
];

const requiredBlogRoutes = [
  "/blog/hizli-okumanin-sinav-basarisina-etkisi",
  "/blog/kelime-dagarcigi-ve-kendini-ifade-etme",
  "/blog/turkiyede-hizli-okumanin-onemi",
  "/blog/dikkat-ve-odaklanmanin-egitime-etkisi",
  "/blog/takistoskop-nedir",
];

const requiredBlogCategories = new Map([
  ["/blog/hizli-okumanin-sinav-basarisina-etkisi", "Sınav Hazırlığı"],
  ["/blog/kelime-dagarcigi-ve-kendini-ifade-etme", "Kitap Okuma"],
  ["/blog/turkiyede-hizli-okumanin-onemi", "Hızlı Okuma"],
  ["/blog/dikkat-ve-odaklanmanin-egitime-etkisi", "Dikkat"],
  ["/blog/takistoskop-nedir", "Öğrenme Teknikleri"],
]);

const requiredTrainingRoutes = [
  "/egitimler",
  "/egitimler/ilkokul-akici-okuma",
  "/egitimler/ilkokul-hizli-okuma",
  "/egitimler/ortaokul-hizli-okuma",
  "/egitimler/lise-hizli-okuma",
  "/egitimler/paragraf-teknikleri",
  "/egitimler/yetiskin-hizli-okuma",
  "/egitimler/sinav-odakli-hizli-okuma",
];

const requiredCorporateRoutes = [
  "/hakkimizda",
  "/okullar-icin",
  "/egitmen-ol",
  "/sss",
];

const requiredLegalRoutes = [
  "/kvkk",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
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
check(
  knowledgeCenterRoutePaths.length === 1 && knowledgeCenterRoutePaths[0] === "/blog",
  "Bilgi Merkezi yalnızca /blog hub route'u ile kayıtlı.",
);
check(
  knowledgeCenterPages.length === 1 &&
    knowledgeCenterCategories.length === 8 &&
    requiredKnowledgeCenterCategories.every((heading) =>
      knowledgeCenterCategories.some((category) => category.heading === heading),
    ) &&
    knowledgeCenterCategories.every((category) => !category.path),
  "Bilgi Merkezi sekiz routesuz kategori kartıyla hub-only yapıda hazır.",
);
check(
  requiredBlogRoutes.every((routePath) => blogRoutePaths.includes(routePath)) && blogRoutePaths.length === 5,
  "Beş Blog makalesi merkezi registry içinde kayıtlı.",
);
check(
  blogArticles.length === 5 &&
    blogArticles.every(
      (article) =>
        requiredBlogCategories.get(article.path) === article.category &&
        article.collectionPath === "/blog" &&
        article.schemaType === "Article",
    ),
  "Beş Blog makalesinin kategori, merkez ve schema eşleştirmeleri doğru.",
);
check(
  requiredTrainingRoutes.every((routePath) => trainingRoutePaths.includes(routePath)) &&
    trainingRoutePaths.length === 8,
  "Eğitimlerimiz hub ve yedi alt route ile merkezi registry içinde kayıtlı.",
);
check(
  trainingArticles.length === 7 &&
    trainingPages.length === 8 &&
    trainingHub.path === "/egitimler" &&
    trainingArticles.every(
      (article) => article.collectionPath === "/egitimler" && article.kind === "article",
    ),
  "Eğitimlerimiz merkezi veri kümesi bir hub ve yedi gerçek program içeriyor.",
);
check(
  publicRouteRegistry.filter((route) => route.path === "/egitimler").length === 1 &&
    !indexableRoutePaths.includes("/egitimlerimiz"),
  "Mevcut /egitimler hub'ı tek; yinelenen /egitimlerimiz route'u bulunmuyor.",
);
check(
  requiredCorporateRoutes.every((routePath) => corporateRoutePaths.includes(routePath)) &&
    corporateRoutePaths.length === 4,
  "Kurumsal hub ve üç alt route merkezi registry içinde kayıtlı.",
);
check(
  corporatePages.length === 4 &&
    corporateArticles.length === 3 &&
    corporateHub.path === "/hakkimizda" &&
    corporateHub.schemaType === "AboutPage" &&
    corporateArticles.every(
      (article) => article.collectionPath === "/hakkimizda" && article.kind === "article",
    ),
  "Kurumsal merkezi veri kümesi bir hub ve üç gerçek alt içerik taşıyor.",
);
const forbiddenCorporateRoutes = [
  "/kurumsal",
  "/kurumsalimiz",
  "/kurumsal-sayfalar",
  "/misyon-vizyon",
  "/yorumlar",
  "/okullar-icin/basvuru",
  "/egitmen-ol/basvuru",
];
check(
  publicRouteRegistry.filter((route) => route.path === "/hakkimizda").length === 1 &&
    forbiddenCorporateRoutes.every((routePath) => !indexableRoutePaths.includes(routePath)),
  "Mevcut /hakkimizda hub'ı tek ve kaynaksız kurumsal route üretilmedi.",
);
check(
  requiredLegalRoutes.every((routePath) => legalRoutePaths.includes(routePath)) &&
    legalRoutePaths.length === 3 &&
    legalPages.length === 3,
  "Üç hukuki route merkezi veri ve route registry içinde kayıtlı.",
);
check(indexableRoutePaths.length === 42, "Toplam indexlenebilir public route sayısı tam olarak 42.");
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
  schemaRoutes.length === publicRouteRegistry.length &&
    schemaRoutes.every((route) => {
      const schemas = buildContentSchemas(route);
      return schemas.length > 0 && schemas.every((schema) => {
      JSON.parse(JSON.stringify(schema));
      return true;
      });
    }),
  "Her public route boş olmayan, geçerli bir JSON-LD şema dizisi üretiyor.",
);

const homeRoute = publicRouteRegistry.find((route) => route.path === "/");
const homeSchemas = buildContentSchemas(homeRoute);
const homeSchemaTypes = homeSchemas.map((schema) => schema["@type"]);
const homeOrganization = homeSchemas.find((schema) => schema["@type"] === "Organization");
check(
  JSON.stringify(homeSchemaTypes) === JSON.stringify(["Organization", "WebSite", "WebPage"]) &&
    homeOrganization?.name === businessIdentity.brandName &&
    homeOrganization?.legalName === businessIdentity.legalName &&
    homeOrganization?.url === SITE_ORIGIN &&
    homeOrganization?.logo === buildSiteUrl("/logo-fixoku.png") &&
    homeOrganization?.email === businessIdentity.email &&
    homeOrganization?.telephone === "+905334789253" &&
    JSON.stringify(homeOrganization?.sameAs) === JSON.stringify(businessIdentity.socialProfiles) &&
    !JSON.stringify(homeSchemas).includes("SearchAction") &&
    !JSON.stringify(homeSchemas).includes("AggregateRating"),
  "Ana sayfa Organization, WebSite ve WebPage şemalarını yalnız doğrulanmış alanlarla üretiyor.",
);

const contactRoute = publicRouteRegistry.find((route) => route.path === "/iletisim");
check(
  JSON.stringify(buildContentSchemas(contactRoute).map((schema) => schema["@type"])) ===
    JSON.stringify(["ContactPage", "BreadcrumbList"]) &&
    contactRoute.breadcrumbs?.[0]?.path === "/" &&
    contactRoute.breadcrumbs?.[1]?.path === "/iletisim",
  "İletişim route'u ContactPage ve BreadcrumbList şemalarını doğru hiyerarşiyle üretiyor.",
);

check(
  legalRoutePaths.every((routePath) => {
    const route = publicRouteRegistry.find((item) => item.path === routePath);
    return JSON.stringify(buildContentSchemas(route).map((schema) => schema["@type"])) ===
      JSON.stringify(["WebPage", "BreadcrumbList"]);
  }),
  "Üç hukuki route WebPage ve BreadcrumbList şemalarını üretiyor.",
);

const blogArticleRoutes = publicRouteRegistry.filter((route) => blogRoutePaths.includes(route.path));
check(
  blogArticleRoutes.every((route) => {
    const articleSchema = buildContentSchemas(route)[0];
    return (
      articleSchema?.["@type"] === "Article" &&
      articleSchema.headline === route.heading &&
      articleSchema.description === route.description &&
      articleSchema.url === buildSiteUrl(route.path) &&
      articleSchema.mainEntityOfPage?.["@id"] === buildSiteUrl(route.path) &&
      articleSchema.inLanguage === "tr-TR" &&
      !articleSchema.author &&
      !articleSchema.datePublished &&
      !articleSchema.dateModified &&
      !articleSchema.publisher &&
      !articleSchema.image
    );
  }),
  "Blog Article şemaları yalnızca doğrulanabilir alanları içeriyor.",
);

const knownRoutePaths = new Set(indexableRoutePaths);
check(
  schemaRoutes.every(
    (route) =>
      route.path === "/" ||
      route.breadcrumbs?.every((item) => knownRoutePaths.has(item.path)),
  ),
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
  knowledgeCenterHub.cta.primary.to,
  knowledgeCenterHub.cta.secondary?.to,
  ...blogArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  ...trainingArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  trainingHub.cta.primary.to,
  trainingHub.cta.secondary?.to,
  ...corporateArticles.flatMap((article) => [
    ...article.related,
    article.cta.primary.to,
    article.cta.secondary?.to,
  ]),
  corporateHub.cta.primary.to,
  corporateHub.cta.secondary?.to,
].filter(Boolean);
check(
  contentLinks.every((routePath) => knownRoutePaths.has(routePath)),
  "İlgili içerik ve CTA bağlantılarının tamamı gerçek route'lara gidiyor.",
);
const contentPages = [
  ...quickReadingPages,
  ...attentionFocusPages,
  ...fixokuEducationPages,
  ...knowledgeCenterPages,
  ...blogPages,
  ...trainingPages,
  ...corporatePages,
];
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

const blogContent = JSON.stringify(blogPages).toLocaleLowerCase("tr-TR");
const unsafeBlogClaims = [
  /garanti (?:eder|sağlar|sunar|verir)/,
  /kesin (?:başarı|sonuç|hız artışı)/,
  /(?:2|iki) kat/,
  /\b\d+(?:[.,]\d+)?\s*%/,
  /(?:oecd|pisa)/,
  /(?:beyni yeniden programlar|görme bozukluğunu tedavi eder)/,
];
check(
  unsafeBlogClaims.every((pattern) => !pattern.test(blogContent)),
  "Blog içeriklerinde garanti, kesin sonuç, uydurma istatistik veya tıbbi iddia bulunmuyor.",
);
check(
  blogArticles.every(
    (article) =>
      !Object.hasOwn(article, "author") &&
      !Object.hasOwn(article, "datePublished") &&
      !Object.hasOwn(article, "dateModified") &&
      article.sections.length >= 5 &&
      article.related.length >= 1 &&
      article.related.length <= 3,
  ),
  "Blog makalelerinde yazar veya tarih uydurulmamış; bölüm ve ilgili içerik yapısı geçerli.",
);

const trainingContent = JSON.stringify(trainingPages).toLocaleLowerCase("tr-TR");
const unsafeTrainingClaims = [
  /(?:2|iki) kat/,
  /garanti (?:eder|sağlar|sunar|verir)/,
  /kesin (?:başarı|sonuç|hız artışı|puan|net)/,
  /(?:tanı koyar|tedavi eder|beyni yeniden programlar|fotoğrafik hafıza)/,
  /(?:türkiye'nin en|en iyi|ilk ve tek)/,
  /(?:4[.,]9|5[.,]0) (?:puan|yıldız)/,
  /(?:21|30) (?:gün|hafta)/,
  /3[.]000\+? öğrenci/,
];
check(
  unsafeTrainingClaims.every((pattern) => !pattern.test(trainingContent)),
  "Eğitimlerimiz içeriklerinde garanti, iki kat, tıbbi, puan, süre veya öğrenci sayısı iddiası bulunmuyor.",
);
check(
  trainingHub.sections.length >= 4 &&
    trainingArticles.every(
      (article) =>
        article.audience &&
        article.sections.length >= 5 &&
        article.related.length >= 2 &&
        article.related.length <= 3,
    ),
  "Eğitimlerimiz sayfalarında hedef kitle, bölüm ve ilgili içerik yapısı yeterli.",
);
const trainingSchemaRoutes = publicRouteRegistry.filter((route) =>
  trainingRoutePaths.includes(route.path),
);
check(
  trainingSchemaRoutes.every((route) =>
    route.path === "/egitimler"
      ? route.schemaType === "CollectionPage"
      : route.schemaType === "WebPage"),
  "Eğitimlerimiz hub CollectionPage, alt sayfalar WebPage şeması kullanıyor.",
);
check(
  trainingSchemaRoutes.every(
    (route) =>
      !["Course", "Product", "Offer", "Review", "AggregateRating", "FAQPage"].includes(
        route.schemaType,
      ),
  ),
  "Eğitim sayfalarında doğrulanamayan ticari, puan veya Course şeması bulunmuyor.",
);

const corporateContent = JSON.stringify(corporatePages).toLocaleLowerCase("tr-TR");
const unsafeCorporateClaims = [
  /(?:2|iki) kat/,
  /garanti (?:eder|sağlar|sunar|verir)/,
  /(?:ekonomik özgürlük|gelirlerini artır|kariyerini zirveye)/,
  /(?:21 günlük|4 ile 6 hafta|40 saat|1 yıl açık)/,
  /(?:%80|%30|%40)/,
  /(?:126 egzersiz|9 analiz|4\+ gelişim)/,
  /(?:en etkili|en az iki|başarıyı doğrudan)/,
  /(?:hiperaktif bozukluğu|tanı koyar|tedavi eder)/,
];
check(
  unsafeCorporateClaims.every((pattern) => !pattern.test(corporateContent)),
  "Kurumsal içeriklerde garanti, iki kat, gelir, sabit süre, yüzde veya tıbbi iddia bulunmuyor.",
);
check(
  corporateHub.sections.length >= 4 &&
    corporateArticles.every(
      (article) =>
        article.audience &&
        article.sections.length >= 5 &&
        article.related.length >= 2 &&
        article.related.length <= 3,
    ),
  "Kurumsal sayfalarda hedef kitle, bölüm ve ilgili içerik yapısı yeterli.",
);
const corporateSchemaRoutes = publicRouteRegistry.filter((route) =>
  corporateRoutePaths.includes(route.path),
);
check(
  corporateSchemaRoutes.every((route) =>
    route.path === "/hakkimizda"
      ? route.schemaType === "AboutPage"
      : route.schemaType === "WebPage"),
  "Kurumsal hub AboutPage, üç alt sayfa WebPage şeması kullanıyor.",
);
check(
  corporateSchemaRoutes.every(
    (route) =>
      ![
        "FAQPage",
        "Course",
        "Product",
        "Offer",
        "Review",
        "AggregateRating",
      ].includes(route.schemaType),
  ),
  "Kurumsal sayfalarda FAQPage veya doğrulanamayan ticari şema bulunmuyor.",
);

const legalContent = JSON.stringify(legalPages).toLocaleLowerCase("tr-TR");
const forbiddenLegalContent = [
  "fixoku.com.tr",
  "dersfix.com",
  "tamamen güvende",
  "kırılması mümkün olmayan",
  "mail order",
  "paytr",
  "iyzico",
  "iyzigo",
];
check(
  legalPages.every(
    (page) =>
      page.sections.length >= 5 &&
      page.updatedAt === "19 Temmuz 2026" &&
      page.schemaType === "WebPage",
  ) && forbiddenLegalContent.every((phrase) => !legalContent.includes(phrase)),
  "Hukuki içerikler kapsamlı, güncel tarihli ve eski domain, kesin güvenlik veya doğrulanmamış ödeme ifadelerinden arınmış.",
);
check(
  legalContent.includes("fixoku-reading-text-rotation-v1") &&
    legalContent.includes("document.cookie") &&
    legalContent.includes("google analytics") &&
    legalContent.includes("meta pixel") &&
    legalContent.includes("iletişim formu mevcut teknik yapıda veriyi bir sunucuya göndermemektedir"),
  "Hukuki metinler gerçek storage ve iletişim formu envanterini açıkça yansıtıyor.",
);

const expectedExplorerCounts = new Map([
  ["Hızlı Okuma", 6],
  ["Dikkat ve Odaklanma", 6],
  ["Fixoku Eğitimi", 7],
  ["Bilgi Merkezi", 6],
  ["Eğitimlerimiz", 8],
  ["Kurumsal", 4],
]);
check(
  contentExplorerGroups.length === expectedExplorerCounts.size &&
    contentExplorerGroups.every(
      (group) => expectedExplorerCounts.get(group.label) === group.items.length,
    ),
  "Global Content Explorer altı merkezi grubu 6, 6, 7, 6, 8 ve 4 içerikle üretiyor.",
);
check(
  contentExplorerGroups
    .find((group) => group.label === "Eğitimlerimiz")
    ?.items.every((item) => requiredTrainingRoutes.includes(item.path)),
  "Global Content Explorer Eğitimlerimiz grubunu sekiz gerçek route'tan otomatik oluşturuyor.",
);
check(
  contentExplorerGroups
    .find((group) => group.label === "Kurumsal")
    ?.items.every((item) => requiredCorporateRoutes.includes(item.path)),
  "Global Content Explorer Kurumsal grubunu dört gerçek route'tan otomatik oluşturuyor.",
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
check(
  headerSource.includes("trainingArticles") &&
    headerSource.includes("TRAINING_HUB_PATH") &&
    footerSource.includes("trainingFooterLinks") &&
    !headerSource.includes("/ogrenci-programlari") &&
    !footerSource.includes("/ogrenci-programlari"),
  "Eğitimlerimiz masaüstü, mobil ve footer navigasyonunda merkezi gerçek route'ları kullanıyor.",
);
check(
  headerSource.includes("corporateArticles") &&
    headerSource.includes("CORPORATE_HUB_PATH") &&
    footerSource.includes("corporateFooterLinks") &&
    forbiddenCorporateRoutes.every(
      (routePath) => !headerSource.includes(routePath) && !footerSource.includes(routePath),
    ),
  "Kurumsal masaüstü, mobil ve footer navigasyonu merkezi gerçek route'ları kullanıyor.",
);
check(
  headerSource.includes('className="nav-link blog-nav-link"') &&
    headerSource.includes('to="/blog"') &&
    footerSource.includes('{ label: "Bilgi Merkezi", to: "/blog" }'),
  "Bilgi Merkezi masaüstü, mobil ve footer navigasyonuna bağlı.",
);
const appRoutesSource = await readFile(path.join(projectRoot, "src", "AppRoutes.jsx"), "utf8");
const appSource = await readFile(path.join(projectRoot, "src", "App.jsx"), "utf8");
const contactSource = await readFile(path.join(projectRoot, "src", "pages", "iletisim.jsx"), "utf8");
const readingTestSource = await readFile(path.join(projectRoot, "src", "ReadingSpeedTest.jsx"), "utf8");
const attentionTestSource = await readFile(path.join(projectRoot, "src", "AttentionFocusTest.jsx"), "utf8");
const legacyTrainingPageExists = await stat(
  path.join(projectRoot, "src", "pages", "Egitimler.jsx"),
).then(() => true).catch(() => false);
const legacyCorporatePageExists = await stat(
  path.join(projectRoot, "src", "pages", "Hakkimizda.jsx"),
).then(() => true).catch(() => false);
check(
  appRoutesSource.includes("articles={blogArticles}") &&
    appRoutesSource.includes("blogArticles.map") &&
    hubSource.includes("articleCount") &&
    knowledgeCenterCategories.every((category) => !category.path),
  "/blog hub beş gerçek makaleyi gösteriyor ve routesuz kategori kartları kırık link üretmiyor.",
);
check(
  appRoutesSource.includes("articles={trainingArticles}") &&
    appRoutesSource.includes("trainingArticles.map") &&
    !appRoutesSource.includes("Egitimler") &&
    !appSource.includes("Egitimler") &&
    !legacyTrainingPageExists,
  "Eski hardcoded eğitim component'i kaldırıldı ve /egitimler ortak içerik mimarisine taşındı.",
);
check(
  appRoutesSource.includes("articles={corporateArticles}") &&
    appRoutesSource.includes("corporateArticles.map") &&
    !appRoutesSource.includes("Hakkimizda") &&
    !legacyCorporatePageExists,
  "Eski hardcoded Hakkımızda component'i kaldırıldı ve /hakkimizda ortak içerik mimarisine taşındı.",
);
check(
  appRoutesSource.includes("legalPages.map") &&
    appRoutesSource.includes("<LegalPage") &&
    requiredLegalRoutes.every((routePath) => indexableRoutePaths.includes(routePath)),
  "Hukuki sayfalar ortak LegalPage component'i üzerinden route sistemine bağlı.",
);

const activeNavigationSources = [appSource, headerSource, footerSource, contactSource];
const staticInternalTargets = [];
for (const source of activeNavigationSources) {
  for (const pattern of [
    /\b(?:href|to)\s*=\s*["']([^"']+)["']/g,
    /\bto\s*:\s*["']([^"']+)["']/g,
  ]) {
    for (const match of source.matchAll(pattern)) staticInternalTargets.push(match[1]);
  }
}

function isValidInternalTarget(target) {
  if (target.startsWith("#")) return target.length > 1;
  if (!target.startsWith("/")) return true;

  const url = new URL(target, SITE_ORIGIN);
  const pathname = normalizeRoutePath(url.pathname);
  const routeExists = knownRoutePaths.has(pathname) || pathname === "/panel";
  if (!routeExists) return false;

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

const invalidInternalTargets = [...new Set(
  staticInternalTargets.filter((target) => target.startsWith("/") || target.startsWith("#"))
    .filter((target) => !isValidInternalTarget(target)),
)];
check(
  invalidInternalTargets.length === 0,
  invalidInternalTargets.length
    ? `Karşılanmayan global internal hedefler: ${invalidInternalTargets.join(", ")}`
    : "Global static internal href ve Link hedeflerinin tamamı gerçek route, hash veya izinli test query'sine gidiyor.",
);
check(
  activeNavigationSources.every((source) => !/href\s*=\s*["']#["']/.test(source)),
  "Aktif public kaynaklarda href=\"#\" bulunmuyor.",
);
check(
  appSource.includes('id="testler"') &&
    appSource.includes("useSyncExternalStore") &&
    appSource.includes("getServerHydrationSnapshot") &&
    appSource.includes("new URLSearchParams(location.search)") &&
    appSource.includes('searchParams.delete("test")') &&
    appSource.includes('hash: location.hash') &&
    headerSource.includes('/?test=reading') &&
    headerSource.includes('/?test=attention') &&
    footerSource.includes('/?test=reading') &&
    footerSource.includes('/?test=attention'),
  "Test linkleri mevcut ana sayfa modallarını query ile açıyor ve kapamada yalnız test parametresini temizliyor.",
);

const phoneAndWhatsappSource = [
  headerSource,
  footerSource,
  contactSource,
  readingTestSource,
  attentionTestSource,
].join("\n");
const whatsappNumbers = [...phoneAndWhatsappSource.matchAll(/wa\.me\/(\d+)/g)].map((match) => match[1]);
const telephoneNumbers = [...phoneAndWhatsappSource.matchAll(/tel:\+(\d+)/g)].map((match) => match[1]);
check(
  whatsappNumbers.length >= 5 &&
    whatsappNumbers.every((number) => number === "905334789253") &&
    telephoneNumbers.length >= 3 &&
    telephoneNumbers.every((number) => number === "905334789253") &&
    !phoneAndWhatsappSource.includes("902324620743") &&
    !phoneAndWhatsappSource.includes("+90 232 462 07 43"),
  "Aktif telefon ve WhatsApp hedefleri yalnızca doğrulanmış +90 533 478 92 53 numarasını kullanıyor.",
);
check(
  businessIdentity.socialProfiles.every(
    (profile) =>
      footerSource.includes(`href="${profile}"`) &&
      footerSource.includes('target="_blank"') &&
      footerSource.includes('rel="noopener noreferrer"'),
  ),
  "Footer'daki dört sosyal medya bağlantısı doğrulanmış URL, yeni sekme ve güvenli rel kullanıyor.",
);

const readingRotationSource = await readFile(
  path.join(projectRoot, "src", "utils", "readingTextRotation.js"),
  "utf8",
);
const runtimeInventorySource = [
  appSource,
  headerSource,
  footerSource,
  contactSource,
  readingTestSource,
  attentionTestSource,
  readingRotationSource,
].join("\n");
check(
  !runtimeInventorySource.includes("document.cookie") &&
    !runtimeInventorySource.includes("sessionStorage") &&
    !/(?:\bgtag\s*\(|googletagmanager|google-analytics|\bfbq\s*\(|meta.?pixel)/i.test(runtimeInventorySource) &&
    readingRotationSource.includes('const STORAGE_KEY = "fixoku-reading-text-rotation-v1"') &&
    readingRotationSource.includes("window.localStorage"),
  "Runtime envanteri izleme çerezi içermiyor ve tek kalıcı storage anahtarı okuma metni rotasyonuna ait.",
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
