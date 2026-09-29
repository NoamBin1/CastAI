export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  heroImageAlt: string;
  body: string; // long-form copy
  features: { title: string; description: string }[];
  faq: { q: string; a: string }[];
  relatedServices: string[]; // slugs
}

export const services: Service[] = [
  {
    slug: "residential-window-cleaning",
    name: "Residential Window Cleaning",
    shortDescription:
      "Interior and exterior glass, screens, sills, and tracks — cleaned properly in one visit.",
    heroImage: "/images/bay-window-pole.jpg",
    heroImageAlt:
      "Water-fed pole cleaning a second-story bay window on a Charlotte home",
    body: `Most residential window cleaning companies clean the glass and skip everything else. We don't. Every job includes interior and exterior panes, screens rinsed and reinstalled, and sills and tracks wiped out. It takes longer. It's the right way to do it.

Our pure-water-fed pole system lets us reach second and third-floor windows without putting ladders on your roof or gutters. The pole uses water purified to near-zero dissolved solids — no soap, no chemical residue. The glass dries spotted-free because there's nothing left to deposit.

Inside, we use drop cloths and non-abrasive tools. We work frame-out: glass first, then the sill and track, so the sill doesn't get dirty again as we work. If you have original wood frames, storm window inserts, or specialty glazing, we price those accurately upfront.

We serve Charlotte, Ballantyne, Myers Park, SouthPark, Dilworth, Cotswold, Huntersville, Mooresville, and the surrounding area.`,
    features: [
      {
        title: "Interior & exterior",
        description:
          "Both sides in one visit. We bring drop cloths for inside work.",
      },
      {
        title: "Screens",
        description:
          "Removed, rinsed with clean water, reinstalled in the correct window.",
      },
      {
        title: "Sills and tracks",
        description:
          "Wiped out on every job. Dirt in the track gets back on the glass.",
      },
      {
        title: "Pure-water-fed pole",
        description:
          "Reaches upper floors without a ladder on your roof or gutters.",
      },
    ],
    faq: [
      {
        q: "Do I need to be home during the cleaning?",
        a: "For exterior-only jobs, no. For interior access we'll need someone there to let us in.",
      },
      {
        q: "How long does a typical house take?",
        a: "A standard two-story home with 20–30 windows usually takes two to four hours, including screens, sills, and tracks.",
      },
      {
        q: "Do you clean hard-water deposits?",
        a: "Yes. Persistent hard-water buildup requires a mineral deposit remover before the standard clean. We'll let you know if we see it during the quote.",
      },
    ],
    relatedServices: ["commercial-window-cleaning", "screen-cleaning"],
  },
  {
    slug: "commercial-window-cleaning",
    name: "Commercial Window Cleaning",
    shortDescription:
      "Storefront, office, and multi-tenant window cleaning in Charlotte and surrounding areas.",
    heroImage: "/images/arched-windows.jpg",
    heroImageAlt:
      "Window cleaning technician cleaning tall arched black-framed windows on a Charlotte building",
    body: `Clean windows matter for any business that the public walks into. They signal that the space is maintained. They let in light. And they're one of the first things a customer notices before they open the door.

We work with retail storefronts, restaurant fronts, small office buildings, and multi-tenant properties. We can work early morning before staff arrive, evening after close, or whenever your schedule needs. We also do recurring contracts — weekly, monthly, or quarterly — so you never have to remember to book.

Our water-fed pole system reaches four stories on the exterior without scaffolding or lifts, which keeps cost and disruption low. Interior cleaning uses the same frame-out method we use for residential work: glass first, then sills and ledges.

Commercial properties in the Charlotte metro, including Uptown, SouthPark, Ballantyne Corporate, and the South End corridor, are all in our service area.`,
    features: [
      {
        title: "Storefronts",
        description:
          "In and out before you open or after you close. Spot-free exterior glass.",
      },
      {
        title: "Office buildings",
        description:
          "Up to four stories on the exterior, no scaffolding required.",
      },
      {
        title: "Recurring schedules",
        description:
          "Weekly, monthly, or quarterly. We show up on the schedule we set.",
      },
      {
        title: "Interior detail",
        description:
          "Sills, ledges, and window wells included. No half-measures.",
      },
    ],
    faq: [
      {
        q: "Can you work outside of business hours?",
        a: "Yes. We commonly work early morning or evenings to minimize disruption.",
      },
      {
        q: "Do you offer recurring commercial contracts?",
        a: "Yes. We offer weekly, biweekly, monthly, and quarterly service agreements with consistent scheduling.",
      },
      {
        q: "Do you carry commercial liability insurance?",
        a: "We are fully insured. We can provide a certificate of insurance for your records.",
      },
    ],
    relatedServices: ["residential-window-cleaning"],
  },
  {
    slug: "screen-cleaning",
    name: "Screen Cleaning",
    shortDescription:
      "Screens removed, hand-rinsed, and reinstalled — not just a quick wipe-down.",
    heroImage: "/images/bay-window-pole.jpg",
    heroImageAlt:
      "Window screens being carefully removed for cleaning on a Charlotte home",
    body: `Screens are the first filter for everything that drifts through your windows — pollen, dust, pollution, insect debris. A screen left in place during window cleaning just puts that debris back on freshly cleaned glass within a week.

We take screens down one by one, keep track of which window they came from, rinse each one with clean water, and put them back in the right window. It's a straightforward process. Most companies skip it or charge extra for it — we include it in every residential job.

For clients who want a deeper clean, we also offer a spray-and-brush rinse using a soft brush and low-pressure water to clear debris from the mesh itself. We label screens if they're not marked to ensure nothing goes back in the wrong opening.

If a screen is damaged — bent frame, torn mesh — we'll point it out before we reinstall it. We don't repair screens, but we know who does.`,
    features: [
      {
        title: "Removed and tracked",
        description: "Each screen labeled or noted to match back to its window.",
      },
      {
        title: "Hand-rinsed",
        description: "Clean water rinse removes pollen, dust, and surface grime.",
      },
      {
        title: "Properly reinstalled",
        description: "Back in the right window, pressed flush, no bowing.",
      },
      {
        title: "Damage noted",
        description:
          "We flag bent frames or torn mesh before reinstalling and leave the decision to you.",
      },
    ],
    faq: [
      {
        q: "Is screen cleaning included in your standard residential service?",
        a: "Yes. We include screen removal, rinse, and reinstall in every standard residential quote.",
      },
      {
        q: "Do you clean screens separately without the full window cleaning?",
        a: "We can. Contact us for a screen-only quote.",
      },
    ],
    relatedServices: ["residential-window-cleaning"],
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Window Cleaning",
    shortDescription:
      "Paint overspray, caulk residue, and stickers removed without scratching new glass.",
    heroImage: "/images/crew-townhouse.jpg",
    heroImageAlt:
      "Crew member cleaning windows on a multi-story building after construction in Charlotte",
    body: `New windows are often the dirtiest windows in the house after a construction project. Paint overspray, stucco dots, caulk smears, adhesive from protective film, and drywall dust all end up on the glass during a build or renovation.

Post-construction cleaning is different from standard window cleaning. We use specialized scrapers, razor blades held at the correct angle, and chemical removers to lift deposits without scratching the glass. We don't use the same tools on construction-soiled glass that we use on maintenance-clean residential windows.

We work with homeowners finishing a renovation, builders completing new construction, and property managers doing a turnover deep-clean. We can be on-site before the walkthrough, before the photography session, or before the first day of occupancy.

Projects across the Charlotte metro — including new construction in Ballantyne and Huntersville, renovations in Myers Park and Dilworth, and multi-unit builds in NoDa and South End — are within our regular service area.`,
    features: [
      {
        title: "Paint overspray removal",
        description:
          "Precision scraping and chemical removal without scratching the glass surface.",
      },
      {
        title: "Caulk and adhesive",
        description: "Silicone caulk and film adhesive removed safely.",
      },
      {
        title: "Drywall and plaster dust",
        description:
          "Full interior and exterior clean including sills and tracks.",
      },
      {
        title: "Builder-ready timing",
        description:
          "We coordinate with your project schedule for pre-walkthrough or pre-occupancy cleaning.",
      },
    ],
    faq: [
      {
        q: "Will scraping damage the glass?",
        a: "Not when done correctly. We use new razor blades held at a low angle and check for tempered/coated glass first, which requires different techniques.",
      },
      {
        q: "Do you work with builders and GCs directly?",
        a: "Yes. We're set up to invoice contractors and can be on the schedule as a regular subcontractor.",
      },
    ],
    relatedServices: [
      "residential-window-cleaning",
      "commercial-window-cleaning",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
