import {
  type LucideIcon,
  Satellite,
  Server,
  BarChart3,
  Globe,
  BookOpen,
  Handshake,
  Cloud,
  GitBranch,
  ShieldCheck,
  Microscope,
  Share2,
  Palette,
  Settings2,
  Sprout,
  LayoutGrid,
} from "lucide-react";

/** Slug (last path segment) → line icon, for the 9 service categories. */
export const serviceIcons: Record<string, LucideIcon> = {
  "data-services": Satellite,
  "cloud-infrastructure": Server,
  visualization: BarChart3,
  "website-management": Globe,
  "content-curation": BookOpen,
  "user-services": Handshake,
  "cloud-computing": Cloud,
  "algorithm-development": GitBranch,
  "access-management": ShieldCheck,
};

/** Slug (last path segment) → line icon, for the 5 user personas. */
export const personaIcons: Record<string, LucideIcon> = {
  "data-dana": Microscope,
  "publisher-pete": Share2,
  "visualizer-vicky": Palette,
  "infrastructure-ian": Settings2,
  "community-carlos": Sprout,
};

/** Resolve an icon from a full route path (e.g. "/services/data-services"). */
export function iconForPath(path: string): LucideIcon {
  const slug = path.split("/").filter(Boolean).pop() ?? "";
  return serviceIcons[slug] ?? personaIcons[slug] ?? LayoutGrid;
}
