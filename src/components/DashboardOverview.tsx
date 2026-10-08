import { Users, TrendingUp, FileText, Mail, CheckCircle2, AlertTriangle, Clock, Play } from "lucide-react";

const ACTIVITY = [
  { icon: <CheckCircle2 size={14} color="#10b981" />, text: "Payslip generated", sub: "Rahul Sharma · EMP001", type: "success", time: "09:02" },
  { icon: <Mail size={14} color="#10b981" />, text: "Email delivered", sub: "Priya Reddy · EMP002", type: "success", time: "09:02" },
  { icon: <FileText size={14} color="#10b981" />, text: "Payroll processed", sub: "August 2026 run complete", type: "success", time: "09:01" },
  { icon: <AlertTriangle size={14} color="#f59e0b" />, text: "Email delivery failed", sub: "Employee 1042 · Invalid address", type: "warning", time: "09:02" },
];

export default function DashboardOverview() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Welcome back
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          Here is your payroll overview for August 2026.
        </p>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {[
          { icon: <Users size={18} color="#3b5bdb" />, label: "Total Employees", value: "48", bg: "rgba(59,91,219,0.08)", color: "#3b5bdb" },
          { icon: <TrendingUp size={18} color="#6366f1" />, label: "Payroll Processed", value: "₹18,42,600", bg: "rgba(99,102,241,0.08)", color: "#6366f1" },
          { icon: <FileText size={18} color="#10b981" />, label: "Payslips Generated", value: "48", bg: "rgba(16,185,129,0.08)", color: "#10b981" },
          { icon: <Mail size={18} color="#f59e0b" />, label: "Emails Delivered", value: "46", bg: "rgba(245,158,11,0.08)", color: "#f59e0b" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 14,
              padding: "18px 20px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: stat.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              {stat.icon}
            </div>
            <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: 2 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Current Run */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          padding: "20px 22px",
          marginBottom: 20,
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
              Current Payroll Run
            </div>
            <div style={{ fontWeight: 800, fontSize: "1.0625rem", color: "#0f172a" }}>August 2026</div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="badge badge-green">Completed</span>
            <button
              style={{
                background: "rgba(59,91,219,0.08)",
                color: "#3b5bdb",
                border: "1px solid rgba(59,91,219,0.2)",
                borderRadius: 8,
                padding: "5px 12px",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Play size={12} fill="#3b5bdb" />
              View Payslips
            </button>
            <button
              style={{
                background: "rgba(245,158,11,0.08)",
                color: "#d97706",
                border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: 8,
                padding: "5px 12px",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              View Email Logs
            </button>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 500 }}>Email delivery progress</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#3b5bdb" }}>96% · 46/48 delivered</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "96%" }} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          padding: "20px 22px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a", marginBottom: 16 }}>Recent Activity</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ACTIVITY.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                borderRadius: 10,
                background: item.type === "warning" ? "rgba(245,158,11,0.05)" : "rgba(16,185,129,0.05)",
                border: `1px solid ${item.type === "warning" ? "rgba(245,158,11,0.15)" : "rgba(16,185,129,0.12)"}`,
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: item.type === "warning" ? "rgba(245,158,11,0.12)" : "rgba(16,185,129,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#0f172a" }}>{item.text}</div>
                <div style={{ fontSize: "0.775rem", color: "#94a3b8", marginTop: 1 }}>{item.sub}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.75rem", color: "#94a3b8" }}>
                <Clock size={11} />
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
