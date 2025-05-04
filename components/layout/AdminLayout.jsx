"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({ children }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Fixed Sidebar - Desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 z-30 bg-[#0F3B69] text-white">
        <Sidebar />
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

      {/* Main Content with left padding to account for sidebar */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        <Header onMenuToggle={toggleMobileSidebar} />
        <main className="flex-1 px-4 md:px-6 py-6 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
