import Image from "next/image";
import Link from "next/link";
import { trackColors, type Track } from "@/lib/track";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  headline?: string;
  steps: Step[];
  price?: number;
  imageSrc?: string;
  imageAlt?: string;
  stacked?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  track?: Track;
}

export function ProcessSteps({ headline = "Så funkar det", steps, price, imageSrc, imageAlt, stacked, ctaHref, ctaLabel, track = "blue" }: ProcessStepsProps) {
  const c = trackColors[track];
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className={imageSrc ? "grid md:grid-cols-2 gap-12 items-center" : undefined}>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-2 fade-in">
            <h2 className={`font-serif text-3xl font-semibold ${c.heading}`}>{headline}</h2>
            {price && (
              <p className={`${c.body} text-sm`}>
                Fast pris <span className={`font-semibold ${c.heading}`}>{price} kr</span>
              </p>
            )}
          </div>
          <div className={stacked ? "flex flex-col gap-6" : "grid sm:grid-cols-2 gap-6"}>
            {steps.map((step, i) => (
              <div key={i} className={`fade-in fade-in-delay-${i + 1} border border-[#d9c1b1] rounded-2xl p-6`}>
                <div className={`w-8 h-8 rounded-full ${c.marker} text-[#fff1e6] text-sm font-medium flex items-center justify-center mb-4`}>
                  {i + 1}
                </div>
                <h3 className={`font-serif font-semibold ${c.heading} mb-2`}>{step.title}</h3>
                <p className={`text-sm ${c.body} leading-relaxed`}>{step.description}</p>
              </div>
            ))}
          </div>
          {ctaHref && ctaLabel && (
            <div className="mt-8 fade-in">
              <Link
                href={ctaHref}
                className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#3A4A6E] transition-colors duration-300"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

        {imageSrc && (
          <div className="fade-in fade-in-delay-2 relative w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}
