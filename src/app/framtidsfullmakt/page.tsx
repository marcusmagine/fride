import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyFrideSection } from "@/components/sections/WhyFrideSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framtidsfullmakt",
  description:
    "Skapa en framtidsfullmakt online med juridisk guidning. Bestäm vem som tar hand om det praktiska om du inte kan det själv. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/framtidsfullmakt" },
};

const trustPoints = ["Fast pris", "Juridiskt korrekt", "Guidning steg för steg"];

const steps = [
  { title: "Svara på frågor", description: "Vi guidar dig genom processen och samlar in den information som behövs." },
  { title: "Få vägledning längs vägen", description: "Våra tips hjälper dig fatta rätt beslut för just din situation." },
  { title: "Granska och godkänn", description: "Du får en färdig framtidsfullmakt som du enkelt kan ladda ner som PDF." },
  { title: "Skriv ut och underteckna", description: "Dokumentet är giltigt när du signerat det enligt instruktionen." },
];

const faq = [
  {
    question: "Behöver jag en framtidsfullmakt om jag är gift?",
    answer:
      "Ja, i de flesta fall är det klokt att ha en framtidsfullmakt även om du är gift. Många tror att en partner automatiskt kan fatta alla beslut om något händer, men så är det inte. Utan en framtidsfullmakt kan din partner inte sköta dina bankärenden, hantera avtal och ekonomiska beslut, fatta beslut kring boende eller juridiska frågor, eller företräda dig i kontakt med myndigheter. Med en framtidsfullmakt gör du det enkelt för din partner att hjälpa dig fullt ut, utan onödiga hinder. Det är en trygghet för er båda — och ofta en av de viktigaste handlingarna man kan göra för varandra.",
  },
  {
    question: "När börjar en framtidsfullmakt gälla?",
    answer:
      "Den börjar gälla först när du inte längre har förmåga att fatta egna beslut, exempelvis på grund av sjukdom eller demens. Fullmaktshavaren avgör när det är dags, men ofta krävs ett läkarintyg som styrker detta.",
  },
  {
    question: "Vem kan jag ge framtidsfullmakt till?",
    answer:
      "Du kan välja vem du vill, så länge personen är myndig och inte själv har förvaltare. Det är viktigt att det är någon du litar på, eftersom personen får stor befogenhet att agera i ditt namn. Du bör även ha flera fullmaktshavare eftersom det kan uppstå jävsituationer vid exempelvis försäljning av bostad.",
  },
  {
    question: "Kan en framtidsfullmakt bli ogiltig på grund av jäv?",
    answer:
      "Ja, det kan den – i vissa situationer. Om den person du utsett som fullmaktshavare har ett eget intresse som krockar med ditt, får hen inte agera för din räkning i just den frågan. Det kallas för jäv. Ett vanligt exempel är om ni äger en bostad tillsammans och den ska säljas – då kan en annan, oberoende person behöva träda in. Du kan minska risken för problem genom att utse flera fullmaktshavare och fördela ansvar tydligt i fullmakten.",
  },
  {
    question: "Kan jag använda framtidsfullmakten för att sälja en bostad?",
    answer:
      "Inte alltid. Om du och fullmaktshavaren har gemensamma intressen i bostaden – till exempel att ni äger den ihop eller bor där tillsammans – kan det uppstå jäv. Då får fullmaktshavaren inte skriva under ett köpeavtal för din räkning. I sådana fall kan man behöva ansöka om en god man som företräder dig i just den affären. Du kan också välja en annan oberoende part som företräder i just den situationen.",
  },
  {
    question: "Vad kan ingå i en framtidsfullmakt?",
    answer:
      "Du kan ge fullmakt för ekonomiska frågor, som att betala räkningar eller sälja bostad, men även för personliga ärenden som att ansöka om hemtjänst. Du bestämmer själv omfattningen.",
  },
  {
    question: "Kan jag bestämma vem som tar hand om mina barn om något händer mig?",
    answer:
      "Nej. En framtidsfullmakt styr inte över vem som tar hand om minderåriga barn. Det regleras alltid enligt Socialtjänstlagen och beslutas av socialtjänsten utifrån barnets bästa. En framtidsfullmakt kan däremot vara ett viktigt stöd i en sådan situation, eftersom den gör det möjligt för en person du litar på att hantera allt det praktiska kring din ekonomi, avtal, räkningar och kontakter med myndigheter.",
  },
  {
    question: "Måste framtidsfullmakten registreras?",
    answer:
      "Nej, den behöver inte registreras någonstans. Men den måste vara korrekt upprättad med din underskrift och två vittnen som är närvarande samtidigt.",
  },
  {
    question: "Kan jag ändra eller återkalla en framtidsfullmakt?",
    answer:
      "Ja, så länge du är beslutsför kan du när som helst ändra eller återkalla framtidsfullmakten. Det görs skriftligen.",
  },
  {
    question: "Hur vet jag att min framtidsfullmakt är giltig?",
    answer:
      "För att vara giltig måste den vara skriftlig, undertecknad av dig, och bevittnad av två samtidigt närvarande vittnen. Du kan använda en juridiskt granskad mall för att vara säker.",
  },
];

