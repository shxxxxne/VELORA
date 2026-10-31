"use client";

import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import type { CSSProperties, ReactNode } from "react";
import { duration, ease } from "@/lib/motion";

type StepTransitionProps = {
  stepKey: string | number;
  children: ReactNode;
  minHeight?: CSSProperties["minHeight"];
  className?: string;
};

export function StepTransition({
  stepKey,
  children,
  minHeight,
  className,
}: StepTransitionProps) {
  const reduce = useReducedMotion();

  return (
    <div className={className} style={{ minHeight }}>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={stepKey}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: reduce ? 0 : duration.base, ease },
          }}
          exit={{
            opacity: 0,
            transition: { duration: reduce ? 0 : duration.fast, ease },
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </div>
  );
}