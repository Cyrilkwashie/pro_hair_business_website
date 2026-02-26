import { Link } from "react-router";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { saveOrder } from "../data/ordersStore";

export function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const buildOrderMessage = (): string => {
    const lines = items.map((item) => {
      const lineTotal = item.product.price * item.quantity;
      return `• ${item.product.name} (${item.size}, ${item.color}) x${item.quantity} — GH₵ ${lineTotal.toLocaleString()}`;
    });
    return (
      `Hello Hannie! I'd like to place an order:\n\n` +
      lines.join("\n") +
      `\n\n*Total: GH₵ ${totalPrice.toLocaleString()}*\n\nPlease confirm availability. Thank you! 🙏`
    );
  };

  const buildWhatsAppMessage = () =>
    `https://wa.me/233594274363?text=${encodeURIComponent(buildOrderMessage())}`;

  const handleOrderClick = () => {
    saveOrder({
      items: items.map((item) => ({
        productName: item.product.name,
        category: item.product.category,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.product.price,
      })),
      total: totalPrice,
      whatsappMessage: buildOrderMessage(),
    });
  };

  if (items.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#FBF5EF", minHeight: "100vh", paddingTop: "100px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div
            style={{
              width: "90px", height: "90px", borderRadius: "50%",
              backgroundColor: "#F0E6D8", margin: "0 auto 28px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ShoppingBag size={36} color="#C49A6C" strokeWidth={1.5} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "36px",
              fontWeight: 500, color: "#2C1A0E", marginBottom: "12px",
            }}
          >
            Your cart is empty
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: "14px",
              color: "#8B6A4E", marginBottom: "32px", fontWeight: 300,
            }}
          >
            Explore our collection and add something beautiful.
          </p>
          <Link
            to="/shop"
            style={{
              display: "inline-block",
              backgroundColor: "#2C1A0E", color: "#FBF5EF",
              padding: "15px 40px", textDecoration: "none",
              fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", fontWeight: 600,
              borderRadius: "2px",
            }}
          >
            BROWSE SHOP
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FBF5EF", minHeight: "100vh", paddingTop: "100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 100px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <Link
            to="/shop"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px",
              color: "#8B6A4E", textDecoration: "none", fontWeight: 500, marginBottom: "24px",
            }}
          >
            <ArrowLeft size={13} /> CONTINUE SHOPPING
          </Link>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 50px)",
              fontWeight: 500, color: "#2C1A0E", margin: "0 0 6px",
            }}
          >
            Your Cart
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", fontWeight: 300 }}>
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }} className="cart-layout">

          {/* ── Cart Items ── */}
          <div>
            <div style={{ borderTop: "1px solid rgba(196,154,108,0.3)" }}>
              {items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}-${index}`}
                  style={{
                    display: "grid", gridTemplateColumns: "90px 1fr auto",
                    gap: "20px", padding: "24px 0", alignItems: "center",
                    borderBottom: "1px solid rgba(196,154,108,0.2)",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "90px", height: "120px", borderRadius: "3px",
                      overflow: "hidden", backgroundColor: "#F0E6D8", flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "3px", color: "#C49A6C", fontWeight: 600, marginBottom: "5px" }}>
                      {item.product.category.toUpperCase()}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif", fontSize: "19px",
                        fontWeight: 600, color: "#2C1A0E", margin: "0 0 8px",
                      }}
                    >
                      {item.product.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif", fontSize: "12px",
                        color: "#8B6A4E", fontWeight: 300, marginBottom: "14px",
                      }}
                    >
                      {item.size} &nbsp;·&nbsp; {item.color}
                    </p>

                    {/* Quantity Controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1.5px solid rgba(196,154,108,0.4)", borderRadius: "2px", width: "fit-content" }}>
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        style={{
                          width: "36px", height: "36px", border: "none",
                          backgroundColor: "transparent", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#2C1A0E",
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        style={{
                          width: "36px", textAlign: "center",
                          fontFamily: "'Jost', sans-serif", fontSize: "13px",
                          fontWeight: 600, color: "#2C1A0E",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        style={{
                          width: "36px", height: "36px", border: "none",
                          backgroundColor: "transparent", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#2C1A0E",
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif", fontSize: "20px",
                        fontWeight: 600, color: "#2C1A0E", margin: 0, whiteSpace: "nowrap",
                      }}
                    >
                      GH₵ {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(index)}
                      style={{
                        border: "none", backgroundColor: "transparent", cursor: "pointer",
                        color: "#B09070", padding: "4px",
                        transition: "color 0.2s",
                      }}
                      title="Remove item"
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#C0392B"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#B09070"}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              style={{
                marginTop: "16px", border: "none", backgroundColor: "transparent",
                cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px",
                letterSpacing: "1.5px", color: "#B09070", textDecoration: "underline",
                padding: 0,
              }}
            >
              CLEAR CART
            </button>
          </div>

          {/* ── Order Summary ── */}
          <div
            style={{
              backgroundColor: "#2C1A0E", borderRadius: "4px",
              padding: "36px 28px", position: "sticky", top: "120px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: "26px",
                fontWeight: 500, color: "#FBF5EF", marginBottom: "28px",
              }}
            >
              Order Summary
            </h2>

            {/* Line items summary */}
            <div style={{ marginBottom: "20px" }}>
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}-summary`}
                  style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", gap: "12px", marginBottom: "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif", fontSize: "12px",
                      color: "rgba(251,245,239,0.65)", fontWeight: 300, margin: 0, flex: 1,
                    }}
                  >
                    {item.product.name}
                    <span style={{ display: "block", fontSize: "11px", marginTop: "2px" }}>
                      {item.size} · {item.color} · x{item.quantity}
                    </span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif", fontSize: "12px",
                      color: "rgba(251,245,239,0.85)", fontWeight: 500, margin: 0, whiteSpace: "nowrap",
                    }}
                  >
                    GH₵ {(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(251,245,239,0.15)", margin: "20px 0" }} />

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#FBF5EF", margin: 0 }}>
                Total
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: "#C49A6C", margin: 0 }}>
                GH₵ {totalPrice.toLocaleString()}
              </p>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOrderClick}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                width: "100%", padding: "16px",
                backgroundColor: "#25D366", color: "#fff",
                textDecoration: "none", borderRadius: "2px",
                fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2.5px", fontWeight: 700,
                transition: "background-color 0.2s ease",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#1fb855"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#25D366"}
            >
              <MessageCircle size={16} />
              ORDER VIA WHATSAPP
            </a>

            <p
              style={{
                fontFamily: "'Jost', sans-serif", fontSize: "11px",
                color: "rgba(251,245,239,0.4)", textAlign: "center",
                marginTop: "14px", fontWeight: 300, lineHeight: 1.6,
              }}
            >
              Tapping the button will open WhatsApp with your order pre-filled.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
