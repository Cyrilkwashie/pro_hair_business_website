export interface SiteSettings {
  businessName: string;
  tagline: string;
  whatsapp: string;
  phone: string;
  snapchat: string;
  email: string;
  location: string;
  announcementBar: string;
  businessHours: string;
}

export const DEFAULTS: SiteSettings = {
  businessName: "Hannie Luxe",
  tagline: "Hair Boutique",
  whatsapp: "233594274363",
  phone: "0594274363",
  snapchat: "Hannie.xxa",
  email: "",
  location: "Accra, Ghana",
  announcementBar: "FREE SHIPPING ON ORDERS OVER GH₵500 · USE CODE: HANNIE10 FOR 10% OFF",
  businessHours: "Mon–Sat: 9am – 7pm | Sun: Closed",
};

const STORAGE_KEY = "hannie_settings_v1";
const EVENT = "hannie-settings-updated";

export function getSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {}
  return DEFAULTS;
}

export function saveSettings(settings: SiteSettings): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new Event(EVENT));
}

export function resetSettings(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT));
}
