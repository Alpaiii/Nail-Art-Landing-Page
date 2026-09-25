# Product Requirements Document (PRD)
## Website Jasa Nail Art / Nail Salon — "Signature Nails" (Template Reusable)

**Versi:** 1.0
**Status:** Draft Final — Siap untuk Development
**Disusun oleh:** Senior Product Manager / UX-UI Designer / Software Architect (AI-generated)
**Tanggal:** 25 September 2026

---

## 1. Executive Summary

Dokumen ini mendefinisikan kebutuhan produk untuk sebuah **website landing page jasa Nail Art / Nail Salon** yang modern, premium, feminine, minimalis, dan mobile-first. Website ini berfungsi sebagai portfolio, media edukasi layanan & harga, alat membangun kepercayaan (trust building), serta kanal konversi menuju booking via WhatsApp.

Website dirancang sebagai **template reusable**, sehingga dapat digunakan kembali oleh berbagai bisnis nail artist/salon UMKM hanya dengan mengganti data konfigurasi (branding, layanan, harga, galeri, testimonial, lokasi), tanpa mengubah struktur kode inti.

Filosofi produk:

> **Showcase → Build Trust → Convert → Booking**

Untuk MVP, website berbentuk **single-page landing page** (dengan struktur multi-section), tanpa backend/database, menggunakan **Astro + Tailwind CSS**, di-deploy ke **Vercel**, dengan **WhatsApp** sebagai satu-satunya kanal booking.

---

## 2. Product Vision

Menjadi **template website nail salon/nail artist** yang paling mudah dipakai ulang oleh UMKM kecantikan di Indonesia — cepat dibangun, tampil premium tanpa terasa seperti template murah, dan secara konsisten mengarahkan pengunjung (mayoritas berasal dari Instagram/TikTok) menuju satu tujuan: **booking appointment via WhatsApp**.

Website tidak boleh terasa korporat. Visual harus mendekati brand *beauty/luxury salon*: elegant, clean, premium, feminine, professional, trustworthy, modern, personal — dan menghindari desain ramai, warna mencolok berlebihan, animasi berlebihan, atau layout mirip marketplace.

---

## 3. Goals & Objectives

| # | Goal | Metric Keberhasilan (indikatif) |
|---|------|-----------------------------------|
| G1 | Menyajikan portfolio nail art yang menarik & mudah dijelajahi | Gallery interaction rate, waktu di section Gallery |
| G2 | Menjelaskan layanan & harga secara transparan | Klik pada Service CTA / Pricing view |
| G3 | Membangun kepercayaan melalui testimonial & statistik | Testimonial section view rate |
| G4 | Memaksimalkan konversi booking via WhatsApp | Klik "Book via WhatsApp" per sesi |
| G5 | Website dapat digunakan ulang (template) untuk bisnis lain | Waktu setup ulang < 1 hari kerja (ganti config saja) |
| G6 | Performa tinggi di mobile (target utama traffic dari sosial media) | Lighthouse mobile score ≥ 90 (Performance, SEO, Accessibility, Best Practices) |

---

## 4. Target Users

### 4.1 Potential Customer
Calon pelanggan yang belum pernah menggunakan jasa, biasanya datang dari Instagram/TikTok atau pencarian Google.

**Kebutuhan:**
- Melihat hasil nail art secara visual (gallery).
- Mengetahui jenis layanan dan penjelasannya.
- Mengetahui kisaran harga tanpa harus bertanya dulu.
- Melihat testimonial/ulasan pelanggan lain.
- Mengetahui lokasi studio.
- Melakukan booking dengan mudah (idealnya 1–2 klik ke WhatsApp).

**Pain point:** ragu memilih nail artist baru, khawatir harga tidak jelas, khawatir hasil tidak sesuai ekspektasi.

### 4.2 Returning Customer
Pelanggan yang sudah pernah datang sebelumnya.

**Kebutuhan:**
- Melihat kembali portfolio/desain terbaru.
- Menemukan kontak WhatsApp dengan cepat (tanpa scroll panjang).
- Booking ulang secepat mungkin.

**Pain point:** tidak mau membaca ulang semua informasi, hanya butuh jalur cepat ke WhatsApp.

### 4.3 Business Owner / Nail Artist (pemilik & pengelola website)
Pemilik bisnis yang akan mengelola konten & menerima booking.

**Kebutuhan:**
- Menampilkan portfolio dengan kualitas visual tinggi.
- Mempromosikan layanan & harga tanpa perlu developer setiap update.
- Mendapatkan booking yang terarah dan informasinya lengkap saat masuk WhatsApp.
- Menampilkan social media (Instagram) sebagai bukti eksistensi & engagement.
- Menggunakan website sebagai identitas profesional/branding.

**Pain point:** tidak punya waktu/skill teknis untuk mengelola CMS kompleks; butuh sesuatu yang mudah diedit (data/config).

---

## 5. User Personas

### Persona 1 — "Aisyah", 24, Potential Customer
Mahasiswi/karyawan muda, aktif Instagram & TikTok, mencari nail artist baru dari rekomendasi teman/FYP. Sensitif terhadap harga dan hasil visual. Memutuskan booking dalam waktu singkat jika trust terbentuk cepat (portfolio + testimonial + harga jelas).

### Persona 2 — "Sarah", 29, Returning Customer
Sudah 3x melakukan nail art di studio ini. Hafal alurnya, hanya butuh akses cepat ke WhatsApp untuk booking ulang, kadang ingin melihat desain baru dulu di gallery.

### Persona 3 — "Bu Rina", 34, Business Owner / Nail Artist
Pemilik studio nail art kecil, mengelola sendiri Instagram dan WhatsApp bisnis. Ingin website yang terlihat profesional tanpa harus menyewa developer setiap kali harga atau foto berubah.

---

## 6. User Journey

### Journey 1 — New Customer (via Instagram/TikTok)
```
Instagram/TikTok → Website (Hero) → Gallery → Services → Pricing →
Testimonials → Book Appointment (CTA) → WhatsApp (pesan otomatis) →
Nail Artist Confirms → Appointment
```

### Journey 2 — Customer dengan Desain Spesifik
```
Website → Gallery → Pilih Desain → Klik "Book This Design" →
WhatsApp (pesan otomatis berisi nama desain) → Konfirmasi
```

### Journey 3 — Returning Customer
```
Website (langsung scroll/klik navbar CTA) → Book Appointment →
WhatsApp → Konfirmasi
```

**Prinsip desain journey:** setiap journey harus dapat mencapai WhatsApp dalam maksimal 3 klik dari titik masuk manapun di halaman.

---

## 7. Information Architecture

