import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Möt Elza Kazemi, grundare – Fride",
  description: "När sorgen är som störst hamnar ofta det praktiska i fokus. Elza berättar om varför hon vill förändra hur vi tar hand om varandra – både före och efter att livet ställs på ända.",
  alternates: { canonical: "https://www.fride.se/intervju-elza-kazemi-grundare-fride" },
};

const qa = [
  {
    q: "Varför Fride?",
    a: "När jag förstod hur tungt det praktiska blir för människor som precis har förlorat någon, kände jag direkt att det här är något jag vill vara med och förändra. Det är för mycket ansvar som hamnar på fel tid i livet.",
  },
  {
    q: "Vilket konkret problem i dödsbohantering vill du lösa först?",
    a: "Att minska bördan för anhöriga. Slippa leta, ringa, upprepa samma sak om och om igen – mitt i sorgen. Om vi kan göra det lite enklare - både när man är vid liv och kan förbereda/organisera sig och för anhöriga som är i sorg, så är det värt allt.",
  },
  {
    q: "Vad i Frides arbete känns mest meningsfullt för dig just nu?",
    a: "Att vi bygger saker som faktiskt kan användas lätt och att resultatet blir rätt. Framtidsdokumenten gör det lättare att ta tag i det man annars skjuter upp, och de kan betyda mycket när det verkligen gäller.",
  },
  {
    q: "Vad är du stolt över?",
    a: "Människorna i teamet. Omtanken, engagemanget och viljan att göra rätt – både juridiskt och mänskligt.",
  },
  {
    q: "Vad känner du är den största utmaningen just nu?",
    a: "Att förändra ett område som sett likadant ut länge och har inte synkroniserats. Det tar tid, men det går – steg för steg.",
  },
];

export default function ElzaIntervjuPage() {
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
            Möt Elza Kazemi, grundare
          </h1>
          <p className="text-lg text-[#4a5e5f] leading-relaxed">
            När sorgen är som störst hamnar ofta det praktiska i fokus. I den här intervjun berättar
            Elza, medgrundare av Fride, om varför hon vill förändra hur vi tar hand om varandra –
            både före och efter att livet ställs på ända.
          </p>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="relative h-96 md:h-[576px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/team-joanna-elza.webp"
            alt="Elza Kazemi, grundare av Fride"
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
