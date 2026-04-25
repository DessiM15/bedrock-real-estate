"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-green-dark/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="relative z-10 flex-shrink-0"
          >
            <Image
              src="/images/bedrock-logo-white.png"
              alt="Bedrock Financial Planning"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm text-cream/80 hover:text-tan-light transition-colors duration-300 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Phone */}
          <motion.a
            href="tel:7199302059"
            className="hidden lg:flex items-center gap-2 text-cream/80 hover:text-tan-light transition-colors duration-300 text-sm tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            aria-label="Call us at 719-930-2059"
          >
            <Phone className="w-4 h-4" />
            <span>719-930-2059</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-10 text-cream p-2"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-green-dark flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-2xl font-heading text-cream hover:text-tan-light transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:7199302059"
                className="mt-6 flex items-center gap-3 text-tan-light text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                aria-label="Call us at 719-930-2059"
              >
                <Phone className="w-5 h-5" />
                <span>719-930-2059</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
