import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  /** Apply hover elevation even without an href. */
  interactive?: boolean;
}

const base = "block rounded-lg border border-border bg-surface shadow-sm";
const hover =
  "transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md";

export default function Card({ children, href, external, className, interactive }: CardProps) {
  const isLink = Boolean(href);
  const classes = cn(base, (isLink || interactive) && hover, isLink && "group", className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
