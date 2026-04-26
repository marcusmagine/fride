import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
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
    question: "Krävs vittnen för ett gåvobrev?",
    answer:
      "Vittnen krävs generellt inte för att ett gåvobrev ska vara giltigt, men vittnen kan ge extra trygghet och minska risken för framtida tvister.",
  },
  {
    question: "När behöver man ett gåvobrev?",
    answer:
      "Du behöver ett gåvobrev vid fastighetsöverlåtelse, när du vill att en gåva ska vara mottagarens enskilda egendom, vid större penningbelopp eller när du vill ge familjen tydlighet om gåvans syfte.",
  },
];

export default function GavobrevPage() {
  return (
    <>
      <Hero
        headline="Gåvobrev online — enkelt och tryggt"
        subtext="Skapa ett juridiskt korrekt gåvobrev anpassat efter din situation. Du guidas steg för steg och får ett färdigt dokument direkt."
        ctaLabel="Skapa ditt gåvobrev"
        ctaHref="https://app.fride.se/gavobrev"
        imageSrc="/images/hero-par.webp"
        imageAlt="Par som planerar sitt testamente"
      />
      <TrustBar points={trustPoints} />
      <ProcessSteps steps={steps} price={499} />
      <FAQ items={faq} />
    </>
  );
}
