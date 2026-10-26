import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      // scrolls sideways on narrow screens instead of wrapping
      className={cn(
        "flex w-full items-center gap-1 overflow-x-auto border-b border-border-default",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      // Active = heavier weight + underline bar (not colour alone)
      className={cn(
        "inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center px-4 py-2 font-sans text-sm font-medium whitespace-nowrap text-text-secondary",
        "transition-colors motion-reduce:transition-none",
        "outline-offset-[-2px] focus-visible:outline-2 focus-visible:outline-focus-ring",
        "hover:text-text-primary",
        "data-[state=active]:font-semibold data-[state=active]:text-text-primary data-[state=active]:shadow-[inset_0_-2px_var(--color-action-primary)]",
        "disabled:cursor-not-allowed disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };