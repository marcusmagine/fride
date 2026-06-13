import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/structure/"],
    },
    sitemap: "https://www.fride.se/sitemap.xml",
  };
}
