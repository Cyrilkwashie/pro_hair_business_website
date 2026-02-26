import { useState, useEffect } from "react";
import { Check, RefreshCw } from "lucide-react";
import { getSettings, saveSettings, resetSettings, DEFAULTS } from "../../data/settingsStore";
import type { SiteSettings } from "../../data/settingsStore";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  border: "1.5px solid rgba(196,154,108,0.3)",
  borderRadius: "4px", fontFamily: "'Jost', sans-serif", fontSize: "13px",
  color: "#2C1A0E", backgroundColor: "#fff", outline: "none",
  boxSizing: "border-box", transition: "border-color 0.2s",
};

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <label style={{ display: "block", fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2.5px", fontWeight: 700, color: "#5A3E2B", marginBottom: "6px" }}>
        {label}
      </label>
      {children}
      {hint && <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#B09070", margin: "6px 0 0", fontWeight: 300 }}>{hint}</p>}
    </div>
  );
}

export function AdminSettings() {
  const [form, setForm] = useState<SiteSettings>(getSettings);
  const [saved, setSaved] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const update = () => setForm(getSettings());
    window.addEventListener("hannie-settings-updated", update);
    return () => window.removeEventListener("hannie-settings-updated", update);
  }, []);

  const set = (key: keyof SiteSettings, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setChanged(true);
  };

  const handleSave = () => {
    saveSettings(form);
    setSaved(true);
    setChanged(false);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm("Reset all settings to defaults?")) {
      resetSettings();
      setForm(DEFAULTS);
      setChanged(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#2C1A0E", margin: "0 0 4px" }}>Settings</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
            Manage your business info and contact details.
          </p>
        </div>
        <button
          onClick={handleReset}
          style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 18px", border: "1.5px solid rgba(196,154,108,0.4)", backgroundColor: "transparent", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "1px", color: "#8B6A4E" }}
        >
          <RefreshCw size={13} /> Reset defaults
        </button>
      </div>

      {/* Note */}
      <div style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(196,154,108,0.4)", borderRadius: "6px", padding: "12px 16px", marginBottom: "28px" }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#5A3E2B", margin: 0, lineHeight: 1.6 }}>
          <strong>Note:</strong> Settings are saved to your browser's local storage. WhatsApp number and announcement bar text update live on the site. Other fields are stored for reference.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }} className="settings-grid">

        {/* Business Info */}
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 700, color: "#C49A6C", marginBottom: "20px" }}>
            BUSINESS INFO
          </p>

          <Field label="BUSINESS NAME">
            <input style={inputStyle} value={form.businessName} onChange={(e) => set("businessName", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="TAGLINE">
            <input style={inputStyle} value={form.tagline} onChange={(e) => set("tagline", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="LOCATION">
            <input style={inputStyle} value={form.location} onChange={(e) => set("location", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="BUSINESS HOURS">
            <input style={inputStyle} value={form.businessHours} onChange={(e) => set("businessHours", e.target.value)}
              placeholder="Mon–Sat: 9am – 7pm | Sun: Closed"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="EMAIL ADDRESS" hint="Optional — leave blank if not using email">
            <input style={inputStyle} type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
              placeholder="hannieluxe@gmail.com"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>
        </div>

        {/* Contact & Site */}
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 700, color: "#C49A6C", marginBottom: "20px" }}>
            CONTACT & SITE
          </p>

          <Field label="WHATSAPP NUMBER" hint="Include country code, no + sign. e.g. 233594274363">
            <input style={inputStyle} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="233594274363"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="PHONE NUMBER" hint="Displayed on the website">
            <input style={inputStyle} value={form.phone} onChange={(e) => set("phone", e.target.value)}
              placeholder="0594274363"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="SNAPCHAT HANDLE">
            <input style={inputStyle} value={form.snapchat} onChange={(e) => set("snapchat", e.target.value)}
              placeholder="Hannie.xxa"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")} onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")} />
          </Field>

          <Field label="ANNOUNCEMENT BAR TEXT" hint="Shown at the very top of every page">
            <textarea
              style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
              value={form.announcementBar}
              onChange={(e) => set("announcementBar", e.target.value)}
              placeholder="FREE SHIPPING ON ORDERS OVER GH₵500 · USE CODE: HANNIE10 FOR 10% OFF"
              onFocus={(e) => (e.target.style.borderColor = "#C49A6C")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(196,154,108,0.3)")}
            />
          </Field>
        </div>
      </div>

      {/* Preview: Announcement bar */}
      <div style={{ marginBottom: "28px" }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", fontWeight: 600, color: "#8B6A4E", marginBottom: "8px" }}>
          ANNOUNCEMENT BAR PREVIEW
        </p>
        <div style={{ backgroundColor: "#2C1A0E", color: "#E8D5C0", textAlign: "center", padding: "10px 16px", fontSize: "11px", letterSpacing: "2px", fontFamily: "'Jost', sans-serif", borderRadius: "4px" }}>
          {form.announcementBar || "—"}
        </div>
      </div>

      {/* Save button */}
      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "8px", borderTop: "1px solid rgba(196,154,108,0.2)" }}>
        <button
          onClick={handleSave}
          disabled={!changed}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "13px 36px",
            backgroundColor: saved ? "#4A7C59" : changed ? "#2C1A0E" : "rgba(44,26,14,0.3)",
            color: "#FBF5EF", border: "none", borderRadius: "4px",
            cursor: changed ? "pointer" : "not-allowed",
            fontFamily: "'Jost', sans-serif", fontSize: "11px",
            letterSpacing: "2.5px", fontWeight: 700,
            transition: "background-color 0.3s",
          }}
        >
          {saved ? <><Check size={14} /> SAVED</> : "SAVE SETTINGS"}
        </button>
      </div>

      <style>{`
        @media (max-width: 760px) { .settings-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
