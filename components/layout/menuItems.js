import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  FileText,
  Briefcase,
  Server,
  ChevronDown,
  ChevronRight,
  UserCheck,
  Film,
  BadgeX,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    title: "Products",
    href: "/products",
    icon: <Package className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "Add Product", href: "/add-product" },
      { title: "All Products", href: "/model-wise-products" },
      { title: "Product Model Entry", href: "/add-model" },
      { title: "Product Model ", href: "/product-model" },
      { title: "Single Products", href: "/single-products" },
      { title: "Archive Products", href: "/archive-products" },
      { title: "Bulk Product Entry", href: "/bulk-entry" },
    ],
  },
  {
    title: "Categories",
    href: "/list",
    icon: <Film className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "All Category", href: "/list" },
      { title: "Add Category", href: "/add-category" },
    ],
  },
  {
    title: "Lost/Damage products",
    href: "/damage-lost-products",
    icon: <BadgeX className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "Add Damage/Lost Products", href: "/add-damage-lost" },
      { title: "Add Repair Products", href: "/add-repair" },
      { title: "Repair Products", href: "/in-repair" },
      { title: "Damage Products", href: "/damage-lost-products" },
    ],
  },
  {
    title: "My Terminal",
    href: "/my-terminal",
    icon: <Package className="h-4 w-4 mr-2" />,
  },
  {
    title: "Supplier",
    href: "/suppliers",
    icon: <UserCheck className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "Suppliers", href: "/suppliers" },
      { title: "Add Supplier", href: "/add-supplier" },
    ],
  },
  /*
  {
    title: "Live Base",
    href: "/live-base",
    icon: <Server className="h-4 w-4 mr-2" />,
  },
  {
    title: "Businesses",
    href: "/businesses",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    title: "Orders to Supplier",
    href: "/orders-to-supplier",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
  },
  {
    title: "Invoice",
    href: "/invoice",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <Users className="h-4 w-4 mr-2" />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <Users className="h-4 w-4 mr-2" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
  */
];

export default menuItems;
