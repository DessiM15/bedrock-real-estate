"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer";

  const variants = {
    primary: "bg-tan text-white hover:bg-tan-dark",
    secondary: "bg-green-dark text-white hover:bg-green-dark-light",
    outline: "border-2 border-tan text-tan hover:bg-tan hover:text-white",
    dark: "bg-green-dark text-cream hover:bg-green-dark-light",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-sm uppercase tracking-widest",
    lg: "px-10 py-4 text-base uppercase tracking-widest",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
