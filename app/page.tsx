import { ArrowRight, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceGrid from "@/components/pages/ServiceGrid";
import PersonaGrid from "@/components/pages/PersonaGrid";
import { featuredResources } from "@/lib/links";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary-soft via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(0,102,179,0.10)] blur-3xl"
        />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <Badge>NASA · Open Science Platform</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              VEDA Service Menu
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted sm:text-xl">
              Visualization, Exploration, and Data Analysis (VEDA) is NASA&rsquo;s open-source
              platform for Earth science in the cloud. Explore the full suite of services we offer
              &mdash; and the people they empower.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#services">
                Explore services
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="/#personas" variant="secondary">
                Meet the personas
              </Button>
            </div>
            <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-foreground-subtle">
                  Service areas
                </dt>
                <dd className="mt-1 text-3xl font-bold text-foreground">9</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-foreground-subtle">
                  User personas
                </dt>
                <dd className="mt-1 text-3xl font-bold text-foreground">5</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-foreground-subtle">
                  Built with
                </dt>
                <dd className="mt-1 text-3xl font-bold text-foreground">Open source</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Services */}
      <Container
        as="section"
        id="services"
        className="scroll-mt-24 py-16 sm:py-20"
        aria-labelledby="services-heading"
      >
        <SectionHeading
          eyebrow="What we offer"
          headingId="services-heading"
          title="Service categories"
          lead="Nine service areas spanning data, infrastructure, visualization, and support — everything needed to bring Earth observation data to the cloud."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </Container>

      {/* Personas */}
      <section
        id="personas"
        className="scroll-mt-24 border-y border-border bg-surface-muted py-16 sm:py-20"
        aria-labelledby="personas-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            headingId="personas-heading"
            title="User personas"
            lead="VEDA supports a diverse community. Explore each persona's needs, pain points, and the recommended bundle of services."
          />
          <div className="mt-10">
            <PersonaGrid />
          </div>
        </Container>
      </section>

      {/* Resources */}
      <Container
        as="section"
        id="resources"
        className="scroll-mt-24 py-16 sm:py-20"
        aria-labelledby="resources-heading"
      >
        <SectionHeading
          eyebrow="Go deeper"
          headingId="resources-heading"
          title="Related VEDA resources & services"
          lead="Official VEDA applications, documentation, and open-source projects from NASA and Development Seed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <Card key={resource.href} href={resource.href} external className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {resource.label}
                </h3>
                <ExternalLink
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 text-foreground-subtle transition-colors group-hover:text-primary"
                />
              </div>
              {resource.description ? (
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {resource.description}
                </p>
              ) : null}
              <span className="sr-only">(opens in a new tab)</span>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
