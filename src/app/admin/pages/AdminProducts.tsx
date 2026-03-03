import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Check, RefreshCw } from "lucide-react";
import {
  getProducts, saveProducts, deleteProduct,
  updateProduct, addProduct, nextId, resetProducts,
} from "../../data/productsStore";
import { BUNDLE_SIZES, CLOSURE_SIZES, FRONTAL_SIZES, WIG_SIZES, HAIR_COLORS } from "../../data/products";
import type { Product } from "../../data/products";

const CATEGORIES = ["Bundles", "Closures", "Frontals", "Wigs"];
const BADGES = [{ label: "None", value: "" }, { label: "Best Seller", value: "Best Seller" }, { label: "New", value: "New" }, { label: "Sale", value: "Sale" }];

const CATEGORY_SIZES: Record<string, string[]> = {
  Bundles:  BUNDLE_SIZES,
  Closures: CLOSURE_SIZES,
  Frontals: FRONTAL_SIZES,
  Wigs:     WIG_SIZES,
};

const EMPTY_PRODUCT: Partial<Product> = {
  name: "", category: "Bundles", price: 0,
  originalPrice: null, img: "", badge: null,
  rating: 5, reviews: 0, description: "",
  sizes: [], colors: [], details: [],
};

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="admin-modal-overlay" style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.55)" }}>
      <div className="admin-modal-card" style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", width: "100%", maxWidth: "660px", maxHeight: "90vh", overflow: "auto", boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(196,154,108,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, backgroundColor: "#FBF5EF", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#2C1A0E", margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#8B6A4E", display: "flex" }}><X size={20} /></button>
        </div>
        <div style={{ padding: "24px" }}>{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "2px", fontWeight: 600, color: "#5A3E2B", marginBottom: "7px" }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", border: "1.5px solid rgba(196,154,108,0.3)",
  borderRadius: "4px", fontFamily: "'Jost', sans-serif", fontSize: "13px",
  color: "#2C1A0E", backgroundColor: "#fff", outline: "none", boxSizing: "border-box",
};

