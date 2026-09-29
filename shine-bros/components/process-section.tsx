import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Free quote, same day",
    body: "Text us a few photos of your home or office and we'll send a firm price within a few hours—no in-person estimate required for most properties.",
  },
  {
    n: "02",
    title: "We show up when we say we will",
    body: "Our crew arrives in the scheduled window, does a quick walk-around with you, and gets straight to work. We carry insurance and always wear shoe covers inside.",
  },
  {
    n: "03",
    title: "Every pane, sill, and screen",
    body: "Pure-water-fed poles handle the upper floors. Inside, we work frame-out—glass, then sill, then track—before moving to the next window.",
  },
  {
    n: "04",
    title: "We don't leave until it's right",
    body: "We do a final pass with you before we pack up. If you spot anything, we fix it on the spot. No callbacks, no excuses.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Photo — editorial, tall crop */}
          <div className="w-full lg:w-5/12 relative aspect-[3/4] rounded overflow-hidden flex-shrink-0">
            <Image
              src="/images/crew-townhouse.jpg"
              alt="Shine Bros crew member cleaning upper-story windows from the ground at a Charlotte townhouse"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" aria-hidden="true" />
          </div>

          {/* Steps */}
          <div className="lg:w-7/12 lg:pt-4">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-12">
              How a job goes from quote to spotless.
            </h2>
            <ol className="space-y-10">
              {steps.map(({ n, title, body }) => (
                <li key={n} className="flex gap-5">
                  <span
                    className="font-display text-4xl font-semibold text-white/12 leading-none flex-shrink-0 w-10 text-right"
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-semibold text-white mb-1.5">{title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
