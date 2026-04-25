"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 28, suffix: "%", label: "Maximum Annual Returns" },
  { value: 0, suffix: "%", label: "Downside Exposure" },
  { value: 100, suffix: "%", label: "UCC Secured" },
  { value: 13, suffix: "%+", label: "Minimum Annual Returns" },
];

function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-tan mb-3">
            <CountUp
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </div>
          <p className="text-sm uppercase tracking-[0.15em] text-cream/70">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
