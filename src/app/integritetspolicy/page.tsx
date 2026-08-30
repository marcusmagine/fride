import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Läs om hur Fride hanterar och skyddar dina personuppgifter.",
  alternates: { canonical: "https://www.fride.se/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl font-semibold text-[#20293d] mb-8">Integritetspolicy</h1>

      <div className="space-y-10 text-[#515b73] leading-relaxed">

        <p>
          Tack för att du tar dig tid att läsa vår integritetspolicy! Vi som tillhandahåller tjänsterna är
          Fride, representerad av Joanna Robarth ("Fride"). För frågor gällande denna integritetspolicy,
          kontakta oss på{" "}
          <a href="mailto:info@fride.se" className="text-[#d27957] hover:underline">info@fride.se</a>.
          För oss är den personliga integriteten av högsta vikt och vi strävar därför alltid efter att de
          personer som beställer våra tjänster eller på annat sätt kommer i kontakt med oss ska känna sig
          trygga med vår hantering av Personuppgifter (så som det är definierat nedan). För att uppnå en
          sådan trygghet eftersträvar vi alltid att upprätthålla högsta möjliga standard beträffande
          skyddet av Personuppgifter. Fride behandlar, hanterar, använder och skyddar därför Registrerades
          Personuppgifter i enlighet med denna integritetspolicy ("Integritetspolicy").
        </p>

        {/* Section 1 */}
        <div>
          <h2 className="font-serif text-xl font-semibold text-[#20293d] mb-4">Definitioner</h2>
          <p className="font-medium text-[#20293d] mb-3">1. DEFINITIONER</p>
          <p className="mb-4">
            1.1 Följande definitioner ska, i denna Integritetspolicy, ha den betydelse som förklaras nedan:
          </p>
          <dl className="space-y-3">
            {[
              { term: '"Allmänna Villkor"', def: 'Vid var tid gällande allmänna villkor som reglerar Frides tillhandahållande av tjänster och produkter.' },
              { term: '"Beställare"', def: 'Varje fysisk eller juridisk person som beställer Frides tjänster eller produkter för egen eller annans räkning.' },
              { term: '"Besökare"', def: 'Varje fysisk person som besöker hemsidan.' },
              { term: '"Datalagen"', def: 'Lag (2018:18) med kompletterande bestämmelser till EU:s dataskyddsförordning.' },
              { term: '"Dödsbo"', def: 'Dödsboet efter den avlidne för vilken Beställaren beställer Frides tjänster.' },
              { term: '"GDPR"', def: 'EU:s dataskyddsförordning (2016/679).' },
              { term: '"Genomföra Tjänsten"', def: 'Genomföra Frides samtliga förpliktelser gentemot Beställaren och Dödsboet.' },
              { term: '"Information i kommunikation"', def: 'Information i skriftlig kommunikation mellan oss t.ex. via mejl eller brev.' },
              { term: '"Kontaktuppgifter"', def: 'Namn, adress, telefonnummer, och mejladress.' },
              { term: '"Kund"', def: 'Den som är mottagare av Tjänsten. Detta kan vara Beställaren eller en juridisk person, exempelvis det Dödsbo som denne representerar.' },
              { term: '"Personuppgifter"', def: 'All information om fysiska personer vid liv, genom vilken dessa personer direkt eller indirekt kan identifieras. Sådan information är exempelvis namn, adress eller e-postadress och annan information genom vilken en fysisk person kan identifieras. I förtydligande syfte framhålls att dödsboet, som är en juridisk person, och den avlidne inte omfattas av personuppgiftslagstiftningen.' },
              { term: '"Registrerade"', def: 'Fysiska personer vars Personuppgifter behandlas av Fride.' },
              { term: '"Hemsida"', def: 'Frides hemsida med domänen www.fride.se eller annan domän som ägs och disponeras av Fride, inklusive underdomäner till dessa.' },
            ].map(({ term, def }) => (
              <div key={term} className="flex gap-2">
                <dt className="font-medium text-[#20293d] shrink-0">{term} –</dt>
                <dd>{def}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Section 2 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">2. BEHANDLING AV PERSONUPPGIFTER FÖR ATT UPPFYLLA AVTALET</p>
          <div className="space-y-4">
            <p>
              2.1 Fride behandlar sådana Personuppgifter som lämnas av Beställare eller andra personer med det
              primära syftet att Genomföra Tjänsten i enlighet med de Allmänna Villkoren. Det betyder att
              Personuppgifterna samlas in och behandlas till exempel, men inte uteslutande, för att planera
              och genomföra juridiska tjänster, samt i kontakt med Frides samarbetspartners som exempelvis
              systemleverantörer.
            </p>
            <p>
              2.2 Den lagliga grunden för behandlingen som nämns i detta avsnitt 2 är för att kunna fullgöra
              avtalet mellan å ena sidan Fride och å andra sidan Dödsboet och/eller Beställaren.
            </p>
            <p>
              2.3 Då annan än Beställaren är Kund, är det Kunden som är personuppgiftsansvarig. Fride är då
              personuppgiftsbiträde åt Kunden. Om Kunden är en fysisk person som gör beställningen som ett led
              i verksamhet av rent privat natur eller som har samband med Beställarens hushåll är Fride
              personuppgiftsansvarig för behandlingen av Beställarens personuppgifter enligt vad som anges i
              punkten 2.1. Behandling av andras personuppgifter (exempelvis andra dödsbodelägare eller
              begravningsgäster) för syften som avses i punkten 2.1 faller utanför GDPR:s tillämpningsområde.
            </p>
            <div>
              <p className="font-medium text-[#20293d] mb-2">2.4 Marknadsföra våra tjänster</p>
              <p className="mb-1"><span className="font-medium text-[#20293d]">Syfte med behandlingen:</span> Marknadsföra våra tjänster till dig genom att skicka dig information och erbjudanden, t.ex. via mejl, om vår verksamhet.</p>
              <p className="mb-1"><span className="font-medium text-[#20293d]">Personuppgifter:</span> Namn; Kontaktuppgifter.</p>
              <p className="mb-1">Personuppgifterna samlas in från dig.</p>
              <p><span className="font-medium text-[#20293d]">Laglig grund:</span> Frides berättigade intresse (artikel 6.1.f i GDPR) att marknadsföra vår verksamhet. Du har alltid rätt att invända mot behandlingen.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">3. BEHANDLING AV PERSONUPPGIFTER I MARKNADSFÖRINGSSYFTE</p>
          <div className="space-y-4">
            <p>
              3.1 Utöver ovannämnda ändamål behandlar Fride Personuppgifter i syfte att på ett bättre sätt
              anpassa våra tjänster och erbjuda relevanta tilläggstjänster eller produkter till Beställaren,
              Dödsboet eller andra personer vars Personuppgifter behandlas av Fride.
            </p>
            <p>
              3.2 Den lagliga grunden för behandlingen som nämns i detta avsnitt är för att utföra en uppgift
              som rör Frides berättigade intresse. Den Registrerade kan när som helst motsätta sig att Fride
              behandlar uppgifter för detta ändamål.
            </p>
            <p>
              3.3 Fride är personuppgiftsansvarig för den behandling av Personuppgifter som nämns i detta
              avsnitt. Fride ansvarar därmed för behandlingen av de Personuppgifter som Fride samlar in i
              samband med genomförandet av tjänsten.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">4. ÖVRIG BEHANDLING AV PERSONUPPGIFTER</p>
          <p>
            4.1 Det förekommer att Beställaren lämnar Personuppgifter som inte är nödvändiga för ovan angivna
            syften. I de fall Fride anses personuppgiftsansvarig för behandlingen av dessa uppgifter anses
            Beställaren ha samtyckt, eller garanterar att samtycke finns till sådan behandling som, med
            hänsyn till uppgiftens karaktär, kan förväntas. Samtycket omfattar under alla omständigheter
            inhämtande, lagring och radering.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">5. UPPGIFTER SOM INTE LÄMNAS AV DEN REGISTRERADE SJÄLV</p>
          <p>
            5.1 Genom inhämtande av dödsfallsintyg kommer Fride att behandla Personuppgifter avseende
            dödsbodelägare (namn, personnummer adress). Beställaren lämnar även uppgifter avseende
            begravningsgäster (namn och kontaktuppgifter).
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">6. REGISTRERADE RÄTTIGHETER</p>
          <div className="space-y-4">
            <p>
              6.1 Den Registrerade har nedanstående rättigheter avseende Personuppgifter som behandlas av Fride.
            </p>
            <p>
              6.2 Den Registrerade har rätt att begära ut information om de Personuppgifter som behandlas av
              Fride, genom att skriftligen kontakta Fride via kontaktuppgifterna i punkten 13 nedan. Varje
              Registrerad har därför rätt till en kopia av de Personuppgifter som avser denne som är under
              behandling utan avgift. För eventuella ytterligare kopior som den Registrerade begär får Fride
              ta ut en rimlig avgift, till täckande av de administrativa kostnaderna.
            </p>
            <p>
              6.3 Den Registrerade har rätt att vid behov begära rättelse av felaktig eller inaktuell sådan
              uppgift, genom en skriftlig begäran till Fride.
            </p>
            <p>
              6.4 Den Registrerade har rätt att återkalla ett eventuellt samtycke som lämnats avseende
              behandling av Personuppgifter som tidigare lämnats av den Registrerade till Fride. En sådan
              återkallelse kan dock innebära att den Registrerade inte längre kan ta del av de tjänster som
              tillhandahålls av Fride. Den Registrerade har rätt att begära radering eller begränsning av
              behandling samt invända mot behandling under vissa förutsättningar.
            </p>
            <p>
              6.5 Den Registrerade har under vissa förutsättningar rätt till dataportabilitet, vilket innebär
              en rätt att få ut Personuppgifter och överföra dem till en annan personuppgiftsansvarig så länge
              det inte påverkar andras rättigheter och friheter ogynnsamt.
            </p>
            <p>
              6.6 Om du tycker vi gjort fel i behandlingen av dina Personuppgifter, vänligen kontakta oss på
              de uppgifter som framgår i avsnittet nedan. Du har också rätt att göra anmälan till
              Integritetsskyddsmyndigheten (
              <a href="https://www.imy.se" className="text-[#d27957] hover:underline" target="_blank" rel="noopener noreferrer">www.imy.se</a>
              ), Box 8114, 104 20 Stockholm, eller sådan myndighet som ersätter Integritetsskyddsmyndigheten.
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">7. GALLRING</p>
          <div className="space-y-4">
            <p>
              7.1 Personuppgifterna lagras i vårt affärssystem och tas bort när de inte längre är nödvändiga,
              vilket vi har bedömt är fem (5) år från att de samlades in. Personuppgifter på fakturor och i
              bokföringsunderlag sparas dock i sju (7) plus ett (1) år enligt bokföringslagen. För
              marknadsföringsändamål enligt punkt 3.5 ovan används uppgifterna i tre (3) år från det att de
              samlades in.
            </p>
            <p>
              7.2 I de fall något avtalsförhållande inte finns, utan behandlingen endast sker för
              marknadsföringssyfte, raderas personuppgifterna så snart den Registrerade har motsatt sig den
              behandlingen.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">8. SÄKERHET</p>
          <p>
            8.1 Fride sätter de Registrerades personliga integritet i första rummet och arbetar därför aktivt
            för att Registrerades Personuppgifter behandlas med största försiktighet. Fride vidtar de åtgärder
            som rimligen kan krävas för att säkerställa att de Registrerades Personuppgifter behandlas säkert
            och i enlighet med denna Integritetspolicy.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">9. PERSONUPPGIFTER TILL TREDJE PART</p>
          <div className="space-y-4">
            <p>
              9.1 Fride kommer inte att sälja eller dela ut Personuppgifter till tredje part, om inte annat
              framgår av denna Integritetspolicy eller de Allmänna Villkoren.
            </p>
            <p>9.2 Fride kan dock komma att överföra Personuppgifter som avser de Registrerade till:</p>
            <ul className="space-y-3 pl-4">
              <li>
                <span className="font-medium text-[#20293d]">i.</span> Leverantörer av IT-tjänster. Vi använder underleverantörer för IT-support, underhåll, och
                serverhosting (lagring av data). Vi köper också in IT-system för intern- och extern kommunikation
                (t.ex. utskick av mejl till dig), samt för dokumentlagring. Dessa underleverantörer är
                personuppgiftsbiträden till oss och får bara behandla personuppgifter enligt våra instruktioner
                och för våra syften. Vi strävar alltid efter att även våra underleverantörer ska lagra uppgifterna
                inom EU men vi har underleverantörer med bas i USA, det innebär att dina personuppgifter i vissa
                fall är föremål för s.k. tredjelandsöverföring. Vi använder enbart amerikanska underleverantörer
                som är anslutna till det nya dataskyddsramverket som ingåtts mellan EU och USA (EU – U.S. Privacy
                Framework). Vill du veta mer om skyddsåtgärder vid tredjelandsöverföringar, vänligen kontakta oss;
              </li>
              <li>
                <span className="font-medium text-[#20293d]">ii.</span> Leverantör av informationstjänster. För att säkerställa din identitet och korrekta
                adressuppgifter kontrollerar vi av dig angivna uppgifter om identitet mot folkbokföringsregistret.
                Denna tjänst köper vi in av en leverantör av sådana informationstjänster. För att göra detta måste
                vi dela ditt personnummer med leverantören;
              </li>
              <li>
                <span className="font-medium text-[#20293d]">iii.</span> Frides underleverantörer och samarbetspartners, som i vissa avseenden agerar som våra
                personuppgiftsbiträden i enlighet med våra instruktioner, för tillhandahållandet av våra tjänster;
              </li>
              <li>
                <span className="font-medium text-[#20293d]">iv.</span> myndigheter eller juridiska rådgivare vid misstanke om brott mot lag, denna
                Integritetspolicy eller de Allmänna villkoren; samt
              </li>
              <li>
                <span className="font-medium text-[#20293d]">v.</span> myndigheter, juridiska rådgivare eller annan aktör om så krävs av Fride enligt lag eller
                myndighets påbud.
              </li>
            </ul>
            <p>
              9.3 Fride kommer endast att lämna ut de Registrerades personuppgifter till sådan tredje part som
              Fride har förtroende för. Fride väljer noggrant ut eventuella samarbetspartners för att säkerställa
              att användares uppgifter används på ett sätt som är förenligt med den reglering avseende
              personuppgiftshantering som gäller i Sverige.
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">10. AGGREGERAD DATA (ICKE IDENTIFIERBARA PERSONUPPGIFTER)</p>
          <p>
            10.1 Fride kan komma att dela aggregerad information till tredje part. Den aggregerade informationen
            har i ett sådant fall sammanställts från information som samlats in vid genomförandet av Frides
            tjänster och kan exempelvis bestå av statistik över internettrafik eller det geografiska läget vid
            beställandet av Frides tjänster. Aggregerad information innehåller inte någon information som kan
            härledas till viss individ och utgör därmed inte Personuppgifter.
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <p className="font-medium text-[#20293d] mb-3">11. COOKIES, LÄNKAR TILL ANDRA HEMSIDOR M.M.</p>
          <div className="space-y-4">
            <p>
              11.1 När en Besökare besöker Hemsidan kommer information om användandet att lagras genom cookies.
              Cookies är passiva textfiler som lagras av webbläsaren i Besökarens enhet, det vill säga
              exempelvis dator, mobil eller surfplatta, vid uppkoppling mot Hemsidan. Fride använder cookies
              för att förbättra Besökarens upplevelse av Hemsidan samt för att inhämta information såsom
              exempelvis statistik om Besökarens användning av Hemsidan. Detta sker i syfte att säkerställa,
              underhålla och förbättra Hemsidan samt Frides tjänster och erbjudanden i övrigt.
            </p>
            <p>
              11.2 För syftet att analysera hur Hemsidan används av våra besökare och för att därefter kunna
              förbättra den, samt för att ge dig en bra användarupplevelse vid nästa besök, samlar vi in och
              behandlar följande personuppgifter: din unika onlineidentifierare, vilka sidor som besökts av
              dig, hur du använt Hemsidan, och vilka val som du gjort. Du måste samtycka till cookies för att
              denna behandling ska ske. Personuppgiftsbehandlingen sker med stöd av vårt berättigade intresse
              (artikel 6.1.f i GDPR) att ge dig en bra användarupplevelse av Hemsidan och vårt kommersiella
              intresse av att få information om besökarna på Hemsidan.
            </p>
            <p>
              11.3 Vi kan använda Google Ads för att visa våra annonser och marknadsföra våra tjänster på
              internet. När du klickar på någon av våra annonser på internet samlar vi, genom Google Ads, in
              din IP-adress och en unik klickidentifierare för annonsen. Uppgifterna används för syftet att
              kontrollera att det inte är en data- eller internetbott eller en bedräglig aktör (på så sätt kan
              vi förhindra att framtida annonser visas för sådan aktör); för att följa upp hur vår annons
              presterat genom att räkna antalet webbsidebesökare som hittat Hemsidan genom att klicka på
              annonsen; för att avgöra vilka av dessa som konverterats till kunder; och för att förbättra vår
              annonsering. Personuppgiftsbehandlingen sker med stöd av vårt berättigade intresse (artikel
              6.1.f i GDPR) att förhindra bedrägerier och att följa upp våra marknadsföringsåtgärder.
              Behandlingen medför att din IP-adress och den unika klickidentifieraren för annonsen delas med
              systemleverantörer (personbiträden) till oss. Vidare delar vi resultatet av uppföljningen av
              annonsen med Google Ads (vilka är självständigt ansvariga för sin behandling).
            </p>
            <p>
              11.4 Besökare kan när som helst neka användningen av cookies genom att ändra inställningen om
              sin enhet. Om så sker kan dock Besökares upplevelse av Hemsidan försämras.
            </p>
            <p>
              11.5 Hemsidan kan innehålla länkar till hemsidor som tillhör tredje part. Besökare som följer en
              sådan länk bör kontrollera vilka villkor och policys som gäller för den aktuella hemsidan innan
              denne lämnar ut sina personuppgifter till den som tillhandahåller sidan. Fride ansvarar under
              inga omständigheter för sådan hemsida som tillhör tredje part.
            </p>
            <p>
              <Link href="/cookies" className="text-[#d27957] hover:underline">
                Läs mer om cookies här.
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
