"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-[-10%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-green-dark/85" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.p
          className="text-tan-light text-sm uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.p>

        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-medium leading-tight mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Purpose Beyond
          <br />
          <span className="italic text-tan-light">Profit</span>
        </motion.h2>

        <motion.div
          className="space-y-6 text-cream/80 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            Our mission at Bedrock Financial Planning is to guide people beyond
            the limitations of traditional financial teaching and into a life of
            purpose, opportunity, and abundance.
          </p>
          <p>
            We help you understand the real meaning of financial freedom — the
            ability to follow your calling, support your family, and live boldly
            without constantly checking your bank account.
          </p>
          <p>
            We are committed to equipping you with the tools, clarity, and
            confidence to build a future that reflects God&apos;s plan for your
            life.
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="mx-auto mt-12 w-16 h-[2px] bg-tan"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
