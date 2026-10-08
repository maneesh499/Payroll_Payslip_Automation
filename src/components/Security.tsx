import { ShieldCheck, FileText, Mail, ScrollText, User, Search } from "lucide-react";

const SECURITY_ITEMS = [
  {
    icon: "🔐",
    iconComp: <ShieldCheck size={20} color="#3b5bdb" />,
    title: "Sensitive Data Protection",
    description: "Employee salary details and personal information are handled with care during processing. Sensitive fields can be masked or restricted based on your configuration.",
    color: "#3b5bdb",
    bg: "rgba(59,91,219,0.06)",
    border: "rgba(59,91,219,0.15)",
  },
  {
    icon: "📄",
    iconComp: <FileText size={20} color="#6366f1" />,
    title: "Controlled Document Generation",
    description: "Payslip PDFs are generated individually per employee. Documents are not shared across employees or stored in uncontrolled locations.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.06)",
    border: "rgba(99,102,241,0.15)",
  },
  {
    icon: "📧",
    iconComp: <Mail size={20} color="#0ea5e9" />,
    title: "Automated Email Workflow",
    description: "Each payslip is delivered directly to the correct employee's registered email address. Bulk email broadcast to all employees is not used.",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.06)",
    border: "rgba(14,165,233,0.15)",
  },
  {
    icon: "📝",
    iconComp: <ScrollText size={20} color="#10b981" />,
    title: "Processing Logs",
    description: "Every payslip generation and email delivery event is logged with timestamps. Audit trails help identify what happened and when.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
  },
  {
    icon: "👤",
    iconComp: <User size={20} color="#f59e0b" />,
    title: "Employee-Level Document Handling",
    description: "Payslips are generated and delivered at the individual employee level. Each document corresponds to a single employee record.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
  {
    icon: "🔍",
    iconComp: <Search size={20} color="#8b5cf6" />,
    title: "Error and Delivery Tracking",
    description: "Failed document generation or email delivery events are flagged and logged separately, enabling targeted follow-up without reprocessing the entire payroll.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
];

export default function Security() {
  return (
    <section style={{ padding: "96px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Data Handling</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Built With Employee Data
            <br />
            Protection in Mind
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 560, margin: "0 auto" }}>
            Payroll data is sensitive. The workflow is designed with data handling discipline at every step.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SECURITY_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: 16,
                padding: "24px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            padding: "16px 24px",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
            <strong style={{ color: "#475569" }}>Note:</strong> This service does not claim compliance certifications, statutory filing capabilities, or government portal integrations. The workflow focuses on payslip generation and automated email delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
