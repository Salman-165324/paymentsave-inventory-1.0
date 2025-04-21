import MainCard from '@/components/ui/MainCard'
import React from 'react'
import { useState } from "react";
import { ChevronRight } from "lucide-react";
const ProductModelEntry = () => {
  return (
    <MainCard
    title="Product Model Entry"
    className="max-w-5xl mx-auto mt-6"
  >
    <div className="flex flex-col md:flex-row gap-6 mt-2">
      {/* Left Form */}
      <form className="flex-1 space-y-4 text-sm">
        {/* Input Fields */}
        {[
          {
            label: "Model Name",
            required: true,
            placeholder: "Model Name",
            hasIcon: true,
          },
          {
            label: "Model Description",
            required: true,
            placeholder: "Type Descroption",
            hasIcon: true,
          },
          
        ].map(({ label, required, placeholder, hasIcon }, i) => (
          <div key={i} className="flex items-center gap-4 relative ">
            <label className="min-w-[160px] text-primary font-medium">
              {label}
              {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder={placeholder}
                className="text-secondary w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
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

       
      </form>

      
    </div>

    {/* Bottom Buttons */}
    <div className="flex justify-end gap-2 mt-8">
      <button
        type="button"
        className="px-4 py-2 text-sm border border-white rounded bg-white hover:bg-gray-200"
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
  </MainCard>
  )
}

export default ProductModelEntry