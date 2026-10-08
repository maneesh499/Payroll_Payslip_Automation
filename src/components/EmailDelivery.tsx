import { Mail, CheckCircle2, XCircle, Clock, RefreshCw } from "lucide-react";
import { demoEmailLogs } from "../data/demoEmailLogs";

export default function EmailDelivery() {
  const total = demoEmailLogs.length;
  const delivered = demoEmailLogs.filter((l) => l.status === "Delivered").length;
  const failed = demoEmailLogs.filter((l) => l.status === "Failed").length;
  const pending = demoEmailLogs.filter((l) => l.status === "Pending").length;
  const rate = ((delivered / total) * 100).toFixed(1);

  const getStatusBadge = (status: string) => {
    if (status === "Delivered") return <span className="badge badge-green" style={{ fontSize: "0.7rem" }}>{status}</span>;
    if (status === "Failed") return <span className="badge badge-red" style={{ fontSize: "0.7rem" }}>{status}</span>;
    return <span className="badge badge-gray" style={{ fontSize: "0.7rem" }}>{status}</span>;
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Email Delivery
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          August 2026 delivery report · Demo data only
        </p>
      </div>

      {/* Summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 14, marginBottom: 22 }}>
        {[
          { icon: <Mail size={18} color="#3b5bdb" />, label: "Total Emails", value: total, bg: "rgba(59,91,219,0.08)", color: "#3b5bdb" },
          { icon: <CheckCircle2 size={18} color="#10b981" />, label: "Delivered", value: delivered, bg: "rgba(16,185,129,0.08)", color: "#10b981" },
          { icon: <XCircle size={18} color="#ef4444" />, label: "Failed", value: failed, bg: "rgba(239,68,68,0.08)", color: "#ef4444" },
          { icon: <Clock size={18} color="#f59e0b" />, label: "Pending", value: pending, bg: "rgba(245,158,11,0.08)", color: "#f59e0b" },
          { icon: <CheckCircle2 size={18} color="#6366f1" />, label: "Delivery Rate", value: `${rate}%`, bg: "rgba(99,102,241,0.08)", color: "#6366f1" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: "14px 16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: stat.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              {stat.icon}
            </div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: "0.775rem", color: "#64748b" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Email</th>
                <th>Payslip</th>
                <th>Status</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {demoEmailLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#0f172a" }}>{log.employeeName}</div>
                    <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{log.employeeId}</div>
                  </td>
                  <td style={{ fontSize: "0.875rem", color: "#475569" }}>{log.email}</td>
                  <td style={{ fontSize: "0.875rem", color: "#475569" }}>{log.payslipMonth}</td>
                  <td>{getStatusBadge(log.status)}</td>
                  <td style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "monospace" }}>{log.time}</td>
                  <td>
                    {log.status === "Failed" ? (
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          background: "rgba(239,68,68,0.08)",
                          color: "#ef4444",
                          border: "1px solid rgba(239,68,68,0.2)",
                          borderRadius: 7,
                          padding: "4px 10px",
                          fontSize: "0.775rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                        title="Retry (demo — does not send email)"
                        aria-label={`Retry email for ${log.employeeName} (demo only)`}
                      >
                        <RefreshCw size={11} />
                        Retry
                      </button>
                    ) : (
                      <span style={{ fontSize: "0.775rem", color: "#94a3b8" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{ fontSize: "0.775rem", color: "#94a3b8", marginTop: 12, textAlign: "center" }}>
        Retry button is for display purposes only in this interactive demo.
      </p>
    </div>
  );
}
