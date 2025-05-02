"use client";

import * as React from "react";
import {
  BadgeX,
  Briefcase,
  FileText,
  Film,
  LayoutDashboard,
  LogOut,
  Package,
  Server,
  Settings,
  ShoppingCart,
  UserCheck,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This uses the data structure from the original sidebar
const data = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/image/logo.png",
  },
  teams: [
    {
      name: "Paymentsave",
      logo: Package,
      plan: "Inventory",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
    },
    {
      title: "Products",
      url: "/products",
      icon: <Package className="h-4 w-4 mr-2" />,
      items: [
        { title: "Add Product", url: "/add-product" },
        { title: "All Products", url: "/model-wise-products" },
        { title: "Product Model Entry", url: "/add-model" },
        { title: "Product Model", url: "/product-model" },
        { title: "Single Products", url: "/single-products" },
        { title: "Archive Products", url: "/archive-products" },
        { title: "Bulk Product Entry", url: "/bulk-entry" },
      ],
    },
    {
      title: "Categories",
      url: "/list",
      icon: <Film className="h-4 w-4 mr-2" />,
      items: [
        { title: "All Category", url: "/list" },
        { title: "Add Category", url: "/add-category" },
      ],
    },
    {
      title: "Lost/Damage products",
      url: "/lost-damage-products",
      icon: <BadgeX className="h-4 w-4 mr-2" />,
      items: [
        { title: "Add Damage/Lost Products", url: "/add-damage-lost" },
        { title: "Add Repair Products", url: "/add-repair" },
        { title: "Repair Products", url: "/in-repair" },
        { title: "Damage Products", url: "/lost-damage-products" },
      ],
    },
    {
      title: "Supplier",
      url: "/suppliers",
      icon: <UserCheck className="h-4 w-4 mr-2" />,
      items: [
        { title: "Suppliers", url: "/suppliers" },
        { title: "Add Supplier", url: "/add-supplier" },
      ],
    },
  ],
  projects: [
    {
      name: "Users",
      url: "/users",
      icon: <Users className="h-4 w-4 mr-2" />,
    },
    {
      name: "Account",
      url: "/account",
      icon: <Users className="h-4 w-4 mr-2" />,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
