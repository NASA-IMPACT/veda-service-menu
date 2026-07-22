import type { Metadata } from "next";
import { Server, RefreshCw, DollarSign } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Cloud Infrastructure" };

export default function CloudInfrastructurePage() {
  return (
    <ServiceDetailPage
      slug="cloud-infrastructure"
      title="Cloud Infrastructure"
      description="Scalable cloud infrastructure and deployment solutions to support your data-intensive applications. Build and manage robust, reliable infrastructure for your projects."
      sections={[
        {
          icon: Server,
          title: "Backend Services for Applications and Server Management",
          body: "Maintain and manage backend services and server infrastructure for your applications. Reliable hosting, monitoring, and maintenance ensuring optimal performance and uptime.",
        },
        {
          icon: RefreshCw,
          title: "Automation Pipelines",
          body: "Streamlined CI/CD pipelines for automated deployment, testing, and infrastructure provisioning. Reduce manual processes and accelerate development workflows.",
        },
        {
          icon: DollarSign,
          title: "Integration of Cost Management Applications",
          body: "Monitor and optimize cloud spending with integrated cost management tools. Track resource usage, set budgets, and receive alerts to control infrastructure costs.",
        },
      ]}
    />
  );
}
