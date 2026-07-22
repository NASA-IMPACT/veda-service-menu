import type { Metadata } from "next";
import { KeyRound, ShieldCheck } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "Access Management" };

export default function AccessManagementPage() {
  return (
    <ServiceDetailPage
      slug="access-management"
      title="Access Management"
      description="Secure access control and authentication services. Manage user permissions, credentials, and access rights with enterprise-grade security solutions."
      sections={[
        {
          icon: KeyRound,
          title: "Single Sign-On (SSO) with Keycloak",
          body: "Secure access to collaborative environments through Keycloak SSO with individual protected workspaces. Centralized authentication that simplifies user management while maintaining strong security controls.",
        },
        {
          icon: ShieldCheck,
          title: "Recommendations for GitHub Repository Management and Security",
          body: "Best practices and guidance for securing GitHub repositories and managing access permissions. Security standards, branch protection, and access controls to safeguard your code and data.",
        },
      ]}
    />
  );
}
