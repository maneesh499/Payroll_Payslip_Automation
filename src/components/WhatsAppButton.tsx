import { useState } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 500,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#25d366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? "0 8px 30px rgba(37,211,102,0.55)"
          : "0 4px 20px rgba(37,211,102,0.4)",
        transition: "all 0.25s ease",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        textDecoration: "none",
      }}
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.113 1.524 5.843L.057 23.57a.5.5 0 00.611.611l5.735-1.468A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.938 0-3.75-.534-5.285-1.46l-.376-.226-3.903.999 1.016-3.803-.247-.392A9.716 9.716 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75S21.75 6.616 21.75 12 17.384 21.75 12 21.75z" />
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            right: 68,
            background: "#0f172a",
            color: "#fff",
            fontSize: "0.8rem",
            fontWeight: 600,
            padding: "7px 14px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            pointerEvents: "none",
          }}
          role="tooltip"
        >
          Chat with us
          <div
            style={{
              position: "absolute",
              right: -5,
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderLeft: "5px solid #0f172a",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
            }}
          />
        </div>
      )}
    </a>
  );
}
