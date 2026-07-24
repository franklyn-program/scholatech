import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "green";
  size?: "default" | "sm" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-md active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-primary-blue text-white hover:bg-blue-600 shadow-card border border-transparent",
    secondary:
      "bg-deep-navy text-white hover:bg-slate-800 border border-transparent shadow-card",
    outline:
      "bg-transparent text-deep-navy border border-border-slate hover:bg-bg-soft hover:border-slate-300",
    ghost:
      "bg-transparent text-text-slate hover:bg-bg-soft hover:text-deep-navy border border-transparent",
    green:
      "bg-accent-green text-white hover:bg-emerald-600 border border-transparent shadow-card",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-sm tracking-wide",
    default: "text-sm px-5 py-2.5 rounded-md",
    lg: "text-base px-7 py-3.5 rounded-md font-bold",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
