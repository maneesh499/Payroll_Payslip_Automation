import { useState } from "react";
import { Eye, FileText } from "lucide-react";
import { demoEmployees } from "../data/demoEmployees";
import PayslipPreview from "./PayslipPreview";

type PayslipStatus = "Generated" | "Sent" | "Pending";

const STATUSES: PayslipStatus[] = ["Sent", "Sent", "Generated", "Sent", "Sent", "Sent", "Generated", "Sent", "Pending", "Sent"];

export default function Payslips() {
  const [previewEmployee, setPreviewEmployee] = useState<any | null>(null);

  const payslips = demoEmployees.map((emp, i) => ({
    ...emp,
    month: "August 2026",
    status: STATUSES[i % STATUSES.length],
  }));

  const getStatusBadge = (status: PayslipStatus) => {
    if (status === "Sent") return <span className="badge badge-green">{status}</span>;
    if (status === "Generated") return <span className="badge badge-blue">{status}</span>;
    return <span className="badge badge-gray">{status}</span>;
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Payslips
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          August 2026 · {demoEmployees.length} payslips generated · Demo data only
        </p>
      </div>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 14, marginBottom: 20 }}>
        {[
          { label: "Total", value: demoEmployees.length, color: "#3b5bdb" },
          { label: "Sent", value: payslips.filter((p) => p.status === "Sent").length, color: "#10b981" },
          { label: "Generated", value: payslips.filter((p) => p.status === "Generated").length, color: "#6366f1" },
          { label: "Pending", value: payslips.filter((p) => p.status === "Pending").length, color: "#f59e0b" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: "14px 16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "1.375rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.8rem", color: "#64748b" }}>{s.label}</div>
          </div>
        ))}
      </div>

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
                <th>Month</th>
                <th>Gross Pay</th>
                <th>Net Pay</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payslips.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          flexShrink: 0,
                        }}
                      >
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#0f172a" }}>{p.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontSize: "0.875rem", color: "#475569" }}>{p.month}</td>
                  <td style={{ fontWeight: 600, color: "#0f172a" }}>₹{p.grossSalary.toLocaleString("en-IN")}</td>
                  <td style={{ fontWeight: 600, color: "#10b981" }}>₹{p.netSalary.toLocaleString("en-IN")}</td>
                  <td>{getStatusBadge(p.status as PayslipStatus)}</td>
                  <td>
                    <button
                      onClick={() => setPreviewEmployee(p)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background: "rgba(59,91,219,0.08)",
                        color: "#3b5bdb",
                        border: "1px solid rgba(59,91,219,0.2)",
                        borderRadius: 7,
                        padding: "5px 12px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(59,91,219,0.14)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(59,91,219,0.08)")}
                      aria-label={`Preview payslip for ${p.name}`}
                    >
                      <Eye size={12} />
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {previewEmployee && (
        <PayslipPreview
          employee={previewEmployee}
          month="August 2026"
          onClose={() => setPreviewEmployee(null)}
        />
      )}

      {/* Floating icon for empty state hint */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, justifyContent: "center" }}>
        <FileText size={14} color="#94a3b8" />
        <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
          Click "Preview" on any row to view the payslip
        </span>
      </div>
    </div>
  );
}
