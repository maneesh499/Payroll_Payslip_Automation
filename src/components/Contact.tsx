import { CONTACT_CONFIG } from "../config/contact";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { Mail, Calendar } from "lucide-react";

export default function Contact() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "5px 14px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 99,
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Let's Talk
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Let's Automate Your Payroll
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Tell us how you currently manage payroll and payslips. We'll show you how the process can be automated for your team.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Chat with us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.113 1.524 5.843L.057 23.57a.5.5 0 00.611.611l5.735-1.468A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.938 0-3.75-.534-5.285-1.46l-.376-.226-3.903.999 1.016-3.803-.247-.392A9.716 9.716 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75S21.75 6.616 21.75 12 17.384 21.75 12 21.75z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="btn-outline-white"
              aria-label="Send an email"
            >
              <Mail size={17} />
              Send an Email
            </a>
            <button
              onClick={scrollToContact}
              className="btn-primary"
              style={{ background: "rgba(255,255,255,0.15)", boxShadow: "none", border: "1px solid rgba(255,255,255,0.25)" }}
              aria-label="Book a free demo"
            >
              <Calendar size={17} />
              Book a Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
