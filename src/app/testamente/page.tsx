import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testamente",
  description:
    "Skapa ett testamente online – juridiskt korrekt och anpassat efter din situation. Bestäm vem som ärver och hur arvet fördelas. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/testamente" },
};

const trustPoints = ["Fast pris 499 kr", "Juridiskt korrekt", "Guidning steg för steg"];

const steps = [
  { title: "Svara på några frågor", description: "Berätta om din situation – din familj, dina tillgångar och hur du vill att arvet ska fördelas. Det tar några minuter." },
  { title: "Testamentet skapas", description: "Vi genererar ett juridiskt korrekt testamente anpassat efter din situation och dina svar." },
  { title: "Signera med vittnen", description: "Du skriver under testamentet i närvaro av två vittnen som också skriver under. Vittnena får inte vara arvingar. Vi guidar dig genom hur det går till." },
];

const faq = [
  {
    question: "Måste ett testamente bevittnas för att vara giltigt?",
    answer:
      "Ja. För att ett testamente ska vara juridiskt giltigt måste du skriva under det i närvaro av två vittnen, som också skriver under. Vittnena måste vara över 15 år och får inte själva vara arvingar eller närstående till arvingar i testamentet. Vi guidar dig genom vad som gäller.",
  },
  {
    question: "Kan jag ändra mitt testamente senare?",
    answer:
      "Ja. Du kan när som helst upprätta ett nytt testamente som ersätter det gamla, eller lägga till ett tillägg – ett så kallat kodocill. Det är klokt att se över ditt testamente när din livssituation förändras, till exempel om du gifter dig, separerar, får barn eller ärver något.",
  },
  {
    question: "Vad händer med mitt testamente om jag gifter mig?",
    answer:
      "Ett testamente upphör automatiskt att gälla när du gifter dig – om det inte uttryckligen är skrivet för att gälla även efter äktenskap. Om du har ett testamente och planerar att gifta dig bör du upprätta ett nytt efter vigseln.",
  },
  {
    question: "Kan jag testamentera bort allt till vem jag vill?",
    answer:
      "Inte helt. Dina bröstarvingar – det vill säga dina barn – har alltid rätt till sin laglott, som är hälften av deras arvslott enligt lag. Det innebär att du inte kan testamentera bort deras del helt. Däremot kan du styra hur resten av arvet fördelas och vad som ska hända med specifika tillgångar.",
  },
  {
    question: "Måste testamentet registreras någonstans?",
    answer:
      "Nej, ett testamente behöver inte registreras för att vara giltigt. Det är däremot viktigt att det förvaras på ett säkert sätt och att rätt personer vet var det finns. Du kan till exempel förvara det hos en bank, en jurist eller hemma i ett låst utrymme.",
  },
  {
    question: "Vad är skillnaden mellan testamente och framtidsfullmakt?",
    answer:
      "Ett testamente gäller efter att du har gått bort och reglerar hur dina tillgångar ska fördelas. En framtidsfullmakt gäller under din livstid och reglerar vem som får fatta beslut för dig om du förlorar förmågan att göra det själv – till exempel vid demens eller sjukdom. Många behöver båda.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
          <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TestamentePage() {
  return (
    <>
      <Hero
        headline="Skapa testamente online – enkelt och tryggt"
        subtext="Med ett testamente bestämmer du själv vad som händer med det du lämnar efter dig. Vi skapar ett juridiskt korrekt testamente anpassat efter din situation – så att rätt personer får rätt sak, och dina närmaste slipper onödiga konflikter."
        ctaLabel="Skapa testamente"
        ctaHref="https://app.fride.se/create/testamente"
        imageSrc="/images/testemtente-hero.webp"
        imageAlt="Person som skapar testamente"
        price={499}
      />

      <TrustBar points={trustPoints} />

      {/* Vad är ett testamente? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">Vad är ett testamente?</h2>
          <p className="text-[#4a5e5f] leading-relaxed mb-4">
            Utan testamente fördelas ditt arv enligt arvslagen – och den tar inte hänsyn till vad du
            faktiskt velat. Det kan innebära att din sambo inte ärver någonting, att ett särkullbarn
            får ut sitt arv direkt, eller att en person du vill skydda inte får något alls.
          </p>
          <p className="text-[#4a5e5f] leading-relaxed">
            Med ett testamente bestämmer du själv. Du väljer vem som ska ärva, vad de ska få och hur
            det ska fördelas. Det är ett av de viktigaste dokumenten du kan skriva – för dem du bryr
            dig om.
          </p>
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
              Den är tränad på allt som har med testamente att göra och kan svara på alla dina frågor
              kopplat till det. Du får tydliga och korrekta svar skrivet på ett enkelt och mänskligt
              sätt (trots att det är en AI). Testa nu — skriv din fråga här i rutan bredvid.
            </p>
            <p className="text-sm font-medium text-[#354042] mb-3">Exempel på frågor du kan ställa:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Måste ett testamente bevittnas?",
                "Kan jag skriva bort bröstarvingars laglott?",
                "Vad händer om jag inte har ett testamente?",
                "Kan sambor ärva varandra utan testamente?",
                "Hur ändrar jag ett testamente jag redan skrivit?",
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
              title="Fride AI – testamente"
            />
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        stacked
        imageSrc="/images/testemente-sa-funkar-det.jpg"
        imageAlt="Testamente – så funkar det"
        ctaHref="https://app.fride.se/create/testamente"
        ctaLabel="Skapa testamente"
      />

      {/* När behövs ett testamente? */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När behövs ett testamente?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Arvslagen gäller för alla – oavsett om du har skrivit testamente eller inte. Men den tar
              sällan hänsyn till din faktiska livssituation. Några vanliga exempel på när ett testamente
              är viktigt:
            </p>
            <CheckList items={[
              "Du är sambo – sambor ärver inte varandra enligt lag",
              "Du har barn från tidigare relationer som du vill behandla på ett visst sätt",
              "Du vill att din partner ska kunna bo kvar i bostaden",
              "Du vill skänka något till en organisation eller välgörenhet",
              "Du vill skydda ett arv eller en gåva från att gå till fel person",
            ]} />
            <Link
              href="https://app.fride.se/create/testamente"
              className="mt-8 inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa testamente
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Testamente-3.webp" alt="När behövs ett testamente?" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Sambor ärver inte varandra */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Testamente-4.webp" alt="Sambor och testamente" fill className="object-cover" />
          </div>
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Är ni sambor? Då ärver ni inte varandra.
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Det är ett av de vanligaste missförstånden i Sverige. Många tror att ett långt
              förhållande eller gemensamma barn ger automatisk arvsrätt – men det gör det inte.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Om du går bort utan testamente går arvet till dina barn eller dina föräldrar – inte till
              din sambo. Det kan innebära att din partner tvingas flytta från bostaden ni delade, eller
              att de hamnar i en ekonomiskt svår situation vid en redan svår tidpunkt.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed">
              Med ett testamente kan du säkerställa att din sambo får det du vill att de ska ha.
            </p>
          </div>
        </div>
      </section>

      {/* Barn från olika relationer */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Barn från olika relationer – när arvet behöver vara tydligt
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Om du har barn från ett tidigare förhållande – så kallade särkullbarn – har de rätt att
              få ut sitt arv direkt när du går bort. Det kan påverka din nuvarande partners möjlighet
              att bo kvar eller behålla tillgångar ni byggt upp tillsammans.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Med ett testamente kan du ta hänsyn till alla i din familj och skapa en lösning som
              känns rätt – för alla inblandade.
            </p>
            <Link
              href="https://app.fride.se/create/testamente"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa testamente
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Testamente-1.webp" alt="Familj med barn från olika relationer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Varför välja Frides testamente? */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-5">
              Varför välja Frides testamente?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Vi är inte en juristbyrå – vi är en digital tjänst som gör det enkla möjligt för alla.
            </p>
            <CheckList items={[
              "Anpassat efter din situation – vi ställer rätt frågor och skapar ett testamente som stämmer för just dig.",
              "Juridiskt korrekt från början – du slipper osäkerhet om testamentet håller.",
              "Trygg betalning du väljer – via Klarna, Apple Pay eller kort.",
              "Enkelt och snabbt – du kan skapa ditt testamente på bara några minuter, utan förkunskaper.",
            ]} />
            <p className="mt-8 text-[#354042] mb-6">
              Skapa ett testamente digitalt för endast <strong>499 kr inkl. moms</strong>.<br />
              Skapar du fler dokument hos oss får du <strong>50% rabatt</strong> på alla efterföljande.<br />
              Ingen prenumeration. Inga dolda avgifter.
            </p>
            <Link
              href="https://app.fride.se/create/testamente"
              className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
            >
              Skapa testamente
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
            <Image src="/images/Testamente-mockup.webp" alt="Testamente – Fride app-mockup" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Frågor och svar om testamente." />

      <CTASection ctaHref="https://app.fride.se/create/testamente" ctaLabel="Skapa testamente" />
    </>
  );
}
