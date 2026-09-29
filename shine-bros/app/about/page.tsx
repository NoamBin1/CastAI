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

          <div className="border-t border-white/8 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "8+", label: "Years in Charlotte" },
              { value: "140+", label: "5-star reviews" },
              { value: "2,400+", label: "Jobs completed" },
              { value: "Insured", label: "Fully covered" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-semibold text-gold-400 mb-0.5">
                  {value}
                </div>
                <div className="text-white/50 text-xs">{label}</div>
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
