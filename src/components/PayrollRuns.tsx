import { Users, TrendingUp, FileText, Mail, CheckCircle2 } from "lucide-react";
import { demoPayrollRuns } from "../data/demoPayrollRuns";

export default function PayrollRuns() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Payroll Runs
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          Historical payroll processing records · Demo data only
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {demoPayrollRuns.map((run) => (
          <div
            key={run.id}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 14,
              padding: "20px 22px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)")}
          >
            {/* Header row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: "1.0625rem", color: "#0f172a", marginBottom: 2 }}>
                  {run.period}
                </h3>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                  Run ID: {run.id} · {new Date(run.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className="badge badge-green" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <CheckCircle2 size={11} />
                  {run.status}
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 }}>
              {[
                { icon: <Users size={14} color="#3b5bdb" />, label: "Employees", value: run.employees.toString() },
                { icon: <TrendingUp size={14} color="#6366f1" />, label: "Gross Payroll", value: `₹${(run.grossPayroll / 100000).toFixed(2)}L` },
                { icon: <FileText size={14} color="#10b981" />, label: "Payslips", value: run.payslipsGenerated.toString() },
                { icon: <Mail size={14} color="#f59e0b" />, label: "Emails Sent", value: run.emailsSent.toString() },
                { icon: <Mail size={14} color="#ef4444" />, label: "Failed", value: run.emailsFailed.toString() },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    {stat.icon}
                    <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {stat.label}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0f172a" }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: "0.775rem", color: "#64748b", fontWeight: 500 }}>Email delivery rate</span>
                <span style={{ fontSize: "0.775rem", fontWeight: 700, color: "#3b5bdb" }}>
                  {((run.emailsSent / run.employees) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="progress-bar" style={{ height: 6 }}>
                <div className="progress-fill" style={{ width: `${(run.emailsSent / run.employees) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
