import Image from "next/image";
import Link from "next/link";

const stars = Array(5).fill(null);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/arched-windows.jpg"
        alt="Window cleaning technician cleaning tall arched black-framed windows on a Charlotte home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Navy overlay */}
      <div className="absolute inset-0 bg-navy-950/72" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-2xl">
          {/* Review badge */}
          <div className="hero-animate inline-flex items-center gap-2 mb-7 border border-white/20 rounded px-3 py-1.5">
            <span className="flex gap-0.5" aria-label="5 stars">
              {stars.map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5 text-gold-400"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </span>
            <span className="text-white/80 text-xs font-medium">
              Rated 5 stars by 140+ Charlotte-area neighbors
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight hero-animate-delay">
            <span className="text-white">
              Charlotte&rsquo;s window cleaning,
            </span>
            <br />
            <span className="text-gold-400">done crystal clear.</span>
          </h1>

          {/* Body copy */}
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl hero-animate-delay-2">
            We hand-clean every pane—interior and exterior—along with screens,
            sills, and tracks. Pure-water-fed poles reach the second and third
            story without a ladder on your roof. Serving Charlotte, Ballantyne,
            Myers Park, SouthPark, and the surrounding area.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 hero-animate-delay-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-3 rounded transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17045550192"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded transition-colors"
            >
              Call (704) 555-0192
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
