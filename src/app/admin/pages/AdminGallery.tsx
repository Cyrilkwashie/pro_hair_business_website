import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

interface ImageEntry {
  label: string;
  usedIn: string;
  url: string;
}

const SITE_IMAGES: ImageEntry[] = [
  {
    label: "Hero Image",
    usedIn: "Home hero, About hero, Contact hero",
    url: "https://i.pinimg.com/736x/19/8f/28/198f285cad775aae94d7189f3fbdb0ca.jpg",
  },
  {
    label: "Hair Bundles",
    usedIn: "Shop cards (Bundles), Home categories, About section",
    url: "https://i.pinimg.com/1200x/db/8f/33/db8f3366e103dffa05c7550eccb23c2b.jpg",
  },
  {
    label: "Lace Wigs",
    usedIn: "Shop cards (Wigs), Home categories",
    url: "https://i.pinimg.com/1200x/52/5c/45/525c45acee08e35c178e35e31b71356d.jpg",
  },
  {
    label: "Lace Closures",
    usedIn: "Shop cards (Closures), Home categories",
    url: "https://i.pinimg.com/1200x/ad/6b/51/ad6b5133fdebe2bcf48a4cc41cee48c4.jpg",
  },
  {
    label: "Silky Straight / Frontals",
    usedIn: "Shop cards (Frontals & some Wigs), Home best sellers",
    url: "https://i.pinimg.com/1200x/35/07/25/3507257072cb7b2c4ef67e7c517d0568.jpg",
  },
  {
    label: "Wavy / Natural",
    usedIn: "Shop cards (select Wigs), About section",
    url: "https://i.pinimg.com/736x/a9/df/9d/a9df9d8644a28b45d8f38f404fde00f9.jpg",
  },
];

function ImageCard({ entry }: { entry: ImageEntry }) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(entry.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#FBF5EF", borderRadius: "8px",
        border: "1px solid rgba(196,154,108,0.15)",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(44,26,14,0.05)",
      }}
    >
      {/* Image preview */}
      <div style={{ height: "180px", backgroundColor: "#F0E6D8", overflow: "hidden" }}>
        {!imgError ? (
          <img
            src={entry.url}
            alt={entry.label}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#B09070" }}>Preview unavailable</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "16px" }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 700, color: "#2C1A0E", margin: "0 0 4px" }}>
          {entry.label}
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#8B6A4E", fontWeight: 300, margin: "0 0 12px", lineHeight: 1.5 }}>
          Used in: {entry.usedIn}
        </p>

        {/* URL */}
        <div
          style={{
            backgroundColor: "#F0E6D8", borderRadius: "4px",
            padding: "8px 10px", marginBottom: "10px",
            display: "flex", alignItems: "center", gap: "6px",
          }}
        >
          <span
            style={{
              flex: 1, fontFamily: "monospace", fontSize: "10px",
              color: "#5A3E2B", overflow: "hidden", textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {entry.url}
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={copy}
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              gap: "6px", padding: "8px", border: "1.5px solid rgba(196,154,108,0.4)",
              backgroundColor: copied ? "#4A7C59" : "transparent",
              color: copied ? "#fff" : "#5A3E2B",
              borderRadius: "4px", cursor: "pointer",
              fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1.5px", fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            {copied ? <><Check size={12} /> COPIED</> : <><Copy size={12} /> COPY URL</>}
          </button>
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "8px 10px", border: "1.5px solid rgba(196,154,108,0.4)",
              backgroundColor: "transparent", textDecoration: "none",
              color: "#5A3E2B", borderRadius: "4px",
            }}
          >
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function AdminGallery() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#2C1A0E", margin: "0 0 4px" }}>
          Gallery
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>
          All site images and where they appear.
        </p>
      </div>

      {/* How-to note */}
      <div
        style={{
          backgroundColor: "#FFF8F0", border: "1px solid rgba(196,154,108,0.4)",
          borderRadius: "6px", padding: "14px 18px", marginBottom: "28px",
        }}
      >
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#5A3E2B", margin: "0 0 6px", fontWeight: 700, letterSpacing: "1px" }}>
          HOW TO CHANGE AN IMAGE
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#5A3E2B", margin: 0, lineHeight: 1.7, fontWeight: 300 }}>
          To swap a site image: copy the URL of your new image (any Pinterest CDN or direct image URL), then update the corresponding product's image in the <strong>Products</strong> tab. For hero / about / contact images, paste the new URL in the relevant code file and redeploy.
        </p>
      </div>

      {/* Image Grid */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
        className="gallery-grid"
      >
        {SITE_IMAGES.map((entry) => (
          <ImageCard key={entry.label} entry={entry} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
