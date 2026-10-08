import { X, Building2, User, Briefcase, Calendar, BadgeDollarSign } from "lucide-react";

interface PayslipPreviewProps {
  employee: {
    id: string;
    name: string;
    department: string;
    email: string;
    grossSalary: number;
    netSalary: number;
  };
  month: string;
  onClose: () => void;
}

export default function PayslipPreview({ employee, month, onClose }: PayslipPreviewProps) {
  const basic = Math.round(employee.grossSalary * 0.5);
  const hra = Math.round(employee.grossSalary * 0.2);
  const conveyance = Math.round(employee.grossSalary * 0.1);
  const medical = Math.round(employee.grossSalary * 0.05);
  const specialAllowance = employee.grossSalary - basic - hra - conveyance - medical;

  const pf = Math.round(basic * 0.12);
  const professionalTax = 200;
  const incomeTax = Math.round((employee.grossSalary - employee.netSalary) - pf - professionalTax);
  const totalDeductions = employee.grossSalary - employee.netSalary;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Payslip preview" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ maxWidth: 580 }}>
        {/* Modal header */}
        <div
          style={{
            background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: 99,
                marginBottom: 8,
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Demo Payslip
            </div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.125rem" }}>Payslip Preview</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{month}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 10,
              padding: 8,
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close payslip preview"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: "24px" }}>
          {/* Company + Employee info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 20,
              padding: "16px",
              background: "#f8fafc",
              borderRadius: 12,
              border: "1px solid #e2e8f0",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                <Building2 size={13} color="#3b5bdb" />
                <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Company</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>Demo Corp Pvt. Ltd.</div>
              <div style={{ fontSize: "0.775rem", color: "#64748b", marginTop: 2 }}>Bangalore, Karnataka</div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                <Calendar size={13} color="#3b5bdb" />
                <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Pay Period</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>{month}</div>
              <div style={{ fontSize: "0.775rem", color: "#64748b", marginTop: 2 }}>01–31 {month}</div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 20,
              padding: "16px",
              background: "rgba(59,91,219,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(59,91,219,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <User size={13} color="#3b5bdb" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600 }}>EMPLOYEE NAME</div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{employee.name}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <BadgeDollarSign size={13} color="#3b5bdb" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600 }}>EMPLOYEE ID</div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{employee.id}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Briefcase size={13} color="#3b5bdb" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600 }}>DEPARTMENT</div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{employee.department}</div>
              </div>
            </div>
          </div>

          {/* Earnings / Deductions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {/* Earnings */}
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#10b981", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
                Earnings
              </div>
              {[
                { label: "Basic Salary", amount: basic },
                { label: "HRA", amount: hra },
                { label: "Conveyance", amount: conveyance },
                { label: "Medical Allow.", amount: medical },
                { label: "Special Allow.", amount: specialAllowance },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #f1f5f9", fontSize: "0.825rem" }}
                >
                  <span style={{ color: "#475569" }}>{item.label}</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>₹{item.amount.toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontWeight: 700, fontSize: "0.875rem" }}>
                <span style={{ color: "#10b981" }}>Gross</span>
                <span style={{ color: "#10b981" }}>₹{employee.grossSalary.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Deductions */}
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#ef4444", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
                Deductions
              </div>
              {[
                { label: "PF (12%)", amount: pf },
                { label: "Professional Tax", amount: professionalTax },
                { label: "Income Tax (TDS)", amount: incomeTax > 0 ? incomeTax : 0 },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #f1f5f9", fontSize: "0.825rem" }}
                >
                  <span style={{ color: "#475569" }}>{item.label}</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>₹{item.amount.toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontWeight: 700, fontSize: "0.875rem" }}>
                <span style={{ color: "#ef4444" }}>Total Deductions</span>
                <span style={{ color: "#ef4444" }}>₹{totalDeductions.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Net Pay */}
          <div
            style={{
              background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
              borderRadius: 12,
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 2 }}>NET SALARY PAYABLE</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.02em" }}>
                ₹{employee.netSalary.toLocaleString("en-IN")}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>FOR THE MONTH OF</div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{month.toUpperCase()}</div>
            </div>
          </div>

          <p style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: 12, textAlign: "center" }}>
            This is a demo payslip with illustrative data only. All figures are fictional.
          </p>
        </div>
      </div>
    </div>
  );
}
