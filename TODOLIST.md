# TODOLIST — Signature Nails (PRD v1.0)

Sumber: `PRD.md` §27 Development Phases. Project: `nailart/` (Astro 7 + Tailwind + TS).

| # | Fase | Status |
|---|------|--------|
| 1 | Project Setup — deps Tailwind, struktur folder, lint/format | [x] |
| 2 | Design System — token warna, font Playfair Display + DM Sans, spacing, base button/card | [x] |
| 3 | Data & Config — `src/config/site.ts`, `src/data/*`, `utils/whatsapp.ts` | [x] |
| 4 | Navbar + Hero — sticky, mobile drawer, smooth scroll; Hero CLS-safe | [x] |
| 5 | About + Stats + Services + ServiceCard + Pricing — render dari data | [x] |
| 6 | Gallery + Filter + Lightbox — grid responsive, Esc/overlay close, lazy load | [x] |
| 7 | Testimonials + Why Choose Us — star rating a11y, icon outline | [x] |
| 8 | Booking + WhatsApp — semua CTA → wa.me encoded, Booking Form | [x] |
| 9 | FAQ (accordion single-open ARIA) + Instagram + Location + Footer | [x] |
| 10 | SEO + Accessibility + Performance — meta/OG, JSON-LD BeautySalon, kontras AA | [x] |
| 11 | Testing + Deploy — responsive 360/390/768/1024/1440, Lighthouse ≥90, Vercel | [~] |

**Status:** [x] selesai & terverifikasi — [~] berjalan — [ ] belum

**Verifikasi fase 1–10 (done):**
- `npm run build` sukses, `sitemap-index.xml` generated, `astro check` 0 error/0 warning
- Dev server `localhost:4321` OK — 11 section, 1 `h1`, 18 link `wa.me` ter-encode,12 item gallery
- CTA spesifik terverifikasi: `Service: Classic Manicure`, `Design: Bare Glow` (template `...` sesuai PRD §8.10)
- `rel="noopener noreferrer"` (18×), `loading="lazy"` (23×), copyright dinamis `©2026`
- Booking Form diarahkan ke nomor **bisnis** (bukan nomor customer) + nomor customer di isi pesan

**Sisa fase 11 (todo):**
- [ ] Responsive visual test 360/390/768/1024/1440 — tidak ada horizontal overflow
- [ ] Keyboard nav manual (navbar, lightbox trap, accordion, form) + screen reader spot-check
- [ ] Lighthouse mobile ≥90 (Performance/SEO/A11y/Best Practices)
- [ ] Deploy ke Vercel (build command `npm run build`, output `dist`)

## Acceptance ringkas (lihat PRD §8 untuk detail per section)

- [x] Tidak ada data bisnis hard-coded di komponen (harga/teks/kontak dari `data/` + `config/`)
- [x] Semua CTA booking valid → `https://wa.me/<number>?text=<encoded>`
- [ ] Tidak ada horizontal overflow di breakpoint manapun
- [ ] Keyboard navigable: navbar, lightbox, accordion, form; focus ring terlihat
- [x] Gambar: `alt` text, `width`/`height` atau `aspect-ratio`, lazy loading
- [x] Animasi hormati `prefers-reduced-motion`
- [x] Copyright tahun otomatis `new Date().getFullYear()`
- [ ] Lighthouse mobile ≥ 90 (Performance/SEO/A11y/Best Practices)

## Section order (single-page, PRD §7.2)

Navbar → Hero → About → Services → Gallery → Pricing → Why Choose Us → Testimonials → Instagram → FAQ → Booking (+Form) → Location → Footer
