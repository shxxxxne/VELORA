import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldStyles } from "./field-styles";

type InputProps = React.ComponentProps<"input"> & {
  /** Success state. For errors set aria-invalid="true" (FormField will do this). */
  success?: boolean;
};

function Input({ className, type = "text", success, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      data-success={success || undefined}
      type={type}
      className={cn(fieldStyles, className)}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };