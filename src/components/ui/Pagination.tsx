import * as React from "react";
import { Slot } from "radix-ui";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ButtonVariants";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label="Pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = React.ComponentProps<"a"> & {
  isActive?: boolean;
  /** Unavailable (e.g. Previous on page 1): renders a non-interactive span. */
  disabled?: boolean;
  /** Use with next/link: <PaginationLink asChild><Link href=...>2</Link></PaginationLink> */
  asChild?: boolean;
  /** "sm" (40px) suits dense admin lists. */
  size?: "sm" | "md" | "lg";
};

function PaginationLink({
  className,
  isActive,
  disabled,
  asChild,
  size = "sm",
  children,
  ...props
}: PaginationLinkProps) {
  const classes = cn(
    buttonVariants({ variant: isActive ? "primary" : "ghost", size }),
    "min-w-10 px-3",
    className,
  );

  if (disabled) {
    return (
      <span
        data-slot="pagination-link"
        aria-disabled="true"
        className={cn(classes, "cursor-not-allowed text-text-disabled")}
      >
        {children}
      </span>
    );
  }

  const Comp = asChild ? Slot.Root : "a";
  return (
    <Comp
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={classes}
      {...props}
    >
      {children}
    </Comp>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronLeft aria-hidden="true" />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRight aria-hidden="true" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-10 items-center justify-center text-text-secondary",
        className,
      )}
      {...props}
    >
      <Ellipsis aria-hidden="true" className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};