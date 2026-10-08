import {
  Upload,
  FileText,
  Users,
  Mail,
  ShieldCheck,
  ScrollText,
  Palette,
  AlertCircle,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Upload size={22} color="#3b5bdb" />,
    title: "Excel Payroll Upload",
    description: "Continue using your existing payroll spreadsheet. No new software or data re-entry required.",
    color: "#3b5bdb",
    bg: "rgba(59,91,219,0.08)",
  },
  {
    icon: <FileText size={22} color="#6366f1" />,
    title: "Automatic Payslip Generation",
    description: "Generate professional individual PDF payslips automatically for every employee in the payroll file.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: <Users size={22} color="#0ea5e9" />,
    title: "Bulk Processing",
    description: "Process dozens or hundreds of employees in a single automated workflow — no manual steps.",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    icon: <Mail size={22} color="#10b981" />,
    title: "Automated Email Delivery",
    description: "Send each employee their payslip automatically to the correct email address. Delivery is tracked.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    icon: <ShieldCheck size={22} color="#f59e0b" />,
    title: "Sensitive Data Protection",
    description: "Protect sensitive employee information during document processing and delivery.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: <ScrollText size={22} color="#8b5cf6" />,
    title: "Processing Logs",
    description: "Track the status of every payslip generation and email delivery. Review success and failure records.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
  },
  {
    icon: <Palette size={22} color="#ec4899" />,
    title: "Branded Payslips",
    description: "Use your company branding, logo and preferred payslip format for professional presentation.",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
  },
  {
    icon: <AlertCircle size={22} color="#ef4444" />,
    title: "Error Tracking",
    description: "Identify failed document generation or email delivery instantly. Reprocess specific records as needed.",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "96px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Features</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Everything You Need to Automate
            <br />
            Payslip Delivery
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 540, margin: "0 auto" }}>
            A focused automation toolkit for payroll teams that need efficiency without complexity.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "24px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                el.style.borderColor = feature.color;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: feature.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: 10 }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
