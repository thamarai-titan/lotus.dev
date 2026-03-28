import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter, JetBrains_Mono } from "next/font/google";

// Configure the Sans font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable name
  display: "swap",
});

// Configure the Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // CSS variable name
  display: "swap",
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
    className={`${inter.variable} ${jetbrainsMono.variable}`}
    suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
          </Providers>     
      </body>
    </html>
  );
}
