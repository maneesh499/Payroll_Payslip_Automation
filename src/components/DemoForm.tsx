import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljgnalo";

const PAYROLL_OPTIONS = [
  { value: "", label: "How do you currently process payroll?" },
  { value: "excel-manually", label: "Excel — manually" },
  { value: "payroll-software", label: "Payroll software" },
  { value: "outsourced", label: "Outsourced payroll" },
  { value: "other", label: "Other" },
];

interface FormErrors {
  name?: string;
  email?: string;
}

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    payrollProcess: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          phone: form.phone.trim(),
          employees: form.employees.trim(),
          payrollProcess: form.payrollProcess,
          message: form.message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        let errorData: { errors?: Array<{ message?: string }> } | null = null;
        try {
          errorData = await response.json();
        } catch {
          // Non-JSON response
        }

        if (errorData && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          const detail = errorData.errors
            .map((err) => err.message)
            .filter(Boolean)
            .join(". ");
          setSubmitError(detail || "Failed to submit request. Please try again.");
        } else {
          setSubmitError("Failed to submit request. Please try again or reach out to us via WhatsApp.");
        }
      }
    } catch {
      setSubmitError("Network error. Unable to reach the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  if (submitted) {
    return (
      <section id="contact" style={{ padding: "96px 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(16,185,129,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <CheckCircle2 size={30} color="#10b981" />
            </div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>
              Request Received
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", lineHeight: 1.7 }}>
              Thanks! Your demo request has been received. I'll review your details and get back to you shortly to schedule the consultation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div className="container">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Get Started</div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Request a Free Demo
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
              Tell us how you currently manage payroll and payslips. We'll show you how the process can be automated.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              background: "#fff",
              borderRadius: 20,
              border: "1px solid #e2e8f0",
              padding: "40px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="form-grid">
              {/* Name */}
              <div>
                <label htmlFor="demo-name" className="form-label">
                  Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: 4 }} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="demo-company" className="form-label">Company Name</label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  className="form-input"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="demo-email" className="form-label">
                  Work Email <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: 4 }} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="demo-phone" className="form-label">Phone / WhatsApp</label>
                <input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              {/* Employees */}
              <div>
                <label htmlFor="demo-employees" className="form-label">Number of Employees</label>
                <input
                  id="demo-employees"
                  name="employees"
                  type="number"
                  className="form-input"
                  placeholder="e.g. 50"
                  value={form.employees}
                  onChange={handleChange}
                  min="1"
                />
              </div>

              {/* Payroll process */}
              <div>
                <label htmlFor="demo-payroll" className="form-label">Current Payroll Process</label>
                <select
                  id="demo-payroll"
                  name="payrollProcess"
                  className="form-input"
                  value={form.payrollProcess}
                  onChange={handleChange}
                  style={{ cursor: "pointer" }}
                  aria-label="Current payroll process"
                >
                  {PAYROLL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="demo-message" className="form-label">Message</label>
              <textarea
                id="demo-message"
                name="message"
                className="form-input"
                placeholder="Describe your current payroll process or any specific requirements..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                style={{ resize: "vertical" }}
              />
            </div>

            {submitError && (
              <div
                role="alert"
                style={{
                  marginBottom: 20,
                  padding: "14px 16px",
                  borderRadius: 10,
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#b91c1c",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  lineHeight: 1.5,
                }}
              >
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>Submission Failed</div>
                  <div>{submitError}</div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "1rem",
                padding: "14px 24px",
                opacity: isSubmitting ? 0.75 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              aria-label="Submit demo request"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={17} className="spin-icon" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Request Free Demo
                </>
              )}
            </button>

            <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#94a3b8", marginTop: 16 }}>
              This form is for demo request submission only. Your information will not be shared with third parties.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
