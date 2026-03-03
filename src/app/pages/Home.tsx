import { Link } from "react-router";
import { useState } from "react";
import { ArrowRight, Star, CheckCircle2, ChevronDown } from "lucide-react";

// ── Four core images used across the entire page ──
const bundlesImg     = "https://i.pinimg.com/736x/15/98/b1/1598b1d31a677f739bd602c7efb998c8.jpg";
const wigImg         = "https://i.pinimg.com/1200x/be/c9/61/bec96148f1d39e0f0b5755d21cbf4fbc.jpg";
const closureImg     = "https://i.pinimg.com/736x/a2/bf/f6/a2bff6525871d72122c38faf7038b9eb.jpg";
const frontalImg     = "https://i.pinimg.com/736x/02/21/93/0221935d9f358deef46fe3dc2fdd0a36.jpg";

const heroImg        = "https://i.pinimg.com/736x/19/8f/28/198f285cad775aae94d7189f3fbdb0ca.jpg";
const aboutImg       = bundlesImg;
const wavyImg        = wigImg;
const curlyImg       = closureImg;
const silkyImg       = frontalImg;
const braidedImg     = frontalImg;
const afroImg        = closureImg;
const catBundlesImg  = bundlesImg;
const catWigsImg     = wigImg;
const catClosuresImg = closureImg;
const catFrontalsImg = frontalImg;

const categories = [
  { name: "Hair Bundles", img: catBundlesImg, desc: "Brazilian, Peruvian & more" },
  { name: "Lace Wigs", img: catWigsImg, desc: "HD & transparent lace" },
  { name: "Closures", img: catClosuresImg, desc: "4x4 & 5x5 HD Lace" },
  { name: "Frontals", img: catFrontalsImg, desc: "13x4 & 13x6 options" },
];

const bestSellers = [
  {
    id: 1,
    name: "Brazilian Body Wave Bundle",
    price: "GH₵ 480",
    originalPrice: "GH₵ 560",
    img: bundlesImg,
    badge: "Best Seller",
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    name: "Silky Straight Bundle",
    price: "GH₵ 460",
    originalPrice: null,
    img: silkyImg,
    badge: "New",
    rating: 5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Deep Wave Lace Front Wig",
    price: "GH₵ 1,250",
    originalPrice: "GH₵ 1,400",
    img: wigImg,
    badge: "Sale",
    rating: 5,
    reviews: 67,
  },
  {
    id: 4,
    name: "Curly HD Lace Closure 4x4",
    price: "GH₵ 420",
    originalPrice: null,
    img: curlyImg,
    badge: null,
    rating: 4,
    reviews: 43,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Abena K.",
    text: "I've been buying from Hannie Luxe for over a year now. The quality is absolutely unmatched! My bundles last so long and the lace closures are chef's kiss.",
    rating: 5,
    product: "Brazilian Body Wave",
  },
  {
    id: 2,
    name: "Efua M.",
    text: "Fast delivery and the hair is exactly as described. Soft, full, and so beautiful. Hannie is always so helpful with choosing the right texture!",
    rating: 5,
    product: "HD Lace Front Wig",
  },
  {
    id: 3,
    name: "Akosua D.",
    text: "I was skeptical at first but this hair is PREMIUM. Zero shedding, zero tangling. Already placed my second order. Highly recommend Hannie Luxe!",
    rating: 5,
    product: "Peruvian Straight Bundle",
  },
];