### 7.1 Struktur Ideal (Multi-page, untuk fase lanjutan)
```
/
├── Home
├── Services
├── Gallery
├── About
├── Pricing
├── FAQ
└── Booking
```

### 7.2 Struktur MVP (Single-page)
Untuk MVP, seluruh section digabung dalam satu landing page (`/`) dengan anchor navigation, karena:

1. **Mengurangi friksi navigasi** — pengunjung dari sosial media umumnya melakukan scroll linear, bukan navigasi multi-halaman.
2. **Mempercepat time-to-conversion** — semua informasi kepercayaan (portfolio, harga, testimonial) tersedia dalam satu alur scroll sebelum CTA booking.
3. **SEO tetap efektif** untuk bisnis lokal skala kecil (single-page dengan heading hierarchy yang baik cukup untuk local SEO).
4. **Lebih mudah dijadikan template** — satu file konfigurasi mengontrol satu halaman, memudahkan replikasi ke bisnis lain.
5. **Performa lebih baik** — tanpa multi-route hydration, LCP/CLS lebih mudah dijaga rendah di perangkat mobile kelas menengah.

```
Home (/)
├── Navbar
├── Hero
├── About
├── Services
├── Gallery
├── Pricing
├── Why Choose Us
├── Testimonials
├── Instagram/Social Proof
├── FAQ
├── Booking CTA (+ optional Booking Form)
├── Location
└── Footer
```

---

## 8. Page Structure & Detailed Feature Requirements

Untuk setiap section berikut: **Deskripsi → Konten → Requirement UX/UI → Acceptance Criteria** disatukan agar developer memiliki satu sumber kebenaran.

### 8.1 Navbar

**Deskripsi:** Navigasi utama, sticky, selalu memberi akses cepat ke CTA booking.

**Isi:**
- Logo / Brand Name (dari `siteConfig`)
- Menu: Home, Services, Gallery, About, Pricing, FAQ
- CTA: **"Book Appointment"** (tombol solid, warna accent, selalu terlihat)

**Requirement:**
- Sticky di top viewport.
- Berubah gaya secara subtle saat scroll (contoh: background transparan → solid + shadow tipis setelah scroll > 50px).
- Mobile: hamburger menu, membuka off-canvas/drawer menu dengan smooth transition.
- Smooth scrolling ke anchor section (`scroll-behavior: smooth`, hormati `prefers-reduced-motion`).
- CTA booking tetap terlihat di mobile (baik di navbar collapsed maupun di dalam drawer).

**User Story:**
> Sebagai pengunjung, saya ingin bisa langsung menuju section manapun atau langsung booking dari navbar, agar saya tidak perlu scroll manual terlalu jauh.

**Acceptance Criteria:**
- [ ] Navbar tetap terlihat (sticky) saat scroll ke bawah di semua breakpoint.
- [ ] Klik menu item melakukan smooth scroll ke section yang sesuai.
- [ ] Di layar < 768px, menu utama tersembunyi di balik hamburger icon.
- [ ] CTA "Book Appointment" pada navbar mengarah ke section Booking / link WhatsApp.
- [ ] Navbar tidak menyebabkan layout shift (CLS) saat berubah gaya ketika di-scroll.
- [ ] Navbar dapat dioperasikan penuh dengan keyboard (tab order logis, focus state terlihat).

---

### 8.2 Hero Section

**Deskripsi:** Section pertama, harus langsung menyampaikan value proposition dan mengarahkan ke CTA.

**Konten (default, configurable):**
- Headline: *"Your Nails, Your Signature."*
- Subheadline: *"Elegant nail art crafted to make every detail of your style unforgettable."*
- CTA utama: **"Book Your Appointment"** → WhatsApp / section Booking.
- CTA sekunder: **"Explore Our Work"** → scroll ke Gallery.
- Large nail art image (hero image, focal point visual).
- Brand name.
- Optional: social proof singkat (mis. rating bintang), optional statistik (mis. "500+ Happy Clients").

**Requirement UX:**
- CTA utama harus paling menonjol secara visual (kontras warna accent).
- Minim teks — hanya headline, subheadline, dan CTA.
- Image menjadi focal point, menggunakan `object-fit: cover` agar tidak terdistorsi di semua breakpoint.
- Di mobile, layout tetap menarik: gambar tetap dominan, teks tidak terlalu kecil (min. 16px body, headline responsive via `clamp()`).

**Acceptance Criteria:**
- [ ] Hero tampil dengan benar pada mobile (360–430px), tablet (768px), desktop (1024px+).
- [ ] CTA "Book Your Appointment" dapat diklik/tap dan mengarah ke WhatsApp/Booking section.
- [ ] CTA "Explore Our Work" melakukan smooth scroll ke Gallery.
- [ ] Hero image menggunakan `width`/`height` eksplisit atau `aspect-ratio` untuk mencegah layout shift (CLS = 0).
- [ ] Hero image memiliki `alt` text deskriptif.
- [ ] Statistik/rating opsional dapat disembunyikan via config tanpa merusak layout.

---

### 8.3 About Section — "Where Beauty Meets Detail"

**Konten:**
- Brand story singkat.
- Perkenalan singkat nail artist/owner.
- Filosofi kerja.
- Pengalaman & kualitas layanan.
- Statistik (configurable), contoh default:

| Statistik | Label |
|---|---|
| 5+ | Years Experience |
| 500+ | Happy Clients |
| 1000+ | Nail Designs |
| 4.9/5 | Client Rating |

**Requirement UX:**
- Statistik ditampilkan sebagai grid/row angka besar + label kecil, dengan optional animasi *count-up* subtle (harus hormati `prefers-reduced-motion`).
- Statistik harus 100% berasal dari data config, bukan hard-coded di komponen.

**Acceptance Criteria:**
- [ ] Semua angka statistik dapat diubah melalui file data tanpa menyentuh kode komponen.
- [ ] Section tetap terbaca baik di mobile (grid statistik menyesuaikan menjadi 2 kolom di mobile, 4 kolom di desktop).
- [ ] Brand story text dapat diubah via config/data.

---

### 8.4 Services Section

**Konten default (data, bukan hard-coded UI):**

| Service | Deskripsi Singkat | Starting Price |
|---|---|---|
| Classic Manicure | Basic manicure untuk tampilan kuku clean dan elegant. | Rp75.000 |
| Gel Polish | Gel polish dengan hasil glossy dan tahan lama. | Rp120.000 |
| Custom Nail Art | Desain nail art sesuai request pelanggan. | Rp150.000 |
| Nail Extensions | Nail extension untuk tampilan kuku lebih panjang. | Rp200.000–Rp250.000 |
| Nail Repair | Perbaikan kuku rusak atau patah. | Rp30.000 |

