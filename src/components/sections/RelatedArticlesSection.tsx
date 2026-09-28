import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { ArticleTeaserGrid, type TeaserArticle } from "./ArticleTeaserGrid";

/**
 * De flesta artiklar ligger kvar på det gamla `category`-fältet (en sträng)
 * medan nyare använder listan `categories`. Frågan matchar båda, och `match`
 * fångar dessutom strängar som räknar upp flera ämnen, t.ex.
 * "Bouppteckning, Testamente".
 */
const relatedArticlesQuery = groq`
  *[_type == "article" && defined(slug.current) && (
    $category in categories ||
    category == $category ||
    category match $category
  )] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    category,
    categories,
    excerpt,
    coverImageUrl,
    "coverImageAssetUrl": coverImage.asset->url,
  }
`;

interface RelatedArticlesSectionProps {
  /** Kategorin i Sanity, t.ex. "Framtidsfullmakt". */
  category: string;
  headline: string;
}

export async function RelatedArticlesSection({
  category,
  headline,
}: RelatedArticlesSectionProps) {
  let articles: TeaserArticle[] = [];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      articles = await client.fetch(relatedArticlesQuery, { category });
    }
  } catch {
    return null;
  }

  // Finns inga artiklar i ämnet visas ingen tom sektion.
  if (!articles.length) return null;

  return (
    <ArticleTeaserGrid
      eyebrow="Kunskap"
      headline={headline}
      articles={articles}
      ctaHref="/kunskap"
      ctaLabel="Till kunskapsbanken"
    />
  );
}
