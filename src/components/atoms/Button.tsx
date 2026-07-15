import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href = "#",
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  if (onClick) {
    return (
      <button
        className={`button button--${variant} ${className}`}
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <a className={`button button--${variant} ${className}`} href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
