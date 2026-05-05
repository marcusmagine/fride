import Link from "next/link";
import Image from "next/image";

const situations = [
  {
    label: "Sambor",
    headline: "Ni lever som ett par. Men lagen ser er inte alltid som ett.",
    description:
      "Sambor har inte samma automatiska rättigheter som gifta. Det fixar ni enkelt.",
    href: "/framtidsklar/sambor",
    imageSrc: "/images/sambor-1.webp",
    imageAlt: "Sambo par",
  },
  {
    label: "Gift",
    headline: "Ni har byggt något tillsammans. Se till att det skyddas.",
    description:
      "Äktenskapet ger trygghet — men inte alltid det skydd du tror. Få ordning på det viktiga.",
    href: "/framtidsklar/gift",
    imageSrc: "/images/gift-1.webp",
    imageAlt: "Gift par",
  },
  {
    label: "Ensamstående med barn",
    headline: "Du står ensam med ansvaret. Bli inte ensam med oron också.",
    description:
      "Som ensamstående förälder är du den viktigaste personen i ditt barns liv. Se till att de är skyddade.",
    href: "/framtidsklar/ensamstaende",
    imageSrc: "/images/ensamstaende-1.webp",
    imageAlt: "Ensamstående förälder med barn",
  },
];

export function LifeSituationsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 fade-in">
          <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
            Bli framtidsklar
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#354042]">
            Vad stämmer in på dig?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {situations.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className={`fade-in fade-in-delay-${i + 1} group flex flex-col bg-[#fff1e6] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-2">
                  {s.label}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#354042] leading-snug mb-3">
                  {s.headline}
                </h3>
                <p className="text-sm text-[#4a5e5f] leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#354042] group-hover:text-[#d27957] transition-colors">
                  Bli framtidsklar
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
