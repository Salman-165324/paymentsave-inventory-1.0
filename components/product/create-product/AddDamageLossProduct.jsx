"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import MainCard from "@/components/ui/MainCard";
import CustomCard from "@/components/ui/CustomCard";

export default function AddDamageLossProduct() {
  const [hasSerial, setHasSerial] = useState(false);

  return (
    <MainCard
      title="Add Damage/Loss Product"
      className="max-w-5xl mx-auto mt-6"
    >
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Form */}
        <form className="flex-1 space-y-4 text-sm">
          {/* Input Fields */}
          {[
            {
              label: "Product Serial",
              required: true,
              placeholder: "Product Serial, Model",
              hasIcon: true,
            },
            {
              label: "Status (Lost/ Damaged)",
              required: true,
              placeholder: "Select Status",
              hasIcon: true,
            },
            {
              label: "Reason",
              required: true,
              placeholder: "Select or Add a new Reason",
              hasIcon: true,
            },
          ].map(({ label, required, placeholder, hasIcon }, i) => (
            <div key={i} className="flex items-center gap-4 relative mt-8">
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

          {/* Comment */}
          <div className="flex items-start gap-4">
            <label className="min-w-[160px] pt-2 text-primary font-medium">
              Comment (if)
            </label>
            <textarea
              placeholder="Comment here"
              rows={3}
              className="text-secondary w-full border bg-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
        </form>

        {/* Right Overview */}
        <div className="flex-1">
          {/* Title above the card */}
          <h3 className="text-sm font-medium text-[#616262] mb-3 ml-1">
            Product Overview
          </h3>

          <CustomCard className="bg-white border border-gray-200 text-[20px] px-5 py-4 ">
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <div className="text-primary">MID</div>
                <div className="text-secondary ">18142542351335</div>
              </div>
              <div>
                <div className="text-primary">Trading Name</div>
                <div className="text-secondary ">Devsstream Store</div>
              </div>

              <div>
                <div className="text-primary">Product Model</div>
                <div className="text-secondary ">A920 PRO</div>
              </div>
              <div>
                <div className="text-primary">BDM Email</div>
                <div className="text-secondary ">zakaria@gmail.com</div>
              </div>

              <div>
                <div className="text-primary">Product Category</div>
                <div className="text-secondary ">SIM</div>
              </div>
            </div>
          </CustomCard>
        </div>
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
          Update Status
        </button>
      </div>
    </MainCard>
  );
}
