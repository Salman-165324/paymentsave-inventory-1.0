"use client";

import { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import InputField from "@/components/ui/InputField";
import MainCard from "@/components/ui/MainCard";
import SearchableDropdown from "@/components/ui/SearchableDropdown";

const serialOptions = [
  { value: "1234565475", label: "SIM" },
  { value: "1234565474", label: "Live Base" },
  { value: "1234565477", label: "Terminal" },
];

export default function AddProductForm() {
  const [hasSerial, setHasSerial] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    model: "",
    name: "",
    serial: "",
    condition: "",
    supplier: "",
    invoice: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    // Call API to submit product
  };

  return (
    <MainCard title="Add Product" className="max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
      >
        {/* Product Category */}
        <SearchableDropdown
          label="Product Category"
          name="category"
          options={serialOptions}
          selected={formData.category}
          onChange={(val) => setFormData({ ...formData, category: val })}
          required
        />

        {/* Product Model */}
        <InputField
          label="Product Model*"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Enter product model"
          required
        />

        {/* Product Name */}
        <InputField
          label="Product Name (optional)"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product model"
        />

        {/* Serial Number */}
        <InputField
          label="Product Serial Number*"
          name="serial"
          value={formData.serial}
          onChange={handleChange}
          placeholder="Type Serial Number"
          required
        />

        {/* Serial Toggle */}
        <div className="flex items-center justify-between col-span-1">
          <label className="font-medium text-[#48505E]">
            Serial Number or Not <span className="text-red-500">*</span>
          </label>
          <div className="ml-4">
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

        {/* Product Condition */}
        <InputField
          label="Product Condition*"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          placeholder="Enter product condition"
          required
        />

        {/* Supplier Name */}
        <InputField
          label="Supplier name (optional)"
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          placeholder="Enter supplier name"
        />

        {/* Invoice Number */}
        <InputField
          label="Invoice Number (optional)"
          name="invoice"
          value={formData.invoice}
          onChange={handleChange}
          placeholder="Type Invoice No"
        />

        {/* Price */}
        <InputField
          label="Price (optional)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="0.00"
        />

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-2 mt-4">
          <AppButton
            type="button"
            text="Discard"
            onClick={() =>
              setFormData({
                category: "",
                model: "",
                name: "",
                serial: "",
                condition: "",
                supplier: "",
                invoice: "",
                price: "",
              })
            }
            bg="bg-[#F0F1F3]"
            color="text-black"
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
