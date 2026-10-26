import * as React from "react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

/** Bare radio circle. Pair it with a <Label htmlFor> (or use RadioCard). */
function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // 20px circle; ::after grows the tap target to 44px
        "peer relative size-5 shrink-0 cursor-pointer rounded-full border-2 border-border-strong bg-bg-surface",
        "after:absolute after:-inset-3 after:content-['']",
        "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
        "enabled:hover:border-text-primary",
        "aria-invalid:border-error",
        "data-[state=checked]:border-action-primary",
        "disabled:cursor-not-allowed disabled:border-border-default disabled:bg-action-disabled-bg",
        "disabled:data-[state=checked]:border-text-disabled",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="size-2.5 rounded-full bg-action-primary peer-disabled:bg-text-disabled" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

/**
 * Whole-card radio option (design system "Option"): used for staff choice,
 * "Any available", etc. The entire card is the label, so the tap target is large.
 * Selected = heavier border + tint + filled radio (never colour alone).
 */
function RadioCard({
  className,
  id,
  value,
  title,
  description,
  disabled,
  ...props
}: Omit<React.ComponentProps<typeof RadioGroupPrimitive.Item>, "children"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  const generatedId = React.useId();
  const itemId = id ?? generatedId;
  return (
    <label
      htmlFor={itemId}
      data-slot="radio-card"
      data-disabled={disabled || undefined}
      className={cn(
        "flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border border-border-strong bg-bg-surface px-4 py-3.5",
        "transition-colors motion-reduce:transition-none",
        "hover:border-text-primary",
        "has-[[data-state=checked]]:border-2 has-[[data-state=checked]]:border-action-primary has-[[data-state=checked]]:bg-bg-accent has-[[data-state=checked]]:px-[15px] has-[[data-state=checked]]:py-[13px]",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus-ring",
        "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-border-default data-[disabled=true]:bg-action-disabled-bg data-[disabled=true]:text-text-disabled",
        className,
      )}
    >
      <RadioGroupItem
        id={itemId}
        value={value}
        disabled={disabled}
        className="focus-visible:outline-0"
        {...props}
      />
      <span className="grid gap-0.5">
        <span className="font-semibold text-text-primary group-data-[disabled=true]:text-text-disabled">
          {title}
        </span>
        {description && (
          <span className="text-sm leading-[22px] text-text-secondary">
            {description}
          </span>
        )}
      </span>
    </label>
  );
}

export { RadioCard, RadioGroup, RadioGroupItem };