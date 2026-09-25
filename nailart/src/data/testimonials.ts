export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number; // 1–5
  message: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah",
    rating: 5,
    message: "The details are beautiful and the service was amazing! Already my third visit and the quality never drops.",
    service: "Gel Polish",
  },
  {
    id: "aisyah",
    name: "Aisyah",
    rating: 5,
    message: "I showed an inspiration photo and they nailed it (literally). So many compliments from my friends!",
    service: "Custom Nail Art",
  },
  {
    id: "dinda",
    name: "Dinda",
    rating: 5,
    message: "Clean, hygienic, and the studio smells so good. My extensions lasted over three weeks without lifting.",
    service: "Nail Extensions",
  },
  {
    id: "maya",
    name: "Maya",
    rating: 4,
    message: "Simple and elegant result, exactly what I wanted for daily wear. Booking via WhatsApp was effortless.",
    service: "Classic Manicure",
  },
  {
    id: "rina-w",
    name: "Rina W.",
    rating: 5,
    message: "The Korean design is so cute and subtle. Prices are clear upfront, no surprise charges at all.",
    service: "Custom Nail Art",
  },
];
