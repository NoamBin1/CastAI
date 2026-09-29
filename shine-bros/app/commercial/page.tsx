import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning Charlotte, NC",
  description:
    "Window cleaning for storefronts, offices, and multi-tenant buildings in Charlotte, NC. Flexible scheduling, recurring contracts.",
};

export default function CommercialPage() {
  return (
    <>
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
            Commercial services
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-xl">
            First impressions start with clean glass.
          </h1>
          <p className="text-white/70 max-w-lg text-lg">
            We work around your hours, move quietly, and finish before your
            customers arrive. Serving storefronts, offices, and multi-tenant
            properties across Charlotte.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8 rounded overflow-hidden mb-14">
          {[
            {
              title: "Storefronts & retail",
              body: "Exterior glass, door frames, and entrances cleaned before opening. Scheduled weekly, bi-weekly, or monthly.",
            },
            {
              title: "Office buildings",
              body: "Interior and exterior for multi-story offices. We coordinate with building management and work in off-hours.",
            },
            {
              title: "Multi-tenant residential",
              body: "HOA complexes, townhome communities, and apartment buildings. Volume pricing and recurring contracts available.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-navy-900 p-8">
              <h2 className="font-semibold text-white mb-2">{title}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3 rounded transition-colors"
          >
            Get a Commercial Quote
          </Link>
          <a
            href="tel:+17045550192"
            className="border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 rounded transition-colors"
          >
            Call (704) 555-0192
          </a>
        </div>
      </section>
    </>
  );
}
