import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section header — left-aligned, no eyebrow */}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white max-w-md mb-16">
        What we clean, and how we do it.
      </h2>

      {/* Residential — photo left, text right */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20">
        <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded overflow-hidden flex-shrink-0">
          <Image
            src="/images/bay-window-pole.jpg"
            alt="Water-fed pole reaching a second-story bay window on a Charlotte residential home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Residential window cleaning
          </h3>
          <p className="text-white/70 leading-relaxed mb-5">
            We clean every window on your home—inside and out—using pure-water-fed
            poles that leave no soap residue and no streaks. Screens come down,
            get rinsed, and go back up. Sills and tracks get wiped out before we
            move on.
          </p>
          <ul className="space-y-2 text-white/70 mb-7">
            {[
              "Interior and exterior glass",
              "Screens removed, rinsed, replaced",
              "Sills and tracks cleaned",
              "Pure-water-fed pole system",
              "Same-day quotes for most homes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors gap-1"
          >
            Residential pricing
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8 mb-20" aria-hidden="true" />

      {/* Commercial — text left, photo right */}
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded overflow-hidden flex-shrink-0 bg-navy-800">
          {/* Placeholder until commercial photo is provided */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-16 h-16 mx-auto mb-4 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <p className="text-white/30 text-sm">Commercial photo coming soon</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Commercial window cleaning
          </h3>
          <p className="text-white/70 leading-relaxed mb-5">
            Clean windows are the first thing a customer notices. We schedule
            around your business hours, work quietly, and get out of the way.
            Storefronts, office buildings, and multi-tenant properties across
            the Charlotte metro—we handle recurring contracts and one-time
            cleans.
          </p>
          <ul className="space-y-2 text-white/70 mb-7">
            {[
              "Storefronts and retail spaces",
              "Office buildings and suites",
              "Multi-tenant residential",
              "Flexible scheduling, early mornings",
              "Monthly, quarterly, or one-time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/commercial"
            className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors gap-1"
          >
            Commercial services
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
