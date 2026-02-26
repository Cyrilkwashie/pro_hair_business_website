import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const aboutHeroImg = "https://i.pinimg.com/736x/19/8f/28/198f285cad775aae94d7189f3fbdb0ca.jpg";
const salonImg = "https://i.pinimg.com/1200x/db/8f/33/db8f3366e103dffa05c7550eccb23c2b.jpg";
const silkyImg = "https://i.pinimg.com/1200x/35/07/25/3507257072cb7b2c4ef67e7c517d0568.jpg";
const afroImg  = "https://i.pinimg.com/736x/a9/df/9d/a9df9d8644a28b45d8f38f404fde00f9.jpg";

const values = [
  {
    icon: "👑",
    title: "Quality First",
    desc: "Every single bundle, closure, and wig is hand-inspected by Hannie before it reaches you. No compromises.",
  },
  {
    icon: "✨",
    title: "Client Love",
    desc: "Our relationship doesn't end at checkout. Hannie personally guides every client to their perfect hair.",
  },
  {
    icon: "🌿",
    title: "Ethically Sourced",
    desc: "Our virgin hair is sourced responsibly, ensuring the highest quality and ethical standards in every strand.",
  },
  {
    icon: "💫",
    title: "Luxury Experience",
    desc: "From browsing to unboxing, every interaction with Hannie Luxe is designed to feel premium and personal.",
  },
];

const milestones = [
  { year: "2019", event: "Hannie Luxe was founded with a single dream: make every woman feel like royalty." },
  { year: "2020", event: "Launched our signature Brazilian body wave collection. Sold out in 48 hours." },
  { year: "2022", event: "Expanded into HD lace wigs and frontals. Crossed 200 satisfied customers." },
  { year: "2024", event: "Became one of Ghana's most loved premium hair boutiques with 500+ loyal clients." },
  { year: "2026", event: "Launched hannieluxe.com — bringing the luxury hair experience to you, wherever you are." },
];

export function About() {
  return (
    <div style={{ backgroundColor: "#FBF5EF" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "500px",
          overflow: "hidden",
        }}
      >
        <img
          src={aboutHeroImg}
          alt="About Hannie Luxe"
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
            background: "linear-gradient(to bottom, rgba(44,26,14,0.7) 0%, rgba(44,26,14,0.4) 100%)",
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
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "5px",
              color: "#C49A6C",
              fontWeight: 500,
              marginBottom: "18px",
            }}
          >
            ✦ THE STORY ✦
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(44px, 7vw, 82px)",
              fontWeight: 500,
              color: "#FBF5EF",
              margin: "0 0 12px",
              lineHeight: 1.1,
            }}
          >
            About{" "}
            <span style={{ fontStyle: "italic", color: "#C49A6C" }}>Hannie</span>
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              color: "#E8D5C0",
              fontWeight: 300,
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            The woman behind the hair. The passion behind the brand.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: "560px",
        }}
        className="about-grid"
      >
        <div
          style={{
            padding: "80px 70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FBF5EF",
          }}
          className="about-text-pad"
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "5px",
              color: "#C49A6C",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            ✦ WHO I AM ✦
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 500,
              color: "#2C1A0E",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            Hi, I'm Hannah —{" "}
            <br />
            <span style={{ fontStyle: "italic", color: "#C49A6C" }}>but you can call me Hannie.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "#5A3F28",
              lineHeight: "1.95",
              marginBottom: "20px",
              fontWeight: 300,
            }}
          >
            I started Hannie Luxe because I was tired of seeing women settle for mediocre hair. I believe that the right hair can transform how you carry yourself — your confidence, your presence, your power.
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "#5A3F28",
              lineHeight: "1.95",
              marginBottom: "32px",
              fontWeight: 300,
            }}
          >
            Every product I sell is something I've personally tested and approved. Because if I wouldn't put it on my own head, it's not going on yours. That's the Hannie Luxe promise.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Personal consultation with every purchase",
              "7-day quality guarantee on all products",
              "Custom bundle deals & special orders welcomed",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={16} color="#C49A6C" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    color: "#2C1A0E",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "480px" }}>
          <img
            src={salonImg}
            alt="Hannie Luxe Studio"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(196,154,108,0.1)",
            }}
          />
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#2C1A0E", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              ✦ WHAT WE STAND FOR ✦
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 500,
                color: "#FBF5EF",
                margin: 0,
              }}
            >
              Our Core Values
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  border: "1px solid rgba(196,154,108,0.25)",
                  borderRadius: "4px",
                  padding: "40px 30px",
                  textAlign: "center",
                  backgroundColor: "rgba(196,154,108,0.04)",
                }}
              >
                <p style={{ fontSize: "36px", margin: "0 0 18px" }}>{v.icon}</p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#FBF5EF",
                    margin: "0 0 14px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    color: "#C4A882",
                    lineHeight: "1.8",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: "#F0E6D8", padding: "90px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              ✦ OUR JOURNEY ✦
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 500,
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              The Hannie Luxe Story
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Line */}
            <div
              style={{
                position: "absolute",
                left: "80px",
                top: 0,
                bottom: 0,
                width: "1px",
                backgroundColor: "rgba(196,154,108,0.4)",
              }}
            />

            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: "flex",
                  gap: "30px",
                  marginBottom: "44px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: "80px", flexShrink: 0, textAlign: "right", position: "relative" }}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#C49A6C",
                    }}
                  >
                    {m.year}
                  </span>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      right: "-19px",
                      top: "6px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#C49A6C",
                      border: "2px solid #F0E6D8",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    paddingLeft: "20px",
                    paddingTop: "2px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "14px",
                      color: "#3D2314",
                      lineHeight: "1.7",
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second image section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: "460px",
        }}
        className="about-grid"
      >
        <div style={{ overflow: "hidden" }}>
          <img
            src={silkyImg}
            alt="Hair collection"
            style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px" }}
          />
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            src={afroImg}
            alt="Natural hair"
            style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px" }}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ backgroundColor: "#C49A6C", padding: "80px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(26px, 4vw, 46px)",
            fontWeight: 500,
            color: "#2C1A0E",
            margin: "0 0 14px",
          }}
        >
          Ready to elevate your crown?
        </p>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            color: "#2C1A0E",
            opacity: 0.75,
            marginBottom: "32px",
            fontWeight: 300,
          }}
        >
          Reach Hannie directly on Snapchat @Hannie.xxa or WhatsApp — she'd love to help you find your perfect hair.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2C1A0E",
              color: "#FBF5EF",
              padding: "15px 36px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              borderRadius: "2px",
            }}
          >
            SHOP NOW <ArrowRight size={13} />
          </Link>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "#2C1A0E",
              padding: "15px 36px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              border: "1px solid rgba(44,26,14,0.4)",
              borderRadius: "2px",
            }}
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-text-pad { padding: 50px 30px !important; }
        }
      `}</style>
    </div>
  );
}
