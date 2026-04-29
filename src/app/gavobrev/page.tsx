import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gåvobrev",
  description:
    "Skapa ett juridiskt korrekt gåvobrev online. Anpassat efter din situation med stegvis guidning. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/gavobrev" },
};

const trustPoints = ["Fast pris 499 kr", "Juridiskt korrekt", "Stegvis vägledning"];

const steps = [
  { title: "Svara på frågor", description: "Uppge information om gåvan och de inblandade parterna." },
  { title: "Dokumentet skapas", description: "Ett juridiskt korrekt dokument skapas baserat på dina svar." },
  { title: "Ladda ner och signera", description: "Hämta ditt gåvobrev direkt och skriv under när det passar dig." },
];

const faq = [
  {
    question: "Måste ett gåvobrev registreras?",
    answer:
      "Nej, i de flesta fall behöver ett gåvobrev inte registreras. Det finns undantag, till exempel vid fastighetsöverlåtelser som kan kräva särskild registrering.",
  },
  {
    question: "Är ett gåvobrev juridiskt bindande?",
    answer:
      "Ja, ett korrekt upprättat och undertecknat gåvobrev är juridiskt bindande och gäller som ett bevis på att egendomen är en gåva.",
  },
  {
    question: "Kan man skriva ett gåvobrev själv?",
    answer:
      "Ja, det är möjligt att skriva ett gåvobrev själv, men det finns risk att missa viktiga detaljer. Fride guidar dig så att dokumentet blir korrekt.",
  },
  {
    question: "Behöver gåvobrev bevittnas?",
    answer:
      "I de flesta fall krävs inte bevittning för att ett gåvobrev ska vara giltigt, men vittnen kan ge extra trygghet och minska risken för framtida tvister.",
  },
  {
    question: "Vad kostar det?",
    answer:
      "Med Frides tjänst kan du skapa ett juridiskt korrekt gåvobrev online till ett fast pris – 499 kr inkl. moms. Ingen prenumeration, inga dolda avgifter.",
  },
];

