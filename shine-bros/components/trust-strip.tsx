const areas = [
  "Charlotte",
  "Ballantyne",
  "Myers Park",
  "SouthPark",
  "Dilworth",
  "Cotswold",
  "Huntersville",
  "Mooresville",
];

const highlights = [
  "Fully insured",
  "Pure-water-fed pole system",
  "Interior & exterior",
  "Screens, sills, and tracks included",
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-900 border-t border-b border-white/8 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Highlights row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
          {highlights.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-sm text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        <div className="border-t border-white/8 mb-5" aria-hidden="true" />

        {/* Service areas */}
        <p className="text-center text-sm text-muted">
          <span className="text-white/50 mr-2">Service areas:</span>
          {areas.join(" · ")}
        </p>
      </div>
    </section>
  );
}
