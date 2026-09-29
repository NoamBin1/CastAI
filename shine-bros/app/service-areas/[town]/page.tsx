import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas, getServiceArea } from "@/lib/config/service-areas";
import ContactSection from "@/components/contact-section";

interface Props {
  params: Promise<{ town: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ town: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town } = await params;
  const area = getServiceArea(town);
  if (!area) return {};
  return {
    title: `Window Cleaning in ${area.name}, NC`,
    description: `Professional window cleaning in ${area.name}, NC. Interior and exterior glass, screens, sills, and tracks. Pure-water-fed pole for upper floors. Free quotes.`,
    alternates: {
      canonical: `https://theshinebros.com/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `Window Cleaning in ${area.name}, NC | The Shine Bros`,
      description: `Professional window cleaning in ${area.name}. Screens, sills, and tracks included. Free quotes.`,
    },
  };
}

export default async function TownPage({ params }: Props) {
  const { town } = await params;
  const area = getServiceArea(town);
  if (!area) notFound();

  const neighborAreas = area.neighbors
    .map((slug) => serviceAreas.find((a) => a.slug === slug))
    .filter(Boolean);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://theshinebros.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://theshinebros.com/#service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://theshinebros.com/service-areas/${area.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Window Cleaning in ${area.name}, NC`,
    provider: {
      "@type": "LocalBusiness",
      name: "The Shine Bros",
      url: "https://theshinebros.com",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: "North Carolina",
      },
    },
    serviceType: "Window Cleaning",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <section className="py-20 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#service-areas" className="hover:text-white/70 transition-colors">Service Areas</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/70">{area.name}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-2xl">
            Window cleaning in {area.name}, NC.
          </h1>
          <p className="text-white/60 max-w-xl text-lg leading-relaxed">
            The Shine Bros serves {area.name} with full-service residential and
            commercial window cleaning. Interior and exterior glass, screens,
            sills, and tracks — in one visit.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3 rounded transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Area details */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            About {area.name}
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {area.buildingTypes}
          </p>

          <h3 className="font-semibold text-white mb-3">
            Seasonal considerations
          </h3>
          <p className="text-white/70 leading-relaxed mb-8">
            {area.seasonalNotes}
          </p>

          {area.neighborhoods.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-white mb-3">
                Neighborhoods we serve in {area.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="text-xs text-white/60 bg-navy-800 border border-white/8 rounded px-2.5 py-1"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services */}
          <div className="bg-navy-800 border border-white/8 rounded p-6 mb-8">
            <h3 className="font-semibold text-white mb-4">
              What we clean in {area.name}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Interior & exterior glass",
                "Screens — removed, rinsed, reinstalled",
                "Sills and window tracks",
                "Upper floors via water-fed pole",
                "Hard-water deposit removal",
                "Post-construction cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Local FAQ */}
          {area.localFaq.length > 0 && (
            <div>
              <h3 className="font-semibold text-white mb-4">
                Questions about {area.name} service
              </h3>
              <div className="divide-y divide-white/8">
                {area.localFaq.map(({ q, a }) => (
                  <div key={q} className="py-4">
                    <p className="text-white text-sm font-medium mb-1">{q}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Nearby towns */}
      {neighborAreas.length > 0 && (
        <section className="py-12 border-t border-white/8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="font-semibold text-white mb-4">
              Nearby areas we also serve
            </h3>
            <div className="flex flex-wrap gap-3">
              {neighborAreas.map((neighbor) => neighbor && (
                <Link
                  key={neighbor.slug}
                  href={`/service-areas/${neighbor.slug}`}
                  className="text-sm text-white/60 hover:text-gold-400 border border-white/15 hover:border-gold-500/40 rounded px-3 py-1.5 transition-colors"
                >
                  {neighbor.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
