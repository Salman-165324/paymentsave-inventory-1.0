"use client";
import { useState } from "react";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <span className="sr-only">Toggle menu</span>
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
        </div>

        <div className="flex items-center gap-4">
          <button
            className="p-2 text-muted-foreground hover:text-foreground relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="sr-only">Notifications</span>
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
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>

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
          </button>

          <button
            className="flex items-center gap-2 text-sm font-medium"
            onClick={() => setShowProfile(!showProfile)}
          >
            <span className="hidden md:inline-block">Admin User</span>
            <div className="h-8 w-8 rounded-full bg-primary text-white grid place-items-center">
              A
            </div>

            {showProfile && (
              <div className="absolute right-4 top-13 z-50 mt-1 w-56 rounded-md border bg-background shadow-lg">
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
          </button>
        </div>
      </div>
    </header>
  );
}
