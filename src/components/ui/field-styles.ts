/**
 * Shared look for text-entry controls (Input, Textarea, Select trigger).
 * Design system: min-height 48, 1px strong border, visible label elsewhere,
 * error/success shown with a heavier border (inset ring, so no layout shift)
 * and must always be paired with text/icon by the caller (not colour alone).
 */
export const fieldStyles = [
  "block w-full min-h-12 rounded-md border border-border-strong bg-bg-surface",
  "px-3.5 py-3 font-sans text-base leading-6 text-text-primary",
  "placeholder:text-text-secondary transition-colors motion-reduce:transition-none",
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-focus-ring",
  "enabled:hover:border-text-primary",
  "disabled:cursor-not-allowed disabled:border-border-default disabled:bg-action-disabled-bg disabled:text-text-disabled",
  // Error (set aria-invalid="true")
  "aria-invalid:border-error aria-invalid:enabled:hover:border-error aria-invalid:shadow-[inset_0_0_0_1px_var(--color-error)]",
  // Success (pass the `success` prop)
  "data-[success=true]:border-success data-[success=true]:enabled:hover:border-success data-[success=true]:shadow-[inset_0_0_0_1px_var(--color-success)]",
].join(" ");