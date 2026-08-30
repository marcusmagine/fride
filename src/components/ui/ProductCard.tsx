import Link from "next/link";

interface ProductCardProps {
  title: string;
  href: string;
  price?: number;
  comingSoon?: boolean;
  description?: string;
}

export function ProductCard({ title, href, price, comingSoon, description }: ProductCardProps) {
  return (
    <div
      className={`relative border border-[#d9c1b1] rounded-2xl p-6 flex flex-col gap-3 bg-white transition-all duration-300 ${
        comingSoon ? "opacity-50" : "hover:border-[#20293d] hover:shadow-md"
      }`}
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs bg-[#fff1e6] text-[#515b73] border border-[#d9c1b1] px-2 py-0.5 rounded-full">
          Kommer snart
        </span>
      )}
      <h3 className="font-serif font-semibold text-[#20293d] text-lg">{title}</h3>
      {description && <p className="text-sm text-[#515b73] leading-relaxed">{description}</p>}
      {price && <p className="text-sm text-[#515b73]">{price} kr</p>}
      {!comingSoon && (
        <Link
          href={href}
          className="mt-auto inline-block text-sm font-medium text-[#d27957] hover:text-[#20293d] transition-colors"
        >
          Läs mer →
        </Link>
      )}
    </div>
  );
}
