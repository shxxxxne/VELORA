type SpinnerProps = {
  size?: "sm" | "md";
  label?: string;
  className?: string;
};

export function Spinner({ size = "sm", label = "Loading", className = "" }: SpinnerProps) {
  const dim = size === "sm" ? "h-4 w-4" : "h-6 w-6";

  return (
    <span role="status" className={`inline-flex ${className}`}>
      <span
        aria-hidden="true"
        className={`inline-block ${dim} animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none`}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}