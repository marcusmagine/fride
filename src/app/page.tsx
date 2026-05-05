import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
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
        headline="Vi hjälper dig att ta hand om livets viktiga beslut – i tid."
        subtext="Förbered dig och dina anhöriga för framtiden, och slipp onödigt svåra situationer. Hos Fride får du guidning steg för steg och kan enkelt skapa juridiskt korrekta dokument som fungerar i praktiken."
        ctaLabel="Skapa framtidsfullmakt"
        ctaHref="https://app.fride.se/create/framtidsfullmakt"
        secondaryLabel="Utforska fler dokument"
        secondaryHref="/framtidsdokument"
        imageSrc="/images/hero-familj.webp"
        imageAlt="Familj som skrattar tillsammans"
      />
      <ProductsSection />
      <LifeSituationsSection />
      <FoundersSection />
      <CTASection ctaHref="https://app.fride.se" ctaLabel="Skapa ditt dokument" />
    </>
  );
}