export function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(getProducts);
  const [filterCat, setFilterCat] = useState("All");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editing, setEditing] = useState<Partial<Product>>(EMPTY_PRODUCT);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const update = () => setProducts(getProducts());
    window.addEventListener("hannie-products-updated", update);
    return () => window.removeEventListener("hannie-products-updated", update);
  }, []);

  const filtered = products
    .filter((p) => filterCat === "All" || p.category === filterCat)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditing({ ...EMPTY_PRODUCT, id: nextId() }); setModal("add"); };
  const openEdit = (p: Product) => { setEditing({ ...p }); setModal("edit"); };
  const closeModal = () => { setModal(null); setEditing(EMPTY_PRODUCT); };

  const handleSave = () => {
    if (!editing.name || !editing.price) return;
    const product: Product = {
      ...editing,
      id: editing.id ?? nextId(),
      displayPrice: `GH₵ ${Number(editing.price).toLocaleString()}`,
      originalPrice: editing.originalPrice || null,
      badge: editing.badge || null,
      sizes: editing.sizes ?? CATEGORY_SIZES[editing.category ?? "Bundles"],
      colors: editing.colors ?? HAIR_COLORS,
      details: editing.details ?? [],
    } as Product;
    if (modal === "add") addProduct(product);
    else updateProduct(product);
    setSaved(true);
    setTimeout(() => { setSaved(false); closeModal(); }, 700);
  };

  const confirmDelete = () => {
    if (deleteId !== null) { deleteProduct(deleteId); setDeleteId(null); }
  };

  const toggleSize = (size: string) => {
    const sizes = editing.sizes ?? [];
    setEditing({ ...editing, sizes: sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size] });
  };

  const toggleColor = (colorName: string) => {
    const colors = editing.colors ?? [];
    const has = colors.some((c) => c.name === colorName);
    const allColor = HAIR_COLORS.find((c) => c.name === colorName)!;
    setEditing({ ...editing, colors: has ? colors.filter((c) => c.name !== colorName) : [...colors, allColor] });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#2C1A0E", margin: "0 0 4px" }}>Products</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#8B6A4E", margin: 0, fontWeight: 300 }}>{products.length} products total</p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => { if (window.confirm("Reset all products to defaults?")) resetProducts(); }}
            style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 16px", border: "1.5px solid rgba(196,154,108,0.4)", backgroundColor: "transparent", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "1px", color: "#8B6A4E" }}
          >
            <RefreshCw size={13} /> Reset
          </button>
          <button
            onClick={openAdd}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", backgroundColor: "#2C1A0E", color: "#FBF5EF", border: "none", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", fontWeight: 600 }}
          >
            <Plus size={14} /> ADD PRODUCT
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-filters-bar" style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="admin-search-input" style={{ ...inputStyle, padding: "9px 14px" }}
        />
        <div className="admin-filter-cats" style={{ display: "flex", gap: "6px" }}>
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              style={{
                padding: "9px 16px", border: "1.5px solid",
                borderColor: filterCat === cat ? "#2C1A0E" : "rgba(196,154,108,0.3)",
                backgroundColor: filterCat === cat ? "#2C1A0E" : "transparent",
                color: filterCat === cat ? "#FBF5EF" : "#5A3E2B",
                borderRadius: "4px", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "1.5px", fontWeight: 600,
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: "#FBF5EF", borderRadius: "8px", border: "1px solid rgba(196,154,108,0.15)", overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Jost', sans-serif" }}>
            <thead>
              <tr style={{ backgroundColor: "#F0E6D8" }}>
                {["Image", "Name", "Category", "Price", "Badge", "Rating", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "9px", letterSpacing: "2px", fontWeight: 700, color: "#5A3E2B", whiteSpace: "nowrap" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((product, i) => (
                <tr key={product.id} style={{ borderBottom: "1px solid rgba(196,154,108,0.1)", backgroundColor: i % 2 === 0 ? "#FBF5EF" : "rgba(240,230,216,0.3)" }}>
                  <td style={{ padding: "12px 16px" }}>
                    <img src={product.img} alt={product.name} style={{ width: "44px", height: "56px", objectFit: "cover", borderRadius: "2px" }} />
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: "13px", fontWeight: 600, color: "#2C1A0E", maxWidth: "200px" }}>
                    {product.name}
                    <p style={{ fontSize: "11px", color: "#8B6A4E", margin: "3px 0 0", fontWeight: 300 }}>{product.description?.slice(0, 50)}…</p>
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: "11px", color: "#5A3E2B", whiteSpace: "nowrap" }}>{product.category}</td>
                  <td style={{ padding: "12px 16px", fontSize: "13px", fontWeight: 600, color: "#2C1A0E", whiteSpace: "nowrap" }}>
                    {product.displayPrice}
                    {product.originalPrice && <span style={{ display: "block", fontSize: "11px", color: "#B09070", textDecoration: "line-through", fontWeight: 400 }}>{product.originalPrice}</span>}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    {product.badge ? (
                      <span style={{ padding: "3px 10px", borderRadius: "20px", backgroundColor: product.badge === "Sale" ? "#F8D7DA" : product.badge === "New" ? "#D4EDDA" : "#FFF3CD", color: product.badge === "Sale" ? "#721C24" : product.badge === "New" ? "#155724" : "#856404", fontSize: "9px", letterSpacing: "1px", fontWeight: 600 }}>
                        {product.badge.toUpperCase()}
                      </span>
                    ) : <span style={{ color: "#B09070", fontSize: "11px" }}>—</span>}
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: "12px", color: "#5A3E2B" }}>
                    {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} ({product.reviews})
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button onClick={() => openEdit(product)} style={{ background: "none", border: "1.5px solid rgba(196,154,108,0.4)", borderRadius: "4px", padding: "6px 8px", cursor: "pointer", color: "#5A3E2B", display: "flex" }}><Edit2 size={13} /></button>
                      <button onClick={() => setDeleteId(product.id)} style={{ background: "none", border: "1.5px solid rgba(200,80,80,0.3)", borderRadius: "4px", padding: "6px 8px", cursor: "pointer", color: "#C05050", display: "flex" }}><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ padding: "40px", textAlign: "center", color: "#B09070", fontSize: "13px", fontFamily: "'Jost', sans-serif" }}>No products found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <Modal title={modal === "add" ? "Add New Product" : "Edit Product"} onClose={closeModal}>
          <div className="admin-form-grid" style={{ display: "grid", gap: "0 20px" }}>
            <Field label="PRODUCT NAME">
              <input style={inputStyle} value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="e.g. Brazilian Body Wave Bundle" />
            </Field>
            <Field label="CATEGORY">
              <select style={inputStyle} value={editing.category ?? "Bundles"} onChange={(e) => setEditing({ ...editing, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="PRICE (GH₵)">
              <input style={inputStyle} type="number" value={editing.price ?? ""} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} placeholder="480" />
            </Field>
            <Field label="ORIGINAL PRICE (optional)">
              <input style={inputStyle} value={editing.originalPrice ?? ""} onChange={(e) => setEditing({ ...editing, originalPrice: e.target.value || null })} placeholder="GH₵ 560" />
            </Field>
            <Field label="BADGE">
              <select style={inputStyle} value={editing.badge ?? ""} onChange={(e) => setEditing({ ...editing, badge: e.target.value || null })}>
                {BADGES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
            </Field>
            <Field label="RATING (1–5)">
              <input style={inputStyle} type="number" min={1} max={5} value={editing.rating ?? 5} onChange={(e) => setEditing({ ...editing, rating: Number(e.target.value) })} />
            </Field>
            <Field label="REVIEW COUNT">
              <input style={inputStyle} type="number" value={editing.reviews ?? 0} onChange={(e) => setEditing({ ...editing, reviews: Number(e.target.value) })} />
            </Field>
            <Field label="IMAGE URL">
              <input style={inputStyle} value={editing.img ?? ""} onChange={(e) => setEditing({ ...editing, img: e.target.value })} placeholder="https://i.pinimg.com/..." />
            </Field>
          </div>
          <Field label="DESCRIPTION">
            <textarea style={{ ...inputStyle, minHeight: "70px", resize: "vertical" }} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} placeholder="Short product description…" />
          </Field>
          <Field label="PRODUCT DETAILS (one per line)">
            <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }} value={(editing.details ?? []).join("\n")} onChange={(e) => setEditing({ ...editing, details: e.target.value.split("\n").filter(Boolean) })} placeholder="100% virgin human hair&#10;No shedding or tangling&#10;Can be dyed and bleached" />
          </Field>
          <Field label={`AVAILABLE LENGTHS (${editing.category})`}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {(CATEGORY_SIZES[editing.category ?? "Bundles"] ?? BUNDLE_SIZES).map((size) => {
                const active = (editing.sizes ?? []).includes(size);
                return (
                  <button key={size} onClick={() => toggleSize(size)} style={{ padding: "5px 12px", border: `1.5px solid ${active ? "#2C1A0E" : "rgba(196,154,108,0.3)"}`, backgroundColor: active ? "#2C1A0E" : "transparent", color: active ? "#FBF5EF" : "#5A3E2B", borderRadius: "3px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px" }}>
                    {size}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label="AVAILABLE COLOURS">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {HAIR_COLORS.map((color) => {
                const active = (editing.colors ?? []).some((c) => c.name === color.name);
                return (
                  <button key={color.name} title={color.name} onClick={() => toggleColor(color.name)} style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: color.hex, border: active ? "3px solid #C49A6C" : "2px solid rgba(196,154,108,0.3)", cursor: "pointer", outline: active ? "2px solid #2C1A0E" : "none", outlineOffset: "2px" }} />
                );
              })}
            </div>
          </Field>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
            <button onClick={closeModal} style={{ padding: "11px 24px", border: "1.5px solid rgba(196,154,108,0.4)", backgroundColor: "transparent", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "1.5px", color: "#5A3E2B" }}>CANCEL</button>
            <button onClick={handleSave} style={{ padding: "11px 28px", backgroundColor: saved ? "#4A7C59" : "#2C1A0E", color: "#FBF5EF", border: "none", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
              {saved ? <><Check size={13} /> SAVED</> : "SAVE PRODUCT"}
            </button>
          </div>
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteId !== null && (
        <Modal title="Delete Product?" onClose={() => setDeleteId(null)}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "#5A3E2B", lineHeight: 1.7, marginBottom: "24px" }}>
            Are you sure you want to delete <strong>{products.find((p) => p.id === deleteId)?.name}</strong>? This cannot be undone.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button onClick={() => setDeleteId(null)} style={{ padding: "11px 24px", border: "1.5px solid rgba(196,154,108,0.4)", backgroundColor: "transparent", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "1.5px", color: "#5A3E2B" }}>CANCEL</button>
            <button onClick={confirmDelete} style={{ padding: "11px 28px", backgroundColor: "#C05050", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", fontWeight: 600 }}>DELETE</button>
          </div>
        </Modal>
      )}

      <style>{`
        .admin-modal-overlay { align-items: center; padding: 20px; }
        .admin-form-grid { grid-template-columns: 1fr 1fr; }
        .admin-search-input { max-width: 260px; }

        @media (max-width: 640px) {
          .admin-modal-overlay { padding: 8px; align-items: flex-end; }
          .admin-modal-card { max-height: 94vh; border-radius: 12px 12px 0 0; }
          .admin-form-grid { grid-template-columns: 1fr; }
          .admin-filters-bar { flex-direction: column; }
          .admin-search-input { max-width: 100%; width: 100%; }
          .admin-filter-cats { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; width: 100%; }
          .admin-filter-cats::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
}
