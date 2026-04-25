"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  cream?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  dark,
  cream,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 lg:py-40",
        dark && "bg-green-dark text-cream",
        cream && "bg-cream-dark",
        !dark && !cream && "bg-cream",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  children,
  subtitle,
  centered = true,
  light = false,
  className,
}: {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(centered && "text-center", "mb-16 md:mb-20", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      {subtitle && (
        <p
          className={cn(
            "mb-4 text-sm font-medium uppercase tracking-[0.2em]",
            light ? "text-tan-light" : "text-tan"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight",
          light ? "text-cream" : "text-green-dark"
        )}
      >
        {children}
      </h2>
    </motion.div>
  );
}
