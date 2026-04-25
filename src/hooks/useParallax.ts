"use client";

import { useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

export function useParallax(
  speed: number = 0.3
): [React.RefObject<HTMLDivElement | null>, MotionValue<number>] {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);

  return [ref, y];
}
