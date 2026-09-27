export interface ThemeColors {
  background: string;
  primary: string;
  secondary: string;
  text: string;
  accent: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  phone: string;
  whatsapp: string; // international, no "+" — e.g. "6281234567890"
  instagram: string; // e.g. "@signature.nails"
  instagramUrl: string;
  address: string;
  city: string;
  province: string;
  openingHours: string;
  openingHoursSchema: string; // schema.org openingHoursSpecification format, e.g. "Mo-Sa 10:00-20:00"
  googleMapsUrl: string;
  site: string; // canonical base URL
  meta: {
    title: string;
    description: string;
    image: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    showStats: boolean;
    showRating: boolean;
    rating: string;
    ratingLabel: string;
  };
  features: {
    bookingForm: boolean;
    instagramSection: boolean;
    analyticsId: string | null;
  };
  theme: {
    colors: ThemeColors;
    fonts: { heading: string; body: string };
  };
}

export const siteConfig: BusinessConfig = {
  name: "Roquace",
  tagline: "Your Nails, Your Art.",
  description:
    "Premium nail art studio crafting elegant designs that express your unique style. Manicure, gel polish, custom nail art, and extensions.",
  logo: "/images/Logo-Black-transparant-TM.png",
  phone: "+62 857-1733-7393",
  whatsapp: "6285717337393",
  instagram: "@roquace.nails",
  instagramUrl: "https://www.instagram.com/",
  address: "Jl. Melati No. 42, Kebayoran Baru",
  city: "Jakarta Selatan",
  province: "DKI Jakarta",
  openingHours: "Monday – Saturday, 10:00 – 20:00",
  openingHoursSchema: "Mo-Sa 10:00-20:00",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Mawar+No.+42,+Jakarta+Selatan",
  site: "https://roquace.vercel.app",
  meta: {
    title: "Roquace — Premium Nail Art & Nail Salon in Jakarta",
    description:
      "Premium nail art studio in Jakarta. Explore our portfolio, transparent pricing, and book your appointment easily via WhatsApp.",
    image: "/images/og-cover.png",
  },
  hero: {
    headline: "Your Nails, Your Art.",
    subheadline:
      "Premium nail art crafted to make every detail of your style unforgettable.",
    image: "/images/hero/hero.svg",
    imageAlt: "Elegant almond-shaped nail art in dusty rose and gold tones",
    showStats: true,
    showRating: true,
    rating: "4.9",
    ratingLabel: "500+ Happy Clients",
  },
  features: {
    bookingForm: true,
    instagramSection: true,
    analyticsId: null,
  },
  theme: {
    colors: {
      background: "#FFF9F7",
      primary: "#B78B8B",
      secondary: "#E8D5D5",
      text: "#2B2525",
      accent: "#C9A46C",
    },
    fonts: {
      heading: "Playfair Display",
      body: "DM Sans",
    },
  },
};
