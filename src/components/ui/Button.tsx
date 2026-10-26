"use client";

import * as React from "react";
import { Slot } from "radix-ui";
import { type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ButtonVariants";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. next/link) with button styles. */
    asChild?: boolean;
    /** Shows a spinner, sets aria-busy, and blocks clicks without losing focus. */
    loading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  type = "button",
  onClick,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild) {
    return (
      <Slot.Root data-slot="button" className={classes} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      data-slot="button"
      data-loading={loading || undefined}
      type={type}
      className={classes}
      disabled={disabled}
      aria-busy={loading || undefined}
      aria-disabled={loading || undefined}
      onClick={(event) => {
        if (loading) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      {...props}
    >
      {loading && (
        <Loader2 aria-hidden="true" className="motion-safe:animate-spin" />
      )}
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps };