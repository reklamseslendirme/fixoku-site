import { buildSiteUrl } from "../config/site.js";

export function buildContentSchemas(route) {
  if (!route?.schemaType || !route?.breadcrumbs?.length) {
    return [];
  }

  const pageUrl = buildSiteUrl(route.path);
  const pageSchema = route.schemaType === "Article"
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: route.heading,
        description: route.description,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        url: pageUrl,
        inLanguage: "tr-TR",
      }
    : {
        "@context": "https://schema.org",
        "@type": route.schemaType,
        name: route.heading,
        description: route.description,
        url: pageUrl,
        inLanguage: "tr-TR",
      };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: route.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: buildSiteUrl(item.path),
    })),
  };

  return [pageSchema, breadcrumbSchema];
}