**Setiap service card berisi field (lihat Data Model §14):** image, name, description, starting price, duration, kategori, CTA "Book Now".

**Requirement UX:**
- Grid responsive: 1 kolom (mobile) → 2 kolom (tablet) → 3 kolom (desktop).
- CTA "Book Now" pada tiap card mengarah ke WhatsApp dengan pesan otomatis yang sudah terisi nama layanan tersebut.

**Acceptance Criteria:**
- [ ] Semua service card dirender dari `serviceData`, bukan hard-coded per komponen.
- [ ] Menambah/menghapus service cukup dengan mengubah data, tanpa mengubah komponen.
- [ ] CTA "Book Now" pada setiap card menghasilkan pesan WhatsApp yang menyertakan nama service tersebut.
- [ ] Card menampilkan fallback image bila `image` tidak tersedia (tidak boleh broken image).

---

### 8.5 Gallery Section — "Our Latest Creations"

**Fitur inti** (salah satu section terpenting untuk trust & konversi).

**Filter kategori:** All, Minimalist, French, Gel, Korean, Luxury.

**Grid responsive:**
| Breakpoint | Kolom |
|---|---|
| Desktop | 3–4 kolom |
| Tablet | 2–3 kolom |
| Mobile | 2 kolom |

**Lightbox (saat image diklik):**
- Menampilkan image dalam ukuran besar.
- Nama desain.
- Kategori.
- Harga (opsional).
- CTA **"Book This Design"** → WhatsApp dengan pesan otomatis berisi nama desain.
- Dapat ditutup via tombol close, klik area luar (overlay), atau tombol `Esc`.

**Requirement teknis:**
- Lazy loading untuk semua gambar gallery (`loading="lazy"`, kecuali gambar pertama yang above-the-fold jika ada).
- Data gallery mudah ditambah/dikurangi via `galleryData`.

**Acceptance Criteria:**
- [ ] User dapat melihat seluruh item gallery default ("All").
- [ ] User dapat memfilter gallery berdasarkan kategori; hasil filter update tanpa reload halaman.
- [ ] User dapat membuka lightbox dengan klik/tap pada gambar.
- [ ] User dapat menutup lightbox via tombol close, overlay click, atau tombol Esc (keyboard accessible).
- [ ] Navigasi lightbox (next/prev) opsional untuk MVP tapi disarankan untuk Should Have.
- [ ] Gallery grid responsive sesuai breakpoint pada tabel di atas.
- [ ] Semua gambar memiliki `alt` text dan menggunakan lazy loading.
- [ ] CTA "Book This Design" menghasilkan pesan WhatsApp yang menyertakan nama desain terkait.

---

### 8.6 Pricing Section

**Konten default:**

| Service | Starting Price |
|---|---|
| Manicure | Rp75K |
| Gel Polish | Rp120K |
| Simple Nail Art | Rp150K |
| Custom Nail Art | Rp200K |
| Nail Extension | Rp250K |
| Nail Art Removal | Rp50K |

**Catatan wajib ditampilkan:**
> "Prices may vary depending on design complexity."

**Requirement:**
- Data harga bersumber dari satu file config/data (`serviceData` atau `pricingData`), **tidak boleh hard-coded** di lebih dari satu tempat (Hero, Services, Pricing harus mengambil dari sumber yang sama bila menampilkan harga yang sama).

**Acceptance Criteria:**
- [ ] Tabel/daftar harga dirender dari data, tidak hard-coded di JSX/markup.
- [ ] Disclaimer harga variatif selalu tampil di bawah tabel.
- [ ] Tabel harga tetap terbaca (tidak overflow horizontal) di layar 360px.

---

### 8.7 Why Choose Us

**Konten default (4 poin, icon minimalis):**

| Judul | Deskripsi |
|---|---|
| Hygienic | Tools are cleaned and sanitized before every appointment. |
| Personalized Design | Every design can be customized to your preference. |
| Premium Products | We use carefully selected nail products. |
| Detail-Oriented | Every nail is finished with attention to detail. |

**Requirement UX:** Grid 2 kolom (mobile) / 4 kolom (desktop), icon outline minimalis (bukan icon set ramai/berwarna-warni).

**Acceptance Criteria:**
- [ ] Konten (judul, deskripsi, icon) dapat diubah via data/config.
- [ ] Layout tidak pecah saat jumlah poin ditambah (mis. dari 4 menjadi 5–6).

---

### 8.8 Testimonials

**Field per testimonial:** customer name, avatar (optional), rating (1–5), testimonial text, service terkait (optional).

**Contoh:**
> "The details are beautiful and the service was amazing!" — Sarah

**Requirement:**
- Ditampilkan sebagai carousel (mobile) atau grid (desktop), dari `testimonialData` (reusable data component).
- Rating ditampilkan sebagai bintang (star icon), bukan angka mentah saja.

**Acceptance Criteria:**
- [ ] Semua testimonial dirender dari data, mudah ditambah/dikurangi.
- [ ] Rating ditampilkan secara visual (star rating) dan memiliki text alternatif untuk screen reader (mis. "4.9 out of 5 stars").
- [ ] Carousel (jika digunakan) dapat dioperasikan dengan swipe (mobile) dan keyboard/tombol panah (desktop).

---

### 8.9 Instagram / Social Proof — "Follow Our Nail Journey"

**Konten:**
- Instagram username (dari config, mis. `@yourinstagram`).
- Preview grid gambar (static/configurable, **bukan** live Instagram API untuk MVP).
- CTA **"Follow on Instagram"** → link ke profil Instagram.

**Keputusan arsitektur:** Untuk MVP, section ini **tidak** memiliki dependency terhadap Instagram Graph API (menghindari kompleksitas auth, rate limit, dan biaya maintenance). Gambar preview diambil dari `galleryData` atau set data statis terpisah (`instagramPreviewData`) yang di-update manual oleh owner.

**Acceptance Criteria:**
- [ ] Section tidak melakukan request ke API eksternal Instagram.
- [ ] Username dan link Instagram bersumber dari `siteConfig`.
- [ ] CTA membuka profil Instagram di tab baru (`target="_blank"`, `rel="noopener noreferrer"`).

---

### 8.10 Booking (CTA + WhatsApp Flow)

**Prinsip MVP:** Tidak ada booking backend kompleks / real-time scheduling. **WhatsApp adalah primary booking channel.**

**Flow:**
```
Customer → Choose Service → Choose Design (optional) → Klik Book →
WhatsApp (pesan otomatis) → Nail Artist Confirms → Appointment
```

