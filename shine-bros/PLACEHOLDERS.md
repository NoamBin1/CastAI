# Placeholders — Replace Before Launch

This file tracks every placeholder in the codebase that must be replaced
with real content before the site goes live.

---

## Images

### Before/After Slider (`components/before-after-slider.tsx`)
- **`public/images/before.jpg`** — Real photo of a dirty window (same window as after.jpg).
- **`public/images/after.jpg`** — Real photo of the same window after cleaning.
- When both files are in place, set `showBeforeAfter: true` in `lib/config/site.ts`.

### Service Areas Map (`components/service-areas-section.tsx`)
- Replace the placeholder `<div>` with an embedded Google Maps iframe or a static map image.
- Suggested: a static PNG of the Charlotte metro with service area highlighted.

---

## Copy

### Hero badge (`components/hero.tsx`)
- "Rated 5 stars by Charlotte-area neighbors" — add the actual review count once confirmed.
- Line: `<span className="text-white/80 text-xs font-medium">`

### Reviews Carousel (`components/reviews-carousel.tsx`)
- All 5 reviews are `[REAL REVIEW]` placeholders.
- Replace `name`, `location`, and `body` with real Google review content.
- Only use reviews you have permission to republish.

---

## Contact Information

### Phone number
- `(704) 555-0192` is a placeholder. It appears in:
  - `components/hero.tsx`
  - `components/contact-section.tsx`
  - `app/api/quote/route.ts` (in the success message)
  - `app/local-schema.tsx`
  - `app/layout.tsx` (metadata)
  - `components/footer.tsx`
- Update `lib/config/site.ts` → `phone` and `phoneE164` once confirmed.

### Email address
- `hello@theshinebros.com` appears in `app/local-schema.tsx` and `components/contact-section.tsx`.

### Google review link
- `https://g.page/r/shine-bros-charlotte/review` in `components/reviews-carousel.tsx` is a placeholder URL.
- Replace with the actual Google Business review link.

---

## Environment Variables (`.env.local` — never commit)

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon key (insert-only RLS) |
| `RESEND_API_KEY` | Optional | Email notifications on quote submit |
| `NOTIFY_EMAIL` | Optional | Address to receive quote notifications |

---

## SEO

- `metadataBase` in `app/layout.tsx` is set to `https://theshinebros.com` — confirm this is the final domain.
- OG image: no static `/opengraph-image.png` yet. Add one at `public/opengraph-image.png` (1200×630px, dark navy background with logo).
- `sameAs` in `app/local-schema.tsx` is an empty array — add Google Business, Facebook, etc. once set up.
