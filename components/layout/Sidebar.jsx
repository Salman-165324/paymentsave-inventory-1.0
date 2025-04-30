"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    title: "My Terminal",
    href: "/my-terminal",
    icon: <Package className="h-4 w-4 mr-2" />,
  },
  {
    title: "Products",
    href: "/products",
    icon: <Package className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "All Products", href: "/products" },
      { title: "Product Model Entry", href: "/products/product-model-entry" },
      { title: "Single Products", href: "/products/single-products" },
      { title: "Add Product", href: "/products/new" },
      { title: "Bulk Product Entry", href: "/products/bulk-product" },
      {
        title: "Add Damage/Lost Products",
        href: "/products/add-damage-lost-products",
      },
      { title: "Add In Repair", href: "/products/add-in-repair" },
      { title: "Categories", href: "/products/categories" },
      { title: "Add Category", href: "/products/add-catagory" },
      { title: "Add Supplier ", href: "/products/add-supplier " },
      {
        title: "Damage / Lost Products",
        href: "/products/damage-lost-products",
      },
      { title: "In Repair", href: "/products/in-repair" },
    ],
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "All Orders", href: "/orders" },
      { title: "Processing", href: "/orders/processing" },
      { title: "Completed", href: "/orders/completed" },
    ],
  },
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
];

export default function Sidebar({ className }) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const defaultOpenIndex = menuItems.findIndex(
      (item) =>
        item.submenu &&
        item.submenu.some((subItem) => pathname.startsWith(subItem.href))
    );
    setOpenIndex(defaultOpenIndex !== -1 ? defaultOpenIndex : null);
  }, [pathname]);

  const isActive = (href) => pathname.startsWith(href);

  return (
    <div
      className={cn(
        "w-64 bg-[hsl(218,72%,35%)] text-white h-screen overflow-y-auto",
        className
      )}
    >
      <div className="flex flex-col h-full p-4">
        {/* Logo Section */}
        <div className="flex items-center px-4 py-5 justify-center ">
          <img
            src="/image/logo.png"
            alt="Paymentsave"
            className="h-10 w-auto"
          />
          {/* <div className="text-white font-bold text-sm">Paymentsave</div> */}
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-3">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => {
                    if (item.submenu) {
                      setOpenIndex(openIndex === index ? null : index);
                    }
                  }}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 text-[16px] font-normal rounded-md cursor-pointer transition-colors",
                    isActive(item.href)
                      ? "bg-white/10 font-semibold"
                      : "hover:bg-white/10"
                  )}
                >
                  <Link href={item.href}>
                    <div className="flex items-center">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </Link>
                  {item.submenu ? (
                    openIndex === index ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )
                  ) : null}
                </div>

                {/* Submenu */}
                {item.submenu && openIndex === index && (
                  <ul className="pl-8 mt-1 space-y-1 text-sm">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block py-1 transition-colors hover:text-white",
                            isActive(subItem.href)
                              ? "text-white font-medium"
                              : "text-gray-300"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        {/* <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center px-3 py-2 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md transition-colors">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </div>
        </div> */}
      </div>
    </div>
  );
}
