import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Window Cleaning Charlotte, NC",
  description:
    "Hand-cleaned interior and exterior windows, screens, sills, and tracks for Charlotte-area homes. Pure-water-fed pole system. Free quotes.",
};

const serviceRows = [
  {
    title: "Interior & exterior in one visit.",
    body: "Both sides of every pane, cleaned in a single appointment. We bring drop cloths for inside work and leave the sills wiped clean behind us. No coming back a second day, no charging separately for each side.",
    image: "/images/bay-window-pole.jpg",
    imageAlt: "Water-fed pole cleaning the exterior of a second-story bay window on a Charlotte home",
    link: "/services/residential-window-cleaning",
    linkText: "Residential window cleaning →",
    imageLeft: false,
  },
  {
    title: "Upper floors without a ladder on your roof.",
    body: "Our pure-water-fed pole system reaches up to four stories from the ground. The water is purified to near-zero dissolved solids — no soap, no residue, no spots as it dries. No risk to your gutters or roofline.",
    image: "/images/crew-townhouse.jpg",
    imageAlt: "Crew member cleaning tall multi-story windows from the ground using a water-fed pole",
    link: "/services/residential-window-cleaning",
    linkText: "How it works →",
    imageLeft: true,
  },
  {
    title: "Screens, sills, and tracks — every time.",
    body: "We take screens down, rinse them with clean water, and put them back in the right window. Sills and tracks are wiped out on every job. Dirt in the track ends up back on the glass within a week if you skip it.",
    image: "/images/arched-windows.jpg",
    imageAlt: "Window cleaning technician cleaning arched black-framed windows in detail",
    link: "/services/screen-cleaning",
    linkText: "Screen cleaning details →",
    imageLeft: false,
  },
  {
    title: "Post-construction cleaning.",
    body: "Paint overspray, caulk smears, adhesive from protective film, and drywall dust all end up on glass during a renovation. Post-construction cleaning uses different tools and technique than maintenance cleaning — we're set up for both.",
    image: "/images/brick-tudor-pole.jpg",
    imageAlt: "Cleaning windows on a brick Tudor home after exterior renovation work",
    link: "/services/post-construction-cleaning",
    linkText: "Post-construction cleaning →",
    imageLeft: true,
  },
];

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
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4 max-w-xl">
            Every window in your home, cleaned properly.
          </h1>
          <p className="text-white/70 max-w-lg text-lg">
            Interior, exterior, screens, sills, and tracks — in one visit.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-0">
          {serviceRows.map((row, i) => (
            <div
              key={row.title}
              className={`flex flex-col ${row.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 ${i > 0 ? "border-t border-white/8" : ""}`}
            >
              {/* Photo */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-auto min-h-64 lg:min-h-80 flex-shrink-0 overflow-hidden">
                <Image
                  src={row.image}
                  alt={row.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full lg:w-1/2 flex items-center px-0 lg:px-14 py-12 lg:py-16">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4 leading-snug">
                    {row.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm">
                    {row.body}
                  </p>
                  <Link
                    href={row.link}
                    className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {row.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        </div>
      </section>
    </>
  );
}
