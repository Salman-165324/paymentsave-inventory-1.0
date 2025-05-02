"use client";

import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects({ projects }) {
  const pathname = usePathname();
  const isActive = (url) => pathname === url;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Other Modules</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((project, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton asChild isActive={isActive(project.url)}>
              <a href={project.url} className="flex items-center">
                {project.icon}
                <span>{project.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
