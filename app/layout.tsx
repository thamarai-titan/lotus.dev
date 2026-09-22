import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilotus.dev"),
  title: {
    default: "Thamarai Manalan | Software Engineer",
    template: "%s | Thamarai Manalan",
  },
  description:
    "Portfolio and engineering blogs of Thamarai Manalan, a Software Engineer crafting performant web applications and sharing insights on technology.",
  keywords: [
    "Thamarai Manalan",
    "Thamarai",
    "Manalan",
    "ilotus.dev",
    "lotus.dev",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Engineering Portfolio",
    "Tech Blogs",
    "thamarai",
    "portfolio",
    "Portfolio",
    "best portfolio",
  ],
  authors: [{ name: "Thamarai Manalan", url: "https://www.ilotus.dev" }],
  creator: "Thamarai Manalan",
  publisher: "Thamarai Manalan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ilotus.dev",
    siteName: "Thamarai Manalan - lotus.dev",
    title: "Thamarai Manalan | Software Engineer",
    description:
      "Portfolio and engineering blogs of Thamarai Manalan, a Software Engineer crafting performant web applications.",
    images: [
      {
        url: "/image.png",
        width: 800,
        height: 800,
        alt: "Thamarai Manalan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thamarai Manalan | Software Engineer",
    description:
      "Portfolio and engineering blogs of Thamarai Manalan, a Software Engineer crafting performant web applications.",
    creator: "@Thamarai_Titan",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn("dark font-sans", geist.variable)} lang="en">
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
