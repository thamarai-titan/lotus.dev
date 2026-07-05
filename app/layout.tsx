import React from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn("dark font-sans", geist.variable)}>
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
