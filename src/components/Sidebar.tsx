import {
  LayoutDashboard,
  Users,
  Play,
  FileText,
  Mail,
  BarChart3,
  Settings,
  X,
  FileText as Logo,
} from "lucide-react";

export type DashboardView =
  | "dashboard"
  | "employees"
  | "payroll-runs"
  | "payslips"
  | "email-delivery"
  | "reports"
  | "settings";

const NAV_ITEMS: { id: DashboardView; label: string; icon: React.ReactNode }[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={17} /> },
  { id: "employees", label: "Employees", icon: <Users size={17} /> },
  { id: "payroll-runs", label: "Payroll Runs", icon: <Play size={17} /> },
  { id: "payslips", label: "Payslips", icon: <FileText size={17} /> },
  { id: "email-delivery", label: "Email Delivery", icon: <Mail size={17} /> },
  { id: "reports", label: "Reports", icon: <BarChart3 size={17} /> },
  { id: "settings", label: "Settings", icon: <Settings size={17} /> },
];

interface SidebarProps {
  activeView: DashboardView;
  onNavigate: (view: DashboardView) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

function SidebarContent({
  activeView,
  onNavigate,
  onClose,
}: {
  activeView: DashboardView;
  onNavigate: (view: DashboardView) => void;
  onClose?: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#fff", lineHeight: 1.1 }}>PayFlow</div>
            <div style={{ fontWeight: 600, fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Automate
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 4 }}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 12px" }} aria-label="Dashboard navigation">
        <ul style={{ listStyle: "none" }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeView === item.id;
            return (
              <li key={item.id} style={{ marginBottom: 2 }}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    onClose?.();
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: "inherit",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                    borderLeft: isActive ? "3px solid rgba(255,255,255,0.8)" : "3px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Demo mode badge */}
      <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 10,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10b981",
              flexShrink: 0,
              boxShadow: "0 0 0 2px rgba(16,185,129,0.3)",
            }}
          />
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>Demo Mode</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginTop: 1 }}>Fictional data only</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ activeView, onNavigate, mobileOpen, onMobileClose }: SidebarProps) {
  const sidebarStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
    width: 220,
    flexShrink: 0,
    height: "100%",
  };

  return (
    <>
      {/* Desktop sidebar */}
      <div style={sidebarStyle} className="dashboard-sidebar-desktop">
        <SidebarContent activeView={activeView} onNavigate={onNavigate} />
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 300,
          }}
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        style={{
          ...sidebarStyle,
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 310,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
        className="dashboard-sidebar-mobile"
        role="dialog"
        aria-label="Dashboard navigation"
        aria-modal="true"
      >
        <SidebarContent activeView={activeView} onNavigate={onNavigate} onClose={onMobileClose} />
      </div>

      <style>{`
        .dashboard-sidebar-desktop { display: flex; flex-direction: column; }
        @media (max-width: 768px) {
          .dashboard-sidebar-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}
