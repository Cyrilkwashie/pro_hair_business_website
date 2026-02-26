import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Package, ShoppingBag, TrendingUp, Grid3x3, ArrowRight, Clock } from "lucide-react";
import { getProducts } from "../../data/productsStore";
import { getOrders } from "../../data/ordersStore";
import type { Order } from "../../data/ordersStore";

const STATUS_COLORS: Record<Order["status"], { bg: string; color: string }> = {
  pending:   { bg: "#FFF3CD", color: "#856404" },
  confirmed: { bg: "#D1ECF1", color: "#0C5460" },
  shipped:   { bg: "#D4EDDA", color: "#155724" },
  completed: { bg: "#C3E6CB", color: "#155724" },
  cancelled: { bg: "#F8D7DA", color: "#721C24" },
};

export function AdminDashboard() {
  const [products, setProducts] = useState(getProducts);
  const [orders, setOrders] = useState(getOrders);

  useEffect(() => {
    const update = () => {
      setProducts(getProducts());
      setOrders(getOrders());
    };
    window.addEventListener("hannie-products-updated", update);
    window.addEventListener("hannie-orders-updated", update);
    return () => {
      window.removeEventListener("hannie-products-updated", update);
      window.removeEventListener("hannie-orders-updated", update);
    };
  }, []);

  const totalRevenue = orders
    .filter((o) => o.status !== "cancelled")
    .reduce((sum, o) => sum + o.total, 0);

  const categories = [...new Set(products.map((p) => p.category))];
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  const stats = [
    { label: "Total Products",  value: products.length,                     icon: Package,    color: "#C49A6C", bg: "#FBF5EF" },
    { label: "Total Orders",    value: orders.length,                        icon: ShoppingBag, color: "#5A3E2B", bg: "#F0E6D8" },
    { label: "Est. Revenue",    value: `GH₵ ${totalRevenue.toLocaleString()}`, icon: TrendingUp,  color: "#2C1A0E", bg: "#E8D5C0" },
    { label: "Categories",      value: categories.length,                    icon: Grid3x3,    color: "#8B6A4E", bg: "#FBF5EF" },
  ];

  const recentOrders = orders.slice(0, 6);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#2C1A0E", margin: "0 0 4px" }}>
          Dashboard
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
          Welcome back, Hannie. Here's what's happening.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "36px" }} className="stats-grid">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div
            key={label}
            style={{
              backgroundColor: "#FBF5EF", borderRadius: "8px",
              padding: "22px 20px", border: "1px solid rgba(196,154,108,0.15)",
              boxShadow: "0 2px 8px rgba(44,26,14,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: bg, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(196,154,108,0.2)" }}>
                <Icon size={18} color={color} />
              </div>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 600, color: "#2C1A0E", margin: "0 0 4px" }}>
              {value}
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1.5px", color: "#8B6A4E", margin: 0, fontWeight: 500 }}>
              {label.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      {/* Pending banner */}
      {pendingOrders > 0 && (
        <div
          style={{
            backgroundColor: "#FFF8F0", border: "1px solid #C49A6C",
            borderRadius: "8px", padding: "14px 20px", marginBottom: "28px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Clock size={16} color="#C49A6C" />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#2C1A0E", fontWeight: 500 }}>
              You have <strong>{pendingOrders}</strong> pending {pendingOrders === 1 ? "order" : "orders"} awaiting confirmation.
            </span>
          </div>
          <Link to="/admin/orders" style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "1.5px", color: "#C49A6C", textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
            VIEW <ArrowRight size={12} />
          </Link>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="bottom-grid">
        {/* Recent Orders */}
        <div style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", border: "1px solid rgba(196,154,108,0.15)", overflow: "hidden" }}>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid rgba(196,154,108,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", fontWeight: 700, color: "#2C1A0E", margin: 0 }}>
              RECENT ORDERS
            </h2>
            <Link to="/admin/orders" style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", color: "#C49A6C", textDecoration: "none", letterSpacing: "1px" }}>
              See all →
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <div style={{ padding: "32px 20px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#B09070", fontWeight: 300 }}>
                No orders yet. They'll appear here when customers order via WhatsApp.
              </p>
            </div>
          ) : (
            <div>
              {recentOrders.map((order) => {
                const sc = STATUS_COLORS[order.status];
                return (
                  <div
                    key={order.id}
                    style={{
                      padding: "14px 20px",
                      borderBottom: "1px solid rgba(196,154,108,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 600, color: "#2C1A0E", margin: "0 0 2px" }}>
                        {order.id}
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
                        {new Date(order.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        &nbsp;·&nbsp;{order.items.length} item{order.items.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 600, color: "#2C1A0E" }}>
                        GH₵ {order.total.toLocaleString()}
                      </span>
                      <span style={{ padding: "3px 10px", borderRadius: "20px", backgroundColor: sc.bg, color: sc.color, fontSize: "9px", letterSpacing: "1px", fontWeight: 600 }}>
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Products by Category */}
        <div style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", border: "1px solid rgba(196,154,108,0.15)", overflow: "hidden" }}>
          <div style={{ padding: "18px 20px", borderBottom: "1px solid rgba(196,154,108,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", fontWeight: 700, color: "#2C1A0E", margin: 0 }}>
              PRODUCTS BY CATEGORY
            </h2>
            <Link to="/admin/products" style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", color: "#C49A6C", textDecoration: "none", letterSpacing: "1px" }}>
              Manage →
            </Link>
          </div>
          <div style={{ padding: "20px" }}>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              const pct = Math.round((count / products.length) * 100);
              return (
                <div key={cat} style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#2C1A0E", fontWeight: 500 }}>{cat}</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#8B6A4E" }}>{count}</span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "#F0E6D8", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${pct}%`, backgroundColor: "#C49A6C", borderRadius: "2px", transition: "width 0.5s ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
