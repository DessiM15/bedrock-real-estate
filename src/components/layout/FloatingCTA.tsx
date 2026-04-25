"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Floating button bottom-right */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="tel:7199302059"
            className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3 bg-tan text-white px-6 py-4 rounded-sm shadow-lg hover:bg-tan-dark transition-colors duration-300"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call us at 719-930-2059"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">
              719-930-2059
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile: Sticky bottom bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-green-dark/95 backdrop-blur-md border-t border-tan/20"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 py-3">
              <span className="text-cream text-sm">Ready to invest?</span>
              <a
                href="tel:7199302059"
                className="flex items-center gap-2 bg-tan text-white px-5 py-2.5 rounded-sm text-sm font-medium"
                aria-label="Call us at 719-930-2059"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
