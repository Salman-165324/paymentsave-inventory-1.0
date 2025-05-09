"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LogoutButton({ className, isCollapsed = false }) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
    <button
      className={cn(
        "w-full flex items-center text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md transition-colors",
        isCollapsed ? "justify-center px-2 py-2" : "px-3 py-2",
        className
      )}
      onClick={handleLogout}
      disabled={isLoggingOut}
    >
      <LogOut className="h-4 w-4" />

      {!isCollapsed && (
        <span className="ml-2">
          {isLoggingOut ? "Logging out..." : "Logout"}
        </span>
      )}
    </button>
  );
}
