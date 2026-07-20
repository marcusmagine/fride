import { Metadata } from "next";

const BASE_URL = "https://www.fride.se";

export function buildMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Fride",
      locale: "sv_SE",
      type: "website",
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export function buildProductSchema({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${BASE_URL}${image}`,
    brand: { "@type": "Brand", name: "Fride" },
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: "499",
      availability: "https://schema.org/InStock",
      url,
      // Digitalt innehåll som levereras direkt — ingen ångerrätt enligt
      // distansavtalslagen (se app.fride.se/allmanna-villkor §4)
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "SE",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "SEK" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "SE" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
        },
      },
    },
  };
}
