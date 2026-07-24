import React from "react";

interface NumberBadgeProps {
  number: string | number;
  className?: string;
}

export function NumberBadge({ number, className = "" }: NumberBadgeProps) {
  return (
    <div
      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-blue/10 text-primary-blue font-heading font-extrabold text-base sm:text-lg border border-primary-blue/20 ${className}`}
    >
      {number}
    </div>
  );
}
