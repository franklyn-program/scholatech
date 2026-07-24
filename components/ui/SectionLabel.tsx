import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionLabelProps {
  children: React.ReactNode;
  darkBg?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  darkBg = false,
  className,
}: SectionLabelProps) {
  const baseStyles =
    "inline-block font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-3 border";

  const themeStyles = darkBg
    ? "bg-blue-950/60 text-primary-blue border-blue-900/50"
    : "bg-blue-50 text-primary-blue border-blue-100";

  return (
    <span className={twMerge(clsx(baseStyles, themeStyles, className))}>
      {children}
    </span>
  );
}
