import { CheckCircle2, AlertTriangle, Users, Mail, FileText, TrendingUp } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

const ACTIVITY_ITEMS = [
  { icon: <CheckCircle2 size={13} color="#10b981" />, text: "Payslip generated — Rahul Sharma", type: "success" },
  { icon: <CheckCircle2 size={13} color="#10b981" />, text: "Email sent — Priya Reddy", type: "success" },
  { icon: <CheckCircle2 size={13} color="#10b981" />, text: "Payslip generated — Anil Kumar", type: "success" },
  { icon: <AlertTriangle size={13} color="#f59e0b" />, text: "Email failed — Employee 1042", type: "warning" },
];

function MiniDashboard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e2e8f0",
        boxShadow: "0 24px 80px rgba(59,91,219,0.15), 0 8px 32px rgba(0,0,0,0.08)",
        overflow: "hidden",
        maxWidth: 440,
        width: "100%",
      }}
    >
      {/* Dashboard chrome bar */}
      <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500 }}>
          PayFlow Automate — Dashboard
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {/* Run header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>
              Payroll Run
            </div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#0f172a" }}>August 2026</div>
          </div>
          <span className="badge badge-green" style={{ fontSize: "0.7rem" }}>Completed</span>
        </div>

        {/* Stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { icon: <Users size={14} color="#3b5bdb" />, label: "Employees", value: "48", color: "#3b5bdb" },
            { icon: <TrendingUp size={14} color="#6366f1" />, label: "Gross Payroll", value: "₹18,42,600", color: "#6366f1" },
            { icon: <FileText size={14} color="#10b981" />, label: "Payslips", value: "48 Generated", color: "#10b981" },
            { icon: <Mail size={14} color="#f59e0b" />, label: "Emails", value: "46 Sent · 2 Failed", color: "#f59e0b" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#f8fafc",
                borderRadius: 10,
                padding: "12px 14px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                {stat.icon}
                <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {stat.label}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a" }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569" }}>Email Delivery Progress</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#3b5bdb" }}>96%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "96%" }} />
          </div>
        </div>

        {/* Activity */}
        <div>
          <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
            Recent Activity
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {ACTIVITY_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 10px",
                  borderRadius: 8,
                  background: item.type === "warning" ? "rgba(245,158,11,0.06)" : "rgba(16,185,129,0.06)",
                  border: `1px solid ${item.type === "warning" ? "rgba(245,158,11,0.15)" : "rgba(16,185,129,0.15)"}`,
                }}
              >
                {item.icon}
                <span style={{ fontSize: "0.75rem", color: "#475569", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 68,
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8faff 0%, #eef2ff 40%, #f8faff 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,91,219,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left — copy */}
          <div className="fade-in-up">
            <div className="badge badge-blue" style={{ marginBottom: 24 }}>
              <span>●</span>
              Excel to PDF Payslip Automation Service
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Turn Your Salary Excel Into
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Professional Payslips — Automatically
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "#475569",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 12,
              }}
            >
              Upload your existing salary Excel file, map your columns to payslip fields, and get individual PDF payslips generated and emailed to each employee — in one automated run.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#64748b",
                lineHeight: 1.65,
                maxWidth: 520,
                marginBottom: 32,
                fontStyle: "italic",
              }}
            >
              This service automates payslip generation from your existing salary data. It does not calculate salaries or replace your payroll software.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <a
                href={getWhatsAppUrl("Hi, I'd like to discuss my payslip workflow and see how your Excel-to-PDF automation service can help.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Discuss your payslip workflow on WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.113 1.524 5.843L.057 23.57a.5.5 0 00.611.611l5.735-1.468A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.938 0-3.75-.534-5.285-1.46l-.376-.226-3.903.999 1.016-3.803-.247-.392A9.716 9.716 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75S21.75 6.616 21.75 12 17.384 21.75 12 21.75z"/>
                </svg>
                Discuss Your Payslip Workflow
              </a>
              <button
                onClick={() => scrollTo("#how-it-works")}
                className="btn-secondary"
                aria-label="See how it works"
              >
                See How It Works
              </button>
            </div>

            <p style={{ fontSize: "0.875rem", color: "#94a3b8", fontWeight: 500 }}>
              Built for startups, SMBs, HR teams and payroll consultants.
            </p>
          </div>

          {/* Right — mini dashboard */}
          <div
            className="fade-in-up-delay-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <MiniDashboard />
          </div>
        </div>
      </div>

      {/* Responsive style override */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div:first-child { align-items: center; display: flex; flex-direction: column; }
          .hero-grid p { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
