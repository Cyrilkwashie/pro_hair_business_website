import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Star, Filter, X } from "lucide-react";
import { getProducts } from "../data/productsStore";
import type { Product } from "../data/products";
const categories = ["All", "Bundles", "Closures", "Frontals", "Wigs"];

export function Shop() {
  const [products, setProducts] = useState<Product[]>(() => getProducts());
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const update = () => setProducts(getProducts());
    window.addEventListener("hannie-products-updated", update);
    return () => window.removeEventListener("hannie-products-updated", update);
  }, []);

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div style={{ backgroundColor: "#FBF5EF", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        style={{
          backgroundColor: "#2C1A0E",
          paddingTop: "140px",
          paddingBottom: "60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
            color: "#C49A6C",
            fontWeight: 500,
            marginBottom: "14px",
          }}
        >
          ✦ HANNIE LUXE HAIR ✦
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 500,
            color: "#FBF5EF",
            margin: "0 0 16px",
          }}
        >
          The Collection
        </h1>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            color: "#C4A882",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Premium quality hair — every bundle, every wig, every closure
        </p>
      </div>

      {/* Filters Bar */}
      <div
        style={{
          backgroundColor: "#FFF9F4",
          borderBottom: "1px solid rgba(196,154,108,0.2)",
          position: "sticky",
          top: "106px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            minHeight: "62px",
          }}
        >
          {/* Category Filters */}
          <div className="category-filters" style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "12px 0" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#C49A6C" : "rgba(196,154,108,0.3)",
                  borderRadius: "2px",
                  backgroundColor: activeCategory === cat ? "#C49A6C" : "transparent",
                  color: activeCategory === cat ? "#2C1A0E" : "#8B6A4E",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                color: "#8B6A4E",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}
            >
              {filtered.length} items
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 14px",
                border: "1px solid rgba(196,154,108,0.3)",
                borderRadius: "2px",
                backgroundColor: "transparent",
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                color: "#2C1A0E",
                cursor: "pointer",
                outline: "none",
                letterSpacing: "1px",
              }}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "50px 24px 90px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#8B6A4E" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px" }}>No products found</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "28px",
            }}
            className="product-grid"
          >
            {filtered.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Order CTA */}
      <div
        style={{
          backgroundColor: "#F0E6D8",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(196,154,108,0.2)",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 3vw, 34px)",
            fontWeight: 500,
            color: "#2C1A0E",
            margin: "0 0 10px",
          }}
        >
          Don't see what you're looking for?
        </p>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            color: "#7A5C3C",
            marginBottom: "28px",
            fontWeight: 300,
          }}
        >
          Contact Hannie directly for custom orders, bundle deals, and wholesale prices.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:0594274363"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2C1A0E",
              color: "#FBF5EF",
              padding: "14px 32px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              borderRadius: "2px",
            }}
          >
            📞 CALL NOW
          </a>
          <a
            href="https://wa.me/233594274363"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#C49A6C",
              color: "#2C1A0E",
              padding: "14px 32px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              borderRadius: "2px",
            }}
          >
            💬 WHATSAPP
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .card-mobile-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .category-filters { flex-wrap: nowrap !important; overflow-x: auto !important; -webkit-overflow-scrolling: touch; padding-right: 8px !important; }
          .category-filters::-webkit-scrollbar { display: none; }
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}

function ShopProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFF9F4",
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid rgba(196,154,108,0.15)",
        boxShadow: hovered ? "0 12px 40px rgba(44,26,14,0.14)" : "0 2px 12px rgba(44,26,14,0.05)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.55s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Badge */}
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              backgroundColor:
                product.badge === "Sale"
                  ? "#8B2020"
                  : product.badge === "New"
                  ? "#2C5A2C"
                  : "#2C1A0E",
              color: "#FBF5EF",
              padding: "4px 12px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "9px",
              letterSpacing: "2px",
              fontWeight: 500,
              borderRadius: "2px",
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Quick order */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(44,26,14,0.5)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Link
            to={`/product/${product.id}`}
            style={{
              backgroundColor: "#C49A6C",
              color: "#2C1A0E",
              padding: "12px 28px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "2.5px",
              fontWeight: 700,
              borderRadius: "2px",
            }}
          >
            VIEW DETAILS
          </Link>
          <Link
            to={`/product/${product.id}`}
            style={{
              color: "#FBF5EF",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "2px",
              fontWeight: 500,
              opacity: 0.85,
            }}
          >
            ADD TO CART →
          </Link>
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "18px 18px 22px" }}>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "#C49A6C",
            fontWeight: 500,
            margin: "0 0 6px",
            textTransform: "uppercase",
          }}
        >
          {product.category}
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "17px",
            fontWeight: 600,
            color: "#2C1A0E",
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "12px",
            color: "#8B6A4E",
            margin: "0 0 12px",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          {product.description}
        </p>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < product.rating ? "#C49A6C" : "transparent"}
                color="#C49A6C"
              />
            ))}
          </div>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#8B6A4E" }}>
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#C49A6C",
            }}
          >
            {product.displayPrice}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                color: "#B0A090",
                textDecoration: "line-through",
              }}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Always-visible mobile link */}
      <Link
        to={`/product/${product.id}`}
        className="card-mobile-btn"
        style={{
          display: "none",
          width: "100%",
          justifyContent: "center",
          padding: "12px",
          backgroundColor: "#2C1A0E",
          color: "#FBF5EF",
          fontFamily: "'Jost', sans-serif",
          fontSize: "10px",
          letterSpacing: "2.5px",
          fontWeight: 600,
          textDecoration: "none",
          borderTop: "1px solid rgba(196,154,108,0.2)",
          textAlign: "center",
          boxSizing: "border-box" as const,
        }}
      >
        VIEW DETAILS
      </Link>
    </div>
  );
}
