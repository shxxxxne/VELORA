import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Loading placeholder. Give it the SAME size as the content it replaces
 * (e.g. the slot grid height) so nothing shifts when data arrives (CLS <= 0.1).
 * Decorative: set aria-busy on the parent region instead.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(
        "rounded-md bg-border-default/60 motion-safe:animate-pulse",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };