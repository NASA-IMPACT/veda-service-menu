"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getNextPage, getPreviousPage } from "@/lib/navigation";
import { cn } from "@/lib/cn";

export default function PrevNextNav() {
  const pathname = usePathname();
  const previous = getPreviousPage(pathname);
  const next = getNextPage(pathname);

  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={previous.path}
          className="group flex items-center gap-3 rounded-lg border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
        >
          <ArrowLeft
            size={20}
            aria-hidden="true"
            className="flex-shrink-0 text-primary transition-transform group-hover:-translate-x-0.5"
          />
          <span className="min-w-0">
            <span className="block font-mono text-xs uppercase tracking-[0.12em] text-foreground-subtle">
              Previous
            </span>
            <span className="block truncate font-semibold text-foreground">{previous.title}</span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={next.path}
          className={cn(
            "group flex items-center gap-3 rounded-lg border border-border bg-surface p-4 text-right shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
            "sm:justify-end",
          )}
        >
          <span className="min-w-0">
            <span className="block font-mono text-xs uppercase tracking-[0.12em] text-foreground-subtle">
              Next
            </span>
            <span className="block truncate font-semibold text-foreground">{next.title}</span>
          </span>
          <ArrowRight
            size={20}
            aria-hidden="true"
            className="flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
