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
  title: "Thamarai | Full Stack Developer",
  description: "Building modern web apps with Next.js, AI, and scalable systems.",

  openGraph: {
    title: "Thamarai Portfolio",
    description: "Explore my projects, skills, and developer journey.",
    url: "https://ilotus.dev",
    siteName: "ilotus.dev",
    images: [
      {
        url: "https://ilotus.dev/image.png", // IMPORTANT
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thamarai Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["https://ilotus.dev/image.png"],
  },

  icons: {
    icon: "https://ilotus.dev/favicon.ico",
  },
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
