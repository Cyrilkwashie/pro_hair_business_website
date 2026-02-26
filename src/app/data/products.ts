const bundlesImg = "https://i.pinimg.com/1200x/db/8f/33/db8f3366e103dffa05c7550eccb23c2b.jpg";
const wigImg     = "https://i.pinimg.com/1200x/52/5c/45/525c45acee08e35c178e35e31b71356d.jpg";
const curlyImg   = "https://i.pinimg.com/1200x/ad/6b/51/ad6b5133fdebe2bcf48a4cc41cee48c4.jpg";
const silkyImg   = "https://i.pinimg.com/1200x/35/07/25/3507257072cb7b2c4ef67e7c517d0568.jpg";
const wavyImg    = "https://i.pinimg.com/736x/a9/df/9d/a9df9d8644a28b45d8f38f404fde00f9.jpg";
const braidedImg = "https://i.pinimg.com/1200x/db/8f/33/db8f3366e103dffa05c7550eccb23c2b.jpg";
const afroImg    = "https://i.pinimg.com/1200x/ad/6b/51/ad6b5133fdebe2bcf48a4cc41cee48c4.jpg";
const salonImg   = "https://i.pinimg.com/1200x/52/5c/45/525c45acee08e35c178e35e31b71356d.jpg";

export const BUNDLE_SIZES  = ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"', '26"', '28"', '30"'];
export const CLOSURE_SIZES = ['10"', '12"', '14"', '16"', '18"'];
export const FRONTAL_SIZES = ['10"', '12"', '14"', '16"', '18"', '20"'];
export const WIG_SIZES     = ['10"', '12"', '14"', '16"', '18"', '20"', '22"', '24"'];

