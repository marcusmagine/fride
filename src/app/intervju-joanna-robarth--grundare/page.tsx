import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Möt Joanna Robarth, grundare – Fride",
  description: "När en nära vän plötsligt förlorade sin partner blev bristerna i dagens dödsbohantering smärtsamt tydliga. Joanna berättar om varför Fride startades.",
  alternates: { canonical: "https://www.fride.se/intervju-joanna-robarth--grundare" },
};

const qa = [
  {
    q: "Varför Fride?",
    a: `En nära vän till mig förlorade sin sambo hastigt, och när jag såg henne hantera livet, barnen och sorgen samtidigt som bouppteckning, kändes det omänskligt. När min pappa dog för 30 år sedan gjordes bouppteckningen på mer eller mindre exakt samma sätt, trots att internet och BankId finns idag. Det känns orimligt att teknologin inte hängt med. När jag berättade för min partner Elza sa hon: "– Men det där måste vi ju lösa".`,
  },
  {
    q: "Vilket konkret problem i dödsbohantering vill du lösa först?",
    a: `Det vore en dröm att avlasta människor i sorg genom att automatisera inhämtningen av information till bouppteckningen. Dels för att spara tid och minska fel, men också för att det är jobbigt och smärtsamt att upprepa gång på gång: "– Min man har gått bort. Min man har gått bort." För idag är det tyvärr inte mycket man kan göra elektroniskt.`,
  },
  {
    q: "Vad i Frides arbete känns mest meningsfullt för dig just nu?",
    a: `När vi har fördjupat oss i vad som händer med allt det praktiska när en person går bort har vi insett hur lätt det faktiskt är att underlätta för sina närstående som blir kvar. Därför jobbar vi på att förenkla ett antal juridiska dokument som vi kallar "Framtidsdokument". Vi har lanserat en användarvänlig och tydlig vägledning för att upprätta Framtidsfullmakt som inte bara är juridiskt korrekt, utan även kommer fungera i praktiken om man skulle behöva den. Som en försäkring, ungefär. Snart kommer samma enkla vägledning med Testamente och strax därefter samboavtal, äktenskapsförord, gåvobrev och skuldbrev.`,
  },
  {
    q: "Vad är du stolt över?",
    a: "Engagemanget från hela teamet men också den pigga responsen vi får när vi pratar med myndigheter.",
  },
  {
    q: "Vad känner du är den största utmaningen just nu?",
    a: "Det är helt klart lagändringar som måste göras för att det ska gå att automatisera hela bouppteckningsprocessen. Men en hel del kan vi lösa ändå. Med en stor skopa problemlösning och övertalningsförmåga.",
  },
];

export default function JoannaIntervjuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6]">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <Link
            href="/om-oss"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#d27957] uppercase tracking-wide mb-4 hover:underline"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Om oss
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] leading-tight mb-4">
            Möt Joanna Robarth, grundare
          </h1>
          <p className="text-lg text-[#4a5e5f] leading-relaxed">
            När en nära vän plötsligt förlorade sin partner blev bristerna i dagens dödsbohantering
            smärtsamt tydliga. I den här intervjun berättar en av Frides grundare om varför bolaget
            startades – och hur hon och teamet vill minska bördan för människor i livets svåraste stunder.
          </p>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/Joanna-Robarth-Fride.webp"
            alt="Joanna Robarth, grundare av Fride"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <div className="space-y-10">
          {qa.map(({ q, a }) => (
            <div key={q}>
              <h2 className="font-serif text-xl font-semibold text-[#354042] mb-3">{q}</h2>
              <p className="text-[#4a5e5f] leading-relaxed">"{a}"</p>
            </div>
          ))}
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="bg-[#fff1e6] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#4a5e5f] leading-relaxed mb-6">
            Vill du förstå mer om hur du kan förbereda dig för framtiden och underlätta för dina
            närstående?{" "}
            <Link href="/framtidsfullmakt" className="text-[#d27957] hover:underline">
              Läs mer om Frides framtidsfullmakt och hur den fungerar i praktiken.
            </Link>
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
              { label: "Gåvobrev", href: "/gavobrev" },
              { label: "Skuldebrev", href: "/skuldebrev" },
              { label: "Testamente", href: "/testamente" },
              { label: "Samboavtal", href: "/samboavtal" },
              { label: "Äktenskapsförord", href: "/aktenskapsforord" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-[#20293d] text-[#fff1e6] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
