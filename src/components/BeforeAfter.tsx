import { ArrowDown, Zap } from "lucide-react";

const BEFORE = [
  "Open Excel",
  "Manual Processing",
  "Create PDF",
  "Rename File",
  "Find Email",
  "Attach PDF",
  "Send",
  "Repeat 100 Times",
];

const AFTER = [
  "Upload Excel",
  "Automated Processing",
  "Payslips Generated",
  "Emails Delivered",
  "Logs Available",
];

export default function BeforeAfter() {
  return (
    <section style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Before vs After</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            From Hours of Repetitive Work to
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Automated Workflow
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "start" }} className="before-after-grid">
          {/* Before */}
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #fecaca",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #fef2f2, #fee2e2)",
                padding: "16px 24px",
                borderBottom: "1px solid #fecaca",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#991b1b" }}>
                ❌ Before — Manual Process
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#b91c1c", marginTop: 2 }}>
                Every month, manually, for every employee
              </div>
            </div>
            <div style={{ padding: "20px 24px" }}>
              {BEFORE.map((step, i) => (
                <div key={step}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "11px 14px",
                      background: i === BEFORE.length - 1 ? "rgba(239,68,68,0.06)" : "#f8fafc",
                      borderRadius: 10,
                      border: i === BEFORE.length - 1 ? "1px solid rgba(239,68,68,0.2)" : "1px solid #f1f5f9",
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: i === BEFORE.length - 1 ? "rgba(239,68,68,0.1)" : "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: i === BEFORE.length - 1 ? "#ef4444" : "#94a3b8",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: i === BEFORE.length - 1 ? 700 : 500,
                        color: i === BEFORE.length - 1 ? "#ef4444" : "#0f172a",
                      }}
                    >
                      {step}
                    </span>
                  </div>
                  {i < BEFORE.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
                      <ArrowDown size={14} color="#e2e8f0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VS divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 0",
              gap: 8,
              paddingTop: 80,
            }}
            aria-hidden="true"
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(59,91,219,0.3)",
              }}
            >
              <Zap size={20} color="#fff" fill="#fff" />
            </div>
            <span style={{ fontWeight: 800, fontSize: "0.875rem", color: "#94a3b8", letterSpacing: "0.04em" }}>VS</span>
          </div>

          {/* After */}
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #bbf7d0",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                padding: "16px 24px",
                borderBottom: "1px solid #bbf7d0",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#166534" }}>
                ✅ After — Automated Workflow
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#15803d", marginTop: 2 }}>
                One run. All employees. Fully automated.
              </div>
            </div>
            <div style={{ padding: "20px 24px" }}>
              {AFTER.map((step, i) => (
                <div key={step}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "11px 14px",
                      background: "rgba(16,185,129,0.05)",
                      borderRadius: 10,
                      border: "1px solid rgba(16,185,129,0.15)",
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(16,185,129,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#10b981" }}>✓</span>
                    </div>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0f172a" }}>{step}</span>
                  </div>
                  {i < AFTER.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2px 0" }}>
                      <ArrowDown size={14} color="#bbf7d0" />
                    </div>
                  )}
                </div>
              ))}

              {/* Extra spacer to match height */}
              <div style={{ paddingTop: 24, textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 20px",
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: 99,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#10b981",
                  }}
                >
                  <Zap size={13} fill="#10b981" color="#10b981" />
                  One Automated Workflow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
