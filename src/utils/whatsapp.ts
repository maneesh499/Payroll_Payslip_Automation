import { CONTACT_CONFIG } from "../config/contact";

const DEFAULT_MESSAGE =
  "Hi, I'm interested in your Payroll & Payslip Automation service. I'd like to know more about the demo and pricing.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
