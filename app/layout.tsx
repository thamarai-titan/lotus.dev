import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "ilotus.dev a Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${geist.variable} ${mono.variable}`}
    suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
          </Providers>     
      </body>
    </html>
  );
}
