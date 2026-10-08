import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Can you work with my existing Excel payroll file?",
    answer: "Yes. The system is designed to read your existing Excel payroll spreadsheet. There is no need to reformat your data or switch to a new tool. During the initial setup, we review your spreadsheet structure to configure the processing accordingly.",
  },
  {
    question: "Can payslips be generated for hundreds of employees?",
    answer: "Yes. The workflow is designed for bulk processing. Whether you have 10 employees or 500, individual payslips are generated automatically for every employee in the payroll file in a single run.",
  },
  {
    question: "Can payslips be emailed automatically?",
    answer: "Yes. Once payslips are generated, the system automatically sends each payslip to the correct employee's registered email address. You receive a delivery log showing which emails were delivered and which failed.",
  },
  {
    question: "Can the payslip design include our company logo?",
    answer: "Yes. Payslips can be customised with your company name, logo and preferred layout. The template is configured during the initial setup based on your branding requirements.",
  },
  {
    question: "Can sensitive employee information be protected?",
    answer: "Yes. Sensitive fields such as bank account numbers or personal identification details can be masked or excluded from the payslip document based on your configuration. You control what information appears on each payslip.",
  },
  {
    question: "Can you customise the workflow for our company?",
    answer: "Yes. The workflow can be adapted to suit your specific payroll structure, Excel format, naming conventions and email requirements. The initial consultation is used to understand your process before setup begins.",
  },
  {
    question: "Do you provide setup and support?",
    answer: "Yes. Setup is handled for you. After the initial consultation, the system is configured based on your payroll file structure and requirements. Ongoing support is available for payroll runs and any adjustments needed.",
  },
  {
    question: "Can CA firms use this for multiple clients?",
    answer: "Yes. The Business plan supports multiple client configurations. Each client can have a separate payroll setup with their own template, email configuration and processing logs. This makes it suitable for CA firms and payroll consultants managing several organisations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" style={{ padding: "96px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>FAQ</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
            Answers to common questions about the payroll automation service.
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${openIndex === i ? "rgba(59,91,219,0.3)" : "#e2e8f0"}`,
                borderRadius: 14,
                overflow: "hidden",
                background: openIndex === i ? "rgba(59,91,219,0.02)" : "#fff",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#0f172a", lineHeight: 1.4 }}>
                  {faq.question}
                </span>
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: openIndex === i ? "rgba(59,91,219,0.1)" : "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ChevronDown
                    size={16}
                    color={openIndex === i ? "#3b5bdb" : "#94a3b8"}
                    style={{ transition: "transform 0.25s ease", transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                style={{
                  maxHeight: openIndex === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    padding: "0 22px 18px",
                    fontSize: "0.9rem",
                    color: "#475569",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
