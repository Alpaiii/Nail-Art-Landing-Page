import { siteConfig } from "../config/site";

export interface WhatsAppMessageFields {
  service?: string;
  design?: string;
  date?: string;
  time?: string;
  name?: string;
  notes?: string;
}

const fill = (value?: string): string => {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "...";
};

/**
 * PRD §8.10 — message template. Unfilled fields become "..." placeholders
 * so the customer completes them manually inside WhatsApp.
 */
export function buildWhatsAppMessage(fields: WhatsAppMessageFields = {}): string {
  const lines = [
    "Halo, saya ingin booking nail art.",
    "",
    `Service: ${fill(fields.service)}`,
    `Design: ${fill(fields.design)}`,
    `Tanggal: ${fill(fields.date)}`,
    `Jam: ${fill(fields.time)}`,
    `Nama: ${fill(fields.name)}`,
  ];

  if (fields.notes && fields.notes.trim()) {
    lines.push(`Catatan: ${fields.notes.trim()}`);
  }

  return lines.join("\n");
}

/** PRD §8.10 — https://wa.me/<international-number>?text=<encoded-message> */
export function buildWhatsAppUrl(fields: WhatsAppMessageFields = {}): string {
  const message = buildWhatsAppMessage(fields);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
