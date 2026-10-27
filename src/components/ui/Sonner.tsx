
"use client";

import * as React from "react";
import {
  CircleAlert,
  CircleCheck,
  Info,
  TriangleAlert,
} from "lucide-react";
import {
  Toaster as Sonner,
  toast,
  type ToasterProps,
} from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      richColors
      icons={{
        success: <CircleCheck aria-hidden="true" className="size-4" />,
        error: <CircleAlert aria-hidden="true" className="size-4" />,
        warning: <TriangleAlert aria-hidden="true" className="size-4" />,
        info: <Info aria-hidden="true" className="size-4" />,
      }}
      toastOptions={{
        classNames: {
          toast: "font-sans text-sm",
        },
      }}
      style={
        {
          "--normal-bg": "var(--color-bg-surface)",
          "--normal-text": "var(--color-text-primary)",
          "--normal-border": "var(--color-border-default)",
          "--success-bg": "var(--color-success-bg)",
          "--success-text": "var(--color-success)",
          "--success-border": "var(--color-success)",
          "--error-bg": "var(--color-error-bg)",
          "--error-text": "var(--color-error)",
          "--error-border": "var(--color-error)",
          "--warning-bg": "var(--color-warning-bg)",
          "--warning-text": "var(--color-warning)",
          "--warning-border": "var(--color-warning)",
          "--info-bg": "var(--color-bg-muted)",
          "--info-text": "var(--color-text-primary)",
          "--info-border": "var(--color-border-strong)",
          "--border-radius": "var(--radius-lg)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster, toast };
