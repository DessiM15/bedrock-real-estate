"use client";

import { motion } from "motion/react";
import {
  Calendar,
  Target,
  Handshake,
  LineChart,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { processSteps } from "@/data/benefits";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Target,
  Handshake,
  LineChart,
};

export function HowItWorks() {
  return (
    <SectionWrapper id="process">
      <SectionHeading subtitle="How It Works">
        A Clear Path to
        <br />
        <span className="italic text-tan">Secured Returns</span>
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {processSteps.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Step Number */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border-2 border-tan/30 bg-cream-dark">
                  {Icon && (
                    <Icon className="w-8 h-8 text-tan" />
                  )}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-tan text-white text-sm font-bold rounded-full">
                  {step.step}
                </span>
              </div>

              {/* Connector Line (hidden on mobile and for last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-tan/20" />
              )}

              <h3 className="font-heading text-xl text-green-dark mb-3">
                {step.title}
              </h3>
              <p className="text-green-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-tan hover:text-tan-dark transition-colors text-sm uppercase tracking-[0.15em] font-medium"
        >
          Start Your Evaluation Today
          <span className="text-lg">&rarr;</span>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
