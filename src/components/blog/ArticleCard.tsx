"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { formatDate } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${article.slug}`}
        className="group block bg-white rounded-sm border border-cream-dark overflow-hidden hover:shadow-lg transition-all duration-500"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark">
          <div className="absolute inset-0 bg-green-dark/10 z-10 group-hover:bg-green-dark/5 transition-colors duration-500" />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop')`,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-wider text-tan font-medium">
              {article.category}
            </span>
            <span className="text-cream-dark">|</span>
            <span className="flex items-center gap-1 text-xs text-green-dark/50">
              <Clock className="w-3 h-3" />
              {article.readTime} min read
            </span>
          </div>

          <h3 className="font-heading text-xl text-green-dark mb-3 group-hover:text-tan transition-colors duration-300 leading-snug">
            {article.title}
          </h3>

          <p className="text-green-dark/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-green-dark/40">
              {formatDate(article.publishDate)}
            </span>
            <span className="flex items-center gap-1 text-tan text-sm font-medium group-hover:gap-2 transition-all duration-300">
              Read More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