const features = [
  { icon: "✦", title: "100% Virgin Hair", desc: "Ethically sourced, unprocessed raw hair that lasts for years" },
  { icon: "✦", title: "Premium HD Lace", desc: "Invisible knots that blend perfectly into any skin tone" },
  { icon: "✦", title: "Fast Delivery", desc: "Quick turnaround with careful packaging every order" },
  { icon: "✦", title: "Expert Guidance", desc: "Hannie personally helps you choose the perfect hair" },
];

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "680px",
          overflow: "hidden",
        }}
      >
        <img
          src={heroImg}
          alt="Hannie Luxe Hair"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(44,26,14,0.78) 0%, rgba(44,26,14,0.25) 60%, rgba(44,26,14,0.05) 100%)",
          }}
        />

        {/* Hero Content */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 40px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "5px",
                color: "#C49A6C",
                fontWeight: 500,
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              ✦ Welcome to Hannie Luxe Hair ✦
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontWeight: 300,
                color: "#FBF5EF",
                lineHeight: "1.08",
                margin: "0 0 12px",
                letterSpacing: "1px",
              }}
            >
              Elevate
            </h1>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#C49A6C",
                lineHeight: "1.08",
                margin: "0 0 28px",
                letterSpacing: "1px",
              }}
            >
              Your Crown
            </h1>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "15px",
                color: "#E8D5C0",
                lineHeight: "1.8",
                marginBottom: "40px",
                fontWeight: 300,
                maxWidth: "420px",
              }}
            >
              Premium virgin hair bundles, HD lace closures, frontals, and wigs. Curated by Hannie — for queens who deserve only the best.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                to="/shop"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#C49A6C",
                  color: "#2C1A0E",
                  padding: "16px 36px",
                  textDecoration: "none",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#B8935A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#C49A6C";
                }}
              >
                Shop Now <ArrowRight size={14} />
              </Link>
              <Link
                to="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "transparent",
                  color: "#FBF5EF",
                  padding: "16px 36px",
                  textDecoration: "none",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(251,245,239,0.5)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C49A6C";
                  (e.currentTarget as HTMLElement).style.color = "#C49A6C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(251,245,239,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#FBF5EF";
                }}
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{ display: "flex", gap: "40px", marginTop: "60px" }}>
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "100%", label: "Virgin Hair" },
                { value: "5★", label: "Rated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "28px",
                      fontWeight: 600,
                      color: "#C49A6C",
                      margin: 0,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "#E8D5C0",
                      margin: "2px 0 0",
                      fontWeight: 400,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            animation: "bounce 2s infinite",
          }}
        >
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "3px", color: "#E8D5C0" }}>SCROLL</p>
          <ChevronDown size={16} color="#C49A6C" />
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ backgroundColor: "#FBF5EF", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Section Header */}
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
              ✦ EXPLORE ✦
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 500,
                color: "#2C1A0E",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Shop by Collection
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/shop"
                style={{
                  position: "relative",
                  display: "block",
                  aspectRatio: "3/4",
                  borderRadius: "4px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(44,26,14,0.1)",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(44,26,14,0.85) 0%, rgba(44,26,14,0.1) 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 24px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "#FBF5EF",
                      margin: "0 0 4px",
                    }}
                  >
                    {cat.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      color: "#C49A6C",
                      margin: 0,
                      letterSpacing: "1.5px",
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED BANNER ── */}
      <section
        style={{
          backgroundColor: "#2C1A0E",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#E8D5C0",
              margin: "0 0 10px",
              lineHeight: 1.3,
            }}
          >
            "Every queen deserves a crown
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#C49A6C",
              margin: "0 0 28px",
              lineHeight: 1.3,
            }}
          >
            that's worth wearing."
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#8B6A4E",
              fontWeight: 400,
            }}
          >
            — HANNIE LUXE HAIR
          </p>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section style={{ backgroundColor: "#FBF5EF", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "50px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "5px",
                  color: "#C49A6C",
                  fontWeight: 500,
                  marginBottom: "12px",
                }}
              >
                ✦ FEATURED ✦
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
                Best Sellers
              </h2>
            </div>
            <Link
              to="/shop"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "2.5px",
                color: "#C49A6C",
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: "1px solid #C49A6C",
                paddingBottom: "2px",
              }}
            >
              VIEW ALL <ArrowRight size={12} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "24px",
            }}
          >
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES / WHY US ── */}
      <section style={{ backgroundColor: "#F0E6D8", padding: "90px 24px" }}>
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
              ✦ THE HANNIE DIFFERENCE ✦
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
              Why Choose Hannie Luxe?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
            }}
          >
            {features.map((feat) => (
              <div
                key={feat.title}
                style={{
                  backgroundColor: "#FBF5EF",
                  padding: "36px 30px",
                  borderRadius: "4px",
                  textAlign: "center",
                  boxShadow: "0 2px 16px rgba(44,26,14,0.06)",
                  border: "1px solid rgba(196,154,108,0.2)",
                }}
              >
                <p
                  style={{
                    color: "#C49A6C",
                    fontSize: "24px",
                    marginBottom: "16px",
                  }}
                >
                  {feat.icon}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#2C1A0E",
                    margin: "0 0 12px",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    color: "#7A5C3C",
                    lineHeight: "1.8",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT ABOUT SECTION ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "560px",
        }}
        className="about-split"
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={aboutImg}
            alt="About Hannie Luxe"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              minHeight: "460px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(196,154,108,0.15)",
            }}
          />
        </div>
        <div
          className="about-split-text"
          style={{
            backgroundColor: "#2C1A0E",
            padding: "70px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
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
            ✦ ABOUT US ✦
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 3vw, 44px)",
              fontWeight: 500,
              color: "#FBF5EF",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            More than hair —{" "}
            <span style={{ fontStyle: "italic", color: "#C49A6C" }}>it's a feeling</span>
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "#C4A882",
              lineHeight: "1.9",
              marginBottom: "16px",
              fontWeight: 300,
            }}
          >
            Hi, I'm Hannie — and I started this hair boutique because I believe every woman deserves to feel confident, beautiful, and powerful.
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "#C4A882",
              lineHeight: "1.9",
              marginBottom: "36px",
              fontWeight: 300,
            }}
          >
            From sourcing only the finest virgin hair to personally assisting every client, Hannie Luxe is built on quality, trust, and love.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
            {["Zero shedding, zero tangling guarantee", "Personally curated hair collections", "1-on-1 styling consultation with Hannie"].map(
              (item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={16} color="#C49A6C" />
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      color: "#E8D5C0",
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
          <Link
            to="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#C49A6C",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "3px",
              fontWeight: 600,
              borderBottom: "1px solid #C49A6C",
              paddingBottom: "4px",
              width: "fit-content",
            }}
          >
            OUR STORY <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: "#FBF5EF", padding: "90px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
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
            ✦ REVIEWS ✦
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 50px)",
              fontWeight: 500,
              color: "#2C1A0E",
              margin: "0 0 60px",
            }}
          >
            What Our Queens Say
          </h2>

          {/* Active testimonial */}
          <div
            className="testimonial-card"
            style={{
              backgroundColor: "#FFF9F4",
              border: "1px solid rgba(196,154,108,0.25)",
              borderRadius: "8px",
              padding: "50px 50px 40px",
              marginBottom: "30px",
              minHeight: "200px",
              boxShadow: "0 4px 30px rgba(196,154,108,0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "24px" }}>
              {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                <Star key={i} size={16} fill="#C49A6C" color="#C49A6C" />
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#2C1A0E",
                lineHeight: "1.7",
                margin: "0 0 28px",
              }}
            >
              "{testimonials[activeTestimonial].text}"
            </p>
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2C1A0E",
                  margin: "0 0 4px",
                  letterSpacing: "1px",
                }}
              >
                {testimonials[activeTestimonial].name}
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  color: "#C49A6C",
                  margin: 0,
                  letterSpacing: "2px",
                }}
              >
                {testimonials[activeTestimonial].product}
              </p>
            </div>
          </div>

          {/* Testimonial nav */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? "32px" : "10px",
                  height: "10px",
                  borderRadius: i === activeTestimonial ? "5px" : "50%",
                  backgroundColor: i === activeTestimonial ? "#C49A6C" : "#E0CAAC",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ROW ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          height: "340px",
        }}
        className="gallery-grid"
      >
        {[wavyImg, silkyImg, braidedImg, curlyImg].map((img, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(196,154,108,0)",
                transition: "background-color 0.4s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(44,26,14,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,154,108,0)";
              }}
            />
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#C49A6C",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            letterSpacing: "5px",
            color: "#2C1A0E",
            fontWeight: 500,
            marginBottom: "16px",
            opacity: 0.7,
          }}
        >
          ✦ READY TO SLAY? ✦
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 500,
            color: "#2C1A0E",
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}
        >
          Your Dream Hair Awaits
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            color: "#2C1A0E",
            opacity: 0.75,
            marginBottom: "36px",
            fontWeight: 300,
          }}
        >
          DM Hannie on Snapchat @Hannie.xxa or call 0594274363 to order today
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#2C1A0E",
              color: "#FBF5EF",
              padding: "16px 40px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              borderRadius: "2px",
              transition: "opacity 0.3s",
            }}
          >
            Shop Now <ArrowRight size={14} />
          </Link>
          <a
            href="https://wa.me/233594274363"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "transparent",
              color: "#2C1A0E",
              padding: "16px 40px",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              border: "1px solid rgba(44,26,14,0.5)",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .about-split { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; height: 420px !important; }
          .about-split-text { padding: 50px 30px !important; }
        }
        @media (max-width: 640px) {
          .hero-content { padding-left: 20px !important; padding-right: 20px !important; }
          .hero-stats { gap: 20px !important; margin-top: 40px !important; }
          .testimonial-card { padding: 30px 20px 28px !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; height: 360px !important; }
          .hero-stats { flex-wrap: wrap; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}

function ProductCard({ product }: { product: typeof bestSellers[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#FFF9F4",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: hovered ? "0 12px 40px rgba(44,26,14,0.15)" : "0 2px 16px rgba(44,26,14,0.06)",
        transition: "box-shadow 0.3s ease",
        border: "1px solid rgba(196,154,108,0.15)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
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

        {/* Quick Order Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#2C1A0E",
            padding: "14px",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.3s ease",
            textAlign: "center",
          }}
        >
          <a
            href="https://wa.me/233594274363"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "2.5px",
              color: "#C49A6C",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ORDER VIA WHATSAPP
          </a>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px 20px 22px" }}>
        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
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
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              color: "#8B6A4E",
            }}
          >
            ({product.reviews})
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "17px",
            fontWeight: 600,
            color: "#2C1A0E",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#C49A6C",
            }}
          >
            {product.price}
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
    </div>
  );
}
