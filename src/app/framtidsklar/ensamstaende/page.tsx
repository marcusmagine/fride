import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bli framtidsklar – Ensamstående med barn",
  description:
    "Som ensamstående förälder är du den viktigaste personen i ditt barns liv. Med rätt dokument på plats vet du att dina barn är skyddade, oavsett vad.",
  alternates: { canonical: "https://www.fride.se/framtidsklar/ensamstaende" },
};

const documents = [
  {
    title: "Framtidsfullmakt",
    description:
      "Om du drabbas av sjukdom eller olycka — vem betalar dina räkningar, pratar med skolan och tar hand om det praktiska? Med en framtidsfullmakt väljer du själv vem du litar på.",
    href: "/framtidsfullmakt",
    ctaHref: "https://app.fride.se/create/framtidsfullmakt",
  },
  {
    title: "Testamente",
    description:
      "Utan testamente bestämmer lagen hur ditt arv fördelas. Som ensamstående förälder vill du säkerställa att dina barn får precis det du vill ge dem — och att rätt person förvaltar det.",
    href: "/testamente",
    ctaHref: "https://app.fride.se/create/testamente",
  },
  {
    title: "Gåvobrev",
    description:
      "Om du vill ge dina barn något redan nu — pengar, bostad eller andra tillgångar — behöver du ett gåvobrev för att gåvan ska vara juridiskt tydlig och skyddad.",
    href: "/gavobrev",
    ctaHref: "https://app.fride.se/create/gavobrev",
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

export default function EnsamstaendePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
          <Link href="/framtidsklar" className="inline-flex items-center gap-1.5 text-sm text-[#4a5e5f] hover:text-[#354042] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Tillbaka till Framtidsklar
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-4">Framtidsklar – Ensamstående förälder</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
              Du står ensam med ansvaret. Bli inte ensam med oron också.
            </h1>
            <p className="text-base md:text-lg text-[#4a5e5f] leading-relaxed mb-8">
              Som ensamstående förälder är du den viktigaste personen i ditt barns liv. Men vad
              händer om du plötsligt inte kan fatta beslut — eller inte längre finns där? Med rätt
              dokument på plats vet du att dina barn är skyddade, oavsett vad.
            </p>
            <Link
              href="#dokument"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2C3447] transition-colors duration-300"
            >
              Bli framtidsklar
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/ensamstaende-1.webp"
                alt="Ensamstående förälder med barn"
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
              src="/images/ensamstaende-2.webp"
              alt="Ensamstående förälder"
              fill
              className="object-cover"
            />
          </div>
          <div className="fade-in fade-in-delay-1 order-1 md:order-2">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">Det här gäller dig</p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Ingen delar ansvaret med dig. Det gör juridiken ännu viktigare.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed">
              Som ensamstående är du ensam om de stora besluten — varje dag. Det betyder också att
              det inte finns någon som automatiskt tar över om något händer dig. Utan rätt dokument
              kan myndigheter och domstolar behöva gå in och fatta beslut om dina barn och din
              ekonomi. Det kan du förhindra — i dag.
            </p>
          </div>
        </div>
      </section>

      {/* Dina dokument */}
      <section id="dokument" className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-10 fade-in">
            Det här behöver du ha på plats
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

          {/* Paketpris */}
          <div className="mt-8 bg-[#20293d] text-[#fff1e6] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="shrink-0">
              <p className="text-xs uppercase tracking-widest text-[#d27957] font-medium mb-1">Hela paketet</p>
              <p className="font-serif text-3xl font-bold text-[#fff1e6]">998 kr</p>
              <p className="text-xs text-[#fff1e6]/60 mt-0.5">inkl. moms</p>
            </div>
            <div className="w-px h-12 bg-[#fff1e6]/15 hidden sm:block shrink-0" />
            <div className="text-sm text-[#fff1e6]/80 leading-relaxed">
              <p>Första dokumentet kostar <strong className="text-[#fff1e6]">499 kr</strong>. De två efterföljande kostar <strong className="text-[#fff1e6]">249,50 kr/st</strong> (50% rabatt).</p>
              <p className="mt-1 text-[#fff1e6]/50">Du sparar 499 kr jämfört med att köpa dem separat.</p>
            </div>
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
              Dina barn förtjänar att du är framtidsklar.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Det tar några minuter. Det ger trygghet för resten av livet.
            </p>
            <Link
              href="https://app.fride.se"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2C3447] transition-colors duration-300"
            >
              Skapa mina dokument
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/ensamstaende-3.webp"
              alt="Trygghet för dina barn"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