export default function FramtidsfullmaktPage() {
  return (
    <>
      <Hero
        headline="Framtidsfullmakt – ett enkelt sätt att skapa trygghet innan det oväntade händer"
        subtext="Livet förändras — ibland långsamt, ibland på en dag. Med en framtidsfullmakt bestämmer du själv vem som ska ta hand om det praktiska om du en dag inte kan."
        ctaLabel="Skapa din framtidsfullmakt"
        ctaHref="https://app.fride.se/create/framtidsfullmakt"
        imageSrc="/images/framtidsfullmakt.webp"
        imageAlt="Person som planerar sin framtid"
      />

      <TrustBar points={trustPoints} />

      {/* Vad är en framtidsfullmakt? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Vad är en framtidsfullmakt?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed">
              En framtidsfullmakt är ett juridiskt dokument där du själv utser någon du litar på att
              företräda dig, om du i framtiden blir sjuk, dement eller av annan anledning inte längre
              kan fatta egna beslut. Det är ett alternativ till god man, och gäller när fullmakten
              träder i kraft – efter att du själv inte längre har beslutsförmåga.
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 aspect-video w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/yJKGSbdQktY"
              title="Vad är en framtidsfullmakt?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* AI-assistent */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Använd vår AI för att få hjälp.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Den är tränad på allt som har med framtidsfullmakter att göra och kan svara på alla
              dina frågor kopplat till det. Du får tydliga och korrekta svar skrivet på ett enkelt
              och mänskligt sätt (trots att det är en AI). Testa nu — skriv din fråga här i rutan
              bredvid.
            </p>
            <p className="text-sm font-medium text-[#354042] mb-3">Exempel på frågor du kan ställa:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Vad är viktigt att tänka på när man ska skriva en framtidsfullmakt?",
                "Behöver jag en framtidsfullmakt om jag är gift?",
                "Vad händer om jag inte har en framtidsfullmakt?",
                "Kan jag ändra min framtidsfullmakt i efterhand?",
                "Vad skiljer en framtidsfullmakt från en vanlig fullmakt?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm text-[#4a5e5f] leading-relaxed">
                  <span className="text-[#d27957] shrink-0 mt-0.5">›</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in fade-in-delay-1 w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://ai.fride.se/chatbot/Hh7ZinstzP0WsGuC"
              style={{ width: "100%", height: "100%", minHeight: "700px" }}
              frameBorder={0}
              allow="microphone"
              title="Fride AI – framtidsfullmakt"
            />
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        imageSrc="/images/img-app-fride.webp"
        imageAlt="Så här ser Fride-tjänsten ut"
      />

      {/* Därför är framtidsfullmakt en viktig trygghet */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] leading-tight mb-5">
              Därför är framtidsfullmakt en viktig trygghet
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Ingen vet vad framtiden för med sig. Med en framtidsfullmakt får du själv bestämma
              vem som ska hjälpa dig — istället för att det avgörs av andra.
            </p>
            <p className="text-[#354042] font-medium mb-4">
              En framtidsfullmakt kan bland annat ge rätt att:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Betala räkningar och hantera ekonomi",
                "Företräda dig i kontakt med myndigheter och banker",
                "Hantera avtal och abonnemang",
                "Fatta beslut kring vård och boende",
                "Hantera försäljning av fastighet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
                  <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#4a5e5f] leading-relaxed text-sm">
              Att skapa framtidsfullmakt är en enkel handling — men gör stor skillnad för dig och
              dina närstående.
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px]">
            <Image
              src="/images/ff-darfor.jpg"
              alt="Familj som planerar framtiden"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* För dig som står ensam */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] leading-tight mb-5">
              För dig som står ensam med ansvaret för din vardag och din familj
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              När du är ensam med mindre barn vilar mycket på dina axlar — både praktiskt och
              känslomässigt. Och även om en framtidsfullmakt <strong>inte</strong> kan styra över vem
              som tar hand om barnen om något skulle hända, kan den ge något annat som är minst lika
              värdefullt:
            </p>
            <p className="text-[#354042] font-medium mb-4">
              Trygghet i att allt det praktiska hanteras av någon du litar på.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Din ekonomi och dina räkningar",
                "Kontakter med myndigheter",
                "Avtal, juridik och andra vardagsbeslut",
                "Allt det som annars kan bli både krångligt och känslomässigt tungt för dina barn",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
                  <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#4a5e5f] leading-relaxed text-sm mb-8">
              På så sätt slipper barnen hamna mitt i praktiska beslut, och du vet att din vardag tas
              om hand av någon som står på din sida. Det är ett sätt att skapa lugn — både för dig
              och för dem du gör allt för.
            </p>
            <Link
              href="https://app.fride.se/create/framtidsfullmakt"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa din framtidsfullmakt
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px]">
            <Image
              src="/images/ff-ensam.webp"
              alt="Förälder som planerar framtiden för sin familj"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* För dig som vill skapa ordning inför framtiden */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] leading-tight mb-5">
              För dig som vill skapa ordning inför framtiden – för din egen och dina barns skull
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              När barnen fått sina egna liv och kanske egna barn, väcks ofta ett nytt ansvar: att
              inte belasta dem den dag du själv behöver stöd.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Kanske börjar kroppen kännas tröttare. Kanske börjar din partner bli äldre och mer
              sårbar. Eller kanske vill du bara vara trygg i att allt är ordnat om något händer.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Vem som får hjälpa dig med ekonomi, boende och viktiga beslut",
                "Att dina barn slipper fatta svåra beslut mitt i en tuff tid",
                "Att du själv har kontroll över hur du vill att livet ska skötas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
                  <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#4a5e5f] leading-relaxed text-sm mb-8">
              Det är ett sätt att skapa lugn — både för dig och för dem som betyder mest.
            </p>
            <Link
              href="https://app.fride.se/create/framtidsfullmakt"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa din framtidsfullmakt
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px]">
            <Image
              src="/images/ff-ordning.webp"
              alt="Äldre par som planerar framtiden"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <WhyFrideSection />

      <FAQ
        items={faq}
        headline="Frågor och svar om framtidsfullmakten."
      />

      <CTASection
        ctaHref="https://app.fride.se/create/framtidsfullmakt"
        ctaLabel="Skapa din framtidsfullmakt"
      />
    </>
  );
}
