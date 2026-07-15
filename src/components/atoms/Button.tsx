import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
