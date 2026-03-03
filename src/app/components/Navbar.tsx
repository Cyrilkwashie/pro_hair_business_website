import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Announcement Bar */}
      <div
        className="announcement-bar"
        style={{
          backgroundColor: "#2C1A0E",
          color: "#E8D5C0",
          textAlign: "center",
          padding: "8px 16px",
          fontSize: "12px",
          letterSpacing: "2px",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        FREE SHIPPING ON ORDERS OVER GH₵500 · USE CODE: HANNIE10 FOR 10% OFF
      </div>

      {/* Navbar */}
      <nav
        style={{
          transition: "all 0.4s ease",
          backgroundColor: isTransparent ? "transparent" : "#FBF5EF",
          boxShadow: isTransparent ? "none" : "0 2px 20px rgba(44,26,14,0.08)",
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
            height: "70px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 600,
                color: isTransparent ? "#FBF5EF" : "#2C1A0E",
                letterSpacing: "3px",
                transition: "color 0.4s ease",
              }}
            >
              HANNIE LUXE
            </span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "9px",
                letterSpacing: "5px",
                color: isTransparent ? "#E8D5C0" : "#C49A6C",
                fontWeight: 400,
                marginTop: "2px",
                transition: "color 0.4s ease",
              }}
            >
              HAIR BOUTIQUE
            </span>
          </Link>

          {/* Desktop Links */}
          <ul
            className="nav-links"
            style={{
              listStyle: "none",
              gap: "40px",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: "none",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "12px",
                      letterSpacing: "2.5px",
                      fontWeight: 500,
                      color: isTransparent
                        ? active
                          ? "#C49A6C"
                          : "#FBF5EF"
                        : active
                        ? "#C49A6C"
                        : "#2C1A0E",
                      transition: "color 0.3s ease",
                      borderBottom: active ? "1px solid #C49A6C" : "1px solid transparent",
                      paddingBottom: "2px",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "#C49A6C";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.color = isTransparent
                        ? active
                          ? "#C49A6C"
                          : "#FBF5EF"
                        : active
                        ? "#C49A6C"
                        : "#2C1A0E";
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              to="/cart"
              style={{
                color: isTransparent ? "#FBF5EF" : "#2C1A0E",
                transition: "color 0.3s ease",
                display: "flex",
                position: "relative",
              }}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-7px",
                    right: "-8px",
                    backgroundColor: "#C49A6C",
                    color: "#FBF5EF",
                    borderRadius: "50%",
                    width: "17px",
                    height: "17px",
                    fontSize: "9px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Jost', sans-serif",
                    letterSpacing: 0,
                  }}
                >
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isTransparent ? "#FBF5EF" : "#2C1A0E",
                alignItems: "center",
                transition: "color 0.3s ease",
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "#FBF5EF",
              borderTop: "1px solid #E8D5C0",
              padding: "24px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 0",
                  textDecoration: "none",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "2.5px",
                  fontWeight: 500,
                  color: location.pathname === link.path ? "#C49A6C" : "#2C1A0E",
                  borderBottom: "1px solid #EEE4DA",
                }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "12px", color: "#8B5E3C", letterSpacing: "1px" }}>
                📞 0594274363
              </p>
              <p style={{ fontSize: "12px", color: "#8B5E3C", letterSpacing: "1px", marginTop: "6px" }}>
                👻 Hannie.xxa
              </p>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .nav-links { display: flex; }
        .hamburger-btn { display: none; }
        @media (max-width: 767px) {
          .nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; align-items: center; }
        }
        @media (max-width: 640px) {
          .announcement-bar {
            font-size: 10px !important;
            letter-spacing: 0.5px !important;
          }
        }
      `}</style>
    </div>
  );
}