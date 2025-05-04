"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import menuItems from "./menuItems";
import LogoutButton from "./LogoutButton";

export default function Sidebar({ className, isCollapsed = false }) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground h-screen overflow-y-auto w-full transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col h-full p-4">
        {/* Logo Section */}
        <div
          className={cn(
            "flex items-center justify-center py-5",
            isCollapsed ? "px-1" : "px-4"
          )}
        >
          {/* Show different logos based on collapsed state */}
          {isCollapsed ? (
            <div className="flex items-center justify-center w-full">
              <Image
                src="/image/logo-icon-white.png"
                alt="Paymentsave Icon"
                width={71}
                height={79}
                className="w-auto h-auto object-contain"
                priority
              />
            </div>
          ) : (
            <div className="relative h-12 w-auto">
              <Image
                src="/image/logo.png"
                alt="Paymentsave"
                width={160}
                height={40}
                className="w-auto h-auto"
                priority
              />
            </div>
          )}
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
                      "flex items-center justify-between rounded-md cursor-pointer transition-colors",
                      isCollapsed ? "px-2 py-2" : "px-3 py-2",
                      "text-sm font-medium",
                      isActive(item.href)
                        ? "bg-white/10 font-semibold"
                        : "hover:bg-white/10"
                    )}
                  >
                    <Link href={item.href} className="w-full">
                      <div
                        className={cn(
                          "flex items-center",
                          isCollapsed && "justify-center"
                        )}
                      >
                        {item.icon}
                        {!isCollapsed && (
                          <span className="ml-2">{item.title}</span>
                        )}
                      </div>
                    </Link>
                    {hasSubmenu &&
                      !isCollapsed &&
                      (isOpen ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      ))}
                  </div>

                  {/* Submenu - Only show when not collapsed */}
                  {hasSubmenu && isOpen && !isCollapsed && (
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
          <LogoutButton isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
}
