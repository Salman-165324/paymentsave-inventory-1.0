"use client";

import * as React from "react";
import { Command } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SidebarGroup, SidebarMenuButton } from "@/components/ui/sidebar";

export function TeamSwitcher({ teams }) {
  const [selectedTeam, setSelectedTeam] = React.useState(teams[0]);

  return (
    <SidebarGroup>
      <Button variant="sidebar" className="h-10 w-full justify-start gap-2">
        {selectedTeam.logo && (
          <selectedTeam.logo className="h-4 w-4 text-sidebar-foreground/70" />
        )}
        <span className="truncate">{selectedTeam.name}</span>
        <Command className="ml-auto h-4 w-4 text-sidebar-foreground/70" />
      </Button>
    </SidebarGroup>
  );
}
