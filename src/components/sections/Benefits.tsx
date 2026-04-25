"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  Shield,
  ShieldCheck,
  Wallet,
  PieChart,
  Users,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { benefits } from "@/data/benefits";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Shield,
  ShieldCheck,
  Wallet,
  PieChart,
  Users,
};

export function Benefits() {
  return (
    <>
      {/* Benefits Cards */}
      <SectionWrapper id="benefits" cream>
        <SectionHeading subtitle="Why Alternative Real Estate">
          Built for Stability.
          <br />
          <span className="italic text-tan">Engineered for Growth.</span>
        </SectionHeading>

        <motion.p
          className="text-center text-green-dark/70 max-w-3xl mx-auto mb-16 text-lg leading-relaxed -mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Unlike volatile market investments, our alternative real estate
          options are engineered for stability and predictable results. Your
          capital is secured, your returns are defined, and your downside
          exposure is fully mitigated.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                className="group bg-white p-8 lg:p-10 rounded-sm border border-cream-dark hover:border-tan/30 transition-all duration-500 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-cream-dark rounded-sm mb-6 group-hover:bg-tan/10 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-6 h-6 text-tan" />
                  )}
                </div>
                <h3 className="font-heading text-xl text-green-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-green-dark/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Stats Counter Section */}
      <section className="bg-green-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            className="text-center text-tan-light text-sm uppercase tracking-[0.2em] mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By the Numbers
          </motion.p>
          <StatsCounter />
        </div>
      </section>
    </>
  );
}
