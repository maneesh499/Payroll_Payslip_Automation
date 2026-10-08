const WHO = [
  {
    emoji: "🏢",
    title: "Small Businesses",
    description: "Automate monthly payslip processing without investing in a large HRMS or hiring dedicated payroll staff.",
    color: "#3b5bdb",
    bg: "rgba(59,91,219,0.06)",
    border: "rgba(59,91,219,0.15)",
  },
  {
    emoji: "🚀",
    title: "Startups",
    description: "Keep payroll operations simple and professional while your team grows. Deliver payslips like an enterprise from day one.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.06)",
    border: "rgba(99,102,241,0.15)",
  },
  {
    emoji: "📊",
    title: "CA & Accounting Firms",
    description: "Reduce repetitive payroll document work across multiple clients. Process and deliver payslips efficiently each month.",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.06)",
    border: "rgba(14,165,233,0.15)",
  },
  {
    emoji: "👥",
    title: "HR Consultants",
    description: "Automate payslip generation and delivery for client organisations. Spend your time on people strategy, not document handling.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
  },
  {
    emoji: "🏭",
    title: "Staffing Companies",
    description: "Process payroll documents for distributed teams and contract employees at scale without manual effort.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
  {
    emoji: "📈",
    title: "Growing Companies",
    description: "Replace repetitive monthly payroll tasks with an automated workflow that scales as your headcount grows.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
];

export default function WhoItsFor() {
  return (
    <section style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Who It's For</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Designed for Teams That Manage
            <br />
            Payroll with Excel
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
            If your team currently uses spreadsheets and manual steps to process payslips, this is for you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {WHO.map((item) => (
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
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 14 }}>{item.emoji}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#0f172a", marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
