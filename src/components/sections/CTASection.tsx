import Link from "next/link";

interface CTASectionProps {
  ctaHref?: string;
  ctaLabel?: string;
}

export function CTASection({
  ctaHref = "https://app.fride.se/framtidsfullmakt",
  ctaLabel = "Skapa ditt dokument",
}: CTASectionProps) {
  return (
    <section className="bg-[#20293d] py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#fff1e6] mb-4">
          Redo att ta hand om framtiden?
        </h2>
        <p className="text-[#d9c1b1] mb-8">Skapa trygghet för dig och dina anhöriga på några minuter.</p>
        <ul className="flex flex-col items-center gap-2 mb-10">
          {["Fast pris", "Juridiskt korrekt", "Guidning steg för steg"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-[#fff1e6] text-sm">
              <svg className="w-4 h-4 text-[#d27957]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
