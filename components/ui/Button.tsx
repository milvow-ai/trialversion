import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-invert" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg",
  outline:
    "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  "outline-invert":
    "border-2 border-white text-white hover:bg-white hover:text-brand",
  ghost: "text-brand hover:text-brand-dark",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noreferrer" : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
