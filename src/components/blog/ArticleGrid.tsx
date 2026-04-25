"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";
import { cn } from "@/lib/utils";

interface ArticleGridProps {
  articles: Article[];
  categories: string[];
}

export function ArticleGrid({ articles, categories }: ArticleGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "px-5 py-2 text-sm rounded-sm transition-all duration-300",
            activeCategory === "All"
              ? "bg-tan text-white"
              : "bg-cream-dark text-green-dark/60 hover:text-green-dark hover:bg-cream-dark/80"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 text-sm rounded-sm transition-all duration-300",
              activeCategory === cat
                ? "bg-tan text-white"
                : "bg-cream-dark text-green-dark/60 hover:text-green-dark hover:bg-cream-dark/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-center text-green-dark/50 py-16">
          No articles found in this category.
        </p>
      )}
    </div>
  );
}
