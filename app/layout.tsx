import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonance Media | Digital Marketing Agency",
  description:
    "Sonance Media is a full-service digital marketing agency specializing in brand strategy, web development, paid media, and creative services. Since 2020, we've helped over 100 brands achieve their marketing goals with data-driven strategies and innovative solutions.",
  keywords: [
    "digital marketing agency",
    "brand strategy",
    "web development",
    "paid media",
    "advertising",
    "OTT advertising",
    "DOOH marketing",
    "social media marketing",
    "content creation",
    "SEO services",
    "PPC management",
    "Chandigarh marketing agency",
    "Mumbai marketing agency",
  ],
  authors: [{ name: "Sonance Media" }],
  creator: "Sonance Media",
  publisher: "Sonance Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonancemedia.in",
    title: "Sonance Media | Digital Marketing Agency",
    description:
      "Full-service digital marketing agency helping brands connect with their audience through strategic digital solutions.",
    siteName: "Sonance Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonance Media | Digital Marketing Agency",
    description:
      "Full-service digital marketing agency helping brands connect with their audience through strategic digital solutions.",
    creator: "@sonancemedia",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
