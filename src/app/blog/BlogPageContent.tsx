"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Article } from "@/types";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { Footer } from "@/components/layout/Footer";

interface BlogPageContentProps {
  articles: Article[];
  categories: string[];
}

export function BlogPageContent({
  articles,
  categories,
}: BlogPageContentProps) {
  return (
    <>
      {/* Header */}
      <header className="bg-green-dark py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/bedrock-logo-white.png"
              alt="Bedrock Financial Planning"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-cream/70 hover:text-tan-light transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-green-dark pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-tan-light text-sm uppercase tracking-[0.2em] mb-4">
            Our Blog
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-medium">
            Insights & Resources
          </h1>
          <p className="mt-6 text-cream/60 text-lg max-w-2xl mx-auto">
            Expert perspectives on alternative real estate investing, market
            trends, and strategies for building lasting wealth.
          </p>
        </div>
      </section>

      {/* Articles */}
      <main className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ArticleGrid articles={articles} categories={categories} />
        </div>
      </main>

      <Footer />
    </>
  );
}
