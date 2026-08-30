import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ProductsSection } from "@/components/sections/ProductsSection";

export const metadata: Metadata = {
  title: "Framtidsdokument – skapa alla viktiga dokument online",
  description:
    "Framtidsfullmakt, testamente, samboavtal och fler dokument som skapar trygghet när livet förändras. Guidning steg för steg, fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/framtidsdokument" },
};

const documents = [
  {
    title: "Framtidsfullmakt",
    description:
      "Bestäm vem som ska ta hand om dina ekonomiska och personliga angelägenheter om du inte längre kan göra det själv. En av de viktigaste juridiska handlingarna du kan upprätta.",
    href: "/framtidsfullmakt",
    ctaHref: "https://app.fride.se/create/framtidsfullmakt",
    ctaLabel: "Skapa framtidsfullmakt",
    image: "/images/product-ff.webp",
    price: 499,
    available: true,
  },
  {
    title: "Gåvobrev",
    description:
      "Dokumentera en gåva juridiskt korrekt. Ange villkor för gåvan – till exempel att den ska vara mottagarens enskilda egendom eller räknas som förskott på arv.",
    href: "/gavobrev",
    ctaHref: "https://app.fride.se/create/gavobrev",
    ctaLabel: "Skapa gåvobrev",
    image: "/images/product-gavobrev.webp",
    price: 499,
    available: true,
  },
  {
    title: "Skuldebrev",
    description:
      "Dokumentera ett lån mellan privatpersoner med tydliga villkor för återbetalning och ränta. Minskar risken för missförstånd och skapar trygghet för båda parter.",
    href: "/skuldebrev",
    ctaHref: "https://app.fride.se/create/skuldbrev",
    ctaLabel: "Skapa skuldebrev",
    image: "/images/product-skuldebrev.jpg",
    price: 499,
    available: true,
  },
  {
    title: "Samboavtal",
    description:
      "Reglera vad som gäller er egendom om ni separerar eller om en av er går bort. Särskilt viktigt om ni äger bostad eller har olika ekonomiska förutsättningar.",
    href: "/samboavtal",
    ctaHref: "https://app.fride.se/create/samboavtal",
    ctaLabel: "Skapa samboavtal",
    image: "/images/product-samboavtal.webp",
    price: 499,
    available: true,
  },
  {
    title: "Testamente",
    description:
      "Bestäm vem som ska ärva dig och hur dina tillgångar ska fördelas. Utan testamente styr lagen – med testamente styr du själv.",
    href: "/testamente",
    ctaHref: "https://app.fride.se/create/testamente",
    ctaLabel: "Skapa testamente",
    image: "/images/product-testamente.webp",
    price: 499,
    available: true,
  },
  {
    title: "Äktenskapsförord",
    description:
      "Bestäm vad som ska vara enskild egendom i ert äktenskap. Skyddar tillgångar vid separation och tydliggör vad som gäller för er.",
    href: "/aktenskapsforord",
    ctaHref: "https://app.fride.se/create/aktenskapsforord",
    ctaLabel: "Skapa äktenskapsförord",
    image: "/images/product-extra.webp",
    price: 499,
    available: true,
  },
];

const steps = [
  {
    number: "1",
    title: "Svara på några frågor",
    description: "Du guidas steg för steg genom den information vi behöver för att skapa ditt dokument.",
  },
  {
    number: "2",
    title: "Dokumentet skapas",
    description: "Ett skräddarsytt och juridiskt korrekt dokument skapas automatiskt baserat på dina svar.",
  },
  {
    number: "3",
    title: "Betala och ta emot",
    description: "Betala tryggt via Stripe och ladda ner ditt färdiga dokument direkt.",
  },
];

export default function FramtidsdokumentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#20293d] mb-5 leading-tight">
              Framtidsdokument som skapar trygghet för dig och dina nära
            </h1>
            <p className="text-base md:text-lg text-[#d27957] leading-relaxed">
              Fride hjälper dig att skapa juridiskt korrekta dokument som klargör vad som gäller när livet förändras – med stegvis vägledning och fast pris.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#20293d]">
              {["Fast pris", "Juridiskt korrekt", "Guidning steg för steg"].map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d27957]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/Framtidsdokument-Fride.webp"
                alt="Framtidsdokument – Fride"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#20293d] mb-5">Vad är framtidsdokument?</h2>
          <p className="text-[#515b73] leading-relaxed mb-4">
            Framtidsdokument är juridiska handlingar som hjälper dig att klargöra vad som gäller – för dig själv och för dina närstående – när livet förändras. Det kan handla om vem som fattar beslut om du blir sjuk, hur en gåva ska hanteras, eller hur ett lån ska återbetalas.
          </p>
          <p className="text-[#515b73] leading-relaxed">
            Att ha rätt dokument på plats minskar risken för missförstånd och tvister, och ger trygghet för alla inblandade. Med Fride skapar du juridiskt korrekta dokument enkelt och snabbt – utan juridisk förkunskap.
          </p>
        </div>
      </section>

      {/* Documents grid */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-[#20293d] mb-6 fade-in">Våra dokument</h2>
          <div className="mb-10 bg-[#20293d] text-[#fff1e6] rounded-2xl px-6 py-4 flex items-center gap-4">
            <span className="text-2xl font-serif font-bold text-[#d27957] shrink-0">50%</span>
            <p className="text-sm leading-snug">
              <strong>Rabatt på alla efterföljande dokument</strong> — köper du fler än ett dokument hos oss får du 50% rabatt på alla efterföljande.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className={`flex flex-col rounded-2xl overflow-hidden border ${doc.available ? "border-[#d9c1b1] bg-white" : "border-[#d9c1b1] bg-white opacity-70"}`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover"
                  />
                  {!doc.available && (
                    <div className="absolute inset-0 bg-[#20293d]/40 flex items-center justify-center">
                      <span className="bg-white text-[#20293d] text-xs font-semibold px-3 py-1 rounded-full">
                        Kommer snart
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#20293d] mb-3">{doc.title}</h3>
                  <p className="text-sm text-[#515b73] leading-relaxed flex-1 mb-5">{doc.description}</p>
                  {doc.available && doc.price && (
                    <p className="text-sm text-[#20293d] mb-4">
                      Fast pris <strong>{doc.price} kr</strong> inkl. moms
                    </p>
                  )}
                  {doc.available && doc.ctaHref && doc.ctaLabel ? (
                    <div className="flex flex-col gap-2">
                      <Link
                        href={doc.ctaHref}
                        className="inline-block bg-[#d27957] text-white font-medium px-5 py-3 rounded-full text-sm text-center hover:bg-[#c06a44] transition-colors"
                      >
                        {doc.ctaLabel}
                      </Link>
                      {doc.href && (
                        <Link
                          href={doc.href}
                          className="text-sm text-center text-[#20293d] hover:text-[#d27957] transition-colors py-1"
                        >
                          Läs mer
                        </Link>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-serif text-3xl font-semibold text-[#20293d] mb-10 fade-in">Så funkar det</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="fade-in">
              <div className="w-10 h-10 rounded-full bg-[#20293d] text-[#fff1e6] flex items-center justify-center font-semibold text-sm mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#20293d] mb-2">{step.title}</h3>
              <p className="text-sm text-[#515b73] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductsSection />

      <CTASection ctaHref="https://app.fride.se" ctaLabel="Skapa ditt dokument" />
    </>
  );
}
