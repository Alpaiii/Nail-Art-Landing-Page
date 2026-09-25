/**
 * Single source of truth for services & prices (PRD §8.6).
 * Service cards (§8.4) and Pricing table (§8.6) both resolve from this catalog.
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string; // e.g. "Rp75.000" or "Rp200.000–Rp250.000"
  duration: string; // e.g. "45 menit"
  image: string;
  category: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "classic-manicure",
    name: "Classic Manicure",
    description: "Basic manicure untuk tampilan kuku clean dan elegant.",
    price: "Rp75.000",
    duration: "45 menit",
    image: "/images/services/classic-manicure.svg",
    category: "Care",
    featured: true,
  },
  {
    id: "gel-polish",
    name: "Gel Polish",
    description: "Gel polish dengan hasil glossy dan tahan lama.",
    price: "Rp120.000",
    duration: "60 menit",
    image: "/images/services/gel-polish.svg",
    category: "Polish",
    featured: true,
  },
  {
    id: "simple-nail-art",
    name: "Simple Nail Art",
    description: "Aksen nail art sederhana untuk tampilan sehari-hari.",
    price: "Rp150.000",
    duration: "60 menit",
    image: "/images/services/simple-nail-art.svg",
    category: "Art",
    featured: false,
  },
  {
    id: "custom-nail-art",
    name: "Custom Nail Art",
    description: "Desain nail art sesuai request pelanggan.",
    price: "Rp200.000",
    duration: "90 menit",
    image: "/images/services/custom-nail-art.svg",
    category: "Art",
    featured: true,
  },
  {
    id: "nail-extensions",
    name: "Nail Extensions",
    description: "Nail extension untuk tampilan kuku lebih panjang.",
    price: "Rp200.000–Rp250.000",
    duration: "120 menit",
    image: "/images/services/nail-extensions.svg",
    category: "Extension",
    featured: true,
  },
  {
    id: "nail-repair",
    name: "Nail Repair",
    description: "Perbaikan kuku rusak atau patah.",
    price: "Rp30.000",
    duration: "30 menit",
    image: "/images/services/nail-repair.svg",
    category: "Care",
    featured: false,
  },
  {
    id: "nail-art-removal",
    name: "Nail Art Removal",
    description: "Removal gel polish atau nail art dengan aman.",
    price: "Rp50.000",
    duration: "30 menit",
    image: "/images/services/nail-art-removal.svg",
    category: "Care",
    featured: false,
  },
];

/** Service cards shown in the Services section (PRD §8.4). */
export const serviceCards: Service[] = services.filter((s) => s.featured);

/** Rows for the Pricing section (PRD §8.6) — prices resolved from the same catalog. */
export const pricingRows: Service[] = [
  "classic-manicure",
  "gel-polish",
  "simple-nail-art",
  "custom-nail-art",
  "nail-extensions",
  "nail-art-removal",
].map((id) => {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`pricingRows: unknown service id "${id}"`);
  return service;
});

export const getService = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
