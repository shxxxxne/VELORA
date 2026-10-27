import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // 56x32 track; ::after grows the tap target to 44px tall
        "group peer relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-border-strong p-0.5",
        "after:absolute after:inset-x-0 after:-inset-y-1.5 after:content-['']",
        "transition-colors motion-reduce:transition-none",
        "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
        "data-[state=checked]:bg-action-primary",
        "disabled:cursor-not-allowed disabled:bg-action-disabled-bg",
        "disabled:data-[state=checked]:bg-text-disabled",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex size-6 items-center justify-center rounded-full bg-bg-surface shadow-sm",
          "transition-transform duration-200 motion-reduce:transition-none",
          "data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-6",
        )}
      >
        {/* On state = check mark in the thumb, never colour alone */}
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className="size-3.5 text-action-primary opacity-0 group-data-[state=checked]:opacity-100"
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };