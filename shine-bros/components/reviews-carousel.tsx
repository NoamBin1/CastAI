"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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
    name: "Michelle B.",
    location: "Huntersville",
    body: "The brothers themselves came out. They answered all my questions about the water-fed system, took their time, and didn't rush. The screens were cleaner than when we moved in.",
    rating: 5,
  },
];

const stars = Array(5).fill(null);

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const review = reviews[current];

  return (
    <section className="py-20 bg-navy-900 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Review card */}
          <blockquote
            key={current}
            className="bg-navy-800 border border-white/8 rounded p-8 max-w-2xl mx-auto"
          >
            <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} stars`}>
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
            <p className="text-white/75 leading-relaxed mb-6 text-base">
              &ldquo;{review.body}&rdquo;
            </p>
            <footer>
              <cite className="not-italic flex items-center gap-2">
                <span className="text-white font-medium text-sm">{review.name}</span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-muted text-xs">{review.location}</span>
              </cite>
            </footer>
          </blockquote>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Reviews">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? "bg-gold-400" : "bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
