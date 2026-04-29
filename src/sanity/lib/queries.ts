import { groq } from "next-sanity";

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    rawHtml,
    category,
    coverImageUrl,
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
