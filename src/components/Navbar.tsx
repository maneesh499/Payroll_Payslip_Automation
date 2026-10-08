import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 1px 20px rgb(0 0 0 / 0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            aria-label="PayFlow Automate — Home"
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FileText size={18} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                PayFlow
              </div>
              <div style={{ fontWeight: 600, fontSize: "0.6875rem", color: "#3b5bdb", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>
                Automate
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul
            style={{
              display: "flex",
              gap: 4,
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#475569",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontFamily: "inherit",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = "#3b5bdb";
                    (e.target as HTMLButtonElement).style.background = "rgba(59,91,219,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = "#475569";
                    (e.target as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="hidden md:flex">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "9px 18px", fontSize: "0.875rem" }}
              aria-label="Chat with us on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.113 1.524 5.843L.057 23.57a.5.5 0 00.611.611l5.735-1.468A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.938 0-3.75-.534-5.285-1.46l-.376-.226-3.903.999 1.016-3.803-.247-.392A9.716 9.716 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75S21.75 6.616 21.75 12 17.384 21.75 12 21.75z"/>
              </svg>
              WhatsApp Us
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
              style={{ padding: "9px 18px", fontSize: "0.875rem" }}
              aria-label="Book a free demo"
            >
              Book a Free Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 8,
              color: "#0f172a",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(15,23,42,0.4)",
          }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 300,
          maxWidth: "85vw",
          background: "#fff",
          zIndex: 200,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.1)",
          padding: "80px 24px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          overflowY: "auto",
        }}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            borderRadius: 8,
            color: "#64748b",
          }}
          aria-label="Close navigation menu"
        >
          <X size={22} />
        </button>

        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: 500,
              color: "#0f172a",
              padding: "12px 16px",
              borderRadius: 10,
              fontFamily: "inherit",
              textAlign: "left",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#f1f5f9")}
            onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "transparent")}
          >
            {link.label}
          </button>
        ))}

        <div style={{ height: 1, background: "#e2e8f0", margin: "8px 0" }} />

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ justifyContent: "center" }}
          aria-label="Chat with us on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.113 1.524 5.843L.057 23.57a.5.5 0 00.611.611l5.735-1.468A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.938 0-3.75-.534-5.285-1.46l-.376-.226-3.903.999 1.016-3.803-.247-.392A9.716 9.716 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75S21.75 6.616 21.75 12 17.384 21.75 12 21.75z"/>
          </svg>
          WhatsApp Us
        </a>
        <button
          onClick={() => handleNavClick("#contact")}
          className="btn-primary"
          style={{ justifyContent: "center" }}
          aria-label="Book a free demo"
        >
          Book a Free Demo
        </button>
      </div>
    </>
  );
}
