export interface WhyItem {
  title: string;
  description: string;
  /** Outline SVG markup (stroke-based, no fill) — editable via data (PRD §8.7). */
  icon: string;
}

const strokeAttrs = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

export const whyItems: WhyItem[] = [
  {
    title: "Hygienic",
    description: "Tools are cleaned and sanitized before every appointment.",
    icon: `<path ${strokeAttrs} d="M12 3l1.8 3.6L18 6l-1.2 4.2L21 12l-4.2 1.8L18 18l-4.2-1.2L12 21l-1.8-4.2L6 18l1.2-4.2L3 12l4.2-1.8L6 6l4.2 1.2z"/>`,
  },
  {
    title: "Personalized Design",
    description: "Every design can be customized to your preference.",
    icon: `<path ${strokeAttrs} d="M4 20c0-3 2-6 6-6 1.5 0 2.6.5 3.5 1.4M14.5 4.5l5 5-9 9H5.5v-5z"/>`,
  },
  {
    title: "Premium Products",
    description: "We use carefully selected nail products.",
    icon: `<path ${strokeAttrs} d="M9 3h6v3l2 3v10a2 2 0 01-2 2H9a2 2 0 01-2-2V9l2-3z"/><path ${strokeAttrs} d="M7 14h10"/>`,
  },
  {
    title: "Detail-Oriented",
    description: "Every nail is finished with attention to detail.",
    icon: `<circle ${strokeAttrs} cx="11" cy="11" r="7"/><path ${strokeAttrs} d="M20 20l-4-4M11 8v6M8 11h6"/>`,
  },
];
