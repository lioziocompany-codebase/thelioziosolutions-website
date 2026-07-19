import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/newsroom";
import { SITE_URL } from "@/lib/metadata";

const STATIC_ROUTES = [
  "",
  "/about",
  "/team",
  "/solutions",
  "/newsroom",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map(
    (article) => ({
      url: `${SITE_URL}/newsroom/${article.slug}`,
      lastModified: new Date(article.date),
    })
  );

  return [...staticEntries, ...articleEntries];
}
