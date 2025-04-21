"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AddProductForm() {
  const [hasSerial, setHasSerial] = useState(false);

  return (
    <div className="max-w-3xl mx-auto bg-[#F9F9F9] p-8 rounded-xl shadow border mt-6">
      <h2 className="text-xl font-semibold text-primary mb-6">Add Product</h2>

      <form className="space-y-4 text-sm">
        {/* Row Group */}
        {[
          {
            label: "Product Category",
            required: true,
            placeholder: "Enter product category",
            hasIcon: true,
          },
          {
            label: "Product Model",
            required: true,
            placeholder: "Enter product model",
            hasIcon: true,
          },
        ].map(({ label, required, placeholder, hasIcon }, i) => (
          <div key={i} className="flex items-center gap-4">
            <label className="min-w-[160px] text-primary font-medium">
            {/* <label className="min-w-[160px] text-primary font-medium"> */}
              {label}
              {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder={placeholder}
                className={`text-secondary w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
              {hasIcon && (
                <ChevronRight
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
              )}
            </div>
          </div>
        ))}

        {/* Serial Toggle */}
        <div className="flex items-center justify-between">
          <label className="min-w-[160px] text-primary font-medium">
            Serial Number or Not<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex-1 flex justify-start ml-4">
            <button
              type="button"
              onClick={() => setHasSerial(!hasSerial)}
              className={`w-10 h-6 rounded-full relative transition ${
                hasSerial ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full shadow absolute top-1 left-1 transition-transform duration-300 ${
                  hasSerial ? "translate-x-4" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Serial Input */}
        {hasSerial && (
          <div className="flex items-center gap-4">
            <label className="min-w-[160px] text-primary font-medium">
              Product Serial Number (if)
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type Serial Number"
                className="text-secondary w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ChevronRight
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
        )}

        {/* Product Condition */}
        <div className="flex items-center gap-4">
          <label className="min-w-[160px] text-primary font-medium">
            Product Condition<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter product condition"
              className="text-secondary  w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <ChevronRight
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>

        {/* Supplier name */}
        <div className="flex items-center gap-4">
          <label className="min-w-[160px] text-primary font-medium">
            Supplier name (if)
          </label>
          <input
            type="text"
            placeholder="Enter supplier name"
            className="text-secondary w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Invoice No */}
        <div className="flex items-center gap-4">
          <label className="min-w-[160px] text-primary font-medium">
            Invoice No (if)
          </label>
          <input
            type="text"
            placeholder="Type Invoice No"
            className="text-secondary w-full border bg-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <label className="min-w-[160px] text-primary font-medium">
            Price (if)
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="text-secondary bg-white w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            className="px-4 py-2 text-sm border border-gray-300 rounded bg-gray-100 hover:bg-gray-200"
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
