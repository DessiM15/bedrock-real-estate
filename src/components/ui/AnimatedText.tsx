"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  as: Component = "p",
}: AnimatedTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

export function AnimatedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className={cn("overflow-hidden", lineClassName)}
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
