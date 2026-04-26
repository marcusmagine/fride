import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skuldebrev",
  description:
    "Skapa ett skuldebrev online för lån mellan privatpersoner. Juridiskt korrekt och anpassat efter din situation. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/skuldebrev" },
};

const trustPoints = ["Fast pris 499 kr", "Juridiskt korrekt", "Tydliga lånevillkor"];

const steps = [
  { title: "Ange låneuppgifter", description: "Uppge information om långivare, låntagare och villkor." },
  { title: "Dokumentet skapas", description: "Ett skräddarsytt och juridiskt korrekt skuldebrev skapas." },
  { title: "Ladda ner och signera", description: "Hämta dokumentet direkt och skriv under." },
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
    question: "Krävs vittnen för ett skuldebrev?",
    answer:
      "Vittnen krävs i regel inte för att ett skuldebrev ska vara giltigt, men det kan vara klokt att ha vittnen för att undvika tvister i efterhand.",
  },
  {
    question: "Vad är skillnaden mellan enkelt och löpande skuldebrev?",
    answer:
      "Ett enkelt skuldebrev är riktat till en specifik person och är inte överlåtbart. Ett löpande skuldebrev kan överlåtas till tredje part och används oftare i affärsmässiga sammanhang.",
  },
];

export default function SkuldebrevPage() {
  return (
    <>
      <Hero
        headline="Skuldebrev online — enkelt och tryggt"
        subtext="Skapa ett juridiskt korrekt skuldebrev för lån mellan privatpersoner. Dokumentera lånet tydligt och undvik framtida missförstånd."
        ctaLabel="Skapa ditt skuldebrev"
        ctaHref="https://app.fride.se/skuldebrev"
        imageSrc="/images/hero-aldre.jpg"
        imageAlt="Äldre person som skriver under dokument"
      />
      <TrustBar points={trustPoints} />
      <ProcessSteps steps={steps} price={499} />
      <FAQ items={faq} />
    </>
  );
}
