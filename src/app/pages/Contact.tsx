import { useState } from "react";
import { Link } from "react-router";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactImg = "https://i.pinimg.com/736x/19/8f/28/198f285cad775aae94d7189f3fbdb0ca.jpg";

const contactMethods = [
  {
    icon: <Phone size={22} color="#C49A6C" />,
    title: "Call / SMS",
    detail: "0594274363",
    sub: "Mon–Sat, 8am–8pm",
    href: "tel:0594274363",
    action: "Call Now",
  },
  {
    icon: <MessageCircle size={22} color="#C49A6C" />,
    title: "WhatsApp",
    detail: "0594274363",
    sub: "Quick responses guaranteed",
    href: "https://wa.me/233594274363",
    action: "Chat Now",
  },
  {
    icon: <span style={{ fontSize: "22px" }}>👻</span>,
    title: "Snapchat",
    detail: "Hannie.xxa",
    sub: "DM for exclusive deals",
    href: "https://snapchat.com/add/Hannie.xxa",
    action: "Add on Snap",
  },
];

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Within Ghana, delivery typically takes 1–3 business days depending on your location. Express same-day delivery is available in select areas.",
  },
  {
    q: "Is the hair really 100% virgin?",
    a: "Absolutely. All our hair is sourced ethically and is unprocessed virgin hair. No chemical treatments, no synthetic blending — just pure, premium quality.",
  },
  {
    q: "Can I return or exchange my order?",
    a: "We offer a 7-day quality guarantee. If there is any defect or quality issue, we'll replace it. Hair must be uninstalled and in its original condition.",
  },
  {
    q: "Do you offer bundle deals?",
    a: "Yes! Contact Hannie directly for bundle deals — buy 3+ bundles and save. We also offer wholesale pricing for salons and resellers.",
  },
  {
    q: "What lengths are available?",
    a: "We carry lengths from 10\" to 30\" for bundles. Wigs range from 12\" to 26\". Custom lengths may be available — reach out to ask!",
  },
  {
    q: "Can Hannie help me choose the right hair?",
    a: "Absolutely! Hannie personally helps every client find the perfect texture, length, and style. Just send a DM or call — she's always happy to help.",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#FBF5EF" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "380px",
          overflow: "hidden",
        }}
      >
        <img
          src={contactImg}
          alt="Contact Hannie Luxe"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(44,26,14,0.82) 0%, rgba(44,26,14,0.45) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            paddingTop: "100px",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "5px",
              color: "#C49A6C",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            ✦ REACH OUT ✦
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 500,
              color: "#FBF5EF",
              margin: "0 0 12px",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "#E8D5C0",
              fontWeight: 300,
              maxWidth: "460px",
            }}
          >
            Hannie is here to help you find your perfect hair. Don't hesitate — reach out today!
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <section style={{ backgroundColor: "#FBF5EF", padding: "70px 24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#FFF9F4",
                  border: "1px solid rgba(196,154,108,0.25)",
                  borderRadius: "6px",
                  padding: "36px 30px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 12px rgba(44,26,14,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(44,26,14,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C49A6C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(44,26,14,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,154,108,0.25)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(196,154,108,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {method.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "3px",
                      color: "#C49A6C",
                      fontWeight: 500,
                      margin: "0 0 4px",
                    }}
                  >
                    {method.title.toUpperCase()}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#2C1A0E",
                      margin: "0 0 4px",
                    }}
                  >
                    {method.detail}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "12px",
                      color: "#8B6A4E",
                      margin: "0 0 14px",
                      fontWeight: 300,
                    }}
                  >
                    {method.sub}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "#C49A6C",
                      fontWeight: 600,
                      borderBottom: "1px solid #C49A6C",
                      paddingBottom: "2px",
                    }}
                  >
                    {method.action} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: "70px 24px 90px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "50px",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
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
              ✦ SEND A MESSAGE ✦
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 500,
                color: "#2C1A0E",
                margin: "0 0 32px",
              }}
            >
              We'd love to hear from you
            </h2>

            {submitted ? (
              <div
                style={{
                  backgroundColor: "#F0F7F0",
                  border: "1px solid rgba(44,139,44,0.3)",
                  borderRadius: "6px",
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <CheckCircle2 size={48} color="#2C8B2C" style={{ margin: "0 auto 16px", display: "block" }} />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#2C1A0E",
                    margin: "0 0 10px",
                  }}
                >
                  Message Sent!
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    color: "#5A3F28",
                    margin: "0 0 24px",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  Thank you for reaching out! Hannie will get back to you very soon. For faster responses, please WhatsApp or Snapchat directly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                  }}
                  style={{
                    backgroundColor: "#C49A6C",
                    color: "#2C1A0E",
                    border: "none",
                    padding: "12px 28px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderRadius: "2px",
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="form-row">
                  <div>
                    <label
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        color: "#8B6A4E",
                        fontWeight: 500,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abena Mensah"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid rgba(196,154,108,0.35)",
                        borderRadius: "2px",
                        backgroundColor: "#FFF9F4",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "13px",
                        color: "#2C1A0E",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        color: "#8B6A4E",
                        fontWeight: 500,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0241234567"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid rgba(196,154,108,0.35)",
                        borderRadius: "2px",
                        backgroundColor: "#FFF9F4",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "13px",
                        color: "#2C1A0E",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "#8B6A4E",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(196,154,108,0.35)",
                      borderRadius: "2px",
                      backgroundColor: "#FFF9F4",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      color: "#2C1A0E",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "#8B6A4E",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    WHAT ARE YOU INTERESTED IN? *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(196,154,108,0.35)",
                      borderRadius: "2px",
                      backgroundColor: "#FFF9F4",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      color: formData.subject ? "#2C1A0E" : "#B0A090",
                      outline: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select an option...</option>
                    <option value="bundles">Hair Bundles</option>
                    <option value="closures">Lace Closures</option>
                    <option value="frontals">HD Lace Frontals</option>
                    <option value="wigs">Lace Front Wigs</option>
                    <option value="bundle-deal">Bundle Deals</option>
                    <option value="wholesale">Wholesale / Salon Orders</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "#8B6A4E",
                      fontWeight: 500,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Hannie what you're looking for — texture, length, budget, anything!"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(196,154,108,0.35)",
                      borderRadius: "2px",
                      backgroundColor: "#FFF9F4",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      color: "#2C1A0E",
                      outline: "none",
                      resize: "vertical",
                      lineHeight: "1.7",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#2C1A0E",
                    color: "#FBF5EF",
                    border: "none",
                    padding: "16px 36px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "fit-content",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#C49A6C";
                    (e.currentTarget as HTMLElement).style.color = "#2C1A0E";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#2C1A0E";
                    (e.currentTarget as HTMLElement).style.color = "#FBF5EF";
                  }}
                >
                  SEND MESSAGE <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div>
            <div
              style={{
                backgroundColor: "#2C1A0E",
                borderRadius: "6px",
                padding: "40px 36px",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  color: "#C49A6C",
                  fontWeight: 500,
                  marginBottom: "20px",
                }}
              >
                ✦ QUICK CONTACT ✦
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <Phone size={16} color="#C49A6C" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", margin: "0 0 4px" }}>CALL / SMS</p>
                    <a href="tel:0594274363" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#FBF5EF", textDecoration: "none", fontWeight: 600 }}>0594274363</a>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(196,154,108,0.15)", paddingTop: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <MessageCircle size={16} color="#C49A6C" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", margin: "0 0 4px" }}>WHATSAPP</p>
                    <a href="https://wa.me/233594274363" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#FBF5EF", textDecoration: "none", fontWeight: 600 }}>Chat on WhatsApp</a>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(196,154,108,0.15)", paddingTop: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", marginTop: "1px", flexShrink: 0 }}>👻</span>
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", margin: "0 0 4px" }}>SNAPCHAT</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#FBF5EF", margin: 0, fontWeight: 600 }}>Hannie.xxa</p>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(196,154,108,0.15)", paddingTop: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <Clock size={16} color="#C49A6C" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", color: "#8B6A4E", margin: "0 0 6px" }}>HOURS</p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#C4A882", margin: 0, lineHeight: 1.8, fontWeight: 300 }}>
                      Mon–Sat: 8:00am – 8:00pm<br />
                      Sunday: 10:00am – 5:00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note from Hannie */}
            <div
              style={{
                backgroundColor: "#FFF9F4",
                border: "1px solid rgba(196,154,108,0.3)",
                borderRadius: "6px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#2C1A0E",
                  margin: "0 0 12px",
                  lineHeight: 1.5,
                }}
              >
                "I personally reply to every message. Whether you're buying your first bundle or your fiftieth wig — I'm here for you."
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "14px",
                  color: "#C49A6C",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                — Hannie ✦
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F0E6D8", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
              ✦ FAQ ✦
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 500,
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FFF9F4",
                  border: "1px solid rgba(196,154,108,0.2)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#2C1A0E",
                      margin: 0,
                    }}
                  >
                    {faq.q}
                  </p>
                  <span
                    style={{
                      color: "#C49A6C",
                      fontSize: "20px",
                      flexShrink: 0,
                      transition: "transform 0.3s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "13px",
                        color: "#5A3F28",
                        lineHeight: "1.8",
                        margin: 0,
                        fontWeight: 300,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
