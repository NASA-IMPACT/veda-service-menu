import { Check, X } from "lucide-react";
import IconBadge from "@/components/ui/IconBadge";
import { personaIcons } from "@/lib/icons";

interface PersonaProfilePageProps {
  name: string;
  subtitle: string;
  slug: string;
  role: string;
  description: string;
  keyNeeds: string[];
  painPoints: string[];
}

export default function PersonaProfilePage({
  name,
  subtitle,
  slug,
  role,
  description,
  keyNeeds,
  painPoints,
}: PersonaProfilePageProps) {
  const Icon = personaIcons[slug];

  return (
    <section aria-labelledby="persona-profile-heading">
      <div className="flex items-start gap-5">
        {Icon ? <IconBadge icon={Icon} size="lg" tone="accent" /> : null}
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            User Persona
          </p>
          <h1 id="persona-profile-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {name}
          </h1>
          <p className="mt-1 text-lg text-foreground-muted">{subtitle}</p>
        </div>
      </div>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
            Role
          </dt>
          <dd className="mt-1.5 text-lg text-foreground-muted">{role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
            About
          </dt>
          <dd className="mt-1.5 leading-relaxed text-foreground-muted">{description}</dd>
        </div>
      </dl>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Key needs</h2>
        <ul className="mt-3 space-y-2.5">
          {keyNeeds.map((need) => (
            <li key={need} className="flex items-start gap-3">
              <Check size={18} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-success" />
              <span className="text-foreground-muted">{need}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Pain points</h2>
        <ul className="mt-3 space-y-2.5">
          {painPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <X size={18} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-danger" />
              <span className="text-foreground-muted">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