export const HAIR_COLORS = [
  { name: "Natural Black", hex: "#1a1a1a" },
  { name: "Off Black",     hex: "#2d2d2d" },
  { name: "Dark Brown",    hex: "#3b1f0e" },
  { name: "Medium Brown",  hex: "#6b3a2a" },
  { name: "Light Brown",   hex: "#9b6b4a" },
  { name: "Ombre 1B/30",   hex: "linear-gradient(to bottom, #1a1a1a, #9b6b4a)" },
];

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  displayPrice: string;
  originalPrice: string | null;
  img: string;
  badge: string | null;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Brazilian Body Wave Bundle",
    category: "Bundles",
    price: 480,
    displayPrice: "GH₵ 480",
    originalPrice: "GH₵ 560",
    img: bundlesImg,
    badge: "Best Seller",
    rating: 5,
    reviews: 124,
    description: "Soft, bouncy body wave with natural lustre. Minimal shedding, full from root to tip. Blends seamlessly with most hair types.",
    sizes: BUNDLE_SIZES,
    colors: HAIR_COLORS,
    details: ["100% Virgin Human Hair", "Double machine weft", "Can be dyed & bleached", "Minimal shedding & tangling", "Lasts 2–3+ years with proper care"],
  },
  {
    id: 2,
    name: "Peruvian Straight Bundle",
    category: "Bundles",
    price: 460,
    displayPrice: "GH₵ 460",
    originalPrice: null,
    img: silkyImg,
    badge: "New",
    rating: 5,
    reviews: 89,
    description: "Ultra-sleek straight hair that holds a curl beautifully. Lightweight yet thick, with a natural shine.",
    sizes: BUNDLE_SIZES,
    colors: HAIR_COLORS,
    details: ["100% Virgin Peruvian Hair", "Single drawn, silky texture", "Heat-friendly up to 230°C", "Minimal shedding & tangling", "Lasts 2+ years with care"],
  },
  {
    id: 3,
    name: "Malaysian Deep Wave Bundle",
    category: "Bundles",
    price: 520,
    displayPrice: "GH₵ 520",
    originalPrice: null,
    img: wavyImg,
    badge: null,
    rating: 5,
    reviews: 72,
    description: "Luscious deep waves with maximum volume and bounce. Stays moisturised and frizz-free all day.",
    sizes: BUNDLE_SIZES,
    colors: HAIR_COLORS,
    details: ["100% Virgin Malaysian Hair", "Deep S-curl pattern", "Moisturising formula", "Can be dyed & bleached", "Lasts 1–2 years with care"],
  },
  {
    id: 4,
    name: "Cambodian Curly Bundle",
    category: "Bundles",
    price: 550,
    displayPrice: "GH₵ 550",
    originalPrice: "GH₵ 620",
    img: curlyImg,
    badge: "Sale",
    rating: 4,
    reviews: 56,
    description: "Natural curly pattern, ideal for a full and voluminous look. Bouncy coils that hold their shape.",
    sizes: BUNDLE_SIZES,
    colors: HAIR_COLORS,
    details: ["100% Virgin Cambodian Hair", "Tight curl pattern (3C–4A)", "Retains curl when wet", "Low tangle, low shed", "Lasts 1–2 years with care"],
  },
  {
    id: 5,
    name: "4x4 HD Lace Closure",
    category: "Closures",
    price: 420,
    displayPrice: "GH₵ 420",
    originalPrice: null,
    img: afroImg,
    badge: null,
    rating: 5,
    reviews: 43,
    description: "HD Swiss lace that melts into any skin tone seamlessly. Free parting, pre-plucked hairline.",
    sizes: CLOSURE_SIZES,
    colors: HAIR_COLORS,
    details: ["HD Swiss transparent lace", "Pre-plucked baby hairs", "Free parting space", "Bleached knots", "Matches all skin tones"],
  },
  {
    id: 6,
    name: "5x5 Lace Closure",
    category: "Closures",
    price: 480,
    displayPrice: "GH₵ 480",
    originalPrice: null,
    img: curlyImg,
    badge: "New",
    rating: 5,
    reviews: 31,
    description: "Wider parting space for versatile styling options. Deep, side or middle part with ease.",
    sizes: CLOSURE_SIZES,
    colors: HAIR_COLORS,
    details: ["5x5 extra-wide part space", "HD Swiss transparent lace", "Pre-plucked hairline", "Bleached knots", "Versatile parting options"],
  },
  {
    id: 7,
    name: "13x4 HD Lace Frontal",
    category: "Frontals",
    price: 680,
    displayPrice: "GH₵ 680",
    originalPrice: "GH₵ 800",
    img: silkyImg,
    badge: "Sale",
    rating: 5,
    reviews: 67,
    description: "Full lace frontal for a completely natural hairline. Ear to ear coverage with baby hairs.",
    sizes: FRONTAL_SIZES,
    colors: HAIR_COLORS,
    details: ["13x4 ear-to-ear coverage", "HD Swiss lace", "Pre-plucked with baby hairs", "Bleached knots", "Suitable for all sew-in styles"],
  },
  {
    id: 8,
    name: "13x6 Transparent Lace Frontal",
    category: "Frontals",
    price: 750,
    displayPrice: "GH₵ 750",
    originalPrice: null,
    img: bundlesImg,
    badge: null,
    rating: 4,
    reviews: 28,
    description: "Extra-wide part space for deep side parts and middle parts. Ultra-thin transparent lace.",
    sizes: FRONTAL_SIZES,
    colors: HAIR_COLORS,
    details: ["13x6 extra-wide part space", "Transparent thin lace", "Pre-plucked hairline", "Bleached knots", "Deep & middle part compatible"],
  },
  {
    id: 9,
    name: "Body Wave Lace Front Wig",
    category: "Wigs",
    price: 1250,
    displayPrice: "GH₵ 1,250",
    originalPrice: "GH₵ 1,400",
    img: wigImg,
    badge: "Best Seller",
    rating: 5,
    reviews: 98,
    description: "Ready-to-wear HD lace front wig. Pre-plucked, bleached knots. Simply glue, gel or tape and go.",
    sizes: WIG_SIZES,
    colors: HAIR_COLORS,
    details: ["13x4 HD lace front", "Pre-plucked with baby hairs", "Bleached knots", "Adjustable elastic band", "180% density"],
  },
  {
    id: 10,
    name: "Straight Bob Wig",
    category: "Wigs",
    price: 1100,
    displayPrice: "GH₵ 1,100",
    originalPrice: null,
    img: salonImg,
    badge: "New",
    rating: 5,
    reviews: 45,
    description: "Chic bob cut wig with lace frontal, perfect for a sleek polished look. Arrives pre-styled.",
    sizes: ['8"', '10"', '12"', '14"', '16"'],
    colors: HAIR_COLORS,
    details: ["13x4 lace frontal", "Pre-styled bob cut", "Can be flat-ironed", "Adjustable straps", "150% density"],
  },
  {
    id: 11,
    name: "Curly U-Part Wig",
    category: "Wigs",
    price: 950,
    displayPrice: "GH₵ 950",
    originalPrice: "GH₵ 1,100",
    img: braidedImg,
    badge: "Sale",
    rating: 4,
    reviews: 33,
    description: "Easy to install, blends with your natural hair edges. No glue, no gel required.",
    sizes: WIG_SIZES,
    colors: HAIR_COLORS,
    details: ["U-part opening", "No glue needed", "Blends with natural edges", "Clips & combs included", "150% density"],
  },
  {
    id: 12,
    name: "Deep Wave Full Lace Wig",
    category: "Wigs",
    price: 1500,
    displayPrice: "GH₵ 1,500",
    originalPrice: null,
    img: curlyImg,
    badge: null,
    rating: 5,
    reviews: 52,
    description: "Full lace wig for ultimate styling freedom. Any parting, any style — updos, ponytails, all possible.",
    sizes: WIG_SIZES,
    colors: HAIR_COLORS,
    details: ["Full lace construction", "360° parting freedom", "Pre-plucked baby hairs", "Bleached knots", "180% density"],
  },
];
