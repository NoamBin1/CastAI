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

const stats = [
  { value: "8+", label: "Years serving Charlotte" },
  { value: "140+", label: "5-star reviews" },
  { value: "2,400+", label: "Jobs completed" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy-900 border-t border-b border-white/8 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl font-semibold text-gold-400">{value}</div>
              <div className="text-sm text-muted mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 mb-6" aria-hidden="true" />

        {/* Service areas */}
        <p className="text-center text-sm text-muted">
          <span className="text-white/50 mr-2">Service areas:</span>
          {areas.join(" · ")}
        </p>
      </div>
    </section>
  );
}
