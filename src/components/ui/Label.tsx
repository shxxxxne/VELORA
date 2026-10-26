import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "block font-sans text-sm font-semibold leading-5 text-text-primary",
        "peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

export { Label };