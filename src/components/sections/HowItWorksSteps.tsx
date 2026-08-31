interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Välj det som passar din situation",
    description:
      "Utgå från din livssituation eller välj det framtidsdokument du redan vet att du behöver.",
  },
  {
    title: "Svara på frågor med tydlig guidning",
    description:
      "Du får hjälp steg för steg, på svenska, utan att behöva kunna juridiken i förväg.",
  },
  {
    title: "Få ditt dokument klart",
    description:
      "Dina svar blir ett juridiskt korrekt dokument med instruktioner för vad du gör härnäst.",
  },
];

export function HowItWorksSteps() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10 md:mb-12 fade-in">
          <p className="text-xs font-medium uppercase tracking-[1.2px] leading-snug text-[#d27957] mb-2">
            Så fungerar det
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#20293d] leading-tight">
            Från viktig tanke till färdigt dokument.
          </h2>
          <p className="mt-4 max-w-xl text-[#515b73] leading-relaxed">
            Fride gör juridiken begriplig och hjälper dig framåt i tre tydliga steg.
          </p>
        </div>

        {/* Ordnad lista — stegen ska följas i tur och ordning */}
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`fade-in fade-in-delay-${i + 1} border border-[#d9c1b1] rounded-2xl p-6 md:p-7`}
            >
              <span className="font-serif text-lg font-semibold text-[#d27957]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-semibold leading-snug text-[#20293d] mt-5 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#515b73] leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
