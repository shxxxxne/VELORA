import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // 24px box; the ::after pseudo-element grows the tap target to 44px
        "peer relative size-6 shrink-0 cursor-pointer rounded-md border-[1.5px] border-border-strong bg-bg-surface text-text-on-action",
        "after:absolute after:-inset-2.5 after:content-['']",
        "transition-colors motion-reduce:transition-none",
        "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
        "enabled:hover:border-text-primary",
        "aria-invalid:border-error aria-invalid:enabled:hover:border-error",
        "data-[state=checked]:border-action-primary data-[state=checked]:bg-action-primary",
        "data-[state=indeterminate]:border-action-primary data-[state=indeterminate]:bg-action-primary",
        "disabled:cursor-not-allowed disabled:border-border-default disabled:bg-action-disabled-bg",
        "disabled:data-[state=checked]:border-text-disabled disabled:data-[state=checked]:bg-text-disabled",
        "disabled:data-[state=indeterminate]:border-text-disabled disabled:data-[state=indeterminate]:bg-text-disabled",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="group flex items-center justify-center">
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className="size-4 group-data-[state=indeterminate]:hidden"
        />
        <Minus
          aria-hidden="true"
          strokeWidth={3}
          className="hidden size-4 group-data-[state=indeterminate]:block"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };