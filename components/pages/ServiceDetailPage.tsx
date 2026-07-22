import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import PrevNextNav from "@/components/layout/PrevNextNav";
import { serviceIcons } from "@/lib/icons";

export interface ServiceSection {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface ServiceDetailPageProps {
  slug: string;
  title: string;
  description: string;
  sections: ServiceSection[];
}

export default function ServiceDetailPage({
  slug,
  title,
  description,
  sections,
}: ServiceDetailPageProps) {
  const HeaderIcon = serviceIcons[slug];

  return (
    <Container className="py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-foreground-subtle">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" />
          <li>
            <Link href="/#services" className="transition-colors hover:text-primary">
              Services
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" />
          <li aria-current="page" className="font-medium text-foreground">
            {title}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mt-8 flex items-start gap-5">
        {HeaderIcon ? <IconBadge icon={HeaderIcon} size="lg" /> : null}
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
            VEDA Service
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted">{description}</p>

      {/* Sections */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title} className="p-6">
            <IconBadge icon={section.icon} size="md" tone="neutral" />
            <h2 className="mt-4 text-lg font-semibold text-foreground">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{section.body}</p>
          </Card>
        ))}
      </div>

      <PrevNextNav />
    </Container>
  );
}
