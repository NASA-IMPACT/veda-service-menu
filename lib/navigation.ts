import {
  type LucideIcon,
  Home,
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
} from "lucide-react";

export interface PageInfo {
  path: string;
  title: string;
  icon: LucideIcon;
}

export const pages: PageInfo[] = [
  { path: "/", title: "Home", icon: Home },
  { path: "/services/data-services", title: "Data Services", icon: Satellite },
  { path: "/services/cloud-infrastructure", title: "Cloud Infrastructure", icon: Server },
  { path: "/services/visualization", title: "Custom Visualization Development", icon: BarChart3 },
  { path: "/services/website-management", title: "Website Management", icon: Globe },
  { path: "/services/content-curation", title: "Content Curation", icon: BookOpen },
  { path: "/services/user-services", title: "User Services", icon: Handshake },
  { path: "/services/cloud-computing", title: "Cloud Computing", icon: Cloud },
  {
    path: "/services/algorithm-development",
    title: "Algorithm Development & Data Integration",
    icon: GitBranch,
  },
  { path: "/services/access-management", title: "Access Management", icon: ShieldCheck },
];

export const personas: PageInfo[] = [
  { path: "/personas/data-dana", title: "Data Dana", icon: Microscope },
  { path: "/personas/publisher-pete", title: "Publisher Pete", icon: Share2 },
  { path: "/personas/visualizer-vicky", title: "Visualizer Vicky", icon: Palette },
  { path: "/personas/infrastructure-ian", title: "Infrastructure Ian", icon: Settings2 },
  { path: "/personas/community-carlos", title: "Community Carlos", icon: Sprout },
];

function isPersonaPath(path: string): boolean {
  return path.startsWith("/personas/");
}

function getPageArray(currentPath: string): PageInfo[] {
  return isPersonaPath(currentPath) ? personas : pages;
}

export function getCurrentPageIndex(currentPath: string): number {
  const pageArray = getPageArray(currentPath);
  return pageArray.findIndex((page) => page.path === currentPath);
}

export function getNextPage(currentPath: string): PageInfo | null {
  const pageArray = getPageArray(currentPath);
  const currentIndex = getCurrentPageIndex(currentPath);
  if (currentIndex === -1 || currentIndex === pageArray.length - 1) {
    return null;
  }
  return pageArray[currentIndex + 1];
}

export function getPreviousPage(currentPath: string): PageInfo | null {
  const pageArray = getPageArray(currentPath);
  const currentIndex = getCurrentPageIndex(currentPath);
  if (currentIndex <= 0) {
    return null;
  }
  return pageArray[currentIndex - 1];
}

/** All service pages (excludes Home) — handy for grids and menus. */
export const servicePages: PageInfo[] = pages.slice(1);
