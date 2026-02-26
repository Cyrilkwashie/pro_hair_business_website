import { useState, useEffect } from "react";
import { Trash2, MessageCircle } from "lucide-react";
import { getOrders, updateOrderStatus, deleteOrder } from "../../data/ordersStore";
import type { Order } from "../../data/ordersStore";

const STATUSES: Order["status"][] = ["pending", "confirmed", "shipped", "completed", "cancelled"];

const STATUS_STYLES: Record<Order["status"], { bg: string; color: string }> = {
  pending:   { bg: "#FFF3CD", color: "#856404" },
  confirmed: { bg: "#D1ECF1", color: "#0C5460" },
  shipped:   { bg: "#D4EDDA", color: "#155724" },
  completed: { bg: "#C3E6CB", color: "#155724" },
  cancelled: { bg: "#F8D7DA", color: "#721C24" },
};

export function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>(getOrders);
  const [filter, setFilter] = useState<"all" | Order["status"]>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setOrders(getOrders());
    window.addEventListener("hannie-orders-updated", update);
    return () => window.removeEventListener("hannie-orders-updated", update);
  }, []);

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);
  const totalRevenue = orders.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#2C1A0E", margin: "0 0 4px" }}>
          Orders
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
          {orders.length} total orders · Est. revenue: GH₵ {totalRevenue.toLocaleString()}
        </p>
      </div>

      {/* Note */}
      <div style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(196,154,108,0.4)", borderRadius: "6px", padding: "12px 16px", marginBottom: "20px" }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#5A3E2B", margin: 0, lineHeight: 1.6 }}>
          <strong>How orders appear:</strong> When a customer clicks "Order via WhatsApp" in their cart, the order is automatically saved here for tracking.
        </p>
      </div>

      {/* Status filter tabs */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
        {(["all", ...STATUSES] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              padding: "8px 16px",
              border: "1.5px solid",
              borderColor: filter === s ? "#2C1A0E" : "rgba(196,154,108,0.3)",
              backgroundColor: filter === s ? "#2C1A0E" : "transparent",
              color: filter === s ? "#FBF5EF" : "#5A3E2B",
              borderRadius: "4px", cursor: "pointer",
              fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1.5px", fontWeight: 600,
            }}
          >
            {s.toUpperCase()}
            <span style={{ marginLeft: "6px", opacity: 0.7 }}>
              ({s === "all" ? orders.length : orders.filter((o) => o.status === s).length})
            </span>
          </button>
        ))}
      </div>

      {/* Orders table */}
      {filtered.length === 0 ? (
        <div style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", border: "1px solid rgba(196,154,108,0.15)", padding: "60px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "#B09070", fontWeight: 300 }}>
            {orders.length === 0
              ? "No orders yet. They will appear here when customers order via WhatsApp."
              : `No ${filter} orders.`}
          </p>
        </div>
      ) : (
        <div style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", border: "1px solid rgba(196,154,108,0.15)", overflow: "hidden" }}>
          {filtered.map((order, i) => {
            const sc = STATUS_STYLES[order.status];
            const isExpanded = expanded === order.id;
            return (
              <div key={order.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(196,154,108,0.15)" : "none" }}>
                {/* Row */}
                <div
                  style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", cursor: "pointer" }}
                  onClick={() => setExpanded(isExpanded ? null : order.id)}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 700, color: "#2C1A0E" }}>{order.id}</span>
                      <span style={{ padding: "2px 10px", borderRadius: "20px", backgroundColor: sc.bg, color: sc.color, fontSize: "9px", letterSpacing: "1px", fontWeight: 600 }}>
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
                      {new Date(order.date).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      &nbsp;·&nbsp;{order.items.length} item{order.items.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px", fontWeight: 600, color: "#2C1A0E", margin: "0 0 2px" }}>
                      GH₵ {order.total.toLocaleString()}
                    </p>
                  </div>
                  <span style={{ color: "#B09070", fontSize: "12px" }}>{isExpanded ? "▲" : "▼"}</span>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div style={{ padding: "0 20px 20px", backgroundColor: "rgba(240,230,216,0.3)" }}>
                    {/* Items */}
                    <div style={{ marginBottom: "16px" }}>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", fontWeight: 600, marginBottom: "10px" }}>ORDER ITEMS</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {order.items.map((item, idx) => (
                          <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", backgroundColor: "#FBF5EF", borderRadius: "4px", border: "1px solid rgba(196,154,108,0.15)" }}>
                            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#2C1A0E" }}>
                              {item.productName} · {item.size} · {item.color} × {item.quantity}
                            </span>
                            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 600, color: "#2C1A0E" }}>
                              GH₵ {(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", fontWeight: 600, margin: 0 }}>UPDATE STATUS:</p>
                      {STATUSES.map((s) => (
                        <button
                          key={s}
                          onClick={(e) => { e.stopPropagation(); updateOrderStatus(order.id, s); }}
                          style={{
                            padding: "6px 12px", border: "1.5px solid",
                            borderColor: order.status === s ? "#2C1A0E" : "rgba(196,154,108,0.3)",
                            backgroundColor: order.status === s ? "#2C1A0E" : "transparent",
                            color: order.status === s ? "#FBF5EF" : "#5A3E2B",
                            borderRadius: "3px", cursor: "pointer",
                            fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "1px", fontWeight: 600,
                          }}
                        >
                          {s.toUpperCase()}
                        </button>
                      ))}
                      <div style={{ flex: 1 }} />
                      <a
                        href={`https://wa.me/233594274363?text=${encodeURIComponent(order.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", backgroundColor: "#25D366", color: "#fff", textDecoration: "none", borderRadius: "3px", fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1px", fontWeight: 600 }}
                      >
                        <MessageCircle size={12} /> OPEN IN WHATSAPP
                      </a>
                      <button
                        onClick={(e) => { e.stopPropagation(); if (window.confirm("Delete this order?")) deleteOrder(order.id); }}
                        style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", border: "1.5px solid rgba(200,80,80,0.35)", backgroundColor: "transparent", borderRadius: "3px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1px", color: "#C05050" }}
                      >
                        <Trash2 size={12} /> DELETE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
