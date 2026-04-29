import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allArticleSlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = "https://www.fride.se";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
  { url: `${BASE_URL}/framtidsfullmakt`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/gavobrev`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/skuldebrev`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/samboavtal`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/testamente`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/aktenskapsforord`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/framtidsdokument`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/kunskap`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE_URL}/om-oss`, changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE_URL}/kontakta-oss`, changeFrequency: "yearly", priority: 0.5 },
  { url: `${BASE_URL}/intervju-joanna-robarth--grundare`, changeFrequency: "yearly", priority: 0.5 },
  { url: `${BASE_URL}/intervju-elza-kazemi-grundare-fride`, changeFrequency: "yearly", priority: 0.5 },
  { url: `${BASE_URL}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/integritetspolicy`, changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const slugs: { slug: string }[] = await client.fetch(allArticleSlugsQuery);
      blogRoutes = slugs.map(({ slug }) => ({
        url: `${BASE_URL}/blog/${slug}`,
        changeFrequency: "yearly",
        priority: 0.6,
      }));
    } catch {
      // Sanity not configured yet, skip blog routes
    }
  }

  return [...staticRoutes, ...blogRoutes];
}
