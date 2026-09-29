import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Window Cleaning Charlotte, NC",
  description:
    "Hand-cleaned interior and exterior windows, screens, sills, and tracks for Charlotte-area homes. Pure-water-fed pole system. Free quotes.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/bay-window-pole.jpg"
          alt="Water-fed pole reaching a second-story bay window during residential window cleaning in Charlotte NC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
            Residential services
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-xl">
            Clean every window in your home.
          </h1>
          <p className="text-white/70 max-w-lg text-lg">
            We work frame-out on every pane—interior, exterior, sill, and
            track—so nothing gets missed.
          </p>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {[
            {
              title: "Interior & exterior",
              body: "Both sides of every pane, in one visit. We bring drop cloths for inside work and leave the sills wiped clean.",
            },
            {
              title: "Screens",
              body: "Screens come down, get rinsed with clean water, and go back up in the right window. No mixing, no damage.",
            },
            {
              title: "Sills and tracks",
              body: "Dirt and debris build up in the tracks. We wipe them out every time so your windows open and close cleanly.",
            },
            {
              title: "Pure-water-fed pole",
              body: "Upper floors get cleaned with a pole fed by water purified to near-zero dissolved solids. No ladders on your roof, no soap residue, no spots.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-t border-white/8 pt-6">
              <h2 className="font-semibold text-white mb-2">{title}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy-800 border border-white/8 rounded p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-1">
              Ready for spotless windows?
            </h3>
            <p className="text-white/60 text-sm">
              Most quotes come back within a few hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
