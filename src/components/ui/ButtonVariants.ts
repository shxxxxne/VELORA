import { cva } from "class-variance-authority";

/**
 * Lives in its own file (no "use client") so server components
 * (Pagination, AlertDialog actions, link-styled buttons) can call it.
 * `not-disabled:` is used instead of `enabled:` so hover/pressed styles
 * also work when the button styles are applied to an <a> (asChild / Link).
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none cursor-pointer",
    "rounded-md border-[1.5px] font-sans font-semibold tracking-[0.02em]",
    "transition-colors duration-200 motion-reduce:transition-none",
    "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "disabled:cursor-not-allowed disabled:border-action-disabled-bg disabled:bg-action-disabled-bg disabled:text-text-disabled",
    "data-[loading=true]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "border-action-primary bg-action-primary text-text-on-action not-disabled:hover:border-action-primary-hover not-disabled:hover:bg-action-primary-hover not-disabled:active:border-action-primary-pressed not-disabled:active:bg-action-primary-pressed",
        secondary:
          "border-action-primary bg-transparent text-text-brand not-disabled:hover:bg-bg-accent not-disabled:active:bg-bg-accent-pressed not-disabled:active:text-action-primary-pressed",
        ghost:
          "border-transparent bg-transparent text-text-primary not-disabled:hover:bg-bg-muted not-disabled:active:bg-bg-accent disabled:border-transparent disabled:bg-transparent",
        "destructive-secondary":
          "border-error bg-transparent text-error not-disabled:hover:bg-error-bg not-disabled:active:bg-error-bg not-disabled:active:shadow-[inset_0_0_0_1px_var(--color-error)]",
        link: "border-transparent bg-transparent text-text-brand underline underline-offset-4 not-disabled:hover:bg-bg-accent not-disabled:active:text-action-primary-pressed disabled:border-transparent disabled:bg-transparent disabled:no-underline",
      },
      size: {
        // sm (40px) is for dense admin screens only; public pages use md/lg (>=44px targets)
        sm: "min-h-10 px-4 py-2 text-sm",
        md: "min-h-12 px-6 py-3.5 text-[15px] leading-5",
        lg: "min-h-14 px-8 py-4 text-base",
      },
    },
    compoundVariants: [{ variant: "link", className: "min-h-11 px-2 py-2" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);