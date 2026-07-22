import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PersonaBundlePageProps {
  bundleName: string;
  bundleDescription: string;
  coreServices: {
    category: string;
    services: string[];
    link: string;
  }[];
}

export default function PersonaBundlePage({
  bundleName,
  bundleDescription,
  coreServices,
}: PersonaBundlePageProps) {
  return (
    <section
      aria-labelledby="persona-bundle-heading"
      className="rounded-lg border border-border bg-surface-muted p-6 sm:p-8"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
        Recommended bundle
      </p>
      <h2 id="persona-bundle-heading" className="mt-2 text-2xl font-bold tracking-tight">
        {bundleName}
      </h2>
      <p className="mt-3 leading-relaxed text-foreground-muted">{bundleDescription}</p>

      <h3 className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
        Bundled core services
      </h3>
      <div className="mt-4 space-y-3">
        {coreServices.map((service) => (
          <Link
            key={service.category}
            href={service.link}
            className="group block rounded-lg border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                {service.category}
              </h4>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="flex-shrink-0 text-primary transition-transform group-hover:translate-x-1"
              />
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {service.services.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
