"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Article } from "@/types";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { Footer } from "@/components/layout/Footer";
import { formatDate } from "@/lib/articles";

interface ArticlePageContentProps {
  article: Article;
}

export function ArticlePageContent({ article }: ArticlePageContentProps) {
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
            href="/blog"
            className="flex items-center gap-2 text-cream/70 hover:text-tan-light transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article Hero */}
      <section className="bg-green-dark pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="text-tan-light text-sm uppercase tracking-[0.15em]">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream font-medium mt-4 leading-snug">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 mt-8 text-cream/50 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publishDate)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ArticleContent content={article.content} />

          {/* CTA */}
          <div className="mt-16 p-8 md:p-12 bg-green-dark rounded-sm text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4">
              Ready to Explore Your Investment Options?
            </h3>
            <p className="text-cream/60 mb-8 max-w-lg mx-auto">
              Schedule a complimentary evaluation with our team and discover how
              alternative real estate investments can work for your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-tan text-white px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-tan-dark transition-colors"
              >
                Get Your Free Evaluation
              </Link>
              <a
                href="tel:7199302059"
                className="inline-block text-tan-light hover:text-tan transition-colors text-sm"
              >
                or call 719-930-2059
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-tan hover:text-tan-dark transition-colors text-sm uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
