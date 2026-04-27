import Link from "next/link";
import Image from "next/image";

interface Product {
  intent: string;
  title: string;
  price: number;
  features: string[];
  readMoreHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc: string;
  imageAlt: string;
  comingSoon?: boolean;
}

const products: Product[] = [
  {
    intent: "Jag vill välja vem som får hjälpa mig",
    title: "Framtidsfullmakt",
    price: 499,
    features: ["Guidning steg för steg", "Juridiskt korrekt", "Fast pris"],
    readMoreHref: "/framtidsfullmakt",
    ctaHref: "https://app.fride.se/create/framtidsfullmakt",
    ctaLabel: "Skapa framtidsfullmakt",
    imageSrc: "/images/hero-aldre.jpg",
    imageAlt: "Person som planerar sin framtid",
  },
  {
    intent: "Jag vill vara tydlig med min gåva",
    title: "Gåvobrev",
    price: 499,
    features: ["Guidning steg för steg", "Juridiskt korrekt", "Fast pris"],
    readMoreHref: "/gavobrev",
    ctaHref: "https://app.fride.se/gavobrev",
    ctaLabel: "Skapa gåvobrev",
    imageSrc: "/images/hero-par.webp",
    imageAlt: "Par som delar på saker",
  },
  {
    intent: "Jag vill reglera ett lån med någon",
    title: "Skuldebrev",
    price: 499,
    features: ["Juridiskt korrekt", "Guidning steg för steg", "Fast pris"],
    readMoreHref: "/skuldebrev",
    ctaHref: "https://app.fride.se/skuldebrev",
    ctaLabel: "Skapa skuldebrev",
    imageSrc: "/images/hero-familj.webp",
    imageAlt: "Familj",
  },
  {
    intent: "Jag vill vara tydlig med mitt arv",
    title: "Testamente",
    price: 499,
    features: ["Guidning steg för steg", "Juridiskt korrekt", "Fast pris"],
    imageSrc: "/images/product-testamente.webp",
    imageAlt: "Familj",
    comingSoon: true,
  },
  {
    intent: "Jag vill vara tydlig i min relation",
    title: "Samboavtal och äktenskapsförord",
    price: 499,
    features: ["Guidning steg för steg", "Juridiskt korrekt", "Fast pris"],
    imageSrc: "/images/bouppteckning.webp",
    imageAlt: "Par",
    comingSoon: true,
  },
];

function CircleCheck() {
  return (
    <svg className="w-5 h-5 text-[#d27957] flex-shrink-0" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" d="M8.5 12l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

function ProductCard({ product, featured }: { product: Product; featured?: boolean }) {
  return (
    <div className={`bg-[#fff1e6] flex gap-4 md:gap-6 ${featured ? "p-8 md:p-12" : "p-6 md:p-10"}`}>
      <div className="flex-1 min-w-0">
        <p className={`font-serif text-[#354042] leading-snug mb-3 md:mb-4 ${featured ? "text-2xl md:text-4xl" : "text-xl md:text-3xl"}`}>
          {product.intent}
        </p>
        <p className="font-semibold text-[#354042] mb-3 md:mb-4 text-sm md:text-base">
          {product.title} – {product.price} kr
        </p>
        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#354042]">
              <CircleCheck />
              {f}
            </li>
          ))}
        </ul>
        {product.readMoreHref && (
          <Link
            href={product.readMoreHref}
            className="block text-sm text-[#d27957] underline underline-offset-2 mb-4 hover:text-[#354042] transition-colors"
          >
            Läs mer om {product.title.toLowerCase()}
          </Link>
        )}
        {product.comingSoon ? (
          <button
            disabled
            className="bg-[#d27957]/50 text-white text-sm font-medium px-5 py-2.5 rounded-full cursor-not-allowed"
          >
            Lanseras snart
          </button>
        ) : (
          <Link
            href={product.ctaHref!}
            className="inline-block bg-[#d27957] text-white text-sm font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#c06a44] transition-colors"
          >
            {product.ctaLabel}
          </Link>
        )}
      </div>
      {/* Photo — hidden on very small screens to prevent forehead-only crops */}
      <div className={`hidden sm:block flex-shrink-0 self-center ${featured ? "w-40 md:w-56" : "w-28 md:w-40"}`}>
        <div className={`relative overflow-hidden rounded-xl ${featured ? "h-52 md:h-72" : "h-36 md:h-52"}`}>
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const [featured, ...rest] = products;

  return (
    <section className="bg-[#20293d] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#fff1e6] text-center mb-10 fade-in">
          Vad vill du ta hand om?
        </h2>

        <div className="flex flex-col gap-px bg-[#20293d]">
          <ProductCard product={featured} featured />

          <div className="grid md:grid-cols-2 gap-px">
            {rest.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
