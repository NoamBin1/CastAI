import type { Metadata } from "next";
import ContactSection from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Free Quote — Window Cleaning Charlotte, NC",
  description:
    "Get a free window cleaning quote for your Charlotte-area home or business. We respond within a few hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-2">
          Request a free quote.
        </h1>
        <p className="text-white/60 mb-8">
          We serve Charlotte and the surrounding metro. Fill this out and
          we&rsquo;ll be in touch shortly.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
