/**
 * Fride har två visuella spår. Blått gäller framtidsdokumenten, grönt
 * dödsbohanteringen (/bouppteckning, /steg-for-steg, /samarbeten).
 * Komponenter som återanvänds av båda tar emot spåret som prop — sidor
 * på det gröna spåret skickar track="green", övriga får blått som default.
 */
export type Track = "blue" | "green";

/** Hela klassnamn, inte fragment — Tailwind läser dem ur källkoden. */
export const trackColors: Record<
  Track,
  { heading: string; body: string; marker: string }
> = {
  blue: {
    heading: "text-[#20293d]",
    body: "text-[#515b73]",
    marker: "bg-[#20293d]",
  },
  green: {
    heading: "text-[#354042]",
    body: "text-[#4a5e5f]",
    marker: "bg-[#354042]",
  },
};
