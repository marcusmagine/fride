import Link from "next/link";
import type { Metadata } from "next";
import { ArticleGrid, type Article } from "@/components/sections/ArticleGrid";

export const metadata: Metadata = {
  title: "Kunskap",
  description:
    "Praktisk vägledning om framtidsfullmakter, gåvobrev, skuldebrev, testamente och dödsbohantering.",
  alternates: { canonical: "https://www.fride.se/kunskap" },
};

const BASE = "https://www.fride.se";

const IMG: Record<string, string> = {
  "Framtidsfullmakt": "/images/product-ff.webp",
  "Gåvor och arv":    "/images/product-gavobrev.webp",
  "Skulder och lån":  "/images/product-skuldebrev.jpg",
  "Testamente":       "/images/product-testamente.webp",
  "Bouppteckning":    "/images/bouppteckning.webp",
  "Dödsbohantering":  "/images/hero-familj.webp",
  "Sambor":           "/images/hero-par.webp",
};

const articles: Article[] = [
  {
    title: "Vad händer med ett skuldebrev om låntagaren inte betalar – eller går bort?",
    category: "Skulder och lån",
    ingress: "Vad gäller egentligen om betalningen uteblir – eller om låntagaren går bort?",
    href: `${BASE}/blog/vad-hander-med-ett-skuldebrev-om-lantagaren-inte-betalar`,
    image: "/images/Skuldebrev-vad-hander.webp",
  },
  {
    title: "Enkelt eller löpande skuldebrev – vad är skillnaden?",
    category: "Skulder och lån",
    ingress: "Det finns två typer av skuldebrev – men för de flesta privatpersoner är valet enkelt.",
    href: `${BASE}/blog/enkelt-eller-lopande-skuldebrev`,
    image: "/images/Enkelt-eller-lopande-skuldebrev.webp",
  },
  {
    title: "Lån till barn – så gör du det rätt",
    category: "Skulder och lån",
    ingress: "Att hjälpa ett barn ekonomiskt är en fin sak. Men utan ett skuldebrev kan ett lån skapa orättvisa.",
    href: `${BASE}/blog/lan-till-barn`,
    image: "/images/Lan-barn.jpg",
  },
  {
    title: "Ge bort en bostad eller bostadsrätt – så fungerar det",
    category: "Gåvor och arv",
    ingress: "När du ger bort en bostad krävs ett skriftligt gåvobrev för att gåvan ska vara juridiskt giltig.",
    href: `${BASE}/blog/gavobrev-for-bostad`,
    image: "/images/Gava-bostad.webp",
  },
  {
    title: "Gåvobrev och förskott på arv – vad gäller?",
    category: "Gåvor och arv",
    ingress: "När föräldrar ger en gåva till sina barn är det ofta klokt att skriva ett gåvobrev.",
    href: `${BASE}/blog/gavobrev-mellan-foraldrar-och-barn`,
    image: "/images/Gavobrev-forskatt-arv.webp",
  },
  {
    title: "När behöver du ett gåvobrev – och när behöver du det inte?",
    category: "Gåvor och arv",
    ingress: "Ett gåvobrev är ett juridiskt dokument som visar att något ges bort som en gåva.",
    href: `${BASE}/blog/nar-behover-du-ett-gavobrev`,
    image: "/images/Gavobrev-behov.webp",
  },
  {
    title: "Ensamstående förälder – när någon annan får makten över ditt barns framtid",
    category: "Framtidsfullmakt",
    ingress: "Som ensamstående förälder är det lätt att tro att lagen automatiskt skyddar ditt barn.",
    href: `${BASE}/blog/ensamstaende-med-barn-testemente`,
    image: "/images/Ensamstaende-foralder.webp",
  },
  {
    title: "Enskild egendom och surrogat – när arvet byter form men inte borde byta skydd",
    category: "Gåvor och arv",
    ingress: "Många tror att ärvda pengar automatiskt fortsätter vara skyddade, även när de omvandlas till något annat.",
    href: `${BASE}/blog/enskild-egendom-och-surrogat`,
    image: "/images/Enskild-egendom-surrogat.webp",
  },
  {
    title: "När projektledarskapet blir en fälla – och varför så många kvinnor står utan skydd",
    category: "Sambor",
    ingress: "Sverige blev inte jämställt i år heller. Och när julen närmar sig kliver kvinnor återigen in i rollen.",
    href: `${BASE}/blog/manga-kvinnor-star-utan-skydd-nar-det-varsta-hander`,
    image: "/images/Projektledarskap-kvinnor.webp",
  },
  {
    title: "Så skriver du en framtidsfullmakt som fungerar med Lantmäteriets regler",
    category: "Framtidsfullmakt",
    ingress: "Många skriver framtidsfullmakt för att göra det enklare för sina närstående.",
    href: `${BASE}/blog/sa-skriver-du-en-framtidsfullmakt-som-fungerar-med-lantmateriets-regler`,
    image: "/images/Framtidsfullmakt-Lantmäteriet.webp",
  },
  {
    title: "När framtidsfullmakten inte räcker för att sälja bostaden",
    category: "Framtidsfullmakt",
    ingress: "Många tror att en framtidsfullmakt ger anhöriga full rätt att 'sköta allt' – även att sälja en bostad.",
    href: `${BASE}/blog/nar-framtidsfullmakten-inte-racker-for-att-salja-bostaden`,
    image: "/images/Framtidsfullmakt-bostadsforsaljning.webp",
  },
  {
    title: "Jäv i framtidsfullmakt – därför kan din fullmakt bli ogiltig",
    category: "Framtidsfullmakt",
    ingress: "Du har valt någon du litar på, bestämt vad som ska gälla – och känner att allt är i ordning.",
    href: `${BASE}/blog/jav-i-framtidsfullmakt--darfor-kan-din-fullmakt-bli-ogiltig`,
    image: "/images/Framtidsfullmakt-jav.webp",
  },
  {
    title: "Därför behöver du en framtidsfullmakt – och varför det inte räcker att vara gift",
    category: "Framtidsfullmakt",
    ingress: "Många tror att framtidsfullmakter bara gäller äldre eller svårt sjuka.",
    href: `${BASE}/blog/darfor-behover-du-en-framtidsfullmakt`,
    image: "/images/Framtidsfullmakt-gifta.webp",
  },
  {
    title: "6 vanliga fallgropar med framtidsfullmakt – och hur du undviker dem",
    category: "Framtidsfullmakt",
    ingress: "Att skriva en framtidsfullmakt är ett klokt och omtänksamt beslut.",
    href: `${BASE}/blog/5-vanliga-misstag-med-framtidsfullmakt-och-hur-du-undviker-dem`,
    image: "/images/fallgropar-framtidsfullmakt.webp",
  },
  {
    title: "Vad är en framtidsfullmakt – och varför bör du skriva en redan idag?",
    category: "Framtidsfullmakt",
    ingress: "En framtidsfullmakt gör det möjligt för dig att själv bestämma vem som ska ta hand om dina saker.",
    href: `${BASE}/blog/vad-ar-en-framtidsfullmakt`,
    image: "/images/Om-framtidsfullmakt.webp",
  },
  {
    title: "Enskild egendom – vad betyder det och varför är det viktigt?",
    category: "Gåvor och arv",
    ingress: "Vad händer med dina tillgångar vid en skilsmässa eller dödsfall?",
    href: `${BASE}/blog/enskild-egendom`,
    image: "/images/Enskild-egendom.webp",
  },
  {
    title: "Hur genomförs ett arvsskifte? En enkel guide steg för steg",
    category: "Gåvor och arv",
    ingress: "Att genomföra ett arvsskifte kan kännas både juridiskt komplicerat och känslomässigt svårt.",
    href: `${BASE}/blog/hur-genomfors-ett-arvsskifte`,
    image: "/images/Arvsskifte-guide.webp",
  },
  {
    title: "Vem ärver – och hur fördelas arvet?",
    category: "Gåvor och arv",
    ingress: "Svensk arvsrätt styr vem som ärver när någon går bort.",
    href: `${BASE}/blog/vem-arver-och-hur-fordelas-arvet`,
    image: "/images/Arv-fordelning.webp",
  },
  {
    title: "Så fungerar ett testamente – och varför det är klokt att skriva ett",
    category: "Testamente",
    ingress: "Vill du själv bestämma vem som ska ärva dig? Ett testamente ger dig möjlighet att påverka.",
    href: `${BASE}/blog/testamente-varfor-och-hur`,
    image: "/images/Om-testamente.webp",
  },
  {
    title: "Vad kostar en bouppteckning?",
    category: "Bouppteckning",
    ingress: "Vad en bouppteckning kostar beror på hur omfattande dödsboet är och vilken hjälp du väljer.",
    href: `${BASE}/blog/vad-kostar-en-bouppteckning`,
    image: "/images/Kostnad-bouppteckning.webp",
  },
  {
    title: "Måste jag göra en bouppteckning – och hur fungerar det?",
    category: "Bouppteckning",
    ingress: "En bouppteckning är oftast ett krav enligt lag och ska göras inom tre månader efter dödsfallet.",
    href: `${BASE}/blog/maste-jag-gora-en-bouppteckning`,
    image: "/images/Hur-fungerar-bouppteckning.webp",
  },
  {
    title: "Vad är skillnaden mellan bouppteckning och dödsboanmälan?",
    category: "Bouppteckning",
    ingress: "Vid ett dödsfall behöver man reda ut den avlidnes tillgångar och skulder.",
    href: `${BASE}/blog/skillnad-bouppteckning-dodsboanmalan`,
    image: "/images/Bouppteckning-dodsboanmalan.webp",
  },
  {
    title: "Måste alla arvingar vara överens – och vad gör vi om vi inte är det?",
    category: "Bouppteckning",
    ingress: "I ett dödsbo måste alla arvingar vara överens vid större beslut.",
    href: `${BASE}/blog/maste-alla-arvingar-vara-overens`,
    image: "/images/Arvingar.webp",
  },
  {
    title: "Kan jag göra bouppteckningen själv – eller måste jag ta hjälp?",
    category: "Bouppteckning",
    ingress: "Boupptecningen är ett viktigt juridiskt dokument efter ett dödsfall.",
    href: `${BASE}/blog/hantera-bouppteckningen-sjalv`,
    image: "/images/Hantera-bouppteckning.webp",
  },
  {
    title: "Vad är skillnaden mellan testamente och bouppteckning?",
    category: "Bouppteckning",
    ingress: "Testamente och bouppteckning rör båda arvsfrågor – men på helt olika sätt.",
    href: `${BASE}/blog/skillnad-testamente-bouppteckning`,
    image: "/images/Skillnad-testamente-bouppteckning.webp",
  },
  {
    title: "Hur får jag tag på ett dödsfallsintyg?",
    category: "Dödsbohantering",
    ingress: "Ett dödsfallsintyg är ofta det första dokumentet du behöver efter ett dödsfall.",
    href: `${BASE}/blog/hur-fa-tag-pa-ett-dodsfallsintyg`,
    image: "/images/Dodsfallsintyg.webp",
  },
  {
    title: "Vad är ett dödsbo och vad ingår i det?",
    category: "Dödsbohantering",
    ingress: "Ett dödsbo består av den avlidnes alla tillgångar och skulder.",
    href: `${BASE}/blog/vad-ar-ett-dodsbo`,
    image: "/images/Dodsbo.webp",
  },
  {
    title: "Vad händer med bostaden när någon dör – får vi sälja direkt?",
    category: "Dödsbohantering",
    ingress: "En bostad i ett dödsbo får inte säljas förrän bouppteckningen är registrerad.",
    href: `${BASE}/blog/bostad-anhorig-avliden`,
    image: "/images/Hantera-bostad-dodsfall.webp",
  },
  {
    title: "Vad gör jag först när någon har dött?",
    category: "Dödsbohantering",
    ingress: "När någon dör kan det vara svårt att veta var man ska börja.",
    href: `${BASE}/blog/vad-gor-jag-forst-nar-nagon-har-dott`,
    image: "/images/Vad-du-ska-gora-vid-dodsfall.webp",
  },
  {
    title: "Hur hanteras räkningar, lån och skulder när någon dör?",
    category: "Dödsbohantering",
    ingress: "När någon går bort är det dödsboet som ansvarar för räkningar, lån och skulder.",
    href: `${BASE}/blog/hantera-rakningar-lan-och-skulder`,
    image: "/images/Hantera-rakningar-skulder.webp",
  },
  {
    title: "Vem ansvarar för att ta hand om dödsboet?",
    category: "Dödsbohantering",
    ingress: "Det är dödsbodelägarna som gemensamt ansvarar för dödsboet efter ett dödsfall.",
    href: `${BASE}/blog/vem-ansvarar-for-dodsboet`,
    image: "/images/Ansvar-dodsbo.webp",
  },
  {
    title: "Hur avregistrerar man en bil vid dödsfall?",
    category: "Dödsbohantering",
    ingress: "En bil i dödsboet får inte säljas eller avregistreras direkt.",
    href: `${BASE}/blog/avregistrerar-bil-vid-dodsfall`,
    image: "/images/Avregistrera-bil-dodsfall.webp",
  },
  {
    title: "Att mista en anhörig – när sorgen möter det praktiska",
    category: "Dödsbohantering",
    ingress: "När någon nära går bort blandas sorgen med praktiska krav.",
    href: `${BASE}/blog/att-mista-en-anhorig`,
    image: "/images/Mista-anhorig.webp",
  },
  {
    title: "Hur fungerar efterlevandepension och annan ekonomisk hjälp?",
    category: "Dödsbohantering",
    ingress: "När en anhörig dör kan ekonomin påverkas kraftigt.",
    href: `${BASE}/blog/efterlevandepension`,
    image: "/images/Efterlevandepension.webp",
  },
  {
    title: "Vad kostar en begravning i Sverige?",
    category: "Dödsbohantering",
    ingress: "En begravning i Sverige kostar oftast mellan 20 000 och 35 000 kronor.",
    href: `${BASE}/blog/begravning-kostnad`,
    image: "/images/Kostnad-begravning.webp",
  },
  {
    title: "Vad är skillnaden mellan boutredningsman och skiftesman?",
    category: "Dödsbohantering",
    ingress: "Vid oenighet i ett dödsbo kan tingsrätten utse en boutredningsman eller skiftesman.",
    href: `${BASE}/blog/boutredningsman-skiftesman`,
    image: "/images/Boutredningsman-skiftesman.webp",
  },
  {
    title: "Vad gör man om man är ensam dödsbodelägare?",
    category: "Dödsbohantering",
    ingress: "Som ensam dödsbodelägare har du fullt ansvar för dödsboet.",
    href: `${BASE}/blog/ensam-dodsbodelagare`,
    image: "/images/Ensam-dodsbodelagare.webp",
  },
  {
    title: "Sambor med gemensamma barn – när tryggheten försvinner över en natt",
    category: "Dödsbohantering",
    ingress: "Att leva som sambo med gemensamma barn är vardag för många familjer.",
    href: `${BASE}/blog/sambor-med-gemensamma-barn`,
    image: "/images/Sambor-barn.webp",
  },
  {
    title: "Vad gör man om den avlidne hade vapen hemma?",
    category: "Dödsbohantering",
    ingress: "Om den avlidne hade vapen måste de hanteras enligt lag.",
    href: `${BASE}/blog/vapen-dodsbo`,
    image: "/images/Dodsbo-vapen.webp",
  },
];

export default function KunskapPage() {
  return (
    <>
      <section className="bg-[#fff1e6]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] mb-3">
            Kunskap
          </h1>
          <p className="text-lg text-[#d27957]">
            Praktisk vägledning om juridiska dokument, arv och vad som händer när livet förändras.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <ArticleGrid articles={articles} />
      </div>

      <section className="max-w-4xl mx-auto px-6 pb-16 fade-in">
        <div className="bg-[#fff1e6] border border-[#d9c1b1] rounded-2xl p-8">
          <h2 className="font-serif text-xl font-semibold text-[#354042] mb-2">Redo att skapa ditt dokument?</h2>
          <p className="text-sm text-[#4a5e5f] mb-6">Vi guidar dig steg för steg till ett juridiskt korrekt dokument.</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
              { label: "Gåvobrev", href: "/gavobrev" },
              { label: "Skuldebrev", href: "/skuldebrev" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-[#20293d] text-[#fff1e6] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d27957] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
