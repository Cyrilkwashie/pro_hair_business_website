import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Star, CheckCircle2, ShoppingBag, Minus, Plus } from "lucide-react";
import { getProducts } from "../data/productsStore";
import { useCart } from "../context/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProducts().find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  if (!product) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FBF5EF" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "#2C1A0E" }}>Product not found</p>
          <Link to="/shop" style={{ color: "#C49A6C", fontFamily: "'Jost', sans-serif", fontSize: "13px", letterSpacing: "2px" }}>← BACK TO SHOP</Link>
        </div>
      </div>
    );
  }

  const related = getProducts().filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    if (!selectedSize) { setError("Please select a length"); return; }
    if (!selectedColor) { setError("Please select a colour"); return; }
    setError("");
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div style={{ backgroundColor: "#FBF5EF", minHeight: "100vh", paddingTop: "106px" }}>

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 20px 0" }}>
        <Link
          to="/shop"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "2px",
            color: "#8B6A4E", textDecoration: "none", fontWeight: 500,
          }}
        >
          <ArrowLeft size={14} /> BACK TO SHOP
        </Link>
      </div>

      {/* Main Product Section */}
      <div
        style={{
          maxWidth: "1280px", margin: "0 auto", padding: "28px 20px 80px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start",
        }}
        className="product-detail-grid"
      >
        {/* ── Image ── */}
        <div className="product-image-col" style={{ position: "sticky", top: "120px" }}>
          <div
            style={{
              borderRadius: "4px", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(44,26,14,0.15)",
              aspectRatio: "3/4",
              backgroundColor: "#F0E6D8",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          {product.badge && (
            <div
              style={{
                display: "inline-block", marginTop: "16px",
                backgroundColor: product.badge === "Sale" ? "#C49A6C" : product.badge === "New" ? "#2C1A0E" : "#8B6A4E",
                color: "#FBF5EF", padding: "6px 18px",
                fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2.5px", fontWeight: 600,
                borderRadius: "2px",
              }}
            >
              {product.badge.toUpperCase()}
            </div>
          )}
        </div>

        {/* ── Info ── */}
        <div>
          {/* Category tag */}
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "4px", color: "#C49A6C", fontWeight: 500, marginBottom: "10px" }}>
            {product.category.toUpperCase()}
          </p>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 500, color: "#2C1A0E", margin: "0 0 16px", lineHeight: 1.15,
            }}
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < product.rating ? "#C49A6C" : "none"} color={i < product.rating ? "#C49A6C" : "#D4B896"} />
              ))}
            </div>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#8B6A4E" }}>
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "24px" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "34px", fontWeight: 600, color: "#2C1A0E" }}>
              {product.displayPrice}
            </span>
            {product.originalPrice && (
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", color: "#B09070", textDecoration: "line-through" }}>
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", lineHeight: "1.9", color: "#5A3E2B", marginBottom: "32px", fontWeight: 300 }}>
            {product.description}
          </p>

          <div style={{ borderTop: "1px solid rgba(196,154,108,0.2)", paddingTop: "28px" }} />

          {/* ── Size Selector ── */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "#2C1A0E", fontWeight: 600, marginBottom: "14px" }}>
              LENGTH
              {selectedSize && <span style={{ color: "#C49A6C", fontWeight: 400, marginLeft: "10px" }}>{selectedSize}</span>}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: "9px 16px",
                    border: selectedSize === size ? "2px solid #2C1A0E" : "1.5px solid rgba(196,154,108,0.4)",
                    backgroundColor: selectedSize === size ? "#2C1A0E" : "transparent",
                    color: selectedSize === size ? "#FBF5EF" : "#5A3E2B",
                    fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "1px",
                    cursor: "pointer", borderRadius: "2px",
                    transition: "all 0.2s ease",
                    fontWeight: selectedSize === size ? 600 : 400,
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ── Colour Selector ── */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "#2C1A0E", fontWeight: 600, marginBottom: "14px" }}>
              COLOUR
              {selectedColor && <span style={{ color: "#C49A6C", fontWeight: 400, marginLeft: "10px" }}>{selectedColor}</span>}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  title={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: color.hex.startsWith("linear") ? color.hex : color.hex,
                    border: selectedColor === color.name ? "3px solid #C49A6C" : "2px solid rgba(196,154,108,0.3)",
                    cursor: "pointer",
                    outline: selectedColor === color.name ? "2px solid #2C1A0E" : "none",
                    outlineOffset: "2px",
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                >
                  {color.hex.startsWith("linear") && (
                    <span style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      background: "linear-gradient(to bottom, #1a1a1a, #9b6b4a)",
                    }} />
                  )}
                </button>
              ))}
            </div>
            {selectedColor && (
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#8B6A4E", marginTop: "8px" }}>
                Selected: {selectedColor}
              </p>
            )}
          </div>

          {/* ── Quantity ── */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "#2C1A0E", fontWeight: 600, marginBottom: "14px" }}>
              QUANTITY
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1.5px solid rgba(196,154,108,0.4)", borderRadius: "2px", width: "fit-content" }}>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                style={{ width: "44px", height: "44px", border: "none", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C1A0E" }}
              >
                <Minus size={14} />
              </button>
              <span style={{ width: "44px", textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "15px", fontWeight: 600, color: "#2C1A0E" }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                style={{ width: "44px", height: "44px", border: "none", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C1A0E" }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#C0392B", marginBottom: "12px", letterSpacing: "0.5px" }}>
              ⚠ {error}
            </p>
          )}

          {/* ── Add to Cart Button ── */}
          <div className="product-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={handleAddToCart}
              style={{
                flex: 1, minWidth: "200px", padding: "16px 32px",
                backgroundColor: added ? "#4A7C59" : "#2C1A0E",
                color: "#FBF5EF", border: "none", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", fontWeight: 600,
                borderRadius: "2px", transition: "background-color 0.3s ease",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              }}
            >
              <ShoppingBag size={15} />
              {added ? "✓ ADDED TO CART" : "ADD TO CART"}
            </button>
            <button
              onClick={() => navigate("/cart")}
              style={{
                padding: "16px 24px",
                backgroundColor: "transparent", color: "#2C1A0E",
                border: "1.5px solid #2C1A0E", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", fontWeight: 600,
                borderRadius: "2px", transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C1A0E"; (e.currentTarget as HTMLElement).style.color = "#FBF5EF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#2C1A0E"; }}
            >
              VIEW CART
            </button>
          </div>

          {/* ── Product Details ── */}
          <div style={{ marginTop: "36px", borderTop: "1px solid rgba(196,154,108,0.2)", paddingTop: "28px" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", color: "#2C1A0E", fontWeight: 600, marginBottom: "16px" }}>
              PRODUCT DETAILS
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {product.details.map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={14} color="#C49A6C" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#5A3E2B", fontWeight: 300, lineHeight: "1.6" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <div style={{ backgroundColor: "#F0E6D8", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "5px", color: "#C49A6C", fontWeight: 500, marginBottom: "10px", textAlign: "center" }}>
              ✦ YOU MAY ALSO LIKE ✦
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, color: "#2C1A0E", textAlign: "center", marginBottom: "40px" }}>
              More {product.category}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="related-grid">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "#FBF5EF", borderRadius: "4px", overflow: "hidden",
                      boxShadow: "0 2px 16px rgba(44,26,14,0.06)", border: "1px solid rgba(196,154,108,0.15)",
                      transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(44,26,14,0.15)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(44,26,14,0.06)"}
                  >
                    <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                      <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                        onMouseEnter={(e) => (e.target as HTMLImageElement).style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => (e.target as HTMLImageElement).style.transform = "scale(1)"}
                      />
                    </div>
                    <div style={{ padding: "16px" }}>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", fontWeight: 600, color: "#2C1A0E", margin: "0 0 6px" }}>{p.name}</p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "#C49A6C", fontWeight: 600, margin: 0 }}>{p.displayPrice}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 16px !important;
          }
          .product-image-col {
            position: static !important;
          }
          .product-image-col > div:first-child {
            border-radius: 0 !important;
            box-shadow: none !important;
            aspect-ratio: 4/5 !important;
          }
          .product-image-col > div:nth-child(2) {
            padding: 12px 20px 0;
          }
          .product-detail-grid > div:nth-child(2) {
            padding: 28px 20px 100px;
          }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
          .product-actions { flex-direction: column !important; }
          .product-actions button { min-width: unset !important; width: 100% !important; flex: unset !important; }
        }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
