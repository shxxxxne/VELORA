type SkeletonProps = { className?: string };

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-bg-muted motion-reduce:animate-none ${className}`}
    />
  );
}

/** Wrap a group of skeletons so screen readers hear one "loading" message. */
export function SkeletonGroup({
  children,
  label = "Loading",
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">{label}</span>
      {children}
    </div>
  );
}