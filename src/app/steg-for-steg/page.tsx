import { FAQ } from "@/components/sections/FAQ";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "När någon gått bort – steg för steg",
  description:
    "Vad behöver göras när en närstående går bort, och i vilken ordning? Vi har samlat de viktigaste stegen efter ett dödsfall.",
  alternates: { canonical: "https://www.fride.se/steg-for-steg" },
};

const steps = [
  {
    number: "01",
    title: "Berätta för de som behöver få veta",
    text: "Informera närstående, familj, vänner och arbetsgivare. Ta den tid ni behöver.",
  },
  {
    number: "02",
    title: "Kontakta en begravningsbyrå",
    text: "Begravningsbyrån hjälper till att planera ceremonin och kan vägleda i de närmaste stegen.",
  },
  {
    number: "03",
    title: "Beställ dödsfallsintyg",
    text: "Dödsfallsintyget behövs för att avsluta avtal, kontakta myndigheter och hantera bankkonton.",
  },
  {
    number: "04",
    title: "Se över hemmet och vardagen",
    text: "Hantera bostad, post, prenumerationer och abonnemang. Kontakta hyresvärd eller bostadsrättsförening vid behov.",
  },
  {
    number: "05",
    title: "Kontakta bank och försäkringsbolag",
    text: "Meddela om dödsfallet, få tillgång till konton för dödsboet och kontrollera eventuella livförsäkringar.",
  },
  {
    number: "06",
    title: "Gör bouppteckningen",
    text: "Bouppteckningen är ett juridiskt dokument som förtecknar den avlidnes tillgångar och skulder. Den måste göras inom tre månader efter dödsfallet.",
  },
  {
    number: "07",
    title: "Skicka in bouppteckningen",
    text: "Bouppteckningen ska skickas till Skatteverket senast fyra månader efter dödsfallet.",
  },
  {
    number: "08",
    title: "Genomför arvskifte",
    text: "När bouppteckningen är godkänd kan arvet fördelas enligt testamente eller lag.",
  },
  {
    number: "09",
    title: "Deklarera för dödsboet",
    text: "Om den avlidne hade inkomster eller tillgångar efter årets ingång kan dödsboet behöva deklareras.",
  },
];

const faq = [
  {
    question: "Vad är en bouppteckning?",
    answer:
      "En bouppteckning är ett juridiskt dokument som förtecknar en persons tillgångar och skulder vid dödsfallet. Det är ett krav enligt svensk lag och måste lämnas in till Skatteverket.",
  },
  {
    question: "Inom vilken tid måste bouppteckningen göras?",
    answer:
      "Bouppteckning ska förrättas senast tre månader efter dödsfallet och skickas till Skatteverket senast en månad efter förrättningen.",
  },
  {
    question: "Vem ansvarar för att göra bouppteckningen?",
    answer:
      "Det är dödsbodelägarna (normalt arvingarna) som ansvarar för att bouppteckningen görs. Man kan anlita hjälp av en jurist eller annan sakkunnig.",
  },
];

export default function StegForStegPage() {
  return (
    <>
      <section className="bg-[#fff1e6]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
            Vad ska man göra när någon har gått bort?
          </h1>
          <p className="text-lg text-[#4a5e5f] leading-relaxed max-w-2xl">
            Här har vi samlat en översikt över de viktigaste stegen efter ett dödsfall — vad som behöver göras, och i vilken ordning.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in fade-in-delay-${Math.min(i + 1, 4)} flex gap-6 border-b border-[#d9c1b1] pb-8 last:border-0`}
            >
              <span className="font-serif text-3xl font-semibold text-[#d9c1b1] flex-shrink-0 w-10">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif font-semibold text-[#354042] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[#4a5e5f] leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#fff1e6] border border-[#d9c1b1] rounded-2xl p-8 fade-in">
          <h2 className="font-serif text-xl font-semibold text-[#354042] mb-3">Ta ett steg i taget. Vi går bredvid.</h2>
          <p className="text-sm text-[#4a5e5f] leading-relaxed mb-6">
            Processen behöver inte hanteras snabbt. Vi finns här om du behöver hjälp med bouppteckning eller juridiska dokument.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/bouppteckning"
              className="bg-[#354042] text-[#fff1e6] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d27957] transition-colors duration-300"
            >
              Om bouppteckning
            </Link>
            <Link
              href="/kontakta-oss"
              className="border border-[#354042] text-[#354042] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#354042] hover:text-[#fff1e6] transition-colors duration-300"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faq} headline="Vanliga frågor om dödsfall och bouppteckning" track="green" />
    </>
  );
}
