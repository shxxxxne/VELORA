import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

/* Shared with AlertDialog so both look identical.
   Design system: centred ~380px on desktop, bottom sheet on mobile. */
export const dialogOverlayStyles = "fixed inset-0 z-40 bg-bg-inverse/60";

export const dialogContentStyles = [
  "fixed z-40 grid max-h-[90dvh] gap-4 overflow-y-auto border border-border-default bg-bg-surface p-6 shadow-lg outline-none",
  "inset-x-0 bottom-0 rounded-t-xl",
  "md:top-1/2 md:right-auto md:bottom-auto md:left-1/2 md:w-full md:max-w-[380px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl",
].join(" ");

export const dialogTitleStyles =
  "font-heading text-2xl leading-[30px] font-semibold text-text-primary";
export const dialogDescriptionStyles =
  "text-sm leading-[22px] text-text-secondary";

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(dialogOverlayStyles, className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(dialogContentStyles, className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="absolute top-2 right-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-text-secondary outline-offset-2 hover:bg-bg-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-focus-ring"
          >
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("grid gap-1.5 pr-8", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 md:flex-row md:justify-end",
        "[&>*]:w-full md:[&>*]:w-auto",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(dialogTitleStyles, className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(dialogDescriptionStyles, className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};