**Format pesan WhatsApp otomatis (template):**
```
Halo, saya ingin booking nail art.

Service: {service}
Design: {design}
Tanggal: {date}
Jam: {time}
Nama: {name}
```
Field yang tidak terisi (karena user datang dari CTA generik, bukan dari form) ditampilkan sebagai placeholder `...` agar customer melengkapi manual di WhatsApp, sesuai contoh pada brief awal.

**Requirement teknis:**
- Nomor WhatsApp business **wajib** berasal dari `siteConfig.whatsapp`, tidak boleh hard-coded di komponen manapun.
- URL WhatsApp menggunakan format `https://wa.me/<nomor_internasional>?text=<pesan_encoded>`.

**Acceptance Criteria:**
- [ ] Semua CTA booking (Navbar, Hero, Service card, Gallery lightbox, Booking section) menghasilkan URL WhatsApp yang valid.
- [ ] Nomor WhatsApp diambil dari satu sumber config.
- [ ] Pesan otomatis ter-encode dengan benar (URL-encoded) agar line break & karakter khusus tidak rusak.
- [ ] Tidak ada credential/API key sensitif digunakan untuk fitur ini (murni link `wa.me`).

---

### 8.11 Booking Form (Optional — Should Have)

**Field:**
| Field | Tipe | Wajib |
|---|---|---|
| Name | text | Ya |
| WhatsApp Number | tel | Ya |
| Service | select (dari `serviceData`) | Ya |
| Preferred Date | date | Tidak |
| Preferred Time | time | Tidak |
| Design Preference | text/select | Tidak |
| Additional Notes | textarea | Tidak |

**Setelah submit:**
> "Booking received! We'll contact you via WhatsApp to confirm your appointment."

**Keputusan arsitektur & disclaimer wajib:** Form ini **bukan sistem real-time appointment scheduling**. Untuk MVP, submit form akan menyusun data tersebut menjadi pesan WhatsApp terformat dan mengarahkan (redirect) pengguna ke `wa.me` dengan pesan tersebut — **tidak ada penyimpanan ke database**. Tidak ada validasi ketersediaan slot waktu secara real-time; konfirmasi akhir tetap dilakukan manual oleh nail artist via WhatsApp.

**Acceptance Criteria:**
- [ ] Semua field wajib divalidasi di sisi client sebelum submit (nama tidak boleh kosong, nomor WhatsApp format valid).
- [ ] Data yang tidak sensitif (nomor telepon customer) tidak disimpan di server/database — hanya diteruskan ke URL WhatsApp.
- [ ] Setelah submit, user diarahkan ke WhatsApp dengan pesan yang sudah tersusun dari input form.
- [ ] Pesan konfirmasi ("Booking received!...") tampil sebelum/pada saat redirect.
- [ ] Form nyaman digunakan di mobile (ukuran input, spacing, keyboard type sesuai field — mis. `type="tel"` memunculkan numeric keypad).

---

### 8.12 FAQ

**Konten default:**

| Pertanyaan | Jawaban |
|---|---|
| How long does an appointment take? | Typically 60–120 minutes depending on the service. |
| Do I need to make an appointment? | Appointments are recommended. |
| Can I bring my own nail design? | Yes. Customers can send reference designs. |
| How long does gel polish last? | Typically around 2–3 weeks with proper care. |
| Can I cancel my appointment? | Customer should contact the business as early as possible. |

**Requirement UX:** Ditampilkan sebagai **accordion**, satu item terbuka dalam satu waktu (single-open, lihat Assumptions & Decisions), dengan animasi expand/collapse yang subtle.

**Acceptance Criteria:**
- [ ] Semua FAQ dirender dari `faqData`.
- [ ] Accordion dapat dioperasikan dengan keyboard (Enter/Space untuk toggle, fokus terlihat jelas).
- [ ] Accordion memiliki atribut ARIA yang sesuai (`aria-expanded`, `aria-controls`) untuk screen reader.

---

### 8.13 Location Section — "Visit Our Studio"

**Konten:**
- Alamat.
- Google Maps CTA/embed ("Get Directions").
- Jam operasional (contoh: *Monday – Saturday, 10:00 – 20:00*).
- WhatsApp.
- Instagram.

**Acceptance Criteria:**
- [ ] Alamat & jam operasional bersumber dari `siteConfig`.
- [ ] CTA "Get Directions" membuka Google Maps URL dari config di tab baru.
- [ ] Jika menggunakan embed peta, embed harus lazy-loaded agar tidak menghambat LCP.

---

### 8.14 Footer

**Isi:**
- Brand logo + short description.
- Navigasi: Home, Services, Gallery, About, Pricing, FAQ.
- Contact: WhatsApp, Instagram, Location.
- Copyright: `© {tahun berjalan} {Brand Name}. All Rights Reserved.`

**Acceptance Criteria:**
- [ ] Tahun pada copyright dihitung otomatis (`new Date().getFullYear()`), tidak hard-coded.
- [ ] Semua link navigasi footer melakukan smooth scroll ke section terkait.

---

## 9. UX Requirements (Ringkasan Lintas Section)

- CTA booking harus selalu dapat dijangkau maksimal dalam 3 klik dari titik manapun.
- Hierarki visual: **Visual Quality → Trust → Portfolio → Service Clarity → Booking**.
- Tidak ada dark pattern, tidak ada CTA yang terasa agresif/mendesak berlebihan.
- Copy singkat, padat, dan personal — hindari bahasa korporat kaku.
- Semua CTA menggunakan label aksi jelas (bukan "Click Here").

---

## 10. UI Design System

### 10.1 Positioning Visual
**Modern Luxury + Feminine Minimalism.** Kesan yang ingin dibangun: elegant, clean, premium, feminine, professional, trustworthy, modern, personal.

**Dihindari:** desain ramai, warna mencolok berlebihan, animasi berlebihan, layout ala marketplace, tampilan generik/template murah.

### 10.2 Palet Warna (default, configurable via theme token)

| Token | Hex | Peran |
|---|---|---|
| Background | `#FFF9F7` | Latar utama, lembut & hangat |
| Primary | `#B78B8B` | Warna brand utama (dusty rose) |
| Secondary | `#E8D5D5` | Aksen lembut, background section alternatif |
| Text | `#2B2525` | Teks utama, kontras tinggi terhadap background |
| Accent | `#C9A46C` | CTA, highlight, elemen premium (gold-muted) |

**Prinsip pemakaian warna:** warna accent (`#C9A46C`) hanya digunakan untuk elemen yang butuh perhatian tinggi (CTA utama, highlight harga), tidak digunakan sebagai warna dominan agar tetap terasa minimalis.

### 10.3 Typography

