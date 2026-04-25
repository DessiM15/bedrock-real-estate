import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getPublishedSlugs,
  formatDate,
} from "@/lib/articles";
import { ArticlePageContent } from "./ArticlePageContent";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Bedrock Financial Planning" };
  }

  return {
    title: `${article.title} | Bedrock Financial Planning`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticlePageContent article={article} />;
}
