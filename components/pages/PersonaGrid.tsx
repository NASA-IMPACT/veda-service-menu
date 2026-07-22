import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import { personaIcons } from "@/lib/icons";

interface Persona {
  name: string;
  slug: string;
  description: string;
  href: string;
}

const personas: Persona[] = [
  {
    name: "Data Dana",
    slug: "data-dana",
    description:
      "Research scientist who needs cloud-optimized data and scalable computing for analysis.",
    href: "/personas/data-dana",
  },
  {
    name: "Publisher Pete",
    slug: "publisher-pete",
    description: "Program manager making agency datasets publicly accessible and discoverable.",
    href: "/personas/publisher-pete",
  },
  {
    name: "Visualizer Vicky",
    slug: "visualizer-vicky",
    description:
      "Frontend developer building compelling interactive visualizations for broad audiences.",
    href: "/personas/visualizer-vicky",
  },
  {
    name: "Infrastructure Ian",
    slug: "infrastructure-ian",
    description: "DevOps engineer deploying reliable, cost-effective cloud infrastructure.",
    href: "/personas/infrastructure-ian",
  },
  {
    name: "Community Carlos",
    slug: "community-carlos",
    description:
      "Early-career researcher learning satellite data analysis and connecting with the community.",
    href: "/personas/community-carlos",
  },
];

export default function PersonaGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {personas.map((persona) => {
        const Icon: LucideIcon = personaIcons[persona.slug];
        return (
          <Card key={persona.href} href={persona.href} className="flex flex-col p-6">
            <IconBadge icon={Icon} size="lg" tone="accent" />
            <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {persona.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
              {persona.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              View persona
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
