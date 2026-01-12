import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEDA Service Menu",
  description: "A comprehensive guide to VEDA services and user personas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
