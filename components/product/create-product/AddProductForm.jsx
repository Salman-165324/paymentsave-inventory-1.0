"use client";

import AppButton from "@/components/ui/AppButton";
import InputField from "@/components/ui/InputField";
import MainCard from "@/components/ui/MainCard";
import { useState } from "react";

export default function AddProductForm() {
  const [hasSerial, setHasSerial] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    model: "",
    serial: "",
    condition: "",
    supplier: "",
    invoice: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <MainCard title='Add Product' >
     

      <form className="space-y-4 text-sm max-w-[500px]">
        {/* Category & Model */}
        <InputField
          label="Product Category"
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter product category"
          showIcon
        />
        <InputField
          label="Product Model"
          name="model"
          required
          value={formData.model}
          onChange={handleChange}
          placeholder="Enter product model"
          showIcon
        />

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
          <InputField
            label="Product Serial Number (if)"
            name="serial"
            placeholder="Type Serial Number"
            value={formData.serial}
            onChange={handleChange}
            showIcon
          />
        )}

        {/* Product Condition */}
        <InputField
          label="Product Condition"
          name="condition"
          required
          placeholder="Enter product condition"
          value={formData.condition}
          onChange={handleChange}
          showIcon
        />

        {/* Supplier */}
        <InputField
          label="Supplier name (if)"
          name="supplier"
          placeholder="Enter supplier name"
          value={formData.supplier}
          onChange={handleChange}
        />

        {/* Invoice No */}
        <InputField
          label="Invoice No (if)"
          name="invoice"
          placeholder="Type Invoice No"
          value={formData.invoice}
          onChange={handleChange}
        />

        {/* Price */}
        <InputField
          label="Price (if)"
          name="price"
          type="number"
          placeholder="0.00"
          value={formData.price}
          onChange={handleChange}
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <AppButton
            text="Discard"
        
            bg="bg-[#F0F1F3]"
            color="text-black"
            onClick={() => console.log("Discard clicked")}
            className="border border-[#F0F1F3] hover:bg-gray-200"
          />

          <AppButton
            type="submit"
            text="Add Product"
           
            bg="bg-[#1366D9]"
            color="text-white"
            className="hover:bg-blue-700"
          />
        </div>
      </form>
    </MainCard>
  );
}
