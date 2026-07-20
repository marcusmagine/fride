import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skuldebrev online – klar på 10 minuter, 499 kr | Fride",
  description:
    "Lån mellan privatpersoner blir tydliga med ett skuldebrev – belopp, ränta och återbetalning. Skapa ert online, steg för steg. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/skuldebrev" },
};

const trustPoints = ["Fast pris", "Juridiskt korrekt", "Tydliga villkor för ditt lån"];

const steps = [
  { title: "Fyll i uppgifter om lånet", description: "Uppge information om långivare, låntagare, belopp och återbetalningsvillkor." },
  { title: "Vi skapar ditt skuldebrev", description: "Ett skräddarsytt och juridiskt korrekt skuldebrev skapas baserat på dina svar." },
  { title: "Ladda ner och signera", description: "Hämta dokumentet direkt och skriv under när det passar dig." },
];

const faq = [
  {
    question: "Vad ska ett skuldebrev innehålla?",
    answer:
      "Ett skuldebrev bör innehålla uppgifter om långivare och låntagare, lånebelopp, ränta (om sådan finns), återbetalningstid och vad som händer om lånet inte betalas tillbaka.",
  },
  {
    question: "Är ett skuldebrev juridiskt bindande?",
    answer:
      "Ja, ett korrekt upprättat och undertecknat skuldebrev är juridiskt bindande och kan användas som bevis om en tvist uppstår.",
  },
  {
    question: "Kan man skriva ett skuldebrev själv?",
    answer:
      "Ja, men det finns risk att missa viktiga detaljer som kan skapa problem senare. Fride säkerställer att alla relevanta villkor finns med.",
  },
  {
    question: "Behöver ett skuldebrev bevittnas?",
    answer:
      "Vittnen krävs i regel inte för att ett skuldebrev ska vara giltigt, men det kan vara klokt att ha vittnen för att undvika tvister i efterhand.",
  },
  {
    question: "Vad kostar det?",
    answer:
      "Med Frides tjänst kan du skapa ett juridiskt korrekt skuldebrev online till ett fast pris – 499 kr inkl. moms. Ingen prenumeration, inga dolda avgifter.",
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
  name: "Skuldebrev",
  description:
    "Lån mellan privatpersoner blir tydliga med ett skuldebrev – belopp, ränta och återbetalning. Skapa ert online, steg för steg.",
  brand: { "@type": "Brand", name: "Fride" },
  offers: {
    "@type": "Offer",
    priceCurrency: "SEK",
    price: "499",
    availability: "https://schema.org/InStock",
    url: "https://app.fride.se/create/skuldbrev",
  },
};

export default function SkuldebrevPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Hero
        headline="Skapa skuldebrev online – enkelt och tryggt"
        subtext="Skapa ett juridiskt korrekt skuldebrev anpassat efter din situation. Dokumentera lånet tydligt och undvik framtida missförstånd."
        ctaLabel="Skapa skuldebrev"
        ctaHref="https://app.fride.se/create/skuldbrev"
        imageSrc="/images/Skuldebrev-hero.webp"
        imageAlt="Skapa skuldebrev online"
        price={499}
      />

      <TrustBar points={trustPoints} />

      {/* Vad är ett skuldebrev? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">Vad är ett skuldebrev?</h2>
          <p className="text-[#4a5e5f] leading-relaxed">
            Ett skuldebrev är ett juridiskt dokument som visar att en person är skyldig en annan person pengar.
            Det används mellan privatpersoner för att klargöra lånevillkor som återbetalningstid, ränta och
            andra överenskommelser. Med ett skuldebrev på plats minskar risken för missförstånd och båda
            parter vet exakt vad som gäller.
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
              Den är tränad på allt som har med skuldebrev att göra och kan svara på alla dina frågor
              kopplat till det. Du får tydliga och korrekta svar skrivet på ett enkelt och mänskligt
              sätt (trots att det är en AI). Testa nu — skriv din fråga här i rutan bredvid.
            </p>
            <p className="text-sm font-medium text-[#354042] mb-3">Exempel på frågor du kan ställa:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Vad är skillnaden mellan ett enkelt och löpande skuldebrev?",
                "Måste ett skuldebrev bevittnas?",
                "Kan jag ta ut ränta på ett lån till ett barn?",
                "Vad händer med skuldebrevet om låntagaren går bort?",
                "Hur skriver jag ett skuldebrev för lån till bostadsköp?",
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
              title="Fride AI – skuldebrev"
            />
          </div>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        stacked
        imageSrc="/images/Skuldebrev-img.webp"
        imageAlt="Skuldebrev – så funkar det"
        ctaHref="https://app.fride.se/create/skuldbrev"
        ctaLabel="Skapa skuldebrev"
      />

      {/* När behövs ett skuldebrev? */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När behövs ett skuldebrev?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Ett skuldebrev är särskilt viktigt i dessa situationer:
            </p>
            <CheckList items={[
              "Du lånar ut pengar till en privatperson",
              "Det handlar om större belopp",
              "Ni vill tydliggöra återbetalningsvillkoren",
              "Ni vill undvika oklarheter och framtida missförstånd",
            ]} />
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Skuldebrev-behov.webp" alt="När behövs ett skuldebrev?" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Enkelt skuldebrev */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Olika typer av skuldebrev
            </h2>
            <h3 className="font-serif text-xl font-semibold text-[#354042] mb-3">Enkelt skuldebrev</h3>
            <p className="text-[#4a5e5f] leading-relaxed mb-5">
              Det enkla skuldebrevet är ställt till en specifik person och kan inte överlåtas på samma sätt.
              Denna form passar utmärkt när:
            </p>
            <CheckList items={[
              "Du lånar till familj eller vänner",
              "Ni vill ha tydliga och enkla villkor",
              "Skulden inte ska kunna säljas vidare",
            ]} />
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Olika-skuldebrev.webp" alt="Enkelt skuldebrev" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Löpande skuldebrev */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/Lopande-skuldebrev.webp" alt="Löpande skuldebrev" fill className="object-cover" />
          </div>
          <div className="fade-in">
            <h3 className="font-serif text-xl font-semibold text-[#354042] mb-3">Löpande skuldebrev</h3>
            <p className="text-[#4a5e5f] leading-relaxed mb-5">
              Det löpande skuldebrevet innebär att den som har skuldebrevet i sin hand kan ha rätt att kräva
              betalning. Det används ofta i mer formella eller affärsmässiga situationer och passar när:
            </p>
            <CheckList items={[
              "Skulden kan behöva överlåtas till en annan part",
              "Det rör sig om mer komplexa affärsuppgörelser",
              "Ni behöver flexibilitet kring vem som är borgenär",
            ]} />
          </div>
        </div>
      </section>

      {/* Varför välja Frides skuldebrev? */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-5">
              Varför välja Frides skuldebrev?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Att skriva ett skuldebrev själv kan verka enkelt – men det är lätt att missa viktiga detaljer.
              Med Frides tjänst får du ett juridiskt korrekt dokument, anpassat efter din situation.
            </p>
            <CheckList items={[
              "Anpassat efter din situation – du svarar på några enkla frågor och vi skapar ett skuldebrev som passar just ditt lån.",
              "Juridiskt korrekt från början – vi ser till att alla viktiga delar finns med och att villkoren är rätt formulerade.",
              "Trygg betalning via Stripe – välj mellan kort, Klarna, Apple Pay eller Google Pay.",
              "Enkelt och snabbt – du är klar på bara några minuter, utan juridisk förkunskap.",
            ]} />
            <p className="mt-8 text-[#354042] mb-6">
              Skapa ditt skuldebrev digitalt för endast <strong>499 kr inkl. moms</strong>.<br />
              Skapar du fler dokument hos oss får du <strong>50% rabatt</strong> på alla efterföljande.<br />
              Ingen prenumeration. Inga dolda avgifter.
            </p>
            <Link
              href="https://app.fride.se/create/skuldbrev"
              className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
            >
              Skapa skuldebrev
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
            <Image src="/images/skuldebrev-mockup.webp" alt="Skuldebrev – Fride app-mockup" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Frågor och svar om skuldebrev." />

      <CTASection ctaHref="https://app.fride.se/create/skuldbrev" ctaLabel="Skapa skuldebrev" />
    </>
  );
}
