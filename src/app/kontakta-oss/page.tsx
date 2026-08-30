import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description: "Har du frågor om våra dokument eller tjänster? Hör av dig till Fride.",
  alternates: { canonical: "https://www.fride.se/kontakta-oss" },
};

export default function KontaktaOssPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <div className="fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#20293d] mb-5">Kontakta oss</h1>
        <p className="text-lg text-[#515b73] leading-relaxed mb-10">
          Har du frågor om våra dokument, en pågående tjänst eller något annat? Vi hjälper gärna till.
        </p>
        <a
          href="mailto:hej@fride.se"
          className="inline-block bg-[#20293d] text-[#fff1e6] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#d27957] transition-colors duration-300"
        >
          Skicka e-post till hej@fride.se
        </a>
      </div>

      <div className="mt-12 relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <Image
          src="/images/team-fride.jpeg"
          alt="Fride-teamet"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
