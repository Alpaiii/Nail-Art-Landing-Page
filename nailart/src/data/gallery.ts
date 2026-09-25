export type GalleryCategory =
  | "Minimalist"
  | "French"
  | "Gel"
  | "Korean"
  | "Luxury"
  | string;

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: GalleryCategory;
  price?: string;
  featured: boolean;
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Minimalist",
  "French",
  "Gel",
  "Korean",
  "Luxury",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "bare-glow",
    title: "Bare Glow",
    image: "/images/gallery/bare-glow.svg",
    category: "Minimalist",
    price: "Rp150.000",
    featured: true,
  },
  {
    id: "single-line-nude",
    title: "Single Line Nude",
    image: "/images/gallery/single-line-nude.svg",
    category: "Minimalist",
    price: "Rp150.000",
    featured: true,
  },
  {
    id: "negative-space",
    title: "Negative Space",
    image: "/images/gallery/negative-space.svg",
    category: "Minimalist",
    price: "Rp170.000",
    featured: false,
  },
  {
    id: "classic-french",
    title: "Classic French",
    image: "/images/gallery/classic-french.svg",
    category: "French",
    price: "Rp150.000",
    featured: true,
  },
  {
    id: "micro-french",
    title: "Micro French",
    image: "/images/gallery/micro-french.svg",
    category: "French",
    price: "Rp160.000",
    featured: false,
  },
  {
    id: "glass-gel",
    title: "Glass Gel",
    image: "/images/gallery/glass-gel.svg",
    category: "Gel",
    price: "Rp140.000",
    featured: true,
  },
  {
    id: "jelly-pink",
    title: "Jelly Pink",
    image: "/images/gallery/jelly-pink.svg",
    category: "Gel",
    price: "Rp140.000",
    featured: false,
  },
  {
    id: "cherry-blossom",
    title: "Cherry Blossom",
    image: "/images/gallery/cherry-blossom.svg",
    category: "Korean",
    price: "Rp200.000",
    featured: true,
  },
  {
    id: "daily-doodle",
    title: "Daily Doodle",
    image: "/images/gallery/daily-doodle.svg",
    category: "Korean",
    price: "Rp190.000",
    featured: false,
  },
  {
    id: "golden-marble",
    title: "Golden Marble",
    image: "/images/gallery/golden-marble.svg",
    category: "Luxury",
    price: "Rp250.000",
    featured: true,
  },
  {
    id: "gilded-french",
    title: "Gilded French",
    image: "/images/gallery/gilded-french.svg",
    category: "Luxury",
    price: "Rp240.000",
    featured: false,
  },
  {
    id: "onyx-gold",
    title: "Onyx & Gold",
    image: "/images/gallery/onyx-gold.svg",
    category: "Luxury",
    price: "Rp260.000",
    featured: false,
  },
];

/** Instagram preview grid reuses gallery images (PRD §8.9 — no Instagram API). */
export const instagramPreview: GalleryItem[] = galleryItems.filter((i) => i.featured).slice(0, 6);
