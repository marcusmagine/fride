import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framtidsfullmakt",
  description:
    "Skapa en framtidsfullmakt online med juridisk guidning. Bestäm vem som tar hand om det praktiska om du inte kan det själv. Fast pris 499 kr.",
  alternates: { canonical: "https://www.fride.se/framtidsfullmakt" },
};

const trustPoints = ["Fast pris 499 kr", "Juridiskt korrekt", "Stegvis vägledning"];

const steps = [
  { title: "Svara på frågor", description: "Enkla frågor anpassade efter din situation." },
  { title: "Få vägledning", description: "Vi förklarar vad varje val innebär." },
  { title: "Granska dokumentet", description: "Se igenom ditt färdiga dokument." },
  { title: "Skriv ut och underteckna", description: "Ladda ner, skriv ut och signera med vittnen." },
];

const faq = [
  {
    question: "Vad är en framtidsfullmakt?",
    answer:
      "En framtidsfullmakt är ett juridiskt dokument där du utser en person att sköta dina angelägenheter om du i framtiden inte kan göra det själv, till exempel på grund av sjukdom eller demens.",
  },
  {
    question: "Måste en framtidsfullmakt registreras?",
    answer:
      "Nej, en framtidsfullmakt behöver inte registreras hos någon myndighet för att vara giltig. Den träder i kraft när du inte längre kan ta hand om dig själv.",
  },
  {
    question: "Vem kan vara fullmaktshavare?",
    answer:
      "Fullmaktshavaren måste vara en myndig person. Det är vanligt att utse en närstående, som en make/maka, sambo, barn eller syskon.",
  },
  {
    question: "Hur skrivs en framtidsfullmakt under?",
    answer:
      "Du skriver under inför två vittnen som är närvarande samtidigt. Vittnena intygar att du är vid dina sinnens fulla bruk och att du förstår innebörden av fullmakten.",
  },
  {
    question: "Vad händer om jag inte har en framtidsfullmakt?",
    answer:
      "Utan en framtidsfullmakt kan dina närstående behöva ansöka till Överförmyndarnämnden om att bli din förvaltare eller god man, vilket är en längre och mer komplicerad process.",
  },
];

export default function FramtidsfullmaktPage() {
  return (
    <>
      <Hero
        headline="Framtidsfullmakt — du bestämmer"
        subtext="Med en framtidsfullmakt bestämmer du själv vem som ska ta hand om det praktiska om du en dag inte kan göra det själv. Vi guidar dig steg för steg."
        ctaLabel="Skapa din framtidsfullmakt"
        ctaHref="https://app.fride.se/framtidsfullmakt"
        imageSrc="/images/framtidsfullmakt.webp"
        imageAlt="Person som planerar sin framtid"
      />
      <TrustBar points={trustPoints} />
      <ProcessSteps steps={steps} price={499} />
      <FAQ items={faq} />
    </>
  );
}
