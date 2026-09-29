import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/config/service-areas";
import { services } from "@/lib/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theshinebros.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const areaRoutes: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${base}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${base}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...areaRoutes, ...serviceRoutes];
}
