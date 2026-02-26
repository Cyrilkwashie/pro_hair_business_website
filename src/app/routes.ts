import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { AdminLogin } from "./admin/AdminLogin";
import { AdminLayout } from "./admin/AdminLayout";
import { AdminDashboard } from "./admin/pages/AdminDashboard";
import { AdminProducts } from "./admin/pages/AdminProducts";
import { AdminOrders } from "./admin/pages/AdminOrders";
import { AdminGallery } from "./admin/pages/AdminGallery";
import { AdminSettings } from "./admin/pages/AdminSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
    ],
  },
  { path: "/admin/login", Component: AdminLogin },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "dashboard", Component: AdminDashboard },
      { path: "products", Component: AdminProducts },
      { path: "orders", Component: AdminOrders },
      { path: "gallery", Component: AdminGallery },
      { path: "settings", Component: AdminSettings },
    ],
  },
]);
