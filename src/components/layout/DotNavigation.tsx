"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { sectionIds } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const sectionLabels: Record<string, string> = {
  hero: "Home",
  overview: "Overview",
  benefits: "Benefits",
  process: "Process",
  mission: "Mission",
  team: "Team",
  comparison: "Compare",
  blog: "Blog",
  contact: "Contact",
};

export function DotNavigation() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      aria-label="Page sections"
    >
      {sectionIds.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative flex items-center justify-end"
          aria-label={`Navigate to ${sectionLabels[id]} section`}
        >
          <span className="absolute right-6 mr-2 text-xs text-green-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {sectionLabels[id]}
          </span>
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full border-2 transition-all duration-300",
              activeSection === id
                ? "bg-tan border-tan scale-125"
                : "border-green-dark/30 hover:border-tan"
            )}
          />
        </button>
      ))}
    </motion.nav>
  );
}
