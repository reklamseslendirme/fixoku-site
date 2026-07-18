import { quickReadingPages } from "./quickReadingContent.js";

const existingPublicRoutes = [
  {
    path: "/",
    title: "Fixoku Eğitim Sistemi | Hızlı Okuma, Anlama ve Dikkat",
    description:
      "Fixoku ile hızlı okuma, okuduğunu anlama, dikkat ve odaklanma becerilerine yönelik eğitim programlarını ve ücretsiz ölçüm araçlarını keşfedin.",
  },
  {
    path: "/egitimler",
    title: "Fixoku Eğitim Programları | Okuma ve Dikkat Becerileri",
    description:
      "Hızlı okuma, anlama, dikkat, odaklanma ve sınav hazırlığına yönelik Fixoku eğitim programlarını yaş, ihtiyaç ve çalışma biçimine göre inceleyin.",
  },
  {
    path: "/iletisim",
    title: "Fixoku İletişim | Eğitim Programları Hakkında Bilgi",
    description:
      "Fixoku öğrenci eğitimleri, eğitmen başvuruları, yazılım kullanımı ve kurum iş birlikleri hakkında bilgi almak için iletişim kanallarımıza ulaşın.",
  },
  {
    path: "/hakkimizda",
    title: "Fixoku Hakkında | Okuma, Anlama ve Dikkat Sistemi",
    description:
      "Fixoku'nun hızlı okuma, anlama, dikkat ve odaklanma becerilerini birlikte ele alan eğitim yaklaşımı, misyonu ve çalışma alanları hakkında bilgi alın.",
  },
];

const quickReadingRoutes = quickReadingPages.map((page) => ({
  path: page.path,
  title: page.seoTitle,
  description: page.metaDescription,
  heading: page.heading,
  contentKind: page.kind,
  schemaType: page.kind === "hub" ? "CollectionPage" : "WebPage",
  breadcrumbs:
    page.kind === "hub"
      ? [
          { label: "Ana Sayfa", path: "/" },
          { label: "Hızlı Okuma", path: page.path },
        ]
      : [
          { label: "Ana Sayfa", path: "/" },
          { label: "Hızlı Okuma", path: "/hizli-okuma" },
          { label: page.heading, path: page.path },
        ],
}));

export const publicRouteRegistry = [...existingPublicRoutes, ...quickReadingRoutes].map(
  (route) => ({
    ...route,
    robots: "index, follow",
    openGraphType: "website",
  }),
);

export const indexableRoutePaths = publicRouteRegistry.map((route) => route.path);
export const quickReadingRoutePaths = quickReadingRoutes.map((route) => route.path);

export function getPublicRoute(pathname) {
  return publicRouteRegistry.find((route) => route.path === pathname) ?? null;
}
