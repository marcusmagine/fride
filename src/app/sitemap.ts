import { MetadataRoute } from "next";

const BASE_URL = "https://www.fride.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/framtidsfullmakt`, priority: 0.9 },
    { url: `${BASE_URL}/gavobrev`, priority: 0.9 },
    { url: `${BASE_URL}/skuldebrev`, priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, priority: 0.6 },
    { url: `${BASE_URL}/kunskap`, priority: 0.7 },
    { url: `${BASE_URL}/kontakt`, priority: 0.5 },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
