import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { articleBySlugQuery, allArticleSlugsQuery } from "@/sanity/lib/queries";

interface Article {
  title: string;
  slug: { current: string };
  excerpt: string;
  rawHtml: string;
  category: string;
  coverImageUrl: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  try {
    const slugs = await client.fetch(allArticleSlugsQuery);
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return {};
  const article: Article | null = await client.fetch(articleBySlugQuery, { slug });
  if (!article) return {};
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    alternates: { canonical: `https://www.fride.se/blog/${slug}` },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: article.coverImageUrl ? [article.coverImageUrl] : [],
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) notFound();
  const article: Article | null = await client.fetch(articleBySlugQuery, { slug });

  if (!article) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.fride.se" },
      { "@type": "ListItem", position: 2, name: "Kunskap", item: "https://www.fride.se/kunskap" },
      { "@type": "ListItem", position: 3, name: article.seoTitle || article.title, item: `https://www.fride.se/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#fff1e6]">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          {article.category && (
            <Link
              href="/kunskap"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#d27957] uppercase tracking-wide mb-4 hover:underline"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {article.category}
            </Link>
          )}
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] leading-tight mb-4">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg text-[#4a5e5f] leading-relaxed mb-4">{article.excerpt}</p>
          )}
          {article.publishedAt && (
            <p className="text-sm text-[#4a5e5f]">{formatDate(article.publishedAt)}</p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {article.coverImageUrl && (
        <div className="max-w-3xl mx-auto px-6 mb-10">
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden">
            <Image
              src={article.coverImageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#354042] prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#4a5e5f] prose-p:leading-relaxed
            prose-li:text-[#4a5e5f]
            prose-strong:text-[#354042]
            prose-a:text-[#d27957] prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ol:list-decimal"
          dangerouslySetInnerHTML={{ __html: article.rawHtml }}
        />
      </article>

      {/* Bottom CTA */}
      <section className="bg-[#fff1e6] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-[#354042] mb-1">
              Redo att skapa ditt dokument?
            </h2>
            <p className="text-sm text-[#4a5e5f]">Vi guidar dig steg för steg – juridiskt korrekt och enkelt.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
              { label: "Gåvobrev", href: "/gavobrev" },
              { label: "Skuldebrev", href: "/skuldebrev" },
              { label: "Testamente", href: "/testamente" },
              { label: "Samboavtal", href: "/samboavtal" },
              { label: "Äktenskapsförord", href: "/aktenskapsforord" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-[#20293d] text-[#fff1e6] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
