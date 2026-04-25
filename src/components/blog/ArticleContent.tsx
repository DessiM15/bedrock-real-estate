"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-green-dark prose-headings:font-medium prose-p:text-green-dark/80 prose-p:leading-relaxed prose-strong:text-green-dark prose-a:text-tan prose-a:no-underline hover:prose-a:text-tan-dark prose-li:text-green-dark/80 prose-ul:text-green-dark/80 prose-ol:text-green-dark/80">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
