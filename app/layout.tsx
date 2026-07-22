import type { Metadata, Viewport } from "next";
import { Inter, Public_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veda-service-menu.netlify.app"),
  title: {
    default: "VEDA Service Menu",
    template: "%s · VEDA Service Menu",
  },
  description:
    "Explore the full suite of NASA VEDA (Visualization, Exploration, and Data Analysis) services and the open-science user personas they support.",
  applicationName: "VEDA Service Menu",
  openGraph: {
    title: "VEDA Service Menu",
    description:
      "Explore NASA VEDA open-science services and the user personas they support.",
    type: "website",
  },
  icons: {
    icon: "/veda-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0066b3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${publicSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