**Opsi A (direkomendasikan sebagai default):**
- Heading: **Playfair Display** — serif elegan, memberi kesan luxury & feminine, cocok untuk headline besar.
- Body: **DM Sans** — sans-serif modern, sangat mudah dibaca di ukuran kecil pada mobile, netral namun tetap hangat.

**Opsi B (alternatif):**
- Heading: **Cormorant Garamond** — serif lebih tipis/klasik, kesan lebih editorial/high-fashion.
- Body: **Inter** — sans-serif sangat netral & terbukti readable di berbagai device, cocok untuk teks panjang (FAQ, About).

**Alasan pemilihan:** Kombinasi serif (heading) + sans-serif (body) adalah pola umum di industri *beauty/luxury branding* — serif memberi kesan personal dan premium pada judul besar, sementara sans-serif menjaga keterbacaan tinggi untuk body text di layar kecil. Opsi A dipilih sebagai default karena Playfair Display + DM Sans memiliki dukungan web font yang matang, rendering yang stabil di berbagai OS, serta kombinasi berat font (weight) yang cukup untuk hierarki teks tanpa memerlukan banyak file font (menjaga performa).

### 10.4 Iconografi
Icon minimalis outline/line-style (bukan filled colorful icon set), konsisten stroke-width, selaras dengan warna Text/Primary.

### 10.5 Spacing & Layout
- Sistem spacing berbasis skala 4px/8px.
- Whitespace generous antar section untuk kesan premium (bukan padat/marketplace).
- Border-radius konsisten pada card & tombol (medium rounded, bukan sharp corner maupun pill berlebihan) untuk kesan lembut-feminine.

---

## 11. Responsive Requirements

**Pendekatan:** Mobile-first (target utama: traffic dari Instagram/TikTok di perangkat mobile kelas menengah).

**Breakpoints minimal:**

| Breakpoint | Lebar Perkiraan |
|---|---|
| Mobile | 360px – 767px |
| Tablet | 768px – 1023px |
| Desktop | 1024px – 1439px |
| Large Desktop | ≥ 1440px |

**Ketentuan wajib:**
- Navbar, Hero, Gallery, Cards, Typography seluruhnya responsive.
- Tidak ada horizontal overflow di breakpoint manapun.
- Gambar tidak terdistorsi (`object-fit: cover`, dimensi eksplisit/`aspect-ratio`).
- CTA memiliki target area sentuh minimal 44×44px (mobile touch target).
- Form nyaman digunakan di mobile (input besar, jarak antar field cukup, keyboard type sesuai).

---

## 12. Animation Guidelines

**Digunakan (subtle only):**
- Fade in on scroll.
- Slide up on scroll.
- Image hover (scale/opacity halus).
- Button hover (warna/shadow halus).
- Smooth scrolling antar section.
- Transisi gallery filter & lightbox.
- Transisi navbar saat scroll.

**Dihindari:**
- Parallax berlebihan.
- Efek bouncing berlebihan.
- Loading animation yang lama/menghambat konten.
- Animasi yang mengganggu jalur konversi (mis. CTA yang bergerak-gerak terus).

**Wajib:** seluruh animasi menghormati media query `prefers-reduced-motion: reduce` (dinonaktifkan/diminimalkan bagi user yang mengaktifkan pengaturan tersebut di OS).

---

## 13. Component Architecture

Struktur folder disesuaikan dengan konvensi Astro (`.astro` components, co-located styles via Tailwind utility classes):

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Stats.astro
│   ├── Services.astro
│   ├── ServiceCard.astro
│   ├── Gallery.astro
│   ├── GalleryFilter.astro
│   ├── GalleryLightbox.astro   (client-side island, minimal JS)
│   ├── Pricing.astro
│   ├── WhyChooseUs.astro
│   ├── Testimonials.astro
│   ├── Instagram.astro
│   ├── FAQ.astro
│   ├── FAQItem.astro
│   ├── Booking.astro
│   ├── BookingForm.astro       (client-side island, minimal JS)
│   ├── Location.astro
│   └── Footer.astro
│
├── data/
│   ├── services.ts
│   ├── gallery.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── config/
│   └── site.ts                 (siteConfig: brand, contact, location, theme)
│
├── layouts/
│   └── BaseLayout.astro        (head, meta, SEO tags, global styles)
│
├── pages/
│   └── index.astro
│
├── utils/
│   └── whatsapp.ts             (helper generate WhatsApp URL dari template pesan)
│
└── styles/
    └── global.css              (Tailwind base/theme tokens)
```

**Prinsip arsitektur:**
- Komponen UI **tidak boleh** menyimpan data bisnis (harga, teks, kontak) secara hard-coded — seluruh data diteruskan sebagai props dari file `data/` atau `config/`.
- Interaktivitas kompleks (Gallery Lightbox, Booking Form, Navbar mobile menu, FAQ accordion) menggunakan Astro Islands dengan JavaScript minimal (vanilla JS atau framework ringan bila diperlukan), agar sebagian besar halaman tetap static HTML.

---

## 14. Data Model

Model data didefinisikan sebagai TypeScript interface (untuk type-safety di build time), disimpan sebagai file data statis (bukan database) pada MVP.

### 14.1 Service
```ts
interface Service {
  id: string;
  name: string;
  description: string;
  price: string;        // contoh: "Rp75.000" atau "Rp200.000–Rp250.000"
  duration: string;      // contoh: "45 menit"
  image: string;
  category: string;
  featured: boolean;
}
```

### 14.2 Gallery Item
```ts
interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: "Minimalist" | "French" | "Gel" | "Korean" | "Luxury" | string;
  price?: string;
  featured: boolean;
}
```

### 14.3 Testimonial
```ts
interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;        // 1–5
  message: string;
  service?: string;
}
```

### 14.4 FAQ
```ts
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```

### 14.5 Business / Site Config
```ts
interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  phone: string;
  whatsapp: string;          // format internasional, mis. "6281234567890"
  instagram: string;         // mis. "@yourinstagram"
  address: string;
  city: string;
  province: string;
  openingHours: string;      // atau struktur per hari jika dibutuhkan
  googleMapsUrl: string;
  theme: {
    colors: { background: string; primary: string; secondary: string; text: string; accent: string };
    fonts: { heading: string; body: string };
  };
}
```

---

## 15. Technology Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | **Astro** | Static-first, output HTML minim JS, ideal untuk landing page performa tinggi & SEO |
| Styling | **Tailwind CSS** | Utility-first, cepat membangun design system konsisten, mudah dikustomisasi per-tenant (ganti theme token) |
| Bahasa | **TypeScript** | Type-safety untuk data model (Service, Gallery, dll), mengurangi bug saat replikasi template |
| Interaktivitas | **Astro Islands + Vanilla JS** (minimal) | Hanya komponen yang benar-benar butuh interaktivitas (lightbox, accordion, form, navbar mobile) yang di-hydrate; sisanya static |
| Hosting/Deploy | **Vercel** | Deploy otomatis dari Git, preview deployment per PR, HTTPS otomatis, cocok untuk static/SSG Astro |
| Database | **Tidak digunakan (MVP)** | Booking via WhatsApp, data konten via file statis — mengurangi biaya & kompleksitas operasional untuk UMKM |

**Library tambahan (jika diperlukan):** hanya library ringan yang benar-benar dibutuhkan, misalnya library lightbox ringan atau ikon set (mis. `lucide` static SVG). Setiap penambahan library harus dijustifikasi terhadap dampak bundle size.

---

## 16. Reusable Template Architecture & Content Management Strategy

**Prinsip:** Tidak ada CMS pada MVP. Alur konten:
```
No CMS → Configuration / Local Data Files → Static Build (Astro)
```

**Cara owner mengganti konten (tanpa developer, dengan panduan sederhana):**

| Elemen | Lokasi Perubahan |
|---|---|
| Logo, Brand Name, Tagline | `src/config/site.ts` |
| Warna & Font (Theme) | `src/config/site.ts` (`theme.colors`, `theme.fonts`) |
| Foto (hero, service, gallery) | Folder `public/images/...`, path direferensikan di file data terkait |
| Services & Harga | `src/data/services.ts` |
| Gallery | `src/data/gallery.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ | `src/data/faq.ts` |
| Nomor WhatsApp | `src/config/site.ts` (`whatsapp`) |
| Instagram | `src/config/site.ts` (`instagram`) |
| Lokasi & Jam Operasional | `src/config/site.ts` (`address`, `openingHours`, `googleMapsUrl`) |

