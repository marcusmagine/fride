import { Hero } from "@/components/sections/Hero";
import { LifeSituationsSection } from "@/components/sections/LifeSituationsSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fride – Juridiska dokument online",
  description:
    "Skapa juridiskt korrekta dokument online med guidning steg för steg. Framtidsfullmakt, gåvobrev och skuldebrev till ett fast pris.",
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
      <FoundersSection />
      <CTASection ctaHref="https://app.fride.se" ctaLabel="Skapa ditt dokument" />
    </>
  );
}
