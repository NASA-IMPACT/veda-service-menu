import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: ElementType;
  headingId?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  headingId,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Tag id={headingId} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </Tag>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-foreground-muted">{lead}</p> : null}
    </div>
  );
}
