import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconBadgeSize = "sm" | "md" | "lg";
type IconBadgeTone = "primary" | "accent" | "neutral" | "success" | "danger";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: IconBadgeSize;
  tone?: IconBadgeTone;
  className?: string;
}

const sizeStyles: Record<IconBadgeSize, { box: string; icon: number }> = {
  sm: { box: "h-9 w-9 rounded-md", icon: 18 },
  md: { box: "h-12 w-12 rounded-md", icon: 22 },
  lg: { box: "h-16 w-16 rounded-lg", icon: 30 },
};

const toneStyles: Record<IconBadgeTone, string> = {
  primary: "bg-primary-soft text-primary",
  accent: "bg-[#fbe9e0] text-accent",
  neutral: "bg-surface-muted text-foreground-muted",
  success: "bg-[#e4f2e8] text-success",
  danger: "bg-[#fbe4e0] text-danger",
};

export default function IconBadge({
  icon: Icon,
  size = "md",
  tone = "primary",
  className,
}: IconBadgeProps) {
  const s = sizeStyles[size];
  return (
    <span
      className={cn(
        "inline-flex flex-shrink-0 items-center justify-center",
        s.box,
        toneStyles[tone],
        className,
      )}
    >
      <Icon size={s.icon} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
