import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  darkBg?: boolean;
  className?: string;
}

export function Paragraph({
  children,
  size = "md",
  darkBg = false,
  className,
}: ParagraphProps) {
  const baseStyles = "font-sans leading-relaxed";

  const colorStyles = darkBg ? "text-slate-300" : "text-text-slate";

  const sizeStyles = {
    lg: "text-lg sm:text-xl font-normal leading-relaxed",
    md: "text-base sm:text-lg font-normal",
    sm: "text-sm font-normal text-slate-500",
  };

  return (
    <p className={twMerge(clsx(baseStyles, colorStyles, sizeStyles[size], className))}>
      {children}
    </p>
  );
}
