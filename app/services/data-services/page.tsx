import type { Metadata } from "next";
import { Cloud, Download, Plug } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Data Services" };

export default function DataServicesPage() {
  return (
    <ServiceDetailPage
      slug="data-services"
      title="Data Services"
      description="Access and integrate Earth observation data through our comprehensive data services and APIs. Discover, query, and retrieve geospatial datasets for your research and applications."
      sections={[
        {
          icon: Cloud,
          title: "Migration to Cloud-Optimized Formats",
          body: "Convert traditional geospatial data to cloud-optimized formats like COG and Zarr for faster, more efficient access and visualization at scale.",
        },
        {
          icon: Download,
          title: "Data Ingestion and Hosting",
          body: "Securely ingest and host geospatial datasets with automated quality checks, metadata extraction, and reliable cloud infrastructure ensuring high availability.",
        },
        {
          icon: Plug,
          title: "Data APIs for Visualization & Statistics",
          body: "Access data through STAC endpoints, raster tile services, and statistical analysis APIs. Developer-friendly tools for seamless integration into your applications.",
        },
      ]}
    />
  );
}
