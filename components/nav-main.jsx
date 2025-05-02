"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  BadgeX,
  ChevronDown,
  ChevronRight,
  Film,
  LayoutDashboard,
  Package,
  ShoppingCart,
  UserCheck,
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    // Find if any submenu's item is active and keep it open
    const initialOpenState = {};
    items.forEach((item, index) => {
      if (
        item.items &&
        item.items.some((subItem) => pathname === subItem.url)
      ) {
        initialOpenState[index] = true;
      }
    });
    setOpenMenus(initialOpenState);
  }, [pathname, items]);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isActive = (url) => pathname === url;

  return (
    <SidebarMenu>
      {items.map((item, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuButton
            asChild={!item.items}
            isActive={
              isActive(item.url) ||
              (item.items &&
                item.items.some((subItem) => isActive(subItem.url)))
            }
            onClick={item.items ? () => toggleMenu(index) : undefined}
          >
            {item.items ? (
              <button className="w-full flex items-center justify-between">
                <span className="flex items-center">
                  {item.icon}
                  <span>{item.title}</span>
                </span>
                {openMenus[index] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            ) : (
              <a href={item.url} className="flex items-center">
                {item.icon}
                <span>{item.title}</span>
              </a>
            )}
          </SidebarMenuButton>

          {item.items && openMenus[index] && (
            <SidebarMenuSub>
              {item.items.map((subItem, subIndex) => (
                <SidebarMenuSubItem key={subIndex}>
                  <SidebarMenuSubButton
                    href={subItem.url}
                    isActive={isActive(subItem.url)}
                  >
                    <span>{subItem.title}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
