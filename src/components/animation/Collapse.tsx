"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { duration, ease } from "@/lib/motion";

type CollapseProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  headingLevel?: 2 | 3 | 4;
  className?: string;
};

export function Collapse({
  title,
  children,
  defaultOpen = false,
  headingLevel = 3,
  className = "",
}: CollapseProps) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;
  const Heading = `h${headingLevel}` as const;

  return (
    <div className={`border-b border-border-default ${className}`}>
      <Heading className="font-sans text-base font-semibold">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left"
        >
          <span>{title}</span>
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </Heading>

      <m.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : duration.base, ease }}
        style={{ overflow: "hidden" }}
      >
        <div className="pb-4 text-text-secondary">{children}</div>
      </m.div>
    </div>
  );
}