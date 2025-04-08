import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sonancemedia.in",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.sonancemedia.in/privacy-policy",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.sonancemedia.in/terms-of-service",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.sonancemedia.in/cookie-policy",
      lastModified: new Date().toISOString(),
    },
  ];
}
