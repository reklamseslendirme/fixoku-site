import { attentionFocusPages } from "./attentionFocusContent.js";
import { quickReadingPages } from "./quickReadingContent.js";

const existingPublicRoutes = [
  {
    path: "/",
    title: "Fixoku Eğitim Sistemi | Hızlı Okuma, Anlama ve Dikkat",
    description:
      "Fixoku ile hızlı okuma, okuduğunu anlama, dikkat ve odaklanma becerilerine yönelik eğitim programlarını ve ücretsiz ölçüm araçlarını keşfedin.",
    heading: "21 Günde Okuma, Anlama, Dikkat ve Odaklanma Gelişimi",
    distinguishingText: "21 Günde",
  },
  {
    path: "/egitimler",
    title: "Fixoku Eğitim Programları | Okuma ve Dikkat Becerileri",
    description:
      "Hızlı okuma, anlama, dikkat, odaklanma ve sınav hazırlığına yönelik Fixoku eğitim programlarını yaş, ihtiyaç ve çalışma biçimine göre inceleyin.",
    heading: "Fixoku Hızlı Okuma Eğitim Programı",
    distinguishingText: "Fixoku Hızlı Okuma Eğitim Programı",
  },
  {
    path: "/iletisim",
    title: "Fixoku İletişim | Eğitim Programları Hakkında Bilgi",
    description:
      "Fixoku öğrenci eğitimleri, eğitmen başvuruları, yazılım kullanımı ve kurum iş birlikleri hakkında bilgi almak için iletişim kanallarımıza ulaşın.",
    heading: "Size en uygun Fixoku eğitim çözümünü birlikte planlayalım.",
    distinguishingText: "Size en uygun",
  },
  {
    path: "/hakkimizda",
    title: "Fixoku Hakkında | Okuma, Anlama ve Dikkat Sistemi",
    description:
      "Fixoku'nun hızlı okuma, anlama, dikkat ve odaklanma becerilerini birlikte ele alan eğitim yaklaşımı, misyonu ve çalışma alanları hakkında bilgi alın.",
    heading: "Hızlı okuma, anlama ve dikkat gelişimini tek sistemde buluşturuyoruz.",
    distinguishingText: "Hızlı okuma, anlama ve dikkat gelişimini",
  },
];

function createContentRoutes(pages, { collectionLabel, collectionPath }) {
  return pages.map((page) => ({
    path: page.path,
    title: page.seoTitle,
    description: page.metaDescription,
    heading: page.heading,
    distinguishingText: page.heading,
    contentKind: page.kind,
    schemaType: page.kind === "hub" ? "CollectionPage" : "WebPage",
    breadcrumbs:
      page.kind === "hub"
        ? [
            { label: "Ana Sayfa", path: "/" },
            { label: collectionLabel, path: page.path },
          ]
        : [
            { label: "Ana Sayfa", path: "/" },
            { label: collectionLabel, path: collectionPath },
            { label: page.heading, path: page.path },
          ],
  }));
}

const quickReadingRoutes = createContentRoutes(quickReadingPages, {
  collectionLabel: "Hızlı Okuma",
  collectionPath: "/hizli-okuma",
});

const attentionFocusRoutes = createContentRoutes(attentionFocusPages, {
  collectionLabel: "Dikkat ve Odaklanma",
  collectionPath: "/dikkat-ve-odaklanma",
});

export const publicRouteRegistry = [
  ...existingPublicRoutes,
  ...quickReadingRoutes,
  ...attentionFocusRoutes,
].map((route) => ({
    ...route,
    robots: "index, follow",
    openGraphType: "website",
  }));

export const indexableRoutePaths = publicRouteRegistry.map((route) => route.path);
export const quickReadingRoutePaths = quickReadingRoutes.map((route) => route.path);
export const attentionFocusRoutePaths = attentionFocusRoutes.map((route) => route.path);

export const panelSeo = {
  title: "Fixoku Panel",
  description: "Fixoku kullanıcı paneli.",
  robots: "noindex, nofollow",
};

export const notFoundSeo = {
  title: "Sayfa Bulunamadı | Fixoku",
  description:
    "Aradığınız sayfa bulunamadı. Fixoku ana sayfasına veya Hızlı Okuma içerik merkezine dönebilirsiniz.",
  robots: "noindex, nofollow",
};

export function getPrerenderOutputPath(routePath) {
  if (routePath === "/") return "index.html";
  return `${routePath.replace(/^\/+|\/+$/g, "")}.html`;
}

export function getPublicRoute(pathname) {
  return publicRouteRegistry.find((route) => route.path === pathname) ?? null;
}
