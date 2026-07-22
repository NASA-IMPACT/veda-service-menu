import type { Metadata } from "next";
import { Rocket, Wrench, TrendingUp } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Cloud Computing" };

export default function CloudComputingPage() {
  return (
    <ServiceDetailPage
      slug="cloud-computing"
      title="Cloud Computing"
      description="High-performance cloud computing resources for large-scale data analysis. Access powerful computational infrastructure for your most demanding workloads."
      sections={[
        {
          icon: Rocket,
          title: "Cutting-Edge Technological Development to Support Research to Operations Workflows",
          body: "Implement advanced cloud technologies that bridge research and operational environments. Streamlined workflows that transition research outputs into production systems efficiently.",
        },
        {
          icon: Wrench,
          title: "JupyterHub Deployment and Management",
          body: "Deploy and manage multi-user JupyterHub environments for collaborative data science work. Shared computing resources with customizable configurations for your team's specific needs.",
        },
        {
          icon: TrendingUp,
          title: "Scalable Cloud Resources to Support Stakeholder Needs",
          body: "Flexible, scalable computing resources that adapt to varying workload demands. On-demand infrastructure ensuring stakeholders have the computational power they need, when they need it.",
        },
      ]}
    />
  );
}
