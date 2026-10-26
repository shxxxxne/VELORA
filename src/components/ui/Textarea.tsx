import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldStyles } from "./field-styles";

type TextareaProps = React.ComponentProps<"textarea"> & {
  success?: boolean;
};

function Textarea({ className, success, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-success={success || undefined}
      className={cn(fieldStyles, "min-h-30 resize-y", className)}
      {...props}
    />
  );
}

export { Textarea };
export type { TextareaProps };
