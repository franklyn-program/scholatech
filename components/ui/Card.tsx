import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  variant?: "white" | "soft" | "dark" | "navy" | "placeholder";
  hoverEffect?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "white",
  hoverEffect = true,
  className,
}: CardProps) {
  const baseStyles = "rounded-lg p-6 sm:p-8 transition-all duration-300 border relative";

  const variantStyles = {
    white: "bg-white border-border-slate text-text-slate shadow-card",
    soft: "bg-bg-soft border-border-slate text-text-slate",
    dark: "bg-bg-dark border-slate-800 text-slate-200",
    navy: "bg-deep-navy border-slate-800 text-slate-100",
    placeholder: "bg-bg-soft/70 border-dashed border-slate-300 text-slate-600",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-subtle hover:border-slate-300 dark:hover:border-slate-700"
    : "";

  return (
    <div className={twMerge(clsx(baseStyles, variantStyles[variant], hoverStyles, className))}>
      {children}
    </div>
  );
}
