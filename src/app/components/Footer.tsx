import { Link } from "react-router";
import { Phone, MessageCircle, Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C1A0E", color: "#E8D5C0" }}>
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "70px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "50px",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 600,
                color: "#F7EDE2",
                letterSpacing: "3px",
                margin: 0,
              }}
            >
              HANNIE LUXE
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "9px",
                letterSpacing: "5px",
                color: "#C49A6C",
                fontWeight: 400,
                marginTop: "4px",
              }}
            >
              HAIR BOUTIQUE
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              lineHeight: "1.9",
              color: "#C4A882",
              maxWidth: "260px",
            }}
          >
            Premium quality hair bundles, closures, frontals, and wigs. Elevate your crown with Hannie Luxe.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "24px" }}>
            <a
              href="https://snapchat.com/add/Hannie.xxa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(196,154,108,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C49A6C",
                textDecoration: "none",
                transition: "all 0.3s",
                fontSize: "14px",
              }}
              title="Snapchat: Hannie.xxa"
            >
              👻
            </a>
            <a
              href="tel:0594274363"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(196,154,108,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C49A6C",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <Phone size={15} />
            </a>
            <a
              href="https://wa.me/233594274363"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(196,154,108,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C49A6C",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#F7EDE2",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            QUICK LINKS
          </h4>
          {[
            { name: "Home", path: "/" },
            { name: "Shop All", path: "/shop" },
            { name: "About Hannie", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: "block",
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                color: "#C4A882",
                textDecoration: "none",
                marginBottom: "12px",
                letterSpacing: "0.5px",
                transition: "color 0.3s",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Collections */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#F7EDE2",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            COLLECTIONS
          </h4>
          {[
            "Hair Bundles",
            "Lace Closures",
            "HD Lace Frontals",
            "Lace Front Wigs",
            "Bob Wigs",
            "Accessories",
          ].map((item) => (
            <Link
              key={item}
              to="/shop"
              style={{
                display: "block",
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                color: "#C4A882",
                textDecoration: "none",
                marginBottom: "12px",
                letterSpacing: "0.5px",
                transition: "color 0.3s",
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#F7EDE2",
              marginBottom: "24px",
              marginTop: 0,
            }}
          >
            GET IN TOUCH
          </h4>
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              color: "#C4A882",
              lineHeight: "2",
            }}
          >
            <p style={{ margin: "0 0 10px" }}>
              <span style={{ color: "#C49A6C", marginRight: "8px" }}>📞</span>
              <a href="tel:0594274363" style={{ color: "#C4A882", textDecoration: "none" }}>
                0594274363
              </a>
            </p>
            <p style={{ margin: "0 0 10px" }}>
              <span style={{ color: "#C49A6C", marginRight: "8px" }}>👻</span>
              Hannie.xxa
            </p>
            <p style={{ margin: "0 0 10px" }}>
              <span style={{ color: "#C49A6C", marginRight: "8px" }}>💬</span>
              <a href="https://wa.me/233594274363" target="_blank" rel="noopener noreferrer" style={{ color: "#C4A882", textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </p>
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid rgba(196,154,108,0.3)",
              backgroundColor: "rgba(196,154,108,0.05)",
            }}
          >
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#C49A6C", letterSpacing: "2px", margin: "0 0 6px", fontWeight: 500 }}>
              BUSINESS HOURS
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#C4A882", margin: 0, lineHeight: "1.8" }}>
              Mon – Sat: 8:00am – 8:00pm<br />
              Sun: 10:00am – 5:00pm
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(196,154,108,0.2)",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            color: "#7A5C3C",
            letterSpacing: "1px",
            margin: 0,
          }}
        >
          © 2026 HANNIE LUXE HAIR BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            color: "#7A5C3C",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          MADE WITH <Heart size={10} fill="#C49A6C" color="#C49A6C" /> FOR HANNIE
        </p>
      </div>
    </footer>
  );
}
