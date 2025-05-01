"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
    title: "Products",
    href: "/products",
    icon: <Package className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "Add Product", href: "/add" },
      { title: "All Products", href: "/model-wise" },
      { title: "Product Model Entry", href: "/add-model" },
      { title: "Single Products", href: "/single-products" },
      { title: "Archive Products", href: "/archive-products" },
      { title: "Bulk Product Entry", href: "/bulk-entry" },

      // { title: "Add Supplier", href: "/add-supplier" },
    ],
  },
  {
    title: "Categories",
    href: "/list",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "All Category", href: "/list" },
      { title: "Add Category", href: "/add-category" },
    ],
  },
  {
    title: "Lost/Damage products",
    href: "/lost-damage-products",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
    submenu: [
      { title: "Add Damage/Lost Products", href: "/add-damage-lost" },
      { title: "Add Repair Products", href: "/add-repair" },
      { title: "Repair Products", href: "/in-repair" },
      { title: "Damage Products", href: "/lost-damage-products" },
    ],
  },
  /*
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
  */
  {
    title: "Supplier",
    href: "/suppliers",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
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

export default function Sidebar({ className }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    // Keep submenu open if any sublink is active
    const foundIndex = menuItems.findIndex(
      (item) =>
        item.submenu &&
        item.submenu.some((subItem) => pathname.startsWith(subItem.href))
    );
    if (foundIndex !== -1) {
      setOpenIndex(foundIndex);
    }
  }, [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // Redirect to login page
        router.push("/login");
        router.refresh();
      } else {
        console.error("Logout failed:", await res.json());
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div
      className={cn(
        "w-64 bg-[#0F3B69] text-white h-screen overflow-y-auto",
        className
      )}
    >
      <div className="flex flex-col h-full p-4">
        {/* Logo Section */}
        <div className="flex items-center px-4 py-5 justify-center">
          <img
            src="/image/logo.png"
            alt="Paymentsave"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-3">
          <ul className="space-y-1">
            {menuItems.map((item, index) => {
              const isOpen = openIndex === index;
              const hasSubmenu = !!item.submenu;
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      hasSubmenu && setOpenIndex(isOpen ? null : index)
                    }
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors",
                      isActive(item.href)
                        ? "bg-white/10 font-semibold"
                        : "hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {hasSubmenu &&
                      (isOpen ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      ))}
                  </div>

                  {/* Submenu */}
                  {hasSubmenu && isOpen && (
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
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <button
            className="w-full flex items-center px-3 py-2 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md transition-colors"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
