import Link from "next/link";
import Image from "next/image";

const points = [
  "Kostnadsfri att använda",
  "Inget konto behövs",
  "Tydliga svar på svenska",
];

/**
 * Lyfter Fride AI på startsidan och leder vidare till /framtidsklar,
 * där själva chatten finns.
 */
export function AiHighlightSection() {
  return (
    <section className="bg-[#fff1e6] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <p className="text-xs font-medium text-[#d27957] uppercase tracking-widest mb-3">
            Fride AI
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#20293d] leading-tight mb-5">
            Ställ dina frågor till vår AI – helt kostnadsfritt
          </h2>
          <p className="text-[#515b73] leading-relaxed mb-4">
            Vår AI är särskilt tränad på framtidsfullmakt, testamente, samboavtal, gåvor,
            skuldebrev och bouppteckning. Den svarar på både juridiska och praktiska frågor –
            oavsett om du förbereder dig inför framtiden eller står mitt i att ta hand om en
            anhörigs bortgång.
          </p>
          <p className="text-[#515b73] leading-relaxed mb-8">
            Beskriv din egen situation med dina egna ord, så får du tydliga och korrekta svar.
            Den är öppen för alla att använda.
          </p>

          <p className="text-sm font-medium text-[#20293d] mb-3">
            Exempel på frågor du kan ställa:
          </p>
          <ul className="flex flex-col gap-2 mb-8">
            {[
              "Vad händer med vårt hus om min sambo går bort?",
              "Behöver jag testamente om jag har särkullbarn?",
              "Vem får hjälpa mig med ekonomin om jag blir sjuk?",
              "Måste vi göra en bouppteckning, och hur går det till?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-2 text-sm text-[#515b73] leading-relaxed">
                <span className="text-[#d27957] shrink-0 mt-0.5">›</span>
                {q}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#515b73] mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-[#20293d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="/framtidsklar"
            className="inline-block bg-[#20293d] text-[#fff1e6] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#3A4A6E] transition-colors duration-300"
          >
            Ställ en fråga till Fride AI
          </Link>
        </div>

        <div className="fade-in fade-in-delay-1 relative h-80 md:h-[540px] rounded-2xl overflow-hidden">
          <Image
            src="/images/fride-ai-mobil.webp"
            alt="Person som ställer en fråga till Fride AI i mobilen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
