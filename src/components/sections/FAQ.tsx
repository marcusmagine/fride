"use client";

import { useState } from "react";
import { trackColors, type Track } from "@/lib/track";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  headline?: string;
  track?: Track;
}

export function FAQ({ items, headline = "Vanliga frågor", track = "blue" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  const c = trackColors[track];

  return (
    <section className="bg-[#fff1e6] mt-8">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className={`font-serif text-3xl font-semibold ${c.heading} mb-8 fade-in`}>{headline}</h2>
        <div className="divide-y divide-[#d9c1b1]">
          {items.map((item, i) => (
            <div key={i} className="fade-in">
              <button
                className="w-full flex justify-between items-start py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`font-serif ${c.heading} font-medium leading-snug`}>{item.question}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-[#d27957] transition-transform duration-300 mt-1 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}
              >
                <p className={`text-sm ${c.body} leading-relaxed`}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
