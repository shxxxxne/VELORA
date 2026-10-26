import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Status chip. Always include a text label; add an icon (e.g. a check)
 * for status so meaning never depends on colour alone.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-sans text-xs leading-4 font-semibold tracking-[0.02em] whitespace-nowrap [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        success: "border-success bg-success-bg text-success", // Confirmed
        neutral: "border-border-strong bg-bg-muted text-text-primary", // Completed, Cancelled
        error: "border-error bg-error-bg text-error", // No-show
        warning: "border-warning bg-warning-bg text-warning", // Pending
        brand: "border-action-primary bg-bg-accent text-text-brand", // e.g. "Sample price"
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };