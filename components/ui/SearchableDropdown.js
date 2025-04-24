"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, X } from "lucide-react";

export default function SearchableDropdown({
  label,
  options = [],
  selected,
  onChange,
  placeholder = "Select...",
  required = false,
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Enter to select first item
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredOptions.length > 0) {
      e.preventDefault();
      onChange(filteredOptions[0]);
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full"
    >
      {label && (
        <label className="w-full md:min-w-[160px]  md:w-[160px] text-primary font-medium text-sm">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="relative w-full">
        {/* Display button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between rounded-md border border-gray-200 bg-white py-2 px-3 text-sm text-gray-900  focus:outline-none"
        >
          <span className="truncate text-secondary">{selected?.label || placeholder}</span>
          <ChevronRight size={16} className="text-gray-400 rotate-90" />
        </button>

        {/* Dropdown panel */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5 text-sm">
            {/* Search input with clear button */}
            <div className="relative px-3 pt-3 pb-2 border-b border-gray-200 sticky top-0 bg-white z-10">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="text-secondary w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* List */}
            <ul className="max-h-60 overflow-auto">
              {filteredOptions.length === 0 ? (
                <li className="px-4 py-2 text-gray-500">No results found.</li>
              ) : (
                filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className={`cursor-pointer select-none px-4 py-2 hover:bg-blue-100 ${
                      selected?.value === option.value
                        ? "bg-blue-50 text-blue-800 font-medium"
                        : "text-gray-800"
                    }`}
                  >
                    {option.label}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