**Tujuan replikasi:** Untuk membuat instance baru bagi bisnis lain (mis. "Nail Salon A", "Nail Artist B", "Beauty Studio C"), tim cukup melakukan fork/clone repo lalu mengganti isi folder `src/data/` dan `src/config/site.ts`, tanpa menyentuh `src/components/`.

---

## 17. SEO Requirements

### 17.1 Technical SEO
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, heading hierarchy `h1`→`h6` yang logis, hanya satu `h1` per halaman).
- Meta title & meta description unik, diambil dari `siteConfig`.
- Canonical URL.
- `sitemap.xml` (auto-generated via Astro integration).
- `robots.txt`.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- Twitter/X Card tags.
- Structured data (JSON-LD) bila relevan (lihat §17.2).

### 17.2 Local SEO
Website dapat dikonfigurasi (via `siteConfig`) untuk:
- Business Name, Business Type, Address, City, Province, Phone, Opening Hours, Instagram, Google Maps URL.

Menggunakan **structured data schema.org type `BeautySalon`** (subtype dari `LocalBusiness`) yang paling sesuai dengan jenis bisnis, mencakup properti: `name`, `image`, `address`, `telephone`, `openingHours`, `priceRange`, `url`.

---

## 18. Accessibility Requirements

Target: prinsip **WCAG 2.1 AA**.

- Semantic HTML di seluruh halaman.
- Heading hierarchy proper (tidak melompat level, mis. `h2` langsung ke `h4`).
- Semua gambar informatif memiliki `alt` text deskriptif; gambar dekoratif menggunakan `alt=""`.
- Seluruh elemen interaktif dapat diakses via keyboard (tab order logis, tidak ada keyboard trap).
- Focus state terlihat jelas (custom focus ring, bukan `outline: none` tanpa pengganti).
- Kontras warna teks terhadap background memenuhi rasio minimal AA (≥ 4.5:1 untuk teks normal, ≥ 3:1 untuk teks besar) — perlu pengecekan khusus pada kombinasi Primary/Secondary terhadap Background.
- Tombol & link memiliki label yang jelas (bukan hanya icon tanpa `aria-label`).
- Form memiliki `<label>` yang terasosiasi dengan input (`for`/`id`), pesan error jelas dan terasosiasi via `aria-describedby`.
- ARIA attributes hanya digunakan bila diperlukan (accordion FAQ, lightbox modal, mobile menu drawer).
- Mendukung `prefers-reduced-motion`.

---

## 19. Performance Requirements

**Target Core Web Vitals (prioritas utama, khususnya mobile kelas menengah):**

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |

**Strategi:**
- Static generation penuh via Astro (minim JavaScript di client).
- Optimasi gambar: format modern (WebP/AVIF dengan fallback), ukuran responsif (`srcset`), kompresi.
- Lazy loading untuk gambar di luar viewport (khususnya Gallery).
- Minimasi JavaScript — hanya hydrate komponen yang benar-benar interaktif (Astro Islands).
- Hindari dependency yang tidak perlu; setiap library harus melalui pertimbangan dampak bundle size.
- Font loading dioptimalkan (`font-display: swap`, preload font kritikal).

---

## 20. Security Requirements

Meskipun website bersifat static:
- Tidak ada data sensitif yang disimpan di frontend/localStorage.
- Input pada Booking Form divalidasi & disanitasi di sisi client sebelum diteruskan ke URL WhatsApp (mencegah injeksi karakter yang merusak URL/pesan).
- Tidak ada API key atau credential yang terekspos di kode client-side.
- Tidak ada secret/credential yang disimpan di repository Git — gunakan environment variables (mis. untuk konfigurasi Analytics ID) melalui mekanisme env Vercel.
- Seluruh link eksternal (`target="_blank"`) menggunakan `rel="noopener noreferrer"`.

---

## 21. Analytics Requirements (Optional)

Tracking minimal (jika diaktifkan) — bersifat **optional** dan tidak boleh mengganggu performa (dimuat secara async/deferred):

- Page View
- Book Appointment Click
- WhatsApp Click
- Gallery Interaction (filter/lightbox open)
- Instagram Click
- Get Directions Click
- Service CTA Click ("Book Now" per service)

Implementasi disarankan menggunakan satu script analytics ringan (mis. privacy-friendly analytics), dimuat melalui environment variable (ID dapat dikonfigurasi tanpa mengubah kode), dan dapat dinonaktifkan sepenuhnya via config tanpa mempengaruhi fungsi lain.

---

## 22. MVP Scope

