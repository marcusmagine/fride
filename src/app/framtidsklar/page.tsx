import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bli framtidsklar – Fride",
  description:
    "De flesta vet att det är viktigt. Få har gjort det. Bli framtidsklar med Fride – juridiskt korrekta dokument på några minuter, anpassade efter din livssituation.",
  alternates: { canonical: "https://www.fride.se/framtidsklar" },
};

const situations = [
  {
    label: "Ensamstående med barn",
    headline: "Du står ensam med ansvaret. Bli inte ensam med oron också.",
    description:
      "Som ensamstående förälder är du den viktigaste personen i ditt barns liv. Men vad händer om du plötsligt inte kan fatta beslut?",
    href: "/framtidsklar/ensamstaende",
    imageSrc: "/images/ensamstaende-1.webp",
    imageAlt: "Ensamstående förälder med barn",
    imagePosition: "object-center",
    documents: ["Framtidsfullmakt", "Testamente", "Gåvobrev"],
    ctaText: "Se vad du behöver som ensamstående",
  },
  {
    label: "Gift",
    headline: "Ni har byggt något tillsammans. Se till att det skyddas.",
    description:
      "Äktenskapet ger trygghet — men inte alltid det skydd ni tror. Utan rätt dokument bestämmer lagen, inte ni.",
    href: "/framtidsklar/gift",
    imageSrc: "/images/gift-1.webp",
    imageAlt: "Gift par",
    imagePosition: "object-top",
    documents: ["Framtidsfullmakt", "Testamente", "Äktenskapsförord", "Gåvobrev"],
    ctaText: "Se vad ni behöver som gifta",
  },
  {
    label: "Sambor",
    headline: "Ni lever som ett par. Men lagen ser er inte alltid som ett.",
    description:
      "Sambor har inte samma automatiska rättigheter som gifta. Det betyder att den du älskar kanske inte kan ta hand om det praktiska om något händer.",
    href: "/framtidsklar/sambor",
    imageSrc: "/images/sambor-1.webp",
    imageAlt: "Sambo par",
    imagePosition: "object-top",
    documents: ["Framtidsfullmakt", "Samboavtal", "Testamente", "Skuldebrev"],
    ctaText: "Se vad ni behöver som sambor",
  },
];

const whyItems = [
  {
    title: "Livet är oförutsägbart",
    description:
      "Sjukdom, olycka eller dödsfall kan hända vem som helst, när som helst. Rätt dokument säkerställer att det du vill ska ske — faktiskt sker.",
  },
  {
    title: "Lagen bestämmer om du inte gör det",
    description:
      "Utan testamente fördelas arvet enligt arvslagen. Utan framtidsfullmakt kan ingen ta hand om dig. Utan samboavtal avgör lagen vem som äger vad.",
  },
  {
    title: "Det är enklare än du tror",
    description:
      "Hos Fride svarar du på några frågor och vi skapar ett juridiskt korrekt dokument på några minuter — steg för steg, på svenska, till ett fast pris.",
  },
];

export default function FramtidsklarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#fff1e6] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-4">
              Framtidsklar
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] leading-tight mb-5">
              Vad gäller för dig – och vad behöver du ha på plats?
            </h1>
            <p className="text-base md:text-lg text-[#4a5e5f] leading-relaxed mb-6">
              De flesta vet att det är viktigt. Få har gjort det. Välj din situation nedan – vi
              guidar dig till exakt vad du behöver, steg för steg.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#354042]">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#d27957]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Fast pris 499 kr
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#d27957]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Juridiskt korrekt
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#d27957]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Klart på 20 minuter
              </span>
            </div>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image
                src="/images/framtidsklar.webp"
                alt="Familj som planerar framtiden"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Varför bli framtidsklar? */}
      <section className="bg-[#fff1e6] py-16 md:py-20 border-t border-[#d9c1b1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in mb-12">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
              Varför det är viktigt
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042]">
              Att vara framtidsklar handlar om att ha koll — i förväg.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, i) => (
              <div key={item.title} className={`fade-in fade-in-delay-${i + 1}`}>
                <div className="w-10 h-10 rounded-full bg-white border border-[#d9c1b1] flex items-center justify-center mb-4">
                  <span className="font-serif font-semibold text-[#d27957]">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#354042] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4a5e5f] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livssituationer */}
      <section id="livssituationer" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {situations.map((s, i) => (
              <Link
                key={s.label}
                href={s.href}
                className={`fade-in fade-in-delay-${i + 1} group bg-white border border-[#d9c1b1] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 grid md:grid-cols-[280px_1fr] items-stretch`}
              >
                <div className="relative h-52 md:h-auto overflow-hidden">
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    fill
                    className={`object-cover ${s.imagePosition} group-hover:scale-[1.03] transition-transform duration-500`}
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-2">
                      {s.label}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#354042] leading-snug mb-3">
                      {s.headline}
                    </h3>
                    <p className="text-sm text-[#4a5e5f] leading-relaxed mb-5">{s.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.documents.map((doc) => (
                        <span
                          key={doc}
                          className="text-xs bg-[#fff1e6] text-[#354042] border border-[#d9c1b1] px-3 py-1 rounded-full"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#d27957] group-hover:text-[#c06a44] transition-colors">
                    {s.ctaText}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Så funkar det */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
              Så funkar det
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-6">
              Tre steg till trygghet
            </h2>
            <ol className="flex flex-col gap-6">
              {[
                { title: "Svara på några frågor", desc: "Vi guidar dig steg för steg och anpassar dokumentet efter din situation." },
                { title: "Dokumentet skapas", desc: "Juridiskt korrekt och anpassat efter just dig." },
                { title: "Betala och ta emot", desc: "Ditt dokument skickas direkt till din e-post." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#354042] text-[#fff1e6] flex items-center justify-center font-semibold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-[#354042] mb-1">{step.title}</p>
                    <p className="text-sm text-[#4a5e5f] leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 inline-flex items-center gap-3 border border-[#d9c1b1] rounded-xl px-4 py-2.5 bg-[#fff1e6]">
              <span className="text-2xl font-serif font-semibold text-[#354042]">499 kr</span>
              <span className="text-xs text-[#4a5e5f] leading-tight">inkl.<br />moms</span>
              <span className="w-px h-6 bg-[#d9c1b1]" />
              <span className="text-xs text-[#4a5e5f] leading-tight">50% rabatt<br />på fler dokument</span>
            </div>
          </div>
          <div className="fade-in fade-in-delay-1 relative h-72 md:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-par.webp"
              alt="Par som planerar framtiden"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Avslutande CTA */}
      <section className="bg-[#20293d] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#fff1e6] mb-4 fade-in">
            De flesta skjuter upp det. Du behöver inte.
          </h2>
          <p className="text-[#fff1e6]/70 mb-8 fade-in">
            Det tar 20 minuter. Det kostar 499 kr. Och det är ordnat för resten av livet.
          </p>
          <Link
            href="https://app.fride.se/"
            className="fade-in inline-block bg-[#d27957] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#c06a44] transition-colors duration-300"
          >
            Kom igång nu
          </Link>
        </div>
      </section>
    </>
  );
}
