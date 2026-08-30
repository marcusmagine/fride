import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

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

interface SanityArticle {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverImageUrl?: string;
  coverImageAssetUrl?: string;
}

export async function LatestArticlesSection() {
  let articles: SanityArticle[] = [];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      articles = await client.fetch(latestArticlesQuery);
    }
  } catch {
    return null;
  }

  if (!articles.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 fade-in">
        <div>
          <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-2">
            Kunskap
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#20293d]">
            Senaste från kunskapsbanken
          </h2>
        </div>
        <Link
          href="/kunskap"
          className="shrink-0 inline-block border border-[#20293d] text-[#20293d] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#20293d] hover:text-[#fff1e6] transition-colors"
        >
          Till kunskapsbanken
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className={`fade-in fade-in-delay-${i + 1} group flex flex-col rounded-2xl overflow-hidden border border-[#d9c1b1] hover:shadow-md transition-shadow duration-300`}
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#fff1e6]">
              {(article.coverImageAssetUrl || article.coverImageUrl) && (
                <Image
                  src={article.coverImageAssetUrl || article.coverImageUrl!}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="flex flex-col flex-1 p-6">
              {article.category && (
                <span className="text-xs font-medium text-[#d27957] uppercase tracking-wide mb-2">
                  {article.category}
                </span>
              )}
              <h3 className="font-serif font-semibold text-[#20293d] leading-snug mb-3 flex-1">
                {article.title}
              </h3>
              {article.excerpt && (
                <p className="text-sm text-[#515b73] leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
              )}
              <span className="text-sm font-medium text-[#20293d] flex items-center gap-1 group-hover:text-[#d27957] transition-colors">
                Läs mer
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
