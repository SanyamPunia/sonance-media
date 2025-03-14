import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sonance Media",
  description:
    "Insights, strategies, and industry expertise to help your brand succeed in the digital landscape",
  keywords: [
    "digital marketing blog",
    "marketing insights",
    "SEO tips",
    "social media strategy",
    "content marketing",
    "brand storytelling",
    "marketing analytics",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
