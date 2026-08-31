import { Hero } from "@/components/sections/Hero";
import { HowItWorksSteps } from "@/components/sections/HowItWorksSteps";
import { LifeSituationsSection } from "@/components/sections/LifeSituationsSection";
import { LatestArticlesSection } from "@/components/sections/LatestArticlesSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Fride – Juridiska framtidsdokument online till fast pris" },
  description:
    "Skapa juridiskt korrekta framtidsdokument online, på svenska och till fast pris. Fride guidar dig steg för steg till rätt dokument för din situation.",
  alternates: { canonical: "https://www.fride.se" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Skapa rätt juridiska dokument – innan livet förändras."
        subtext="Bli framtidsklar med juridiskt korrekta dokument online, på svenska och till fast pris. Du får tydlig guidning steg för steg och blir klar på några minuter."
        ctaLabel="Hitta rätt dokument för mig"
        ctaHref="#bli-framtidsklar"
        secondaryLabel="Se dokument och fasta priser"
        secondaryHref="/framtidsdokument"
        trustPoints={["Fast pris", "Juridiskt korrekt", "Guidning steg för steg"]}
        imageSrc="/images/hero-familj.webp"
        imageAlt="Familj som skrattar tillsammans"
      />
      <HowItWorksSteps />
      <LifeSituationsSection />
      <FoundersSection />
      <LatestArticlesSection />
      <CTASection ctaHref="https://app.fride.se" ctaLabel="Skapa ditt dokument" headline="Redo att bli framtidsklar?" />
    </>
  );
}
