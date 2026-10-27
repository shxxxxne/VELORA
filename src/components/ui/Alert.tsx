import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Inline alert for messages that must stay next to their context
 * (slot just taken, booking confirmed, email failed, outside cancellation window).
 * Prefer this over a toast for anything the user must read or act on.
 * Icon + text means state is never colour-only.
 */
const alertVariants = cva(
  "flex gap-2.5 rounded-md border px-3.5 py-3 font-sans text-sm leading-[22px]",
  {
    variants: {
      variant: {
        success: "border-success bg-success-bg text-success",
        error: "border-error bg-error-bg text-error",
        warning: "border-warning bg-warning-bg text-warning",
        info: "border-border-strong bg-bg-muted text-text-primary",
      },
    },
    defaultVariants: { variant: "info" },
  },
);

const icons = {
  success: CircleCheck,
  error: CircleAlert,
  warning: TriangleAlert,
  info: Info,
} as const;

function Alert({
  className,
  variant,
  role,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const kind = variant ?? "info";
  const Icon = icons[kind];
  return (
    <div
      data-slot="alert"
      // errors interrupt (role=alert); everything else is announced politely
      role={role ?? (kind === "error" ? "alert" : "status")}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <Icon aria-hidden="true" className="mt-[3px] size-4 shrink-0" />
      <div className="grid gap-0.5">{children}</div>
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="alert-title"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("[&_a]:underline [&_a]:underline-offset-2", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };