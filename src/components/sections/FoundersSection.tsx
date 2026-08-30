import Link from "next/link";
import Image from "next/image";

export function FoundersSection() {
  return (
    <section className="bg-[#fff1e6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] md:h-[500px] md:aspect-auto fade-in">
          <Image
            src="/images/elza-joanna.webp"
            alt="Joanna och Elza, grundarna till Fride"
            fill
            className="object-cover object-center rounded-2xl"
          />
        </div>

        <div className="fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#20293d] leading-snug mb-6">
            Möt Joanna och Elza, grundarna till Fride.
          </h2>
          <p className="text-[#20293d] leading-relaxed mb-8">
            Vi har sett hur svåra situationer i livet förvärrats av att man inte har de rättigheter man behöver som
            anhörig, och vilken påverkan det har för de som drabbas. Därför startade vi Fride – för att göra livets
            svårare omställningar något lättare, genom att förbereda sig på rätt sätt.
          </p>
          <Link
            href="/om-oss"
            className="inline-block bg-[#d27957] text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-[#c06a44] transition-colors"
          >
            Läs mer om oss här
          </Link>
        </div>
      </div>
    </section>
  );
}
