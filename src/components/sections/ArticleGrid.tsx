"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface Article {
  title: string;
  category: string;       // legacy single category
  categories?: string[];  // new multi-category
  ingress: string;
  href: string;
  image: string;
}

const CATEGORY_ALL = "Alla";

function getCategories(a: Article): string[] {
  if (a.categories && a.categories.length > 0) return a.categories;
  if (a.category) return [a.category];
  return [];
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  const categories = [
    CATEGORY_ALL,
    ...Array.from(new Set(articles.flatMap(getCategories))).sort(),
  ];
  const [active, setActive] = useState(CATEGORY_ALL);

  const filtered =
    active === CATEGORY_ALL
      ? articles
      : articles.filter((a) => getCategories(a).includes(active));

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              active === cat
                ? "bg-[#354042] text-[#fff1e6]"
                : "bg-[#fff1e6] text-[#354042] hover:bg-[#d9c1b1]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group flex flex-col rounded-2xl overflow-hidden border border-[#d9c1b1] hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs font-medium text-[#d27957] uppercase tracking-wide mb-2">
                {getCategories(article).join(", ")}
              </span>
              <h3 className="font-serif font-semibold text-[#354042] leading-snug mb-3 flex-1">
                {article.title}
              </h3>
              <p className="text-sm text-[#4a5e5f] leading-relaxed mb-4 line-clamp-2">
                {article.ingress}
              </p>
              <span className="text-sm font-medium text-[#354042] flex items-center gap-1 group-hover:text-[#d27957] transition-colors">
                Läs mer
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
