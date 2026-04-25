"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOverview = () => {
    document
      .getElementById("overview")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-green-dark/70" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-dark/30 via-transparent to-green-dark/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-tan-light text-sm uppercase tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Alternative Real Estate Investments
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-medium leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Capital.
          <br />
          <span className="text-tan-light italic">Secured. Growing.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Earn 13–28% annual returns through secured alternative real estate
          investments — backed by UCC filings, structured for stability, and
          designed for investors who refuse to settle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
          >
            Get Your Free Evaluation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
            onClick={scrollToOverview}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToOverview}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-cream/60 hover:text-tan-light transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
