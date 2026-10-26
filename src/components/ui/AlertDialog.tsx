import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ButtonVariants";
import {
  DialogFooter as AlertDialogFooter,
  DialogHeader as AlertDialogHeader,
  dialogContentStyles,
  dialogDescriptionStyles,
  dialogOverlayStyles,
  dialogTitleStyles,
} from "./Dialog";

/**
 * For confirmations that restate consequences (cancel booking, deactivate staff).
 * No close "X" and no outside-click dismissal: the user must pick an action.
 * Radix focuses the Cancel button first (the safe choice).
 */
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(dialogOverlayStyles, className)}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(dialogContentStyles, className)}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(dialogTitleStyles, className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(dialogDescriptionStyles, className)}
      {...props}
    />
  );
}

type ActionProps = VariantProps<typeof buttonVariants>;

/** Confirm action. Pass variant="destructive-secondary" for cancel/deactivate. */
function AlertDialogAction({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & ActionProps) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  variant = "secondary",
  size,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> & ActionProps) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};