"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { duration, ease } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Fade + 8px rise, once. Never wrap the hero or LCP image. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: reduce ? 0 : duration.slow,
        delay: reduce ? 0 : delay,
        ease,
      }}
    >
      {children}
    </m.div>
  );
}