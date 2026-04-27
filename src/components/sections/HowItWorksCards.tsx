interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DocumentIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const PenIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

const cards: Card[] = [
  {
    icon: <DocumentIcon />,
    title: "Svara på enkla frågor",
    description: "Vi ställer frågor anpassade efter din situation och förklarar vad varje val innebär.",
  },
  {
    icon: <ShieldIcon />,
    title: "Juridiskt korrekt dokument",
    description: "Fride skapar ett giltigt dokument som uppfyller lagens krav – utan krånglig juridik.",
  },
  {
    icon: <PenIcon />,
    title: "Skriv ut och underteckna",
    description: "Ladda ner, skriv ut och signera med två vittnen. Klart på några minuter.",
  },
];

export function HowItWorksCards() {
  return (
    <section className="bg-[#fff1e6] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl font-semibold text-[#354042] mb-10 fade-in">
          Så funkar det
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl p-8 flex flex-col gap-4`}
            >
              <div className="w-12 h-12 rounded-full bg-[#354042] text-[#fff1e6] flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <h3 className="font-serif font-semibold text-[#354042] text-lg">{card.title}</h3>
              <p className="text-sm text-[#4a5e5f] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
