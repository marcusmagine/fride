import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Äktenskapsförord",
  description:
    "Skapa ett äktenskapsförord online – juridiskt korrekt och anpassat efter er situation. Bestäm vad som ska vara enskild egendom. Fast pris 499 kr inkl. moms.",
  alternates: { canonical: "https://www.fride.se/aktenskapsforord" },
};

const trustPoints = ["Fast pris 499 kr inkl. moms", "Juridiskt korrekt", "Guidning steg för steg"];

const steps = [
  { title: "Svara på några frågor", description: "Berätta om er situation - vad ni äger, vad ni vill ska vara enskild egendom och vad ni vill skydda. Det tar några minuter." },
  { title: "Förordet skapas", description: "Vi genererar ett juridiskt korrekt äktenskapsförord anpassat efter er situation och era svar." },
  { title: "Signera och registrera", description: "Ni skriver under förordet – det måste bevittnas av två personer och registreras hos Skatteverket för att gälla. Vi guidar er genom hela processen." },
];

const faq = [
  {
    question: "Måste ett äktenskapsförord registreras för att gälla?",
    answer:
      "Ja. Till skillnad från ett samboavtal måste ett äktenskapsförord både bevittnas av två personer och registreras hos Skatteverket för att vara giltigt. Vi guidar er genom hur det går till.",
  },
  {
    question: "Kan vi upprätta ett äktenskapsförord efter att vi gift oss?",
    answer:
      "Ja, absolut. Ett äktenskapsförord kan upprättas när som helst – både före och under äktenskapet. Det spelar ingen roll hur länge ni har varit gifta.",
  },
  {
    question: "Kan vi ändra eller häva äktenskapsförordet senare?",
    answer:
      "Ja. Ni kan när som helst upprätta ett nytt äktenskapsförord som ändrar eller upphäver det tidigare. Det nya förordet måste också bevittnas och registreras hos Skatteverket för att gälla.",
  },
  {
    question: "Vad händer om vi skiljer oss utan äktenskapsförord?",
    answer:
      "Utan äktenskapsförord gäller äktenskapsbalkens huvudregel: all giftorättsgods – det vill säga det mesta ni äger – ska delas lika vid en bodelning. Det inkluderar tillgångar ni haft var för sig långt innan äktenskapet, om de inte specifikt undantagits.",
  },
  {
    question: "Skyddar äktenskapsförordet även mina barn från ett tidigare förhållande?",
    answer:
      "Ett äktenskapsförord reglerar vad som händer vid skilsmässa eller dödsfall mellan er som är gifta. Om du vill säkerställa att dina barn från ett tidigare förhållande ärver det du vill att de ska ärva bör du också upprätta ett testamente – det är det dokument som styr hur ditt arv fördelas.",
  },
  {
    question: "Kan vi göra delar av vår egendom till enskild och annat till giftorättsgods?",
    answer:
      "Ja. Ni bestämmer själva vad förordet ska omfatta. Det kan vara en specifik bostad, ett arv, ett företag eller alla tillgångar – ni väljer exakt vad som ska vara enskild egendom och vad som ska förbli giftorättsgods.",
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

export default function AktenskapsforodPage() {
  return (
    <>
      <Hero
        headline="Skapa äktenskapsförord online – enkelt och tryggt"
        subtext="Med ett äktenskapsförord bestämmer ni själva vad som ska gälla om ni separerar eller om någon av er går bort. Vi skapar ett juridiskt korrekt förord anpassat efter er situation – så att ni skyddar det som är viktigt för er båda."
        ctaLabel="Skapa äktenskapsförord"
        ctaHref="https://app.fride.se/create/aktenskapsforord"
        imageSrc="/images/aktenskapsforord-2.webp"
        imageAlt="Par som skapar äktenskapsförord"
        price={499}
      />

      <TrustBar points={trustPoints} />

      {/* Vad är ett äktenskapsförord? */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl fade-in">
          <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">Vad är ett äktenskapsförord?</h2>
          <p className="text-[#4a5e5f] leading-relaxed mb-4">
            När ni gifter er blir det mesta ni äger giftorättsgods – det vill säga att det ska delas
            lika vid en skilsmässa eller dödsfall.
          </p>
          <p className="text-[#4a5e5f] leading-relaxed mb-4">
            Med ett äktenskapsförord kan ni avtala om att viss egendom ska vara enskild – och alltså
            inte ingå i en bodelning. Det kan handla om ett arv ni fått, en bostad ni ägde innan
            äktenskapet, eller tillgångar ni vill hålla separerade.
          </p>
          <p className="text-[#4a5e5f] leading-relaxed">
            Ett äktenskapsförord kan upprättas när som helst – före eller under äktenskapet.
          </p>
        </div>
      </section>

      <ProcessSteps
        steps={steps}
        price={499}
        stacked
        imageSrc="/images/aktenskapsforord-sa-funkar-det.webp"
        imageAlt="Äktenskapsförord – så funkar det"
        ctaHref="https://app.fride.se/create/aktenskapsforord"
        ctaLabel="Skapa äktenskapsförord"
      />

      {/* När behövs ett äktenskapsförord? */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När behövs ett äktenskapsförord?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Ett äktenskapsförord kan vara viktigt i många situationer. Några vanliga exempel:
            </p>
            <CheckList items={[
              "En av er har ärvt pengar, en bostad eller andra tillgångar",
              "En av er äger ett företag som inte ska ingå i en bodelning",
              "Ni har fått eller förväntar er en gåva som ni vill skydda",
              "En av er har barn från ett tidigare förhållande",
              "Ni vill att det ni byggt upp var för sig ska förbli ert",
            ]} />
            <Link
              href="https://app.fride.se/create/aktenskapsforord"
              className="mt-8 inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa äktenskapsförord
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/aktenskapsforord-3.webp" alt="När behövs ett äktenskapsförord?" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Arv – stannar i familjen */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/arv-stanna-familjen.webp" alt="Äktenskapsförord för arv" fill className="object-cover" />
          </div>
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              När du fått ett arv – och vill att det stannar i familjen
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Utan äktenskapsförord blir arv du tar emot som gift giftorättsgods. Det innebär att det
              kan behöva delas vid en skilsmässa – även om det kom från din sida av familjen.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed">
              Med ett äktenskapsförord kan du göra arvet till enskild egendom. Det betyder att det är
              ditt oavsett vad som händer i äktenskapet – och att det vid din död kan gå vidare till
              dina barn eller den du själv bestämmer.
            </p>
          </div>
        </div>
      </section>

      {/* Gifta länge – behöver det ändå */}
      <section className="bg-[#fff1e6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-5">
              Ni har varit gifta länge – och behöver det ändå
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-4">
              Många tror att äktenskapsförord bara är för nygifte. Men behovet uppstår ofta mitt i
              livet – när ni ärver, startar företag, köper en ny fastighet eller när en av er går i
              pension med ett större sparande.
            </p>
            <p className="text-[#4a5e5f] leading-relaxed mb-8">
              Ett äktenskapsförord kan upprättas när som helst under äktenskapet. Det är aldrig för
              sent att göra det tydligt vad som ska gälla för er.
            </p>
            <Link
              href="https://app.fride.se/create/aktenskapsforord"
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#354042] transition-colors duration-300"
            >
              Skapa äktenskapsförord
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/aktenskapsforord-1.webp" alt="Par som planerar inför framtiden" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Varför välja Frides äktenskapsförord? */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042] mb-5">
              Varför välja Frides äktenskapsförord?
            </h2>
            <p className="text-[#4a5e5f] leading-relaxed mb-6">
              Vi är inte en juristbyrå – vi är en digital tjänst som gör det enkla möjligt för alla.
            </p>
            <CheckList items={[
              "Anpassat efter er situation – vi ställer rätt frågor och skapar ett förord som stämmer för just er.",
              "Juridiskt korrekt från början – ni slipper osäkerhet om förordet håller.",
              "Trygg betalning du väljer – via Klarna, Apple Pay eller kort.",
              "Enkelt och snabbt – ni kan skapa ert äktenskapsförord på bara några minuter, utan förkunskaper.",
            ]} />
            <p className="mt-8 text-[#354042] mb-6">
              Skapa ett äktenskapsförord digitalt för endast <strong>499 kr inkl. moms</strong>.<br />
              Skapar du fler dokument hos oss får du <strong>50% rabatt</strong> på alla efterföljande.<br />
              Ingen prenumeration. Inga dolda avgifter.
            </p>
            <Link
              href="https://app.fride.se/create/aktenskapsforord"
              className="inline-block bg-[#d27957] text-white font-medium px-8 py-4 rounded-full text-base hover:bg-[#c06a44] transition-colors"
            >
              Skapa äktenskapsförord
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-80 md:h-[520px] rounded-2xl overflow-hidden">
            <Image src="/images/aktenskapsforord-mockup.webp" alt="Äktenskapsförord – Fride app-mockup" fill className="object-cover" />
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Frågor och svar om äktenskapsförord." />

      <CTASection ctaHref="https://app.fride.se/create/aktenskapsforord" ctaLabel="Skapa äktenskapsförord" />
    </>
  );
}
