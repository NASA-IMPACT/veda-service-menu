import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import { serviceIcons } from "@/lib/icons";

interface ServiceCategory {
  title: string;
  href: string;
  slug: string;
  description: string;
}

const services: ServiceCategory[] = [
  {
    title: "Data Services",
    href: "/services/data-services",
    slug: "data-services",
    description: "Access and integrate Earth observation data and APIs.",
  },
  {
    title: "Cloud Infrastructure",
    href: "/services/cloud-infrastructure",
    slug: "cloud-infrastructure",
    description: "Scalable cloud infrastructure and deployment solutions.",
  },
  {
    title: "Custom Visualization Development",
    href: "/services/visualization",
    slug: "visualization",
    description: "Create custom data visualizations and dashboards.",
  },
  {
    title: "Website Management",
    href: "/services/website-management",
    slug: "website-management",
    description: "Professional web development and management services.",
  },
  {
    title: "Content Curation",
    href: "/services/content-curation",
    slug: "content-curation",
    description: "Expert content curation and management solutions.",
  },
  {
    title: "User Services",
    href: "/services/user-services",
    slug: "user-services",
    description: "Dedicated user support and assistance services.",
  },
  {
    title: "Cloud Computing",
    href: "/services/cloud-computing",
    slug: "cloud-computing",
    description: "High-performance cloud computing resources.",
  },
  {
    title: "Algorithm Development & Data Integration",
    href: "/services/algorithm-development",
    slug: "algorithm-development",
    description: "Reproducible algorithms with standardized multi-mission data access.",
  },
  {
    title: "Access Management",
    href: "/services/access-management",
    slug: "access-management",
    description: "Secure access control and authentication services.",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon: LucideIcon = serviceIcons[service.slug];
        return (
          <Card key={service.href} href={service.href} className="flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <IconBadge icon={Icon} size="md" />
              <span className="font-mono text-sm text-foreground-subtle" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
              {service.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Learn more
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Card>
        );
      })}
    </div>
  );
}
