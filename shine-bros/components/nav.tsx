"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-white/8 shadow-sm"
          : "bg-navy-950 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo badge */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="The Shine Bros logo"
              width={36}
              height={36}
              className="object-contain"
              onError={() => {}}
            />
          </div>
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
            THE SHINE BROS
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs — always visible */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+17045550192"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Call Us
          </a>
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-sm px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
          {/* Hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors ml-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/10">
          <nav className="flex flex-col px-6 py-5 gap-5" aria-label="Mobile menu">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+17045550192"
              className="text-base font-medium text-white/80 hover:text-white transition-colors"
            >
              Call (704) 555-0192
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
