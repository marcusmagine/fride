import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Samarbeten",
  description:
    "Fride digitaliserar bouppteckningen i Sverige – i samverkan med banker, försäkringsbolag, myndigheter och andra aktörer i processen.",
  alternates: { canonical: "https://www.fride.se/samarbeten" },
};

const pillars = [
  {
    title: "Digital identifiering",
    description:
      "Säker verifiering via BankID – ingen papperspost, inga onödiga väntetider.",
  },
  {
    title: "Samordnad informationsinhämtning",
    description:
      "Ett nav som hämtar och samlar information från berörda aktörer, istället för att lägga det arbetet på den enskilde.",
  },
  {
    title: "Strukturerat underlag",
    description:
      "Korrekt och komplett dokumentation – redo för inlämning till Skatteverket.",
  },
];

export default function SamarbetenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-4">
              Samarbeten
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
              Vi digitaliserar bouppteckningen i Sverige
            </h1>
            <p className="text-base md:text-lg text-[#4a5e5f] leading-relaxed mb-8">
              Varje år dör ungefär 90 000 människor i Sverige – och för varje dödsfall väntar en
              bouppteckning. En process som idag är manuell, fragmenterad och ofta överväldigande
              för den som redan bär på en sorg. Vi tror att det kan göras bättre. Det arbetar vi
              aktivt för att förändra.
            </p>
            <Link
              href="/kontakta-oss"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/samarbeten.webp"
                alt="Samarbeten – Fride digitaliserar bouppteckningen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 1 – Problemet */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
            Problemet
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
            Det manuella kostar mer än tid
          </h2>
          <p className="text-[#4a5e5f] leading-relaxed mb-4">
            En bouppteckning är inte ett dokument – det är en process som involverar många parter
            samtidigt. Banker, försäkringsbolag, myndigheter, fastighetsregister, fondbolag. Det är
            inte ovanligt att den efterlevande behöver ta kontakt med tio aktörer eller fler – var
            och en med sina egna blanketter, sina egna rutiner och sina egna handläggningstider.
          </p>
          <p className="text-[#4a5e5f] leading-relaxed font-medium">
            Det är för tungt. Och det är onödigt tungt.
          </p>
        </div>
      </section>

      {/* Sektion 2 – Vad vi bygger */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
              Vad vi bygger
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Från manuellt till modernt
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Fride bygger ett digitalt flöde som samordnar de steg som idag sker fragmenterat och
              analogt. Målet är enkelt: att rätt information ska nå rätt aktör vid rätt tidpunkt –
              utan att den som är i sorg ska behöva jaga den själv.
            </p>
            <p className="text-[#354042] font-medium">Det ska vara lätt att göra rätt.</p>
          </div>

          <p className="text-sm font-medium text-[#354042] uppercase tracking-widest mb-8 fade-in">
            Tre grundpelare i det vi bygger
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`fade-in fade-in-delay-${i + 1} bg-white border border-[#d9c1b1] rounded-2xl p-6 md:p-8`}
              >
                <div className="w-8 h-8 rounded-full bg-[#354042] text-[#fff1e6] flex items-center justify-center font-semibold text-sm mb-4 shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#354042] mb-2">{p.title}</h3>
                <p className="text-sm text-[#4a5e5f] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 3 – Legitimitet */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
              Ett arbete som görs tillsammans
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Legitimitet genom samverkan
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Digitaliseringen av bouppteckning i Sverige är ett arbete som kräver många parter.
              Fride deltar i den kartläggning som pågår för att ta reda på hur en sådan förändring
              ska se ut i praktiken – tillsammans med Skatteverket, Lantmäteriet, Transportstyrelsen
              och andra aktörer som är en del av processen idag.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed">
              Vi är ett entreprenörsbolag med en tydlig övertygelse: att det som idag är tungt,
              analogt och svårt att navigera kan bli enkelt, digitalt och mänskligt – utan att tappa
              i rättssäkerhet eller kvalitet.
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 bg-[#fff1e6] rounded-2xl p-8 md:p-10">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-5">
              I dialog med
            </p>
            <ul className="flex flex-col gap-3">
              {["Skatteverket", "Lantmäteriet", "Transportstyrelsen"].map((actor) => (
                <li key={actor} className="flex items-center gap-3 text-[#354042] font-medium">
                  <svg className="w-5 h-5 text-[#d27957] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {actor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sektion 4 – Dialog / CTA */}
      <section className="bg-[#20293d] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
              Dialog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#fff1e6] leading-tight mb-4">
              Är ni en del av processen idag?
            </h2>
            <p className="text-[#fff1e6]/70 leading-relaxed mb-4">
              Vi för pågående dialoger med banker, VP-bolag, kreditinstitut, försäkringsbolag och
              myndigheter. Om er organisation på något sätt är involverad i dödsbo- eller
              bouppteckningsprocessen – och ni ser värdet av ett modernare flöde – hör gärna av er.
            </p>
            <p className="text-[#fff1e6]/70 leading-relaxed mb-8">
              Rätt samarbeten är det som gör skillnaden.
            </p>
            <Link
              href="/kontakta-oss"
              className="inline-block bg-[#d27957] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#c06a44] transition-colors duration-300"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 hidden md:block" />
        </div>
      </section>
    </>
  );
}
