import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Text — left, centered on mobile */}
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6 leading-snug">
            We&rsquo;re two brothers who grew up in Charlotte and take window
            cleaning seriously.
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            We started The Shine Bros because we saw too many companies treat
            residential clients like an afterthought—showing up late, skipping
            screens, leaving streaks on the glass. We do it differently. Every
            job gets the same level of care whether it&rsquo;s a 1,200-square-foot
            starter home or a 6,000-square-foot estate.
          </p>
          <p className="text-white/70 leading-relaxed mb-4">
            Our pure-water-fed pole system uses water purified to near-zero
            dissolved solids. That means no soap, no residue, and no spots as
            it dries—just glass. We clean screens by hand, wipe out every sill
            and track, and check our work before we pack the van.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            We&rsquo;re fully insured and operate out of Charlotte. If you&rsquo;re in
            Myers Park, Ballantyne, SouthPark, Dilworth, Cotswold, or anywhere
            in between—we&rsquo;re your neighbors.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
          >
            Our story
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Photo — full bleed in its column */}
        <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-[3/4] rounded overflow-hidden order-1 lg:order-2 flex-shrink-0">
          <Image
            src="/images/brick-tudor-pole.jpg"
            alt="Water-fed window cleaning pole against a brick and stone Tudor-style home in Charlotte NC"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
