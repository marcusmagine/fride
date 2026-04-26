import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kunskap",
  description:
    "Praktisk vägledning om framtidsfullmakter, gåvobrev, skuldebrev, testamente och dödsbohantering.",
  alternates: { canonical: "https://www.fride.se/kunskap" },
};

const categories = [
  {
    title: "Framtidsfullmakt",
    articles: [
      "Varför behöver du en framtidsfullmakt?",
      "Vanliga misstag när man skriver framtidsfullmakt",
      "Regler om jäv i framtidsfullmakter",
      "Framtidsfullmakt för ensamstående föräldrar",
    ],
  },
  {
    title: "Gåvor och arv",
    articles: [
      "Gåvobrev för fastigheter",
      "Skillnaden mellan gåva och förskott på arv",
      "Enskild egendom — vad betyder det?",
      "Arvsfördelning enligt svensk lag",
    ],
  },
  {
    title: "Skulder och lån",
    articles: [
      "Vad händer med ett lån om låntagaren dör?",
      "Skillnaden mellan enkelt och löpande skuldebrev",
      "Lån inom familjen — så gör du rätt",
    ],
  },
  {
    title: "Dödsbohantering",
    articles: [
      "Vad du gör direkt när en närstående går bort",
      "Bouppteckning — krav, kostnad och process",
      "Skillnaden mellan bouppteckning och dödsboanmälan",
      "Så hanterar du bostad, fordon och räkningar",
    ],
  },
  {
    title: "Samboende och äktenskap",
    articles: [
      "Skyddsluckor för sambor — det du inte visste",
      "När behöver sambor ett samboavtal?",
    ],
  },
];

export default function KunskapPage() {
  return (
    <>
      <section className="bg-[#fff1e6]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-3">
            Kunskap
          </h1>
          <p className="text-lg text-[#d27957]">
            Praktisk vägledning om juridiska dokument, arv och vad som händer när livet förändras.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {categories.map((cat, ci) => (
          <section key={cat.title} className="fade-in">
            <h2 className="font-serif text-xl font-semibold text-[#354042] mb-4 pb-2 border-b border-[#d9c1b1]">
              {cat.title}
            </h2>
            <ul className="space-y-3">
              {cat.articles.map((article) => (
                <li key={article} className="flex items-center gap-2 text-sm text-[#4a5e5f]">
                  <span className="w-1 h-1 rounded-full bg-[#d27957] flex-shrink-0" />
                  {article}
                  <span className="text-xs text-[#d9c1b1] italic">Kommer snart</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="max-w-4xl mx-auto px-6 pb-16 fade-in">
        <div className="bg-[#fff1e6] border border-[#d9c1b1] rounded-2xl p-8">
          <h2 className="font-serif text-xl font-semibold text-[#354042] mb-2">Redo att skapa ditt dokument?</h2>
          <p className="text-sm text-[#4a5e5f] mb-6">Vi guidar dig steg för steg till ett juridiskt korrekt dokument.</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
              { label: "Gåvobrev", href: "/gavobrev" },
              { label: "Skuldebrev", href: "/skuldebrev" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-[#20293d] text-[#fff1e6] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d27957] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
