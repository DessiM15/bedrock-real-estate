"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";

interface LatestArticlesProps {
  articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <SectionWrapper id="blog">
      <SectionHeading subtitle="From Our Blog">
        Insights &
        <br />
        <span className="italic text-tan">Resources</span>
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-tan hover:text-tan-dark transition-colors text-sm uppercase tracking-[0.15em] font-medium"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