### MUST HAVE
- Responsive landing page (mobile-first).
- Navbar (sticky, responsive, smooth scroll).
- Hero.
- About (+ Stats).
- Services.
- Pricing.
- Gallery (grid, tanpa filter/lightbox wajib — lihat Should Have).
- Testimonials.
- Why Choose Us.
- FAQ (accordion).
- Booking CTA + integrasi WhatsApp.
- Location.
- Footer.
- SEO dasar (meta tags, sitemap, robots, structured data).
- Accessibility dasar (semantic HTML, alt text, keyboard nav, focus state, kontras).
- Optimasi performa dasar (lazy load image, minim JS).

### SHOULD HAVE
- Gallery filtering by category.
- Gallery lightbox.
- Booking Form (opsional, redirect ke WhatsApp).
- Instagram/social proof section.
- Analytics integration (optional & async).
- Animasi smooth (fade/slide subtle).

### COULD HAVE
- CMS.
- Admin dashboard.
- Online scheduling real-time.
- Payment gateway.
- Customer account/login.
- Booking database.
- Automated reminder (WhatsApp/email).
- Email notification.

### WON'T HAVE (MVP)
- Full customer authentication.
- Sistem admin kompleks.
- Real-time scheduling/kalender ketersediaan.
- Online payment.
- Sistem loyalty/membership.

---

## 23. Acceptance Criteria (Konsolidasi Fitur Kunci)

*(Acceptance criteria per section telah dijabarkan detail di §8. Berikut ringkasan lintas-fitur untuk QA sign-off.)*

**Hero**
- [ ] Tampil benar di mobile/tablet/desktop.
- [ ] CTA "Book Appointment" dapat diklik & mengarah ke WhatsApp.
- [ ] Tidak menyebabkan layout shift.
- [ ] Image memiliki alt text.

**Gallery**
- [ ] Seluruh item gallery dapat dilihat.
- [ ] Filter kategori berfungsi.
- [ ] Lightbox dapat dibuka & ditutup.
- [ ] Responsive sesuai breakpoint.

**Booking (WhatsApp)**
- [ ] User dapat memilih service sebelum diarahkan ke WhatsApp.
- [ ] Informasi (service/design) terisi otomatis dalam pesan WhatsApp.
- [ ] URL WhatsApp terbentuk dengan benar (`wa.me` + pesan ter-encode).
- [ ] Nomor WhatsApp berasal dari configuration, bukan hard-coded.
- [ ] Tidak ada credential sensitif di frontend.

**FAQ**
- [ ] Accordion dapat dibuka/ditutup via mouse & keyboard.
- [ ] Konten FAQ bersumber dari data, bukan hard-coded.

**Umum**
- [ ] Tidak ada horizontal overflow di breakpoint manapun.
- [ ] Lighthouse mobile: Performance/SEO/Accessibility/Best Practices masing-masing ≥ 90 (target, bukan hard requirement blocking).

---

## 24. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| **Performance** | Lighthouse mobile tinggi; target Core Web Vitals sesuai §19. |
| **Accessibility** | Mengikuti prinsip WCAG 2.1 AA (lihat §18). |
| **SEO** | Technical + Local SEO lengkap (lihat §17). |
| **Maintainability** | Data bisnis (harga, teks, kontak) sepenuhnya terpisah dari komponen UI. |
| **Scalability** | Template dapat direplikasi untuk banyak bisnis hanya dengan mengganti `data/` & `config/`. |
| **Security** | Tidak ada secret/credential yang exposed di client atau repository (lihat §20). |
| **Compatibility** | Berfungsi baik di browser modern: Chrome, Edge, Safari, Firefox (2 versi terakhir). |

---

## 25. Deployment Requirements

**Platform:** Vercel.

