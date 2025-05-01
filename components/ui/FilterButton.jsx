"use client";

import { useState, useRef, useEffect } from "react";
import { Filter } from "lucide-react";
export default function FilterButton({ filterName, filterOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-[#19499A] text-white px-2 py-2 rounded-md hover:bg-[#19499A] flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* 🧮 Filter Icon Placeholder */}
        <Filter width={20} height={20} color="#C4C4C4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          <div className="p-4">
            <h5 className="text-sm font-medium text-gray-700">
              Filter by {filterName}
            </h5>
            <div className="mt-2 space-y-2">
              {filterOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    value={option}
                    className="form-checkbox text-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
