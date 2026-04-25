import { Metadata } from "next";
import { getPublishedArticles, getAllCategories } from "@/lib/articles";
import { BlogPageContent } from "./BlogPageContent";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Blog | Bedrock Financial Planning",
  description:
    "Expert insights on alternative real estate investing, market analysis, wealth building strategies, and passive income opportunities from Bedrock Financial Planning.",
};

export default function BlogPage() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();

  return <BlogPageContent articles={articles} categories={categories} />;
}
