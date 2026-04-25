"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function InvestmentOverview() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["inset(20% 20% 20% 20%)", "inset(0% 0% 0% 0%)"]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <SectionWrapper id="overview">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Text Content */}
        <div>
          <motion.p
            className="text-tan text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Investment Overview
          </motion.p>

          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-green-dark font-medium leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Smarter Way to
            <br />
            <span className="italic text-tan">Grow Your Capital</span>
          </motion.h2>

          <motion.div
            className="space-y-5 text-green-dark/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg">
              At Bedrock Financial Planning, we provide access to high-yield,
              secured alternative real estate opportunities designed to
              outperform traditional investment vehicles.
            </p>
            <p>
              If your current capital isn&apos;t generating strong, consistent
              returns, it may be time to consider a smarter strategy. Our
              exclusive program is structured to deliver{" "}
              <strong className="text-green-dark">
                13–28% annual returns
              </strong>{" "}
              — offering a level of growth that most conventional savings
              accounts, CDs, or market-based products simply cannot compete
              with.
            </p>
            <p>
              Every investment is{" "}
              <strong className="text-green-dark">
                backed by a UCC filing
              </strong>{" "}
              for added security, giving you a secured interest in the
              underlying real estate assets. This investment model is built to
              give you peace of mind while your money works harder than ever.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="primary"
              href="#contact"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Schedule Your Evaluation
            </Button>
          </motion.div>
        </div>

        {/* Image with Clip-Path Reveal */}
        <motion.div
          ref={imageRef}
          className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm"
          style={{ clipPath }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')",
              scale: imageScale,
            }}
          />
          <div className="absolute inset-0 bg-green-dark/10" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
