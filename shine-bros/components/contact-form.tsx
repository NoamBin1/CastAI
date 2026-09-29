"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Residential – exterior only",
  "Residential – interior & exterior",
  "Commercial – storefront",
  "Commercial – office building",
  "Post-construction clean",
  "Spring & Fall – twice yearly",
  "Quarterly service plan",
  "Monthly commercial service",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  // Keep the preselected value in sync with the select
  useEffect(() => {}, [preselectedService]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: (fd.get("email") as string) || null,
      service: fd.get("service") as string,
      address: (fd.get("address") as string) || null,
      message: (fd.get("message") as string) || null,
      // honeypot — intentionally last, must not be visible to user
      website: fd.get("website") as string,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again or call us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-gold-500/15 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-gold-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-2">
          We&rsquo;ll be in touch shortly.
        </h3>
        <p className="text-white/60 text-sm">
          We typically respond within a few hours. For faster service, call us
          directly at{" "}
          <a href="tel:+17045550192" className="text-gold-400 hover:text-gold-300">
            (704) 555-0192
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, catches bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
            Name <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
            Phone <span className="text-gold-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            placeholder="(704) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1.5">
            Service type
          </label>
          <select
            id="service"
            name="service"
            defaultValue={preselectedService}
            className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500/60 transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-white/80 mb-1.5">
          Property address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          autoComplete="street-address"
          className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
          placeholder="123 Main St, Charlotte, NC"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full bg-navy-800 border border-white/15 rounded px-3.5 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
          placeholder="Number of windows, floors, special access notes…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMsg || "Something went wrong. Please try again or call us at (704) 555-0192."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-950 font-semibold px-7 py-3 rounded transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
