import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bouppteckning – så går det till",
  description:
    "Vad är en bouppteckning och hur går det till? Lär dig om processen, tidsfristerna och dina skyldigheter när en närstående gått bort.",
  alternates: { canonical: "https://www.fride.se/bouppteckning" },
};

const steps = [
  { title: "Kartläggning av dödsboet", description: "Samla information om den avlidnes tillgångar och skulder." },
  { title: "Fullmakt från dödsbodelägare", description: "Om ni är flera arvingar behöver ni komma överens om vem som leder arbetet." },
  { title: "Insamling av information", description: "Hämta kontoutdrag, värderingsintyg och skulddokument från banker och myndigheter." },
  { title: "Sammanställning av dokument", description: "Upprätta det juridiska bouppteckningsdokumentet." },
  { title: "Granskning och underskrift", description: "Två förrättningspersoner som inte är dödsbodelägare granskar och undertecknar." },
  { title: "Inlämning till Skatteverket", description: "Skicka in bouppteckningen senast en månad efter förrättningen." },
];

const requirements = [
  "Måste genomföras inom tre månader efter dödsfallet",
  "Förrättas i närvaro av dödsbodelägarna",
  "Skickas till Skatteverket senast en månad efter förrättningen",
];

const faq = [
  {
    question: "Vad är en bouppteckning?",
    answer:
      "En bouppteckning är ett juridiskt dokument som förtecknar en persons tillgångar (tillexempel fastigheter, bankkonton och fordon) och skulder vid dödstillfället. Det är ett lagstadgat krav i Sverige.",
  },
  {
    question: "Vad är skillnaden mellan boutredningsman och skiftesman?",
    answer:
      "En boutredningsman utses av tingsrätten för att utreda och avveckla ett dödsbo när delägarna inte kan enas. En skiftesman hjälper till att fördela arvet om delägarna inte kommer överens om arvskiftet.",
  },
  {
    question: "Vad händer om man inte gör en bouppteckning?",
    answer:
      "Om bouppteckningen inte görs i tid kan Skatteverket förelägga dödsboet att genomföra den, ibland med vite. Det kan även orsaka problem vid arvskiftet och gentemot fordringsägare.",
  },
  {
    question: "Vad kostar en bouppteckning?",
    answer:
      "Kostnaden varierar. Gör ni bouppteckningen själva kostar det ingenting utöver tid och eventuella värderingskostnader. Anlitar ni hjälp kan det kosta från några tusenlappar upp till tiotusentals kronor beroende på dödsboets komplexitet.",
  },
  {
    question: "Kan man göra bouppteckningen själv?",
    answer:
      "Ja, det är möjligt att göra bouppteckningen själv om dödsboet är enkelt. Vid mer komplicerade dödsbon med fastigheter, företag eller tvister rekommenderas professionell hjälp.",
  },
];

export default function BouppteckningPage() {
  return (
    <>
      <section className="bg-[#fff1e6]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
            Bouppteckning — så går det till
          </h1>
          <p className="text-lg text-[#4a5e5f] leading-relaxed max-w-2xl mb-8">
            När en person går bort måste en bouppteckning göras. Det är både ett juridiskt krav och ett praktiskt verktyg för att skapa ordning i dödsboet.
          </p>

          <ul className="space-y-3">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-[#354042]">
                <svg className="w-4 h-4 text-[#354042] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} headline="Steg för steg" />

      <section className="max-w-6xl mx-auto px-6 pb-8 fade-in">
        <div className="bg-[#354042] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-[#fff1e6] mb-2">Behöver du hjälp?</h2>
            <p className="text-sm text-[#d9c1b1]">Vi erbjuder kostnadsfri rådgivning om bouppteckning.</p>
          </div>
          <Link
            href="/kontakta-oss"
            className="flex-shrink-0 bg-[#fff1e6] text-[#354042] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#d27957] hover:text-white transition-colors duration-300"
          >
            Kontakta oss
          </Link>
        </div>
      </section>

      <FAQ items={faq} />
    </>
  );
}
