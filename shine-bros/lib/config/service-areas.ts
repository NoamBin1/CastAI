export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  neighbors: string[]; // slugs of nearby towns in the list
  neighborhoods: string[];
  buildingTypes: string;
  seasonalNotes: string;
  localFaq: { q: string; a: string }[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "charlotte",
    name: "Charlotte",
    county: "Mecklenburg",
    neighbors: ["myers-park", "southpark", "dilworth", "cotswold"],
    neighborhoods: ["Uptown", "NoDa", "Plaza Midwood", "Eastover", "Foxcroft"],
    buildingTypes:
      "Charlotte spans everything from 1940s bungalows in the Midwood area to newer infill construction in NoDa and large estates in Eastover. Many older homes have wood-framed windows that require extra care.",
    seasonalNotes:
      "Spring pollen season — typically March through May — coats glass quickly. Hard water from Charlotte's municipal supply leaves mineral deposits on exterior glass over the summer. Fall is the best time to deep-clean before winter.",
    localFaq: [
      {
        q: "Do you clean Uptown office buildings?",
        a: "Yes. We handle storefronts, low-rise office buildings, and mixed-use properties throughout Uptown and South End.",
      },
      {
        q: "Can you work around my schedule in Charlotte?",
        a: "We offer morning and afternoon windows and can often accommodate same-week bookings across Charlotte proper.",
      },
    ],
  },
  {
    slug: "ballantyne",
    name: "Ballantyne",
    county: "Mecklenburg",
    neighbors: ["southpark", "charlotte", "huntersville"],
    neighborhoods: [
      "Ballantyne Country Club",
      "Raintree",
      "Providence Plantation",
      "Ardrey",
    ],
    buildingTypes:
      "Ballantyne is dominated by large two-story and three-story builder homes from the 2000s and 2010s, plus executive estates near the golf course. Upper floors are often difficult to access without a proper water-fed pole system.",
    seasonalNotes:
      "The tree canopy in subdivisions like Raintree means heavy pollen coating every spring and again in late summer. Post-storm cleaning is common after summer thunderstorms deposit debris on sills.",
    localFaq: [
      {
        q: "My house has three floors — can you reach all of them?",
        a: "Yes. Our pure-water-fed pole system reaches up to four stories without a ladder on your roof.",
      },
      {
        q: "Do you service the office parks in Ballantyne?",
        a: "We do commercial work in the Ballantyne corporate campus and surrounding office parks.",
      },
    ],
  },
  {
    slug: "myers-park",
    name: "Myers Park",
    county: "Mecklenburg",
    neighbors: ["dilworth", "southpark", "charlotte", "cotswold"],
    neighborhoods: [
      "Myers Park proper",
      "Eastover",
      "Sherwood Forest",
      "Birchwood",
    ],
    buildingTypes:
      "Myers Park is Charlotte's historic garden district. Many homes date from the 1920s through 1950s with original wood frames, casement windows, and divided lights. These require slower, more careful work than modern vinyl windows.",
    seasonalNotes:
      "Mature oaks and maples deposit pollen heavily in spring and drop debris through fall. Many original windows have storm window inserts that need to be removed and cleaned separately.",
    localFaq: [
      {
        q: "Can you work around original wood windows without damaging them?",
        a: "Absolutely. We use non-abrasive tools and moderate pressure on all historic frames. We've worked on Myers Park homes since we started.",
      },
      {
        q: "Do you clean storm windows separately?",
        a: "Yes. We remove storm panels, clean both sides, and reinstall them. We charge a small additional fee for this service.",
      },
    ],
  },
  {
    slug: "southpark",
    name: "SouthPark",
    county: "Mecklenburg",
    neighbors: ["myers-park", "ballantyne", "charlotte", "dilworth"],
    neighborhoods: [
      "SouthPark Mall area",
      "Montibello",
      "Morrocroft Estates",
      "Beverly Crest",
    ],
    buildingTypes:
      "SouthPark mixes 1970s–1990s ranch and split-level homes with newer luxury townhomes and large custom estates near the Morrocroft area. Commercial storefronts along Fairview Road and Morrison Boulevard are common service requests.",
    seasonalNotes:
      "Hard water deposits from sprinkler systems are a persistent issue in SouthPark, especially on ground-floor windows exposed to irrigation. Late-spring cleaning removes pollen buildup before summer heat bakes it onto the glass.",
    localFaq: [
      {
        q: "Can you work around my landscaping?",
        a: "Yes. We're careful around beds and irrigation heads. We'll walk the property with you before we start.",
      },
      {
        q: "Do you clean commercial storefronts in SouthPark?",
        a: "We service storefronts along Fairview and Morrison on a recurring schedule. Ask about our commercial quote.",
      },
    ],
  },
  {
    slug: "dilworth",
    name: "Dilworth",
    county: "Mecklenburg",
    neighbors: ["charlotte", "myers-park", "southpark"],
    neighborhoods: [
      "Dilworth historic district",
      "Kenilworth",
      "East Dilworth",
    ],
    buildingTypes:
      "Dilworth is Charlotte's first streetcar suburb, with homes built between 1890 and 1940. Bungalows and Craftsman houses dominate. Many have original wood single-pane windows with divided lights and narrow glazing bars that require careful detailing.",
    seasonalNotes:
      "Dilworth's proximity to Little Sugar Creek means higher humidity and more mold-related deposits on north-facing glass in winter. Spring cleaning after oak pollen season is especially popular.",
    localFaq: [
      {
        q: "Do you work on Craftsman bungalows with small-pane windows?",
        a: "We do. Divided-light windows take more time but we price them accurately on the quote so there are no surprises.",
      },
      {
        q: "I have a rental property in Dilworth — can you handle recurring cleanings?",
        a: "Yes. We work with several Dilworth landlords on quarterly and biannual schedules.",
      },
    ],
  },
  {
    slug: "cotswold",
    name: "Cotswold",
    county: "Mecklenburg",
    neighbors: ["charlotte", "myers-park", "southpark"],
    neighborhoods: ["Cotswold", "Sherwood Forest", "Windsor Park"],
    buildingTypes:
      "Cotswold sits between SouthPark and Plaza Midwood with mostly post-war brick ranches and split-levels from the 1950s–1970s, plus newer infill on larger lots. The neighborhood has grown in popularity and many homes are being renovated with new window installations.",
    seasonalNotes:
      "Post-construction cleaning is a growing service request in Cotswold as renovation projects finish. Paint overspray and caulk residue on new glass requires specialized removal.",
    localFaq: [
      {
        q: "Do you offer post-renovation cleaning in Cotswold?",
        a: "Yes. Post-construction glass cleaning is one of our most-requested services after a renovation. We remove paint, caulk, and sticker residue without scratching.",
      },
      {
        q: "How quickly can you quote a job in Cotswold?",
        a: "We typically send quotes within a few hours of receiving photos or a visit request.",
      },
    ],
  },
  {
    slug: "huntersville",
    name: "Huntersville",
    county: "Mecklenburg",
    neighbors: ["charlotte", "mooresville", "ballantyne"],
    neighborhoods: [
      "Birkdale Village",
      "Vermillion",
      "Northstone",
      "Antiquity",
    ],
    buildingTypes:
      "Huntersville grew rapidly in the 2000s and 2010s with large suburban developments. Most homes are two- and three-story vinyl-sided or brick-front builds with double-hung and casement windows — well-suited to water-fed pole cleaning.",
    seasonalNotes:
      "Lake Norman proximity means elevated humidity and mineral deposits from humid air on north and east-facing windows. Spring and fall are the most popular cleaning seasons in Huntersville.",
    localFaq: [
      {
        q: "Do you service the Birkdale Village area?",
        a: "Yes, including both the residential streets off Birkdale and the commercial storefronts in the Village itself.",
      },
      {
        q: "Can you clean a whole new subdivision of homes?",
        a: "We work with builders and developers for post-construction cleaning on multiple homes at once.",
      },
    ],
  },
  {
    slug: "mooresville",
    name: "Mooresville",
    county: "Iredell",
    neighbors: ["huntersville", "charlotte"],
    neighborhoods: [
      "Downtown Mooresville",
      "Lake Norman waterfront",
      "Morrison Plantation",
    ],
    buildingTypes:
      "Mooresville combines older downtown commercial buildings, lakefront homes on Lake Norman, and newer suburban developments. Lakefront properties deal with mineral-rich lake spray and hard water from well systems.",
    seasonalNotes:
      "Lake Norman homes accumulate heavy mineral deposits from lake spray and irrigation throughout summer. Pre-summer cleaning before lake season is the most popular request. Hard water treatment may be needed for long-standing deposits.",
    localFaq: [
      {
        q: "Can you clean lakefront windows with heavy mineral deposits?",
        a: "Yes. We use mineral deposit remover for stubborn hard-water buildup before the standard cleaning pass.",
      },
      {
        q: "Is Mooresville within your regular service area?",
        a: "It is. We're in Mooresville regularly and can often bundle nearby properties to keep travel costs down.",
      },
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
