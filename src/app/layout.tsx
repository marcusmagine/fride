import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KST77MG3');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KST77MG3"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollAnimationProvider />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TGGY1VSLT"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TGGY1VSLT');
          `}
        </Script>
      </body>
    </html>
  );
}
