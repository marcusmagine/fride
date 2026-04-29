import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimationProvider } from "@/components/ui/ScrollAnimationProvider";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fride.se"),
  title: {
    template: "%s | Fride",
    default: "Fride – Juridiska dokument online",
  },
  description:
    "Skapa juridiskt korrekta dokument online med guidning steg för steg. Framtidsfullmakt, gåvobrev och skuldebrev till ett fast pris.",
  alternates: { canonical: "https://www.fride.se" },
  openGraph: { siteName: "Fride", locale: "sv_SE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${notoSerif.variable} ${notoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimationProvider />
      </body>
    </html>
  );
}
