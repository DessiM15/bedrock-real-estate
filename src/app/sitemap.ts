import { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bedrock-real-estate.vercel.app";

  const articles = getPublishedArticles();

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articleRoutes,
  ];
}
