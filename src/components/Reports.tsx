import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import { monthlyChartData } from "../data/demoPayrollRuns";

export default function Reports() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Reports
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          Payroll analytics — May to August 2026 · Demo data only
        </p>
      </div>

      {/* Summary row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14, marginBottom: 24 }}>
        {[
          { label: "Total Payroll (4 months)", value: "₹70.08L", color: "#3b5bdb" },
          { label: "Avg Employees", value: "45.5", color: "#6366f1" },
          { label: "Total Payslips", value: "182", color: "#10b981" },
          { label: "Avg Delivery Rate", value: "98.4%", color: "#f59e0b" },
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
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "0.775rem", color: "#64748b", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {/* Gross payroll chart */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "20px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a", marginBottom: 4 }}>
            Payroll Processed (₹ Lakhs)
          </div>
          <div style={{ fontSize: "0.775rem", color: "#94a3b8", marginBottom: 16 }}>Monthly gross payroll</div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyChartData}>
              <defs>
                <linearGradient id="payrollGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b5bdb" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b5bdb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: "0.8rem" }}
                formatter={(v: any) => [`₹${v}L`, "Gross Payroll"]}
              />
              <Area type="monotone" dataKey="grossPayroll" stroke="#3b5bdb" strokeWidth={2.5} fill="url(#payrollGrad)" dot={{ fill: "#3b5bdb", r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Employees processed */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "20px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a", marginBottom: 4 }}>
            Employees Processed
          </div>
          <div style={{ fontSize: "0.775rem", color: "#94a3b8", marginBottom: 16 }}>Monthly headcount</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: "0.8rem" }}
                formatter={(v: any) => [v, "Employees"]}
              />
              <Bar dataKey="employees" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery rate */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "20px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a", marginBottom: 4 }}>
            Email Delivery Rate (%)
          </div>
          <div style={{ fontSize: "0.775rem", color: "#94a3b8", marginBottom: 16 }}>Monthly email delivery success</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[90, 100]} tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: "0.8rem" }}
                formatter={(v: any) => [`${v}%`, "Delivery Rate"]}
              />
              <Line type="monotone" dataKey="deliveryRate" stroke="#10b981" strokeWidth={2.5} dot={{ fill: "#10b981", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
