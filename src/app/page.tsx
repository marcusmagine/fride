import { Hero } from "@/components/sections/Hero";
import { LifeSituationsSection } from "@/components/sections/LifeSituationsSection";
import { LatestArticlesSection } from "@/components/sections/LatestArticlesSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Fride – Skapa juridiska dokument online till fast pris",
  description:
    "Bli framtidsklar. Skapa testamente, framtidsfullmakt och andra juridiska dokument online – steg för steg, på svenska. Fast pris 499 kr per dokument.",
  alternates: { canonical: "https://www.fride.se" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Bli framtidsklar – innan livet ändrar sig."
        subtext="De flesta vet att det är viktigt. Få har gjort det. Hos Fride skapar du juridiskt korrekta framtidsdokument på några minuter – steg för steg, på svenska."
        ctaLabel="Bli framtidsklar"
        ctaHref="#bli-framtidsklar"
        secondaryLabel="Se alla framtidsdokument"
        secondaryHref="/framtidsdokument"
        imageSrc="/images/hero-familj.webp"
        imageAlt="Familj som skrattar tillsammans"
      />
      <LifeSituationsSection />
      <LatestArticlesSection />
      <FoundersSection />
      <CTASection ctaHref="https://app.fride.se" ctaLabel="Skapa ditt dokument" headline="Redo att bli framtidsklar?" />
    </>
  );
}
