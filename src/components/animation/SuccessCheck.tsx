"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { duration, ease } from "@/lib/motion";

export function SuccessCheck({
  size = 64,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="32" cy="32" r="30" strokeWidth="2" className="fill-success-bg stroke-success" />
      <m.path
        d="M20 33l8 8 16-17"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-success"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: reduce ? 0 : duration.slow,
          delay: reduce ? 0 : 0.1,
          ease,
        }}
      />
    </svg>
  );
}