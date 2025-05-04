"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Bell } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b bg-[#f9f9f9]">
      <div className="flex h-16 items-center justify-between px-6 shadow-[0px_4px_10px_#00000040]">
        <div className="flex items-center gap-4">
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={notificationRef}>
            <button
              className="p-2 text-muted-foreground hover:text-foreground relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <span className="sr-only">Notifications</span>
              <Bell />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-full z-50 mt-1 w-80 rounded-md border bg-background shadow-lg">
                <div className="p-4">
                  <h3 className="font-medium">Notifications</h3>
                  <div className="mt-2 space-y-2">
                    <div className="rounded-md bg-background p-2 hover:bg-muted">
                      <p className="text-sm">New order received</p>
                      <p className="text-xs text-muted-foreground">
                        5 minutes ago
                      </p>
                    </div>
                    <div className="rounded-md bg-background p-2 hover:bg-muted">
                      <p className="text-sm">Product stock low</p>
                      <p className="text-xs text-muted-foreground">
                        1 hour ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-6 w-px bg-gray-300" />
          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="h-8 w-8 rounded-full bg-primary text-white grid place-items-center">
                A
              </div>
              <span className="hidden md:inline-block">Admin User</span>
              <ChevronDown className="font-medium" />
            </button>
            {showProfile && (
              <div className="absolute right-4 top-full z-50 mt-1 w-56 rounded-md border bg-background shadow-lg">
                <div className="p-2">
                  <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                    <div className="text-sm font-medium">Profile</div>
                  </div>
                  <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                    <div className="text-sm font-medium">Settings</div>
                  </div>
                  <div className="rounded-md p-2 hover:bg-muted cursor-pointer">
                    <div className="text-sm font-medium">Logout</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
