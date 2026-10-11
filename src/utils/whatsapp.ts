import { CONTACT_CONFIG } from "../config/contact";

const DEFAULT_MESSAGE =
  "Hi, I'm interested in your Payroll & Payslip Automation service. I'd like to know more about the demo and pricing.";

/** Strips any accidental +, spaces, hyphens, or brackets before building the URL. */
function sanitizeNumber(raw: string): string {
  return raw.replace(/[^0-9]/g, "");
}

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const number = sanitizeNumber(CONTACT_CONFIG.whatsappNumber);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
