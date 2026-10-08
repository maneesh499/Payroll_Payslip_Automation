import { TableProperties, FilePlus2, MailX, AlertCircle } from "lucide-react";

const PROBLEMS = [
  {
    icon: <TableProperties size={24} color="#3b5bdb" />,
    title: "Manual Excel Work",
    description: "Repeatedly prepare and organize employee salary information every month, checking figures and formatting data by hand.",
    bg: "rgba(59,91,219,0.06)",
    border: "rgba(59,91,219,0.15)",
  },
  {
    icon: <FilePlus2 size={24} color="#6366f1" />,
    title: "Individual PDF Creation",
    description: "Generate and rename dozens or hundreds of payslip documents manually — one file per employee, every single month.",
    bg: "rgba(99,102,241,0.06)",
    border: "rgba(99,102,241,0.15)",
  },
  {
    icon: <MailX size={24} color="#f59e0b" />,
    title: "Manual Emailing",
    description: "Find employee email addresses, attach the correct PDF and send each email individually — a process that takes hours.",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
  {
    icon: <AlertCircle size={24} color="#ef4444" />,
    title: "Errors & Follow-ups",
    description: "Missed emails, incorrect files and repeated HR questions create unnecessary work and erode employee trust.",
    bg: "rgba(239,68,68,0.06)",
    border: "rgba(239,68,68,0.15)",
  },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "#fff",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>The Problem</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Still Managing Payslips Manually?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580, margin: "0 auto" }}>
            Every month, HR teams across businesses repeat the same tedious cycle. Here is what that looks like.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {PROBLEMS.map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bg,
                border: `1px solid ${item.border}`,
                borderRadius: 16,
                padding: "28px 24px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a", marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "28px 32px",
            background: "linear-gradient(135deg, rgba(59,91,219,0.06) 0%, rgba(99,102,241,0.06) 100%)",
            borderRadius: 16,
            border: "1px solid rgba(59,91,219,0.12)",
          }}
        >
          <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#1e293b" }}>
            Your payroll team should focus on people — not repetitive paperwork.
          </p>
        </div>
      </div>
    </section>
  );
}
