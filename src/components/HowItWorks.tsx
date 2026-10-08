import { Upload, ShieldCheck, CheckCircle2, FileText, Mail, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <Upload size={22} color="#3b5bdb" />,
    title: "Upload Payroll Excel",
    description: "Provide your existing monthly payroll spreadsheet. No reformatting required — the system reads your data as-is.",
    color: "#3b5bdb",
    bg: "rgba(59,91,219,0.08)",
  },
  {
    number: "02",
    icon: <CheckCircle2 size={22} color="#6366f1" />,
    title: "Validate Employee Data",
    description: "Employee records, salary figures and email addresses are verified before processing begins.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    number: "03",
    icon: <FileText size={22} color="#0ea5e9" />,
    title: "Generate Payslip PDFs",
    description: "Individual, professional payslip PDFs are created automatically for every employee in the payroll file.",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    number: "04",
    icon: <ShieldCheck size={22} color="#10b981" />,
    title: "Secure & Organize Documents",
    description: "Sensitive employee information is protected and payslip files are organised systematically for audit readiness.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    number: "05",
    icon: <Mail size={22} color="#f59e0b" />,
    title: "Automatically Email Employees",
    description: "Each payslip is delivered to the correct employee's inbox automatically. Delivery status is tracked and logged.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Workflow</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            From Excel to Employee Inbox
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
            A clear, automated five-step workflow that replaces hours of manual work.
          </p>
        </div>

        {/* Desktop steps row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0,
            position: "relative",
          }}
          className="steps-row"
        >
          {STEPS.map((step, index) => (
            <div key={step.number} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              {/* Step card */}
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: "24px 20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px rgba(0,0,0,0.1)`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = step.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: step.color,
                    letterSpacing: "0.06em",
                    marginBottom: 12,
                  }}
                >
                  STEP {step.number}
                </div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: step.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {step.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a", marginBottom: 8, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8375rem", color: "#64748b", lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < STEPS.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                    paddingTop: 40,
                    flexShrink: 0,
                  }}
                  className="step-arrow"
                  aria-hidden="true"
                >
                  <ArrowRight size={18} color="#cbd5e1" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 48,
            padding: "20px",
            background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
            borderRadius: 14,
            color: "#fff",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "1.0625rem" }}>
            One monthly file. One automated workflow.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .step-arrow {
            display: none !important;
          }
          .steps-row > div {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
