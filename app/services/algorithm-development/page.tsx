import type { Metadata } from "next";
import { Code2, RefreshCw, Globe, Zap } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Algorithm Development & Data Integration" };

export default function AlgorithmDevelopmentPage() {
  return (
    <ServiceDetailPage
      slug="algorithm-development"
      title="Algorithm Development & Data Integration"
      description="Collaborative platform for developing, sharing, and deploying reproducible scientific algorithms with standardized multi-mission data access."
      sections={[
        {
          icon: Code2,
          title: "Version-Controlled Algorithm Development",
          body: "Git-integrated development workspaces enabling reproducible scientific computing with full version history and collaborative features. Teams can develop, test, and iterate on algorithms together with shared computing resources, managed IP considerations, and community-driven algorithm libraries where researchers discover, adapt, and contribute workflows.",
        },
        {
          icon: RefreshCw,
          title: "Data Harmonization & Standardization",
          body: "Transform disparate datasets into common coordinate reference frames and standardized formats for seamless comparative analysis. Automated pipelines handle data from heterogeneous sources—satellites, aircraft, and ground stations—at varying resolutions and processing levels, enabling cross-platform scientific research.",
        },
        {
          icon: Globe,
          title: "Multi-Mission Data Integration",
          body: "Unified access to data from multiple NASA and ESA missions (BIOMASS, GEDI, NISAR) within a single cloud platform. Interoperable metadata systems with Common Metadata Repository (CMR) integration enhance discoverability across organizational boundaries, eliminating the need to manage redundant infrastructure or transfer massive datasets.",
        },
        {
          icon: Zap,
          title: "Scientific Workflow Orchestration",
          body: "Automated pipeline management for complex multi-step scientific analyses with co-located compute and data resources. Workflow tools handle dependencies, resource allocation, and error recovery for large-scale processing tasks, enabling efficient execution of reproducible research pipelines in version-controlled environments.",
        },
      ]}
    />
  );
}
