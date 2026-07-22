import type { Metadata } from "next";
import { Microscope, FileText, ClipboardList } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Content Curation" };

export default function ContentCurationPage() {
  return (
    <ServiceDetailPage
      slug="content-curation"
      title="Content Curation"
      description="Expert content curation and management solutions. Organize, curate, and present your scientific data and information in compelling and accessible ways."
      sections={[
        {
          icon: Microscope,
          title: "Scientific Research and Documentation for Datasets of Interest",
          body: "Conduct research and create comprehensive documentation for Earth observation datasets. Clear, accurate descriptions that help users understand data provenance, quality, and applications.",
        },
        {
          icon: FileText,
          title: "Webpage Templates for Document Dissemination",
          body: "Design and deploy standardized webpage templates for consistent document publishing. Streamlined formats that make scientific information accessible and easy to navigate.",
        },
        {
          icon: ClipboardList,
          title: "Documentation of Websites Managed",
          body: "Maintain comprehensive documentation for all managed websites and web platforms. Technical guides, content workflows, and maintenance procedures for seamless operations.",
        },
      ]}
    />
  );
}
