import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Digital vägledning",
    description: "du får stöd genom hela processen så att du utformar den på rätt sätt.",
  },
  {
    title: "Juridiskt korrekt dokument",
    description: "vår framtidsfullmakt är både juridiskt korrekt och går att använda i praktiken.",
  },
  {
    title: "Trygg betalning via Stripe",
    description: "välj mellan kort, Klarna, Apple Pay eller Google Pay.",
  },
  {
    title: "Direkt leverans",
    description: "du får din framtidsfullmakt som nedladdningsbar PDF och kan skriva ut den i flera exemplar.",
  },
];

interface WhyFrideSectionProps {
  ctaHref?: string;
}

export function WhyFrideSection({ ctaHref = "https://app.fride.se/create/framtidsfullmakt" }: WhyFrideSectionProps) {
  return (
    <section className="bg-[#fff1e6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-3">
            Varför välja Frides framtidsfullmakt?
          </h2>
          <p className="text-[#4a5e5f]">När du skapar din framtidsfullmakt hos Fride får du:</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl p-8 border border-[#d9c1b1]`}
            >
              <h3 className="font-serif font-semibold text-[#354042] text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[#4a5e5f] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in text-center">
          <p className="text-[#354042] mb-6">
            En trygg framtid för ett fast pris. Skapa din framtidsfullmakt digitalt för endast{" "}
            <strong>499 kr inkl. moms</strong>. Ingen prenumeration. Inga dolda avgifter.
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
          >
            Skapa din framtidsfullmakt
          </Link>
        </div>
      </div>
    </section>
  );
}
