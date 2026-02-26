import { useState } from "react";
import { Outlet, NavLink, useNavigate, Navigate } from "react-router";
import {
  LayoutDashboard, Package, ShoppingBag, Image, Settings,
  LogOut, Menu, X, ExternalLink,
} from "lucide-react";
import { isLoggedIn, logout } from "./adminAuth";

const navItems = [
  { path: "/admin/dashboard", label: "Dashboard",  icon: LayoutDashboard },
  { path: "/admin/products",  label: "Products",   icon: Package },
  { path: "/admin/orders",    label: "Orders",     icon: ShoppingBag },
  { path: "/admin/gallery",   label: "Gallery",    icon: Image },
  { path: "/admin/settings",  label: "Settings",   icon: Settings },
];

export function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  const sidebarContent = (
    <div
      style={{
        display: "flex", flexDirection: "column", height: "100%",
        backgroundColor: "#1A0F08",
      }}
    >
      {/* Logo */}
      <div style={{ padding: "28px 24px 24px", borderBottom: "1px solid rgba(196,154,108,0.12)" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: "#FBF5EF", letterSpacing: "2px", margin: "0 0 2px" }}>
          HANNIE LUXE
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "8px", letterSpacing: "5px", color: "#C49A6C", margin: 0, fontWeight: 500 }}>
          ADMIN PORTAL
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 0" }}>
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setSidebarOpen(false)}
            style={({ isActive }) => ({
              display: "flex", alignItems: "center", gap: "12px",
              padding: "12px 24px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif", fontSize: "11px",
              letterSpacing: "1.5px", fontWeight: 600,
              color: isActive ? "#C49A6C" : "rgba(251,245,239,0.5)",
              backgroundColor: isActive ? "rgba(196,154,108,0.1)" : "transparent",
              borderLeft: isActive ? "3px solid #C49A6C" : "3px solid transparent",
              transition: "all 0.2s ease",
            })}
          >
            <Icon size={15} />
            {label.toUpperCase()}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "16px 0", borderTop: "1px solid rgba(196,154,108,0.12)" }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "11px 24px", textDecoration: "none",
            fontFamily: "'Jost', sans-serif", fontSize: "11px",
            letterSpacing: "1.5px", fontWeight: 500,
            color: "rgba(251,245,239,0.35)",
          }}
        >
          <ExternalLink size={13} />
          VIEW SITE
        </a>
        <button
          onClick={handleLogout}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "11px 24px", width: "100%",
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Jost', sans-serif", fontSize: "11px",
            letterSpacing: "1.5px", fontWeight: 500,
            color: "rgba(251,245,239,0.35)", textAlign: "left",
          }}
        >
          <LogOut size={13} />
          LOGOUT
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F5EFE8", fontFamily: "'Jost', sans-serif" }}>

      {/* Desktop Sidebar */}
      <aside
        style={{
          width: "230px", flexShrink: 0, position: "fixed",
          top: 0, left: 0, bottom: 0, zIndex: 50,
        }}
        className="admin-sidebar-desktop"
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            onClick={() => setSidebarOpen(false)}
          />
          <aside style={{ width: "230px", position: "relative", zIndex: 1 }}>
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "230px", display: "flex", flexDirection: "column", minHeight: "100vh" }} className="admin-main">
        {/* Top Bar */}
        <div
          style={{
            backgroundColor: "#FBF5EF",
            borderBottom: "1px solid rgba(196,154,108,0.2)",
            padding: "0 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            height: "56px", flexShrink: 0, position: "sticky", top: 0, zIndex: 10,
          }}
        >
          <button
            className="admin-menu-btn"
            onClick={() => setSidebarOpen(true)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#2C1A0E", display: "none", alignItems: "center",
            }}
          >
            <Menu size={20} />
          </button>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "30px", height: "30px", borderRadius: "50%",
                backgroundColor: "#2C1A0E",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span style={{ color: "#C49A6C", fontSize: "12px", fontWeight: 700 }}>H</span>
            </div>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#2C1A0E", fontWeight: 600 }}>
              Hannie Admin
            </span>
          </div>
        </div>

        {/* Page Content */}
        <div style={{ flex: 1, padding: "32px 28px" }}>
          <Outlet />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-sidebar-desktop { display: none !important; }
          .admin-main { margin-left: 0 !important; }
          .admin-menu-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
