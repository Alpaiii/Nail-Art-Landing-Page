export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  artistName: string;
  artistRole: string;
  image: string;
  imageAlt: string;
  stats: Stat[];
  showStats: boolean;
}

export const aboutContent: AboutContent = {
  eyebrow: "Where Beauty Meets Detail",
  title: "Nail care that feels personal, from first file to final coat.",
  paragraphs: [
    "Signature Nails began as a small home studio with one belief: every set of nails should feel like it was made only for you. We take the time to understand your style, your routine, and the details that matter before we start.",
    "Every tool is sanitized between appointments, every product is hand-picked for quality, and every design is finished with the patience it deserves. No rushed work, no shortcuts — just careful, consistent craftsmanship.",
  ],
  artistName: "Signature Nail Artist",
  artistRole: "Founder & Lead Nail Artist",
  image: "/images/hero/about.svg",
  imageAlt: "Nail artist carefully finishing a detailed nail art design",
  showStats: true,
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Nail Designs" },
    { value: "4.9/5", label: "Client Rating" },
  ],
};
