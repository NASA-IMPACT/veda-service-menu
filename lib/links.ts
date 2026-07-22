/**
 * Official VEDA / NASA ODSI / Development Seed resources.
 * Used by the site footer and the home "Related resources" section.
 */
export interface ExternalResource {
  label: string;
  href: string;
  description?: string;
}

export interface ResourceGroup {
  title: string;
  links: ExternalResource[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: "VEDA Platform",
    links: [
      {
        label: "VEDA Dashboard",
        href: "https://www.earthdata.nasa.gov/dashboard",
        description: "Browse, analyze, and explore Earth observation data online.",
      },
      {
        label: "openveda.cloud",
        href: "https://openveda.cloud/",
        description: "The VEDA STAC API and cloud-native data catalog.",
      },
      {
        label: "VEDA Documentation",
        href: "https://docs.openveda.cloud/",
        description: "Guides, notebooks, and the open-source ecosystem.",
      },
      {
        label: "Project overview",
        href: "https://docs.openveda.cloud/veda-project/",
        description: "How the VEDA project fits together.",
      },
    ],
  },
  {
    title: "Open science",
    links: [
      {
        label: "VEDA on NASA ESDS",
        href: "https://www.earthdata.nasa.gov/esds/veda",
        description: "VEDA within NASA's Earth Science Data Systems program.",
      },
      {
        label: "Introducing VEDA",
        href: "https://www.earthdata.nasa.gov/news/blog/introducing-veda-open-science-platform-accelerate-earth-science-research-application",
        description: "The open-science platform explained on Earthdata.",
      },
      {
        label: "Development Seed — VEDA (ODSI)",
        href: "https://developmentseed.org/projects/nasa-odsi-veda/",
        description: "Built for NASA's Office of Data Science and Informatics.",
      },
      {
        label: "Development Seed",
        href: "https://developmentseed.org/",
        description: "Engineering partner for the VEDA platform.",
      },
    ],
  },
  {
    title: "Open source",
    links: [
      {
        label: "veda-ui",
        href: "https://github.com/NASA-IMPACT/veda-ui",
        description: "Dashboard frontend.",
      },
      {
        label: "veda-config",
        href: "https://github.com/NASA-IMPACT/veda-config",
        description: "Instance content configuration.",
      },
      {
        label: "veda-docs",
        href: "https://github.com/NASA-IMPACT/veda-docs",
        description: "Documentation source.",
      },
    ],
  },
];

/** Flat list of the most useful resources, for the home page cards. */
export const featuredResources: ExternalResource[] = [
  resourceGroups[0].links[0], // VEDA Dashboard
  resourceGroups[0].links[1], // openveda.cloud
  resourceGroups[0].links[2], // VEDA Documentation
  resourceGroups[1].links[2], // Development Seed — VEDA (ODSI)
  resourceGroups[1].links[0], // VEDA on NASA ESDS
  resourceGroups[2].links[0], // veda-ui
];

/** Primary call-to-action used in the header and hero. */
export const vedaDashboardUrl = "https://www.earthdata.nasa.gov/dashboard";
