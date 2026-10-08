import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { demoEmployees } from "../data/demoEmployees";

const DEPARTMENTS = ["All", "Engineering", "HR", "Finance", "Operations", "Sales", "Marketing"];

export default function Employees() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = demoEmployees.filter((emp) => {
    const matchSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All" || emp.department === dept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
          Employee Directory
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
          {demoEmployees.length} employees · Demo data only
        </p>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ position: "relative", flex: "1 1 220px" }}>
          <Search size={15} color="#94a3b8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: 36, fontSize: "0.875rem" }}
            aria-label="Search employees"
          />
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <Filter size={14} color="#94a3b8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <select
            className="form-input"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            style={{ paddingLeft: 34, fontSize: "0.875rem", cursor: "pointer", minWidth: 160 }}
            aria-label="Filter by department"
          >
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
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
                <th>Employee ID</th>
                <th>Employee</th>
                <th>Department</th>
                <th>Email</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "#94a3b8", padding: "32px 16px" }}>
                    No employees found
                  </td>
                </tr>
              ) : (
                filtered.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <span style={{ fontWeight: 600, fontSize: "0.8125rem", color: "#3b5bdb", fontFamily: "monospace" }}>
                        {emp.id}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #3b5bdb, #6366f1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          {emp.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span style={{ fontWeight: 600, color: "#0f172a" }}>{emp.name}</span>
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          background: "#f1f5f9",
                          color: "#475569",
                          padding: "3px 10px",
                          borderRadius: 6,
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                        }}
                      >
                        {emp.department}
                      </span>
                    </td>
                    <td style={{ color: "#475569", fontSize: "0.875rem" }}>{emp.email}</td>
                    <td style={{ fontWeight: 600, color: "#0f172a" }}>
                      ₹{emp.grossSalary.toLocaleString("en-IN")}
                    </td>
                    <td style={{ fontWeight: 600, color: "#10b981" }}>
                      ₹{emp.netSalary.toLocaleString("en-IN")}
                    </td>
                    <td>
                      <span className="badge badge-green" style={{ fontSize: "0.7rem" }}>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
