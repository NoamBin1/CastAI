"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a pure-water-fed pole system?",
    a: "A water-fed pole uses water that has been purified to near-zero dissolved solids — essentially removing the minerals that cause spotting. The water is pumped up through a telescoping pole with a brush head at the top, which scrubs the glass. Because there's no mineral content, it dries spot-free without soap or squeegee work. It also means we can clean second and third-story windows from the ground without a ladder on your roof.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "For exterior-only service, no. We can complete the job and leave. For interior access, someone 18 or older needs to be home to let us in and secure pets. We'll confirm access requirements when you book.",
  },
  {
    q: "Do you clean screens?",
    a: "Yes. Screen removal, rinse, and reinstall is included in every standard residential job. We take screens down one at a time, keep track of which window they came from, rinse them with clean water, and put them back in the right window. We don't charge extra for screens on residential jobs.",
  },
  {
    q: "How long does a typical cleaning take?",
    a: "A two-story home with 20–30 windows usually takes two to four hours, including screens, sills, and tracks. Larger homes, difficult access, or post-construction cleaning takes longer. We give you a realistic time estimate when we quote.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Charlotte, Ballantyne, Myers Park, SouthPark, Dilworth, Cotswold, Huntersville, and Mooresville. If you're outside these areas, contact us — we may still be able to help depending on the job.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry general liability insurance. We can provide a certificate of insurance for commercial clients or property managers who require it.",
  },
  {
    q: "Do you clean commercial windows?",
    a: "We do. We handle storefronts, small office buildings, and multi-tenant properties. We can schedule early morning or evening service to work around your business hours, and we offer monthly and quarterly recurring contracts.",
  },
  {
    q: "Can you remove hard-water stains?",
    a: "In most cases, yes. Persistent mineral deposits require a separate treatment step before the standard cleaning pass. We'll let you know on the quote if we see hard-water buildup that needs it. There's an additional charge for mineral deposit removal.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/3 flex-shrink-0">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
            Common questions.
          </h2>
          <p className="text-white/60 text-sm">
            Still have one?{" "}
            <a href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">
              Ask us directly →
            </a>
          </p>
        </div>

        <div className="lg:w-2/3 divide-y divide-white/8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 text-white/40 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-white/60 text-sm leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
