"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar Button - Only visible on mobile */}
      <div className="md:hidden">
        <button
          className="p-2 text-muted-foreground hover:text-foreground"
          onClick={toggleMobileSidebar}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar - Conditional render */}
      {isMobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={toggleMobileSidebar}
          ></div>
          {/* Sidebar */}
          <div className="absolute top-0 left-0 h-screen w-64 z-50">
            <Sidebar className="h-full" />
          </div>
        </div>
      )}
    </>
  );
}
