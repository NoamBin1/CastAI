import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/config/services";
import ContactSection from "@/components/contact-section";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) return {};
  return {
    title: `${svc.name} in Charlotte, NC`,
    description: svc.shortDescription,
    alternates: {
      canonical: `https://theshinebros.com/services/${svc.slug}`,
    },
    openGraph: {
      title: `${svc.name} in Charlotte, NC | The Shine Bros`,
      description: svc.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) notFound();

  const relatedSvcs = svc.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
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
        name: "Services",
        item: "https://theshinebros.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: svc.name,
        item: `https://theshinebros.com/services/${svc.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "The Shine Bros",
      url: "https://theshinebros.com",
    },
    areaServed: "Charlotte, NC",
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

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src={svc.heroImage}
          alt={svc.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/70">{svc.name}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-2xl">
            {svc.name}
          </h1>
          <p className="text-white/70 max-w-lg text-lg">{svc.shortDescription}</p>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {svc.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-white/70 leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-white mb-8">
            What&rsquo;s included
          </h2>
          <div className="space-y-6">
            {svc.features.map(({ title, description }) => (
              <div key={title} className="flex gap-4 border-t border-white/8 pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-white text-sm mb-1">{title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {svc.faq.length > 0 && (
        <section className="py-12 border-t border-white/8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-white mb-6">
              Questions about {svc.name.toLowerCase()}
            </h2>
            <div className="divide-y divide-white/8">
              {svc.faq.map(({ q, a }) => (
                <div key={q} className="py-4">
                  <p className="text-white text-sm font-medium mb-1">{q}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedSvcs.length > 0 && (
        <section className="py-12 border-t border-white/8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="font-semibold text-white mb-4">Related services</h3>
            <div className="flex flex-wrap gap-3">
              {relatedSvcs.map((rel) => rel && (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="text-sm text-white/60 hover:text-gold-400 border border-white/15 hover:border-gold-500/40 rounded px-3 py-1.5 transition-colors"
                >
                  {rel.name}
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
