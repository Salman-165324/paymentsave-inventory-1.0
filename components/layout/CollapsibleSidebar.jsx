"use client";

import { useSidebar } from "../../context/SidebarContext";
import Sidebar from "./Sidebar";

export default function CollapsibleSidebar() {
  const { isCollapsed } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar - Collapsible */}
      <div 
        className={`hidden md:block fixed top-0 left-0 h-screen z-30 transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      
      {/* Adjust main content padding when sidebar state changes */}
      <div 
        className={`hidden md:block transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      />
    </>
  );
} 