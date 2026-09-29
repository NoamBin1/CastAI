import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About The Shine Bros | Charlotte Window Cleaners",
  description:
    "Two Charlotte brothers who take window cleaning seriously. Fully insured, pure-water-fed systems, serving Myers Park, Ballantyne, SouthPark, and more.",
};

export default function AboutPage() {
  return (
    <>
      {/* Full-bleed photo header */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/brick-tudor-pole.jpg"
          alt="Water-fed pole against a brick Tudor home during window cleaning in Charlotte NC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/65" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-end pb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white max-w-lg">
            We&rsquo;re two brothers from Charlotte.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-white/70 leading-relaxed mb-5">
            We started The Shine Bros because we kept hearing the same
            complaint: window cleaners who show up late, skip the screens, and
            leave streaks on the second-story glass. We saw a chance to do it
            right.
          </p>
          <p className="text-white/70 leading-relaxed mb-5">
            Our pure-water-fed pole system uses water purified to near-zero
            dissolved solids. No soap. No residue. The glass dries without
            spots because there&rsquo;s nothing left to spot. We use it for
            everything above the first floor—which means no ladders on your
            roof, no scuffed gutters, no risk to your property.
          </p>
          <p className="text-white/70 leading-relaxed mb-5">
            Inside, we work frame-out. Glass first, then sill, then
            track—because the order matters if you want the sill to stay
            clean. Screens come down, get rinsed by hand, and go back in the
            right window. It takes longer than just spraying and wiping. We do
            it anyway.
          </p>
          <p className="text-white/70 leading-relaxed mb-10">
            We grew up here, we work here, and we want people in Myers Park,
            Ballantyne, SouthPark, Dilworth, and the rest of the Charlotte
            metro to have a window cleaner they actually trust. That&rsquo;s the
            whole business.
          </p>

          <div className="border-t border-white/8 pt-8 flex flex-wrap gap-6">
            {["Fully insured", "Pure-water-fed system", "Interior & exterior", "Screens & tracks included"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold-500 flex-shrink-0" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3 rounded transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
