export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theshinebros.com",
    name: "The Shine Bros",
    description:
      "Professional window cleaning for homes and businesses in Charlotte, NC. Hand-cleaned interior and exterior glass, screens, sills, and tracks.",
    url: "https://theshinebros.com",
    telephone: "+17045550192",
    email: "hello@theshinebros.com",
    image: "https://theshinebros.com/brand/logo.png",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2271,
      longitude: -80.8431,
    },
    areaServed: [
      "Charlotte, NC",
      "Ballantyne, NC",
      "Myers Park, NC",
      "SouthPark, NC",
      "Dilworth, NC",
      "Cotswold, NC",
      "Huntersville, NC",
      "Mooresville, NC",
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Window Cleaning",
            description:
              "Interior and exterior window cleaning, screen cleaning, sill and track cleaning for Charlotte-area homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Window Cleaning",
            description:
              "Storefront, office building, and multi-tenant window cleaning in Charlotte, NC.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
