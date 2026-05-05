import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bli framtidsklar – Sambor",
  description:
    "Sambor har inte samma automatiska rättigheter som gifta. Det fixar ni enkelt, i dag.",
  alternates: { canonical: "https://www.fride.se/framtidsklar/sambor" },
};

const documents = [
  {
    title: "Framtidsfullmakt",
    description:
      "Om din partner blir sjuk eller råkar ut för en olycka — kan du betala räkningar, prata med myndigheter och fatta viktiga beslut åt hen? Inte utan en framtidsfullmakt. Den ger dig rätten att hjälpa den du bryr dig om.",
    href: "/framtidsfullmakt",
    ctaHref: "https://app.fride.se/create/framtidsfullmakt",
  },
  {
    title: "Samboavtal",
    description:
      "Vem äger vad om ni separerar eller om en av er går bort? Utan samboavtal avgör lagen — och svaret kanske inte är det ni hade tänkt er. Ett samboavtal ger er båda klarhet och skydd.",
    href: "/samboavtal",
    ctaHref: "https://app.fride.se/create/samboavtal",
  },
  {
    title: "Testamente",
    description:
      "Sambor ärver inte varandra automatiskt. Utan testamente kan din partner tvingas flytta från ert gemensamma hem. Med ett testamente bestämmer ni själva.",
    href: "/testamente",
    ctaHref: "https://app.fride.se/create/testamente",
  },
  {
    title: "Skuldebrev",
    description:
      "Har ni lånat varandra pengar — till kontantinsats, renovering eller något annat? Ett skuldebrev gör lånet tydligt och förhindrar missförstånd, oavsett vad som händer i relationen.",
    href: "/skuldebrev",
    ctaHref: "https://app.fride.se/create/skuldebrev",
  },
];

const steps = [
  {
    number: 1,
    title: "Svara på några frågor",
    description: "Vi guidar dig steg för steg och anpassar dokumentet efter din situation.",
  },
  {
    number: 2,
    title: "Dokumentet skapas",
    description: "Juridiskt korrekt och anpassat efter just dig.",
  },
  {
    number: 3,
    title: "Betala och ta emot",
    description: "Ditt dokument skickas direkt till din e-post.",
  },
];

export default function SamborPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-4">Bli framtidsklar</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
              Ni lever som ett par. Men lagen ser er inte alltid som ett.
            </h1>
            <p className="text-base md:text-lg text-[#4a5e5f] leading-relaxed mb-8">
              Sambor har inte samma automatiska rättigheter som gifta. Det betyder att den du älskar
              kanske inte kan ta hand om det praktiska — eller få behålla hemmet — om något händer.
              Det fixar ni enkelt, i dag.
            </p>
            <Link
              href="#dokument"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Bli framtidsklar
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/sambor-1.webp"
                alt="Sambo par"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Det här gäller dig */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in order-2 md:order-1 relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/sambor-2.webp"
              alt="Sambor som planerar"
              fill
              className="object-cover"
            />
          </div>
          <div className="fade-in fade-in-delay-1 order-1 md:order-2">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">Det här gäller dig</p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Sambor ärver inte varandra. Det vet de flesta inte.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed">
              Många sambor tror att de har samma skydd som gifta par. Det stämmer inte. Utan
              testamente går arvet till den avlidnes släkt — inte till dig. Utan samboavtal kan en
              separation bli onödigt rörig. Och utan framtidsfullmakt kan du inte automatiskt hjälpa
              din partner om hen blir sjuk. Det är tre problem med tre enkla lösningar.
            </p>
          </div>
        </div>
      </section>

      {/* Dina dokument */}
      <section id="dokument" className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-10 fade-in">
            Det här behöver ni ha på plats
          </h2>
          <div className="flex flex-col gap-6">
            {documents.map((doc, i) => (
              <div
                key={doc.title}
                className={`fade-in fade-in-delay-${i + 1} bg-white border border-[#d9c1b1] rounded-2xl p-6 md:p-8`}
              >
                <h3 className="font-serif text-xl font-semibold text-[#354042] mb-3">{doc.title}</h3>
                <p className="text-[#4a5e5f] leading-relaxed mb-4">{doc.description}</p>
                <p className="text-sm text-[#4a5e5f] mb-5">
                  Fast pris <strong>499 kr</strong> inkl. moms
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={doc.href}
                    className="border border-[#354042] text-[#354042] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#354042] hover:text-[#fff1e6] transition-colors"
                  >
                    Läs mer om {doc.title.toLowerCase()}
                  </Link>
                  <Link
                    href={doc.ctaHref}
                    className="bg-[#d27957] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#c06a44] transition-colors"
                  >
                    Skapa nu →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Rabattbanner */}
          <div className="mt-8 bg-[#20293d] text-[#fff1e6] rounded-2xl px-6 py-4 flex items-center gap-4">
            <span className="text-2xl font-serif font-bold text-[#d27957] shrink-0">50%</span>
            <p className="text-sm leading-snug">
              <strong>Rabatt på alla efterföljande dokument</strong> — köper du fler än ett dokument hos oss får du 50% rabatt på alla efterföljande.
            </p>
          </div>
        </div>
      </section>

      {/* Så funkar det */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-10 fade-in">
          Tre steg till trygghet
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className={`fade-in fade-in-delay-${i + 1}`}>
              <div className="w-10 h-10 rounded-full bg-[#354042] text-[#fff1e6] flex items-center justify-center font-semibold text-sm mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#354042] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4a5e5f] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avslutande CTA */}
      <section className="bg-[#fff1e6] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] leading-tight mb-4">
              Ni har valt varandra. Se till att juridiken håller med.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Det tar några minuter. Det ger trygghet för resten av livet.
            </p>
            <Link
              href="https://app.fride.se"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Kom igång nu
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/sambor-3.webp"
              alt="Sambor som är framtidsklar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