- **Build configuration:** Astro static output (`astro build`), auto-detected oleh Vercel Astro preset.
- **Environment variables:** digunakan untuk konfigurasi opsional non-sensitif per-environment (mis. Analytics ID); tidak ada secret rahasia yang dibutuhkan pada MVP karena tidak ada backend/API key pihak ketiga yang wajib.
- **Custom domain:** dikonfigurasi melalui dashboard Vercel, disertai auto-provisioned HTTPS (Let's Encrypt via Vercel).
- **HTTPS:** aktif secara default di seluruh environment (production & preview).
- **Preview deployment:** setiap pull request menghasilkan preview URL unik untuk review sebelum merge ke `main`.
- **Production deployment:** auto-deploy dari branch `main` setelah PR di-merge.

---

## 26. File/Folder Architecture

Lihat struktur lengkap pada §13 (Component Architecture). Tambahan struktur pendukung:

```
public/
├── images/
│   ├── hero/
│   ├── services/
│   ├── gallery/
│   └── testimonials/
├── favicon.ico
└── robots.txt

astro.config.mjs
tailwind.config.mjs
tsconfig.json
package.json
```

---

## 27. Development Phases

| Fase | Objective | Tasks Utama | Dependencies | Expected Output | Acceptance Criteria |
|---|---|---|---|---|---|
| **1. Project Setup** | Inisialisasi project | Setup Astro + Tailwind + TypeScript, struktur folder, konfigurasi lint/format | – | Repo siap develop | Build berjalan tanpa error (`astro dev`) |
| **2. Design System** | Menetapkan token visual | Setup warna, font (Playfair Display + DM Sans), spacing scale, base component style (button, card) | Fase 1 | `tailwind.config.mjs` + `global.css` siap | Token dapat dipakai di komponen, tidak ada warna hard-coded di luar token |
| **3. Navbar + Hero** | Bangun first impression | Komponen Navbar (sticky, mobile menu), Hero (headline, CTA, image) | Fase 2 | Section Navbar & Hero live | Sesuai AC §8.1 & §8.2 |
| **4. About + Services + Pricing** | Bangun trust & informasi layanan | Komponen About, Stats, Services, ServiceCard, Pricing | Fase 2–3 | Section informasi layanan lengkap | Sesuai AC §8.3, §8.4, §8.6 |
| **5. Gallery + Lightbox + Filtering** | Bangun portfolio interaktif | Komponen Gallery, GalleryFilter, GalleryLightbox (island) | Fase 2 | Gallery fungsional dengan filter & lightbox | Sesuai AC §8.5 |
| **6. Testimonials + Why Choose Us** | Perkuat social proof | Komponen Testimonials, WhyChooseUs | Fase 2 | Section trust lengkap | Sesuai AC §8.7, §8.8 |
| **7. Booking + WhatsApp** | Bangun jalur konversi utama | Utility `whatsapp.ts`, komponen Booking, BookingForm (island) | Fase 4, 5 (butuh data service/gallery) | Semua CTA booking terhubung WhatsApp | Sesuai AC §8.10, §8.11 |
| **8. FAQ + Location + Footer** | Lengkapi informasi pendukung | Komponen FAQ (accordion, island), Location, Footer | Fase 2 | Halaman lengkap secara struktur | Sesuai AC §8.12–§8.14 |
| **9. SEO + Accessibility + Performance** | Hardening kualitas non-fungsional | Meta tags, structured data, sitemap/robots, audit aksesibilitas, optimasi gambar & JS | Fase 3–8 selesai | Lighthouse score tinggi | Sesuai §17, §18, §19 |
| **10. Testing + Deployment** | Validasi akhir & rilis | Functional/responsive/browser/performance/accessibility testing, setup Vercel, deploy | Fase 9 | Website live di production | Sesuai §28 (Testing Strategy) & §25 |

---

## 28. Testing Strategy

### 28.1 Functional Testing
- Navigasi navbar (desktop & mobile hamburger).
- Seluruh CTA (Hero, Service card, Gallery lightbox, Booking) mengarah ke WhatsApp dengan pesan benar.
- Gallery filter mengubah hasil sesuai kategori.
- Lightbox terbuka/tertutup dengan benar.
- Booking Form: validasi field, redirect ke WhatsApp dengan data terisi.
- FAQ accordion buka/tutup.
- Mobile menu (drawer) buka/tutup dengan benar.

### 28.2 Responsive Testing
Diuji pada lebar viewport: **360px, 390px, 768px, 1024px, 1440px** — memastikan tidak ada horizontal overflow dan seluruh elemen tetap proporsional.

### 28.3 Browser Testing
Chrome, Firefox, Safari, Edge (versi terbaru & satu versi sebelumnya).

### 28.4 Performance Testing
- Audit Lighthouse (mobile & desktop).
- Pengukuran Core Web Vitals (LCP, CLS, INP) sesuai target §19.
- Verifikasi optimasi gambar (format, ukuran, lazy loading).

### 28.5 Accessibility Testing
- Navigasi penuh via keyboard (tab, enter, esc pada modal/lightbox/accordion).
- Pengecekan dasar screen reader (VoiceOver/NVDA) pada elemen interaktif utama.
- Pengecekan rasio kontras warna.
- Verifikasi focus state terlihat pada seluruh elemen interaktif.

---

## 29. Definition of Done

Sebuah fitur/section dianggap **Done** apabila:
1. Seluruh Acceptance Criteria pada §8 (per section) terpenuhi.
2. Tidak ada data bisnis (harga, teks, kontak) yang hard-coded di komponen — seluruhnya berasal dari `data/` atau `config/`.
3. Lolos functional, responsive, dan browser testing sesuai §28.
4. Lolos audit aksesibilitas dasar (keyboard nav, alt text, kontras, focus state).
5. Tidak menyebabkan regresi pada Core Web Vitals (LCP/CLS/INP tetap dalam target).
6. Kode telah di-review (self-review minimal untuk konsistensi dengan design system §10).
7. Berhasil di-deploy ke preview environment Vercel tanpa error build.

---

## 30. Future Scalability

Arah pengembangan setelah MVP tervalidasi (di luar cakupan MVP saat ini, disiapkan agar arsitektur tidak menghambat):

- **CMS ringan** (mis. headless CMS) untuk menggantikan file data statis, memudahkan owner non-teknis mengelola konten tanpa developer.
- **Booking database** sederhana + admin dashboard untuk melihat daftar booking masuk (masih dapat berdampingan dengan WhatsApp sebagai kanal komunikasi akhir).
- **Real-time scheduling** dengan kalender ketersediaan nail artist.
- **Payment gateway** untuk DP (down payment) booking.
- **Multi-tenant architecture** formal — satu codebase dapat menyajikan banyak instance bisnis berbeda berdasarkan domain/subdomain, dengan config per-tenant tersimpan di database, bukan lagi file statis per repo.
- **Automated reminder** (WhatsApp Business API/email) untuk konfirmasi H-1 appointment.
- **Customer account** untuk riwayat booking & loyalty program.
- **Multi-page architecture penuh** (Home, Services, Gallery, About, Pricing, FAQ, Booking sebagai route terpisah) apabila konten bisnis berkembang cukup besar sehingga single-page tidak lagi optimal.

---

## Assumptions & Decisions

Karena beberapa requirement pada brief awal tidak sepenuhnya eksplisit, berikut asumsi & keputusan yang diambil agar PRD ini konsisten dan dapat langsung dieksekusi:

1. **Bahasa konten default:** Menggunakan campuran Bahasa Inggris untuk copy marketing (headline, CTA) — mengikuti contoh pada brief — dan Bahasa Indonesia untuk elemen operasional (pesan WhatsApp, form). Owner dapat menyesuaikan sepenuhnya ke salah satu bahasa via config.
2. **Format nomor WhatsApp:** Disimpan dalam format internasional tanpa tanda `+` (mis. `6281234567890`) agar kompatibel langsung dengan format URL `wa.me`.
3. **Multi-open vs single-open accordion FAQ:** Diasumsikan **single-open** (membuka satu item menutup item lain) demi kerapian tampilan mobile; dapat diubah menjadi multi-open bila diperlukan tanpa mengubah struktur data.
4. **Lightbox navigation (next/prev):** Dimasukkan sebagai bagian dari Should Have (bukan Must Have) — MVP minimal hanya perlu buka/tutup single image.
5. **Analytics tool spesifik:** Tidak ditentukan produk analytics tertentu; PRD hanya mensyaratkan bahwa implementasi harus async/optional dan ID dikonfigurasi via environment variable. Tim development bebas memilih tool sepanjang ringan & privacy-friendly.
6. **Structured data type:** Dipilih `BeautySalon` (subtype `LocalBusiness` pada schema.org) sebagai jenis bisnis paling sesuai; dapat disesuaikan bila positioning bisnis owner berbeda (mis. individual nail artist tanpa lokasi fisik tetap).
7. **Jumlah kategori Gallery:** Menggunakan 5 kategori default dari brief (Minimalist, French, Gel, Korean, Luxury) + "All"; kategori bersifat data-driven sehingga dapat ditambah/dikurangi tanpa mengubah komponen.
8. **Statistik About Section:** Diasumsikan bersifat statis (di-update manual oleh owner secara berkala via config), bukan dihitung otomatis dari data booking (karena tidak ada database booking pada MVP).
9. **Instagram preview image:** Diasumsikan diambil dari subset `galleryData` atau data terpisah yang di-maintain manual, karena Instagram Graph API sengaja dihindari sebagai dependency MVP.
10. **Booking Form vs CTA langsung:** Keduanya disediakan sebagai opsi (Booking Form = Should Have, CTA langsung ke WhatsApp = Must Have) agar owner dapat memilih salah satu atau keduanya aktif tanpa mengubah arsitektur.