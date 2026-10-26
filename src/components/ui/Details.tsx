import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Native <details>: works without JavaScript, keyboard + screen-reader accessible
 * out of the box, and renders in Server Components. Use for the FAQ
 * (architecture decision) and any static disclosure.
 */
function Details({ className, ...props }: React.ComponentProps<"details">) {
  return (
    <details
      data-slot="details"
      className={cn("group border-b border-border-default", className)}
      {...props}
    />
  );
}

function DetailsSummary({
  className,
  children,
  ...props
}: React.ComponentProps<"summary">) {
  return (
    <summary
      data-slot="details-summary"
      className={cn(
        "flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-sans text-base font-semibold text-text-primary",
        "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
        "[&::-webkit-details-marker]:hidden",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
      />
    </summary>
  );
}

function DetailsContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="details-content"
      className={cn("pb-4 text-base leading-[26px] text-text-primary", className)}
      {...props}
    />
  );
}

export { Details, DetailsContent, DetailsSummary };