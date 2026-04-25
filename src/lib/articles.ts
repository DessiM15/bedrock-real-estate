import { articles } from "@/data/articles";
import { Article } from "@/types";

export function getPublishedArticles(): Article[] {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  return articles
    .filter((article) => new Date(article.publishDate) <= today)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export function getLatestArticles(count: number = 3): Article[] {
  return getPublishedArticles().slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return undefined;

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (new Date(article.publishDate) > today) return undefined;

  return article;
}

export function getArticlesByCategory(category: string): Article[] {
  return getPublishedArticles().filter(
    (article) => article.category === category
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(articles.map((article) => article.category)));
}

export function getPublishedSlugs(): string[] {
  return getPublishedArticles().map((article) => article.slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
