import { Check } from "lucide-react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams",
    highlight: false,
    features: [
      "Excel payroll processing",
      "Payslip PDF generation",
      "Basic email automation",
      "Processing logs",
      "Up to 50 employees",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Best for growing companies",
    highlight: true,
    features: [
      "Bulk payslip generation",
      "Automated email delivery",
      "Password protection",
      "Detailed processing logs",
      "Custom payslip template",
      "Priority support",
      "Up to 200 employees",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For payroll consultants & CA firms",
    highlight: false,
    features: [
      "Multiple client support",
      "Bulk processing",
      "Custom workflows",
      "Reporting & analytics",
      "Ongoing support",
      "Unlimited employees",
    ],
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" style={{ padding: "96px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Pricing</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Service-Based Pricing
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 560, margin: "0 auto" }}>
            Pricing is tailored to your team size, payroll complexity and workflow requirements. Request a quote to get started.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: plan.highlight ? "linear-gradient(160deg, #3b5bdb 0%, #4c6ef5 100%)" : "#fff",
                border: plan.highlight ? "none" : "1.5px solid #e2e8f0",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                boxShadow: plan.highlight ? "0 20px 60px rgba(59,91,219,0.3)" : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#f59e0b",
                    color: "#fff",
                    padding: "4px 16px",
                    borderRadius: 99,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: 8 }}>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.125rem",
                    color: plan.highlight ? "#fff" : "#0f172a",
                    marginBottom: 4,
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: plan.highlight ? "rgba(255,255,255,0.7)" : "#64748b" }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ margin: "24px 0", padding: "20px 0", borderTop: `1px solid ${plan.highlight ? "rgba(255,255,255,0.15)" : "#f1f5f9"}`, borderBottom: `1px solid ${plan.highlight ? "rgba(255,255,255,0.15)" : "#f1f5f9"}` }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: plan.highlight ? "#fff" : "#0f172a" }}>
                  Custom Quote
                </div>
                <div style={{ fontSize: "0.8rem", color: plan.highlight ? "rgba(255,255,255,0.6)" : "#94a3b8", marginTop: 2 }}>
                  Based on your requirements
                </div>
              </div>

              <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: plan.highlight ? "rgba(255,255,255,0.2)" : "rgba(16,185,129,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <Check size={11} color={plan.highlight ? "#fff" : "#10b981"} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: plan.highlight ? "rgba(255,255,255,0.85)" : "#475569" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                style={{
                  width: "100%",
                  background: plan.highlight ? "#fff" : "linear-gradient(135deg, #3b5bdb, #4c6ef5)",
                  color: plan.highlight ? "#3b5bdb" : "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "13px 24px",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                aria-label={`Request a custom quote for ${plan.name} plan`}
              >
                Request a Custom Quote
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 32, fontSize: "0.875rem", color: "#94a3b8" }}>
          All plans include a free consultation to understand your payroll workflow before any commitment.
        </p>
      </div>
    </section>
  );
}
