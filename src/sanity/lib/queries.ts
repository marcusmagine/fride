import { groq } from "next-sanity";

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    rawHtml,
    body,
    category,
    coverImageUrl,
    "coverImageAssetUrl": coverImage.asset->url,
    publishedAt,
    seoTitle,
    seoDescription,
  }
`;

export const allArticleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const allArticlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImageUrl,
    "coverImageAssetUrl": coverImage.asset->url,
    publishedAt,
  }
`;
