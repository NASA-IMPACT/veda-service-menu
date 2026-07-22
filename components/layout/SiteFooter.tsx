import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import VedaLogo from "@/components/layout/VedaLogo";
import { resourceGroups } from "@/lib/links";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <VedaLogo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              An open-source Earth science platform for data processing, visualization,
              exploration, and analysis in the cloud.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground-subtle">
              NASA · Open Science · Development Seed
            </p>
          </div>

          {/* Link groups */}
          {resourceGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground-subtle">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ExternalLink
                        size={13}
                        aria-hidden="true"
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>VEDA — Visualization, Exploration, and Data Analysis.</p>
          <p>Developed for the NASA IMPACT / ODSI VEDA initiative.</p>
        </div>
      </Container>
    </footer>
  );
}
