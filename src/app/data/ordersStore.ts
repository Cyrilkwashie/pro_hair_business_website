export interface OrderItem {
  productName: string;
  category: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "completed" | "cancelled";
  whatsappMessage: string;
}

const STORAGE_KEY = "hannie_orders_v1";
const EVENT = "hannie-orders-updated";

export function getOrders(): Order[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

export function saveOrder(data: Pick<Order, "items" | "total" | "whatsappMessage">): void {
  const orders = getOrders();
  const order: Order = {
    ...data,
    id: `ORD-${Date.now()}`,
    date: new Date().toISOString(),
    status: "pending",
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([order, ...orders]));
  window.dispatchEvent(new Event(EVENT));
}

export function updateOrderStatus(id: string, status: Order["status"]): void {
  const orders = getOrders().map((o) => (o.id === id ? { ...o, status } : o));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event(EVENT));
}

export function deleteOrder(id: string): void {
  const orders = getOrders().filter((o) => o.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event(EVENT));
}
