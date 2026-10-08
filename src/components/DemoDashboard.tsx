import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar, { type DashboardView } from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import Employees from "./Employees";
import PayrollRuns from "./PayrollRuns";
import Payslips from "./Payslips";
import EmailDelivery from "./EmailDelivery";
import Reports from "./Reports";
import Settings from "./Settings";

const VIEW_LABELS: Record<DashboardView, string> = {
  dashboard: "Dashboard",
  employees: "Employees",
  "payroll-runs": "Payroll Runs",
  payslips: "Payslips",
  "email-delivery": "Email Delivery",
  reports: "Reports",
  settings: "Settings",
};

function renderView(view: DashboardView) {
  switch (view) {
    case "dashboard": return <DashboardOverview />;
    case "employees": return <Employees />;
    case "payroll-runs": return <PayrollRuns />;
    case "payslips": return <Payslips />;
    case "email-delivery": return <EmailDelivery />;
    case "reports": return <Reports />;
    case "settings": return <Settings />;
    default: return <DashboardOverview />;
  }
}

export default function DemoDashboard() {
  const [activeView, setActiveView] = useState<DashboardView>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section id="demo" style={{ padding: "96px 0", background: "#f1f5f9" }}>
      <div className="container-wide">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Interactive Demo</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            See Payroll Automation in Action
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 560, margin: "0 auto 20px" }}>
            Explore a fully interactive product dashboard built with demo data. Navigate between sections to see how the automation workflow operates.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              background: "rgba(59,91,219,0.08)",
              border: "1px solid rgba(59,91,219,0.2)",
              borderRadius: 99,
              fontSize: "0.8rem",
              color: "#3b5bdb",
              fontWeight: 600,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            INTERACTIVE DEMO — All data is fictional
          </div>
        </div>

        {/* Dashboard shell */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 80px rgba(0,0,0,0.1)",
            overflow: "hidden",
            minHeight: 600,
          }}
        >
          {/* Top bar */}
          <div
            style={{
              background: "#f8fafc",
              borderBottom: "1px solid #e2e8f0",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Browser dots */}
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#10b981" }} />
            </div>
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                borderRadius: 6,
                color: "#64748b",
                display: "none",
              }}
              className="dashboard-hamburger"
              aria-label="Open dashboard navigation"
            >
              <Menu size={20} />
            </button>
            <div style={{ flex: 1, textAlign: "center", fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500 }}>
              PayFlow Automate · {VIEW_LABELS[activeView]}
            </div>
          </div>

          {/* Body */}
          <div style={{ display: "flex", height: "100%", minHeight: 580 }}>
            <Sidebar
              activeView={activeView}
              onNavigate={setActiveView}
              mobileOpen={sidebarOpen}
              onMobileClose={() => setSidebarOpen(false)}
            />
            <main
              style={{
                flex: 1,
                padding: "24px",
                overflowY: "auto",
                background: "#f8fafc",
                minWidth: 0,
              }}
              aria-label="Dashboard main content"
            >
              {renderView(activeView)}
            </main>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dashboard-hamburger { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
