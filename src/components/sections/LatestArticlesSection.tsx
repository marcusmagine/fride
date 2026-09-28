import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { ArticleTeaserGrid, type TeaserArticle } from "./ArticleTeaserGrid";

const latestArticlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImageUrl,
    "coverImageAssetUrl": coverImage.asset->url,
  }
`;

export async function LatestArticlesSection() {
  let articles: TeaserArticle[] = [];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      articles = await client.fetch(latestArticlesQuery);
    }
  } catch {
    return null;
  }

  if (!articles.length) return null;

  return (
    <ArticleTeaserGrid
      eyebrow="Kunskap"
      headline="Senaste från kunskapsbanken"
      articles={articles}
      ctaHref="/kunskap"
      ctaLabel="Till kunskapsbanken"
    />
  );
}
