import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "primary" | "accent" | "neutral";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  primary: "bg-primary-soft text-primary",
  accent: "bg-[#fbe9e0] text-accent",
  neutral: "border border-border bg-surface text-foreground-subtle",
};

export default function Badge({ children, tone = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.14em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
