import { Children, type ReactNode } from "react";
import { STAGGER_MAX_ITEMS, STAGGER_STEP } from "@/lib/motion";
import { Reveal } from "./Reveal";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  step?: number;
};

export function Stagger({
  children,
  className,
  itemClassName,
  step = STAGGER_STEP,
}: StaggerProps) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, i) => (
        <Reveal
          key={i}
          delay={Math.min(i, STAGGER_MAX_ITEMS - 1) * step}
          className={itemClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}