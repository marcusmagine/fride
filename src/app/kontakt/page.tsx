import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description: "Har du frågor? Hör av dig till oss på Fride.",
  alternates: { canonical: "https://www.fride.se/kontakt" },
};

export default function KontaktPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">Kontakta oss</h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        Har du frågor om våra dokument eller tjänster? Vi hjälper gärna till.
      </p>
      <a
        href="mailto:hej@fride.se"
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        Skicka e-post
      </a>
    </div>
  );
}
