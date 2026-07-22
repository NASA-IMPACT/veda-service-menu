import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PrevNextNav from "@/components/layout/PrevNextNav";

interface PersonaDetailProps {
  /** Persona name, shown as the current breadcrumb item. */
  name: string;
  profile: ReactNode;
  bundle: ReactNode;
}

export default function PersonaDetail({ name, profile, bundle }: PersonaDetailProps) {
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
            <Link href="/#personas" className="transition-colors hover:text-primary">
              Personas
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" />
          <li aria-current="page" className="font-medium text-foreground">
            {name}
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>{profile}</div>
        <div>{bundle}</div>
      </div>

      <PrevNextNav />
    </Container>
  );
}
