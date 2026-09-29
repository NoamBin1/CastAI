"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Myers Park",
    body: "We've used Shine Bros twice now. They cleaned every window in our 1940s house—some of the original frames are a nightmare to work with—and still got the glass spotless. Tracks were wiped out, screens back in place. Worth every penny.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Ballantyne",
    body: "Showed up on time, did a walk-through with me first, and finished faster than I expected. The second-story windows look brand new. I appreciated that they wore shoe covers without being asked.",
    rating: 5,
  },
  {
    name: "Priya & David N.",
    location: "Dilworth",
    body: "We have a lot of windows and several are hard to reach. They used the pure-water pole system and didn't need to touch the gutters or the roof at all. Everything dried streak-free. Already booked them for next quarter.",
    rating: 5,
  },
  {
    name: "Karen L.",
    location: "SouthPark",
    body: "I manage a small office in SouthPark and we needed cleaning done before a big client visit. They fit us in with two days' notice, arrived early, and were completely out before our staff got in. Storefront looks great.",
    rating: 5,
  },
  {
    name: "Rob H.",
    location: "Cotswold",
    body: "Honest pricing, good communication, and the work speaks for itself. My wife noticed the difference before I even pointed it out. That's a good sign.",
    rating: 5,
  },
  {
    name: "Michelle B.",
    location: "Huntersville",
    body: "The brothers themselves came out. They answered all my questions about the water-fed system, took their time, and didn't rush. The screens were cleaner than when we moved in.",
    rating: 5,
  },
];

const stars = Array(5).fill(null);

function ReviewCard({
  name,
  location,
  body,
  rating,
  delay,
}: (typeof reviews)[0] & { delay: number }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <blockquote ref={ref} className="review-reveal">
      <div className="flex gap-0.5 mb-3" aria-label={`${rating} stars`}>
        {stars.map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-gold-400"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <p className="text-white/75 leading-relaxed text-sm mb-4">&ldquo;{body}&rdquo;</p>
      <footer>
        <cite className="not-italic">
          <span className="text-white font-medium text-sm">{name}</span>
          <span className="text-muted text-xs ml-2">{location}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white max-w-xs">
          What Charlotte homeowners say.
        </h2>
        <a
          href="https://g.page/r/shine-bros-charlotte/review"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors whitespace-nowrap"
        >
          Leave a review →
        </a>
      </div>

      {/* Reviews grid — not identical cards, varying column widths */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {reviews.map((review, i) => (
          <div key={review.name} className="break-inside-avoid">
            <ReviewCard {...review} delay={i * 80} />
            {i < reviews.length - 1 && (
              <div className="border-b border-white/8 mt-6" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
