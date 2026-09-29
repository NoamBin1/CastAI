import Link from "next/link";
import { serviceAreas } from "@/lib/config/service-areas";

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 bg-navy-900 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Map placeholder — replace with embedded map or image */}
          <div className="lg:w-1/2 flex-shrink-0">
            <div className="relative aspect-[4/3] rounded bg-navy-800 border border-white/8 overflow-hidden flex items-center justify-center">
              {/* TODO: Replace with Google Maps embed or a static map image */}
              <div className="text-center px-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-white/20 mx-auto mb-3" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
                <p className="text-white/30 text-sm">
                  Charlotte metro service area
                </p>
                <p className="text-white/20 text-xs mt-1">
                  [Map image or embed goes here — see PLACEHOLDERS.md]
                </p>
              </div>
            </div>
          </div>

          {/* Towns list */}
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
              Towns we cover.
            </h2>
            <p className="text-white/60 mb-8 max-w-md">
              We serve the Charlotte metro and surrounding Mecklenburg and
              Iredell County towns. Each area has its own seasonal patterns and
              building types — click your town for details.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-8">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="flex items-center gap-2 py-2.5 border-b border-white/8 text-white/70 hover:text-gold-400 hover:border-gold-500/30 transition-colors group text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-white/25 group-hover:text-gold-500 transition-colors flex-shrink-0" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 1.5a.75.75 0 0 1 .75.75v10.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V2.25A.75.75 0 0 1 8 1.5Z" clipRule="evenodd" />
                    </svg>
                    <span>{area.name}</span>
                    <span className="text-white/25 text-xs ml-auto">{area.county} Co.</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mt-6">
              Don&rsquo;t see your town? We may still be able to help.{" "}
              <Link href="/contact" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
