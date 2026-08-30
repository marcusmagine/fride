import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

interface HeroProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  price?: number;
}

export function Hero({
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt,
  price,
}: HeroProps) {
  return (
    <section className="bg-[#fff1e6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-5xl font-semibold text-[#20293d] leading-tight"
          >
            {headline}
          </h1>
          <p className="mt-5 text-base md:text-lg text-[#d27957] leading-relaxed">{subtext}</p>
          {price && (
            <div className="mt-6 inline-flex items-center gap-3 border border-[#d9c1b1] rounded-xl px-4 py-2.5 bg-white/50">
              <span className="text-2xl font-serif font-semibold text-[#20293d]">{price} kr</span>
              <span className="text-xs text-[#515b73] leading-tight">inkl.<br />moms</span>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={ctaHref}
              className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#3A4A6E] transition-colors duration-300"
            >
              {ctaLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-block border border-[#20293d] text-[#20293d] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#20293d] hover:text-[#fff1e6] transition-colors duration-300"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </FadeIn>

        {imageSrc ? (
          <FadeIn delay={160} className="relative h-72 md:h-[480px]">
            <div className="absolute inset-0 overflow-hidden rounded-t-[50%] rounded-b-2xl">
              <Image src={imageSrc} alt={imageAlt ?? ""} fill className="object-cover" priority />
            </div>
          </FadeIn>
        ) : (
          <div className="hidden md:block relative h-[480px]">
            <div className="absolute inset-0 bg-[#d9c1b1]/30 rounded-t-[50%] rounded-b-2xl" />
          </div>
        )}
      </div>
    </section>
  );
}
