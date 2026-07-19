import { buildSiteUrl } from "../config/site.js";
import { businessIdentity } from "../data/legalContent.js";

function buildHomeSchemas(route) {
  const pageUrl = buildSiteUrl(route.path);
  const organizationId = `${pageUrl}/#organization`;
  const websiteId = `${pageUrl}/#website`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: businessIdentity.brandName,
      legalName: businessIdentity.legalName,
      url: pageUrl,
      logo: buildSiteUrl("/logo-fixoku.png"),
      email: businessIdentity.email,
      telephone: "+905334789253",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1202/2 Sok. No:80/L Temsil Plaza, Yenişehir",
        addressLocality: "Konak",
        addressRegion: "İzmir",
        addressCountry: "TR",
      },
      sameAs: businessIdentity.socialProfiles,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: businessIdentity.brandName,
      url: pageUrl,
      inLanguage: "tr-TR",
      publisher: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: route.heading,
      description: route.description,
      url: pageUrl,
      inLanguage: "tr-TR",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
    },
  ];
}

export function buildContentSchemas(route) {
  if (!route?.schemaType) {
    return [];
  }

  if (route.path === "/") {
    return buildHomeSchemas(route);
  }

  if (!route.breadcrumbs?.length) return [];

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
