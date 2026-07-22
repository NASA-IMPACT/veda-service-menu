import type { Metadata } from "next";
import { Paintbrush, FileText } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Website Management" };

export default function WebsiteManagementPage() {
  return (
    <ServiceDetailPage
      slug="website-management"
      title="Website Management"
      description="Professional web development and management services. Build, maintain, and optimize engaging web platforms for your scientific communication and outreach needs."
      sections={[
        {
          icon: Paintbrush,
          title: "Custom Website Design",
          body: "Design and develop custom websites tailored to your organization's brand and goals. Modern, responsive designs that effectively communicate your mission and engage your audience.",
        },
        {
          icon: FileText,
          title: "Content Management System (CMS) Integration",
          body: "Implement and configure CMS platforms that empower your team to manage content independently. Easy-to-use systems for updating pages, publishing stories, and maintaining your web presence.",
        },
      ]}
    />
  );
}
