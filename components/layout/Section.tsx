import React from "react";
import { Container } from "./Container";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  variant?: "white" | "soft" | "dark" | "navy";
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  variant = "white",
  id,
  className,
  containerClassName,
}: SectionProps) {
  const variantStyles = {
    white: "bg-white text-text-slate",
    soft: "bg-bg-soft text-text-slate border-y border-border-slate/60",
    dark: "bg-bg-dark text-slate-100 border-y border-slate-800/80",
    navy: "bg-deep-navy text-slate-100 border-y border-slate-800",
  };

  return (
    <section
      id={id}
      className={twMerge(
        clsx("py-16 sm:py-24 lg:py-28 relative overflow-hidden", variantStyles[variant], className)
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
