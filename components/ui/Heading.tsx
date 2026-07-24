import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  darkBg?: boolean;
  className?: string;
}

export function Heading({
  as: Component = "h2",
  children,
  darkBg = false,
  className,
}: HeadingProps) {
  const baseStyles = "font-heading font-extrabold tracking-tight";

  const colorStyles = darkBg ? "text-white" : "text-deep-navy";

  const sizeStyles = {
    h1: "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] -tracking-[0.03em] font-extrabold",
    h2: "text-2xl sm:text-3xl lg:text-4xl leading-[1.2] -tracking-[0.02em] font-bold",
    h3: "text-xl sm:text-2xl leading-[1.3] -tracking-[0.01em] font-bold",
    h4: "text-lg sm:text-xl leading-[1.4] font-semibold",
  };

  return (
    <Component
      className={twMerge(clsx(baseStyles, colorStyles, sizeStyles[Component], className))}
    >
      {children}
    </Component>
  );
}
