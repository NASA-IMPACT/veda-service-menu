import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import VedaLogo from "@/components/layout/VedaLogo";
import { vedaDashboardUrl } from "@/lib/links";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Personas", href: "/#personas" },
  { label: "Resources", href: "/#resources" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded focus-visible:outline-none"
          aria-label="VEDA Service Menu — home"
        >
          <VedaLogo variant="header" />
          <span
            className="hidden border-l border-border pl-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle sm:inline"
            aria-hidden="true"
          >
            Service Menu
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Primary" className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={vedaDashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-contrast transition-colors hover:bg-primary-hover"
          >
            VEDA Dashboard
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
