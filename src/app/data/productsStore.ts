import { allProducts as staticProducts } from "./products";
import type { Product } from "./products";

const STORAGE_KEY = "hannie_products_v1";
const EVENT = "hannie-products-updated";

export function getProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return staticProducts;
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event(EVENT));
}

export function addProduct(product: Product): void {
  const products = getProducts();
  saveProducts([...products, product]);
}

export function updateProduct(updated: Product): void {
  const products = getProducts().map((p) => (p.id === updated.id ? updated : p));
  saveProducts(products);
}

export function deleteProduct(id: number): void {
  saveProducts(getProducts().filter((p) => p.id !== id));
}

export function resetProducts(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT));
}

export function nextId(): number {
  const products = getProducts();
  return products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
}
