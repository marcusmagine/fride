import Image from "next/image";

const scenarios = [
  "Du drabbas av demens eller annan kognitiv sjukdom",
  "Du råkar ut för en allvarlig olycka",
  "En stroke eller annan akut sjukdom gör dig oförmögen att fatta beslut",
  "Du vill undvika att dina närstående tvingas ansöka om god man",
];

export function WhenYouNeedIt() {
  return (
    <section className="bg-[#fff1e6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#20293d] leading-tight mb-6">
            När är en framtidsfullmakt bra att ha?
          </h2>
          <p className="text-[#515b73] leading-relaxed mb-8">
            En framtidsfullmakt träder i kraft den dag du inte längre kan ta hand om dina egna angelägenheter. Det kan hända tidigare än du tror – och utan en fullmakt på plats kan dina närstående stå handfallna.
          </p>
          <ul className="flex flex-col gap-4">
            {scenarios.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[#20293d] text-sm leading-relaxed">
                <svg
                  className="w-5 h-5 text-[#d27957] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-in fade-in-delay-2 relative h-80 md:h-[480px]">
          <Image
            src="/images/app-screenshot.webp"
            alt="Frideappen – skapa framtidsfullmakt digitalt"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
