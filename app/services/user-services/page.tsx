import type { Metadata } from "next";
import { NotebookText, MessagesSquare, LifeBuoy } from "lucide-react";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";

export const metadata: Metadata = { title: "User Services" };

export default function UserServicesPage() {
  return (
    <ServiceDetailPage
      slug="user-services"
      title="User Services"
      description="Dedicated user support and assistance services. Get the help you need to make the most of VEDA's tools, data, and capabilities with expert guidance."
      sections={[
        {
          icon: NotebookText,
          title: "Jupyter Notebooks Showcasing Data Interactions for Trainings",
          body: "Interactive Jupyter notebooks demonstrating data access, analysis, and visualization techniques. Hands-on training materials that help users learn by example and accelerate their projects.",
        },
        {
          icon: MessagesSquare,
          title: "User Community Forums (GitHub/Discourse)",
          body: "Connect with the VEDA community through GitHub discussions and Discourse forums. Share knowledge, ask questions, and collaborate with other users and VEDA team members.",
        },
        {
          icon: LifeBuoy,
          title: "Help Desk Support",
          body: "Direct support from VEDA experts for technical issues and questions. Timely assistance to help you overcome challenges and maximize your use of VEDA services.",
        },
      ]}
    />
  );
}
