import { buildSiteUrl } from "../config/site.js";

export function buildContentSchemas(route) {
  if (!route?.schemaType || !route?.breadcrumbs?.length) {
    return [];
  }

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": route.schemaType,
    name: route.heading,
    description: route.description,
    url: buildSiteUrl(route.path),
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