function TwoColSection({
  heading,
  children,
  imageSrc,
  imageAlt,
  imageLeft = false,
  bg = "white",
}: {
  heading: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  bg?: "white" | "cream";
}) {
  const text = (
    <div className="fade-in">
      <h2 className="font-serif text-3xl font-semibold text-[#354042] leading-tight mb-5">{heading}</h2>
      {children}
    </div>
  );
  const image = (
    <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
  return (
    <section className={bg === "cream" ? "bg-[#fff1e6] py-16 md:py-20" : "py-16 md:py-20"}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {imageLeft ? <>{image}{text}</> : <>{text}{image}</>}
      </div>
    </section>
  );
}

export default function GavobrevPage() {
  return (
    <>
      <Hero
        headline="Skapa gåvobrev online – enkelt och tryggt"
        subtext="Skapa ett juridiskt korrekt gåvobrev anpassat efter din situation. Du guidas steg för steg och får ett färdigt dokument direkt."
        ctaLabel="Skapa gåvobrev"
        ctaHref="https://app.fride.se/create/gavobrev"
        imageSrc="/images/hero-par.webp"
        imageAlt="Par som planerar ett gåvobrev"
        price={499}
      />

      <TrustBar points={trustPoints} />

      {/* Vad är ett gåvobrev? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">Vad är ett gåvobrev?</h2>
          <p className="text-[#4a5e5f] leading-relaxed">
            Ett gåvobrev är ett juridiskt dokument som visar att något ges bort som en gåva. Det kan till
            exempel handla om pengar, en bostad eller annan egendom. I gåvobrevet kan du också ange villkor
            för gåvan – till exempel att den ska vara mottagarens enskilda egendom eller att den inte får
            säljas vidare. Ett gåvobrev gör det tydligt vad som gäller och minskar risken för missförstånd
            eller framtida tvister.
          </p>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        stacked
        imageSrc="/images/Bild-gavobrev.webp"
        imageAlt="Gåvobrev – så funkar det"
        ctaHref="https://app.fride.se/create/gavobrev"
        ctaLabel="Skapa gåvobrev"
      />

      {/* När behövs ett gåvobrev? */}
      <TwoColSection
        heading="När behövs ett gåvobrev?"
        imageSrc="/images/Gavobrev-behov.webp"
        imageAlt="När behövs ett gåvobrev?"
        bg="cream"
      >
        <p className="text-[#4a5e5f] leading-relaxed mb-5">
          Ett gåvobrev kan vara viktigt i flera situationer:
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "När du ger bort en bostad eller en del av en bostad",
            "När du vill att gåvan ska vara enskild egendom",
            "När det handlar om större summor pengar",
            "När du vill undvika oklarheter mellan familjemedlemmar",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
              <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </TwoColSection>

      {/* Gåvobrev mellan föräldrar och barn */}
      <TwoColSection
        heading="Gåvobrev mellan föräldrar och barn"
        imageSrc="/images/Gavobrev-barn.webp"
        imageAlt="Gåvobrev mellan föräldrar och barn"
        imageLeft
      >
        <div className="space-y-4 text-[#4a5e5f] leading-relaxed">
          <p>
            Vid gåvor inom familjen – särskilt större gåvor – är ett gåvobrev viktigt för att tydliggöra
            vad som gäller.
          </p>
          <p>Det kan till exempel handla om:</p>
          <ul className="flex flex-col gap-3">
            {[
              "om gåvan ska räknas som förskott på arv",
              "om den ska vara enskild egendom",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#354042] text-sm">
                <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </TwoColSection>

      {/* Gåvobrev för bostad, pengar eller andra tillgångar */}
      <TwoColSection
        heading="Gåvobrev för bostad, pengar eller andra tillgångar"
        imageSrc="/images/Gavobrev-tillgangar.webp"
        imageAlt="Gåvobrev för bostad och tillgångar"
        bg="cream"
      >
        <div className="space-y-4 text-[#4a5e5f] leading-relaxed">
          <p>
            När du ger bort en bostad, eller en del av en bostad, krävs ett skriftligt gåvobrev för att
            gåvan ska vara giltig. Det är också vanligt att ange villkor, till exempel att bostaden ska
            vara mottagarens enskilda egendom.
          </p>
          <p>
            Även vid gåvor av pengar eller värdefulla tillgångar kan ett gåvobrev vara klokt. Det skapar
            tydlighet och minskar risken för missförstånd mellan parter.
          </p>
        </div>
      </TwoColSection>

      {/* Varför välja Frides gåvobrev? */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-5">
              Varför välja Frides gåvobrev?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Att skriva ett gåvobrev själv kan verka enkelt – men det är lätt att missa viktiga detaljer.
              Med Frides tjänst får du ett juridiskt korrekt dokument, anpassat efter din situation.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Anpassat efter din situation – du svarar på några enkla frågor – vi skapar ett gåvobrev som passar just din gåva.",
                "Juridiskt korrekt från början – vi ser till att alla viktiga delar finns med och att villkoren är rätt formulerade.",
                "Trygg betalning via Stripe – välj mellan kort, Klarna, Apple Pay eller Google Pay.",
                "Enkelt och snabbt – du är klar på bara några minuter, utan juridisk förkunskap.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#354042] text-sm leading-relaxed">
                  <svg className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#354042] mb-6">
              Skapa ditt gåvobrev digitalt för endast <strong>499 kr inkl. moms</strong>.<br />
              Skapar du fler dokument hos oss får du <strong>50% rabatt</strong> på alla efterföljande.<br />
              Ingen prenumeration. Inga dolda avgifter.
            </p>
            <Link
              href="https://app.fride.se/create/gavobrev"
              className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
            >
              Skapa gåvobrev
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/images/Gavobrev-mockup.webp"
              alt="Gåvobrev – Fride app-mockup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Frågor och svar om gåvobrev." />

      <CTASection ctaHref="https://app.fride.se/create/gavobrev" ctaLabel="Skapa gåvobrev" />
    </>
  );
}
