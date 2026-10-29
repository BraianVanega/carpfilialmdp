import type { MetadataRoute } from "next";
import { novedades } from "@/lib/novedades";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/proximos-viajes`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/entradas`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/asociate`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/novedades`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...novedades.map((novedad) => ({
      url: `${SITE_URL}/novedades/${novedad.slug}`,
      lastModified: novedad.fecha,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/historia`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
