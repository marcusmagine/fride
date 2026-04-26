interface TrustBarProps {
  points: string[];
}

export function TrustBar({ points }: TrustBarProps) {
  return (
    <section className="border-y border-[#d9c1b1] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
        {points.map((point) => (
          <div key={point} className="flex items-center gap-2 text-sm text-[#354042]">
            <svg className="w-4 h-4 text-[#354042] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
