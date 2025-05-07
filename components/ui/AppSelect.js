// components/AppSelect.js
"use client";
import React from "react";
import Select from "react-select";
import { ChevronRight } from "lucide-react";

export default function AppSelect({
  label,
  isMulti = false,
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  required = false,
  className = "",
  name,
}) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#fff",
      borderColor: "#E5E7EB",
      borderRadius: "0.75rem", // rounded-xl
      padding: "2px 6px",
      fontSize: "0.875rem",
      boxShadow: state.isFocused ? "0 0 0 1px #3B82F6" : "none",
      "&:hover": {
        borderColor: "#D1D5DB",
      },
      minHeight: "40px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 20,
      borderRadius: "0.75rem",
      marginTop: "4px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#EFF6FF" : "white",
      color: "#111827",
      fontSize: "0.875rem",
      padding: "8px 12px",
      cursor: "pointer",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9CA3AF", // gray-400
      fontSize: "0.875rem",
    }),
    input: (base) => ({
      ...base,
      fontSize: "0.875rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "0.875rem",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#E0F2FE",
      borderRadius: "0.5rem",
      padding: "2px 6px",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#0C4A6E",
      fontSize: "13px",
    }),
    multiValueRemove: (base) => ({
      ...base,
      ":hover": {
        backgroundColor: "#BAE6FD",
        color: "#0C4A6E",
      },
    }),
  };

  const DropdownIcon = () => (
    <div className="pr-2">
      <ChevronRight size={16} className="text-gray-400 rotate-90" />
    </div>
  );

  return (
    <div className={`flex flex-col gap-2 md:gap-4 items-start ${className}`}>
      {label && (
        <label className="w-full md:w-[160px] text-primary font-medium text-sm">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="w-full">
        <Select
          name={name}
          isMulti={isMulti}
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          styles={customStyles}
          components={{ DropdownIndicator: DropdownIcon }}
        />
      </div>
    </div>
  );
}
