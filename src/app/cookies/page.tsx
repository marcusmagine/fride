import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Information om hur Fride använder cookies på sin webbplats.",
  alternates: { canonical: "https://www.fride.se/cookies" },
};

export default function CookiesPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl font-semibold text-[#20293d] mb-8">Cookies</h1>

      <div className="space-y-8 text-[#515b73] leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#20293d] mb-3">
            Vi använder cookies på vår hemsida.
          </h2>
          <p>
            Det gör vi för att underlätta för dig som besöker vår hemsida. Med andra ord, det syftar
            till att ge dig en bättre användarupplevelse. Om vi inte tillåts spara cookies på din
            dator vill vi förtydliga att det kommer påverka din användning av våra hemsida negativt.
            Enligt den nya lagen om elektronisk kommunikation som trädde i kraft den 25 juli 2003
            skall alla besökare på webbplatser som använder cookies informeras om detta. Besökaren
            skall även ges möjlighet att förhindra att cookies lagras på datorn.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-[#20293d] mb-3">
            Vad är en cookie och vilka använder vi?
          </h2>
          <p>
            En cookie är en liten textfil som sparas i din dator när du besöker en webbplats som
            använder detta. Nästa gång du besöker samma webbplats kan den läsa din textfil och visa
            sidorna enligt dina inställningar. Det finns olika typer av cookies, dels session cookies
            som sparar information i din webbläsare tills dess att du stängt ned den eller avslutat
            ditt besök på hemsidan, dels tredjeparts-cookies som sparar information kring din
            användning av hemsidan.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-[#20293d] mb-3">
            Varför använder vi det?
          </h2>
          <p>
            Vi använder ibland cookies och då enbart i syfte att underlätta för dig som besökare
            samt för att förbättra din användarupplevelse.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-[#20293d] mb-3">
            Och om jag inte vill att ni sparar cookies?
          </h2>
          <p>
            Om du inte accepterar att dessa sparas i din dator kan du ändra inställningarna i din
            webbläsare så att de inte sparas. Men då ska du vara väl medveten om att funktionaliteten
            när du besöker vår hemsida inte kommer att vara lika god.
          </p>
        </div>
      </div>
    </section>
  );
}
