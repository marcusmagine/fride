import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samboavtal online på några minuter – 499 kr | Fride",
  description:
    "Sambor har inte samma skydd som gifta. Ett samboavtal gör det tydligt vem som äger vad. Skapa ert online med guidning steg för steg. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/samboavtal" },
};

const trustPoints = ["Fast pris 499 kr inkl. moms", "Juridiskt korrekt", "Inga vittnen krävs"];

const steps = [
  { title: "Svara på några frågor", description: "Berätta om er situation – vad ni äger, vad ni vill ska gälla och vad ni vill skydda. Det tar några minuter." },
  { title: "Avtalet skapas", description: "Vi genererar ett juridiskt korrekt samboavtal anpassat efter er situation och era svar." },
  { title: "Ladda ner och signera", description: "Ni skriver under avtalet – det behöver inga vittnen och är giltigt direkt." },
];

const faq = [
  {
    question: "Måste ett samboavtal bevittnas?",
    answer:
      "Nej, ett samboavtal behöver inte bevittnas för att vara giltigt. Det räcker att ni båda skriver under avtalet. Däremot är det viktigt att båda parter undertecknar – ett ensidigt samboavtal gäller inte.",
  },
  {
    question: "Kan vi ändra samboavtalet senare?",
    answer:
      "Ja, ni kan när som helst ändra eller häva ett samboavtal – det kräver bara att ni båda skriver under ett nytt avtal. Det är klokt att se över avtalet om er situation förändras, till exempel om ni köper en ny bostad, får barn eller om en av er ärver något.",
  },
  {
    question: "Gäller samboavtalet även om vi gifter oss?",
    answer:
      "Nej. När ni gifter er upphör sambolagen att gälla och samboavtalet slutar ha verkan. Ni regleras då istället av äktenskapsbalken. Om ni vill ha liknande skydd som gifta kan ni istället upprätta ett äktenskapsförord.",
  },
  {
    question: "Vad händer om vi separerar utan samboavtal?",
    answer:
      "Utan samboavtal gäller sambolagen fullt ut. Det innebär att samboegendom – det vill säga bostad och bohag som ni köpt för gemensamt bruk – ska delas lika mellan er vid en separation, oavsett vem som betalade mest. Det kan leda till en ekonomiskt orättvis uppdelning och i värsta fall en tvist.",
  },
  {
    question: "Kan vi reglera mer än bara bostaden i avtalet?",
    answer:
      "Ja. Ni kan i ett samboavtal avtala om att sambolagen inte ska gälla alls, eller bara delvis. Det innebär att ni kan reglera vad som gäller för bohaget, sparande och andra tillgångar – inte bara bostaden. Däremot kan ni inte reglera saker som rör eventuella barn i ett samboavtal, det hanteras separat.",
  },
  {
    question: "Skyddar samboavtalet arv och gåvor automatiskt?",
    answer:
      "Inte i sig. Sambolagen gäller bara samboegendom – det vill säga det ni köpt gemensamt för att bo i och använda ihop. Arv och gåvor räknas normalt inte som samboegendom och ingår därför inte i en bodelning ändå. Men om ni är osäkra på vad som gäller i er specifika situation rekommenderar vi att ni läser mer i vår kunskapsbank eller kontaktar oss.",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Samboavtal",
  description:
    "Sambor har inte samma skydd som gifta. Ett samboavtal gör det tydligt vem som äger vad. Skapa ert online med guidning steg för steg.",
  brand: { "@type": "Brand", name: "Fride" },
  offers: {
    "@type": "Offer",
    priceCurrency: "SEK",
    price: "499",
    availability: "https://schema.org/InStock",
    url: "https://app.fride.se/create/samboavtal",
  },
};

export default function SamboavtalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Hero
        headline="Skapa samboavtal online – enkelt och tryggt"
        subtext="Med ett samboavtal bestämmer ni själva vad som gäller om ni separerar. Vi skapar ett juridiskt korrekt avtal anpassat efter er situation – så att ni slipper onödiga konflikter om ni en dag går skilda vägar."
        ctaLabel="Skapa samboavtal"
        ctaHref="https://app.fride.se/create/samboavtal"
        imageSrc="/images/samboavtal-1.webp"
        imageAlt="Par som skapar samboavtal"
        price={499}
      />

      <TrustBar points={trustPoints} />

      {/* Vad är ett samboavtal? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">Vad är ett samboavtal?</h2>
          <p className="text-[#4a5e5f] leading-relaxed mb-4">
            Sambolagen ger sambor ett visst skydd – men den täcker bara det ni köpt tillsammans för
            gemensamt bruk, som bostaden och möblerna. Den täcker inte det du ägde innan, eller det
            du fått i arv eller gåva.
          </p>
          <p className="text-[#4a5e5f] leading-relaxed">
            Med ett samboavtal kan ni avtala bort sambolagens regler helt eller delvis – och bestämma
            exakt vad som ska gälla för just er.
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
              Den är tränad på allt som har med samboavtal att göra och kan svara på alla dina frågor
              kopplat till det. Du får tydliga och korrekta svar skrivet på ett enkelt och mänskligt
              sätt (trots att det är en AI). Testa nu — skriv din fråga här i rutan bredvid.
            </p>
            <p className="text-sm font-medium text-[#354042] mb-3">Exempel på frågor du kan ställa:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Vad reglerar ett samboavtal?",
                "Behöver vi ett samboavtal om vi har barn tillsammans?",
                "Vad händer med bostaden om vi separerar utan samboavtal?",
                "Kan vi skriva att allt ska delas lika i ett samboavtal?",
                "Skiljer sig samboavtal från äktenskapsförord?",
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
              title="Fride AI – samboavtal"
            />
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        stacked
        imageSrc="/images/samboavtal-2.webp"
        imageAlt="Samboavtal – så funkar det"
        ctaHref="https://app.fride.se/create/samboavtal"
        ctaLabel="Skapa samboavtal"
      />

      {/* När behövs ett samboavtal? */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När behövs ett samboavtal?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Ett samboavtal kan vara viktigt i många situationer. Några vanliga exempel:
            </p>
            <CheckList items={[
              "Ni köper en bostad tillsammans – men betalade in olika mycket",
              "En av er äger bostaden sedan tidigare",
              "En av er har väsentligt mer tillgångar eller sparande",
              "Ni har barn sedan tidigare relationer",
              "Ni vill skydda det ni fått i arv eller gåva",
            ]} />
            <Link
              href="https://app.fride.se/create/samboavtal"
              className="mt-8 inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa samboavtal
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/samboavtal-3.webp" alt="När behövs ett samboavtal?" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Köper bostad ihop */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/samboavtal-4.webp" alt="Par som köper bostad tillsammans" fill className="object-cover" />
          </div>
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När ni köper bostad ihop – men bidrar olika mycket
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-5">
              Utan samboavtal delas samboegendomen lika vid en separation – oavsett vem som betalade mest.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-5">
              Det kan till exempel handla om att:
            </p>
            <CheckList items={[
              "du betalade en större kontantinsats",
              "du fick hjälp av dina föräldrar med handpenningen",
              "du tog ett större bolån än din partner",
            ]} />
            <p className="mt-6 text-[#4a5e5f] leading-relaxed text-sm">
              Med ett samboavtal kan ni reglera att var och en får tillbaka det de satt in – och undvika
              en konflikt om ni en dag separerar.
            </p>
          </div>
        </div>
      </section>

      {/* Äger bostaden sedan innan */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Samboavtal när du äger bostaden sedan innan
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Om du äger en bostad när ni flyttar ihop räknas den inte som samboegendom – den är din.
              Men det kan ändå uppstå otydlighet om ni bor där länge, renoverar tillsammans eller
              betalar gemensamma kostnader.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Ett samboavtal gör det tydligt vad som gäller och skyddar er båda från onödiga tvister.
            </p>
            <Link
              href="https://app.fride.se/create/samboavtal"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa samboavtal
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/samboavtal-5.jpg" alt="Samboavtal för befintlig bostad" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Varför välja Frides samboavtal? */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-5">
              Varför välja Frides samboavtal?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Vi är inte en juristbyrå – vi är en digital tjänst som gör det enkla möjligt för alla.
            </p>
            <CheckList items={[
              "Anpassat efter er situation – vi ställer rätt frågor och skapar ett avtal som stämmer för just er.",
              "Juridiskt korrekt från början – ni slipper osäkerhet om avtalet håller.",
              "Trygg betalning du väljer – via Klarna, Apple Pay eller kort.",
              "Enkelt och snabbt – ni kan skapa ert samboavtal på bara några minuter, utan förkunskaper.",
            ]} />
            <p className="mt-8 text-[#354042] mb-6">
              Skapa ett samboavtal digitalt för endast <strong>499 kr inkl. moms</strong>.<br />
              Skapar du fler dokument hos oss får du <strong>50% rabatt</strong> på alla efterföljande.<br />
              Ingen prenumeration. Inga dolda avgifter.
            </p>
            <Link
              href="https://app.fride.se/create/samboavtal"
              className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
            >
              Skapa samboavtal
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
            <Image src="/images/samboavtal-mockup.webp" alt="Samboavtal – Fride app-mockup" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Frågor och svar om samboavtal." />

      <CTASection ctaHref="https://app.fride.se/create/samboavtal" ctaLabel="Skapa samboavtal" />
    </>
  );
}
