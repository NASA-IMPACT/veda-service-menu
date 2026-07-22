import type { Metadata } from "next";
import { Map, Puzzle } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Custom Visualization Development" };

export default function VisualizationPage() {
  return (
    <ServiceDetailPage
      slug="visualization"
      title="Custom Visualization Development"
      description="Create stunning, interactive visualizations and dashboards tailored to your data. Transform complex datasets into compelling visual stories."
      sections={[
        {
          icon: Map,
          title: "Creation of Tools to Dynamically Visualize Data",
          body: "Build interactive visualization tools that bring Earth observation data to life. Dynamic dashboards, map interfaces, and data exploration tools tailored to your needs.",
        },
        {
          icon: Puzzle,
          title: "Creation of Custom Components to Support Downstream Applications",
          body: "Develop reusable visualization components that integrate seamlessly into your applications. Custom charts, maps, and UI elements designed for your specific workflows.",
        },
      ]}
    />
  );
}
