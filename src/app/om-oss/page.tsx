import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss – Människorna bakom Fride",
  description:
    "Vi startade Fride för att ingen ska behöva stå ensam med juridiken när livet ställs på ända. Lär känna grundarna Joanna och Elza – och varför vi gör det vi gör.",
  alternates: { canonical: "https://www.fride.se/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] mb-6">
              Om oss, och varför vi startade Fride
            </h1>
            <p className="text-lg text-[#354042] leading-relaxed mb-4">
              Vi vet hur det känns när någon går bort – sorgen, kaoset och alla praktiska frågor som hopar sig.
              Fride är vår lösning på ett problem vi sett på nära håll. Vi har själva sett vänner kämpa med
              myndigheter, bankkrav och juridiska dokument mitt i en sörjande tid.
            </p>
            <p className="text-lg text-[#354042] leading-relaxed">
              Det fick oss att ställa en enkel fråga: varför ska det vara så svårt att få hjälp när man behöver
              det som mest?
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/elza-joanna.webp"
                alt="Joanna och Elza, grundarna till Fride"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube video */}
      <section className="max-w-4xl mx-auto px-6 py-8 fade-in">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/8Uc0YhZj90U"
            title="Om Fride"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#354042] mb-6">
              Vår vision: att förändra hur Sverige hanterar dödsbon
            </h2>
            <div className="space-y-4 text-[#354042] leading-relaxed">
              <p>Varje år går cirka 90 000 människor bort i Sverige.</p>
              <p>
                Varje gång lämnar de efter sig ett dödsbo – och en familj som ska hantera allt det praktiska. Idag
                är den processen onödigt komplex, otydlig och analog. Det tar tid. Det kostar pengar. Och det sker
                mitt i en av livets svåraste stunder.
              </p>
              <p>Vi tror att det kan göras bättre.</p>
              <p>
                Fride bygger steg för steg mot en helt digital bouppteckningsprocess – en som är enklare, snabbare
                och mer tillgänglig för alla. Inte som en byråkratisk tjänst, utan som ett mänskligt stöd i en svår
                situation.
              </p>
              <p>
                På vägen dit har vi sett något viktigt: Mycket av det som gör dödsbohanteringen svår går att
                förebygga. Med rätt dokument på plats – en framtidsfullmakt, ett gåvobrev, ett skuldebrev – slipper
                familjer onödig ovisshet och konflikt.
              </p>
            </div>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/team-fride.jpeg"
              alt="Fride-teamet"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Joanna */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#d9c1b1] fade-in">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#354042] mb-4">Joanna Robarth, Grundare</h3>
            <div className="space-y-4 text-[#354042] leading-relaxed">
              <p>
                Idén till Fride växte fram efter att en nära vän förlorat sin sambo. Hon kämpade med att få ihop
                alla dokument, kontakta myndigheter och upprätta bouppteckningen – samtidigt som hon tog hand om
                barnen och höll vardagen igång. För mig var det tydligt: det här var en orimlig börda i en redan
                svår tid. När min pappa gick bort 1994 såg processen i stort sett likadan ut som den gör i dag –
                trots all teknisk utveckling. Det är orimligt.
              </p>
              <p>
                Jag är ekonom med bakgrund inom internationell bank och fondbolag, där jag lett team, ansvarat för
                tusentals kundrelationer och drivit automatiseringsprojekt. De senaste 13 åren har jag drivit egna
                bolag, alltid med ett tydligt fokus: att förenkla det som är komplicerat och skapa trygghet i
                osäkra situationer.
              </p>
              <p>
                Med Fride vill jag göra det som borde ha gjorts för länge sedan – skapa en mänsklig, digital
                lösning som hjälper människor när livet ställs på ända.
              </p>
            </div>
            <Link
              href="/intervju-joanna-robarth--grundare"
              className="inline-block mt-6 bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2C3447] transition-colors duration-300"
            >
              Läs intervjun med Joanna
            </Link>
          </div>
          <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Joanna-Robarth-Fride.webp"
              alt="Joanna Robarth, grundare"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Elza */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#d9c1b1] fade-in">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#354042] mb-4">Elza Kazemi, Grundare</h3>
            <div className="space-y-4 text-[#354042] leading-relaxed">
              <p>
                Med min bakgrund som civilekonom och rådgivare i banksektorn såg jag tidigt hur svår
                dödsbohanteringen kan vara – särskilt för småföretagare och anhöriga som redan har fullt upp. Det är
                ett område där känslor möter byråkrati, och där många saknar verktyg för att orka ta sig igenom
                processen.
              </p>
              <p>
                Under 20 år har jag arbetat med allt från fastighetsutveckling till internationella uppdrag, alltid
                med människan i fokus. Fride är mitt sätt att bidra till något större: en tjänst som gör det
                enklare att vara människa när livet är som svårast.
              </p>
            </div>
            <Link
              href="/intervju-elza-kazemi-grundare-fride"
              className="inline-block mt-6 bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2C3447] transition-colors duration-300"
            >
              Läs intervjun med Elza
            </Link>
          </div>
          <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/team-joanna-elza.webp"
              alt="Elza Kazemi, grundare"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Sara */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#d9c1b1] fade-in">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#354042] mb-4">Sara Gustafsson, Delägare</h3>
            <div className="space-y-4 text-[#354042] leading-relaxed">
              <p className="italic">
                "Första gången jag träffade Joanna och Elza och hörde om deras vision förstod jag direkt – det här
                vill jag vara med och bygga. Jag hade nyss förlorat min bonuspappa. Samtidigt fick min mamma en
                alzheimerdiagnos. På kort tid stod jag mitt i exakt det Fride finns till för – allt det tunga och
                praktiska som ingen förberett sig på. Jag vet hur det känns när man önskar att någon hade tagit
                hand om det i tid. Det är därför jag är här."
              </p>
              <p>
                Sara är senior marknadsförare med över 25 års erfarenhet och ansvarar för Frides marknadsföring
                samt är delägare i bolaget. Med ett starkt driv arbetar hon för att fler ska hitta Fride innan
                livet ställer dem inför beslut de inte hunnit förbereda sig på.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/team-sara.webp"
              alt="Sara Gustafsson, delägare"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Carlos */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-[#d9c1b1] fade-in">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#354042] mb-4">
              Carlos Manriquez, Delägare
            </h3>
            <div className="space-y-4 text-[#354042] leading-relaxed">
              <p className="italic">
                "Tekniken ska göra det enkla möjligt – och det möjliga enkelt. Det är så jag tänker när jag
                bygger Frides plattform."
              </p>
              <p>
                Carlos är Fullstack Developer och CTO på Fride, och delägare i bolaget. Han ansvarar för den
                tekniska utvecklingen av plattformen och har bred erfarenhet inom modern webbutveckling med
                teknologier som React, TypeScript, Next.js och Node.js.
              </p>
              <p>
                Innan Fride arbetade han som utvecklare och konsult åt flera företag, samt undervisade blivande
                utvecklare på ZoCom och Nackademin. Den kombinationen av att bygga produkter och dela kunskap har
                format hur han tänker kring teknik – med fokus på lösningar som är både användarvänliga och robusta.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/team-carlos.jpeg"
              alt="Carlos Manriquez, delägare"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Knowledge bank CTA */}
      <section className="bg-[#fff1e6] py-16 mt-8">
        <div className="max-w-4xl mx-auto px-6 text-center fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-6">Vår kunskapsbank</h2>
          <Link
            href="/kunskap"
            className="inline-block border border-[#354042] text-[#354042] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#354042] hover:text-[#fff1e6] transition-colors"
          >
            Till alla artiklar
          </Link>
        </div>
      </section>
    </>
  );
}
