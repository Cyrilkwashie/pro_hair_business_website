import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Eye, EyeOff, Lock } from "lucide-react";
import { login, isLoggedIn } from "./adminAuth";

export function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoggedIn()) {
    navigate("/admin/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (login(password)) {
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A0F08",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#2C1A0E",
          borderRadius: "8px",
          padding: "48px 40px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          border: "1px solid rgba(196,154,108,0.15)",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 600, color: "#FBF5EF", letterSpacing: "3px", margin: "0 0 4px" }}>
            HANNIE LUXE
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "6px", color: "#C49A6C", fontWeight: 400, margin: "0 0 24px" }}>
            ADMIN PORTAL
          </p>
          <div
            style={{
              width: "44px", height: "44px", borderRadius: "50%",
              backgroundColor: "rgba(196,154,108,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Lock size={18} color="#C49A6C" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block", fontFamily: "'Jost', sans-serif",
                fontSize: "10px", letterSpacing: "2.5px", fontWeight: 600,
                color: "rgba(251,245,239,0.5)", marginBottom: "10px",
              }}
            >
              PASSWORD
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                autoComplete="current-password"
                style={{
                  width: "100%", padding: "13px 44px 13px 16px",
                  backgroundColor: "rgba(251,245,239,0.07)",
                  border: error ? "1.5px solid #e05c5c" : "1.5px solid rgba(196,154,108,0.25)",
                  borderRadius: "4px", color: "#FBF5EF",
                  fontFamily: "'Jost', sans-serif", fontSize: "14px",
                  outline: "none", boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#C49A6C")}
                onBlur={(e) => (e.target.style.borderColor = error ? "#e05c5c" : "rgba(196,154,108,0.25)")}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                tabIndex={-1}
                style={{
                  position: "absolute", right: "14px", top: "50%",
                  transform: "translateY(-50%)", background: "none", border: "none",
                  cursor: "pointer", color: "rgba(251,245,239,0.4)", display: "flex",
                }}
              >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {error && (
              <p style={{ color: "#e05c5c", fontSize: "12px", marginTop: "8px", fontWeight: 400 }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: "100%", padding: "14px",
              backgroundColor: loading || !password ? "rgba(196,154,108,0.4)" : "#C49A6C",
              color: "#2C1A0E", border: "none", borderRadius: "4px",
              fontFamily: "'Jost', sans-serif", fontSize: "11px",
              letterSpacing: "3px", fontWeight: 700, cursor: loading || !password ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {loading ? "SIGNING IN…" : "SIGN IN"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <Link
            to="/"
            style={{
              fontFamily: "'Jost', sans-serif", fontSize: "11px",
              letterSpacing: "1.5px", color: "rgba(251,245,239,0.3)",
              textDecoration: "none",
            }}
          >
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
