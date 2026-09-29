import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services", label: "Residential cleaning" },
  { href: "/commercial", label: "Commercial cleaning" },
  { href: "/services#screens", label: "Screen cleaning" },
  { href: "/services#post-construction", label: "Post-construction" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Free quote" },
];

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

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="The Shine Bros"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold text-sm">
                THE SHINE BROS
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Window cleaning done right, in Charlotte and the surrounding
              area. Fully insured, locally owned.
            </p>
            <a
              href="tel:+17045550192"
              className="text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors"
            >
              (704) 555-0192
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Service areas
            </h3>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-white/50 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} The Shine Bros. Charlotte, NC. All
            rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Fully insured · Licensed · Pure-water-fed systems
          </p>
        </div>
      </div>
    </footer>
  );
}
