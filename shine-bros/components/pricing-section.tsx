const plans = [
  {
    name: "Spring & Fall",
    cadence: "Twice a year",
    description:
      "Full interior and exterior clean in spring before pollen season peaks, and in fall before you close up for winter. Screens, sills, and tracks included each visit.",
    features: [
      "Interior & exterior glass",
      "Screen removal & rinse",
      "Sills and tracks",
      "Water-fed pole for upper floors",
    ],
    cta: "Ask about twice-yearly pricing",
    ctaService: "Spring & Fall – twice yearly",
    featured: false,
  },
  {
    name: "Quarterly",
    cadence: "Four times a year",
    description:
      "Clean glass year-round. Quarterly service catches pollen season, summer grime, fall debris, and winter dust before it builds. Our most popular ongoing plan.",
    features: [
      "Everything in Spring & Fall",
      "Four visits per year",
      "Priority scheduling",
      "Same crew, consistent results",
    ],
    cta: "Ask about quarterly pricing",
    ctaService: "Quarterly service plan",
    featured: true,
  },
  {
    name: "Monthly Commercial",
    cadence: "Every month",
    description:
      "Storefronts, offices, and multi-tenant buildings that need to look sharp every day. We work around your hours and can invoice the property manager directly.",
    features: [
      "Exterior storefront glass",
      "Interior on request",
      "Early morning or evening slots",
      "Certificate of insurance provided",
    ],
    cta: "Ask about commercial pricing",
    ctaService: "Monthly commercial service",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
          Ongoing service plans.
        </h2>
        <p className="text-white/60 max-w-lg">
          One-time cleans welcome. If you want windows that stay clean, a
          recurring plan keeps pollen, dust, and grime from compounding between
          visits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded border flex flex-col ${
              plan.featured
                ? "bg-navy-800 border-gold-500/40"
                : "bg-navy-900 border-white/8"
            }`}
          >
            {plan.featured && (
              <div className="px-6 pt-4">
                <span className="text-xs font-semibold text-gold-400 tracking-wider">
                  Most popular
                </span>
              </div>
            )}
            <div className="p-6 flex-1">
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm mt-0.5">{plan.cadence}</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {plan.description}
              </p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a
                href={`/contact?service=${encodeURIComponent(plan.ctaService)}`}
                className={`block text-center text-sm font-semibold px-5 py-2.5 rounded transition-colors ${
                  plan.featured
                    ? "bg-gold-500 hover:bg-gold-600 text-navy-950"
                    : "border border-white/25 hover:border-white/50 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
