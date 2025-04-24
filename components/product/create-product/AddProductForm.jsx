"use client";

import { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import InputField from "@/components/ui/InputField";
import MainCard from "@/components/ui/MainCard";
import SearchableDropdown from "@/components/ui/SearchableDropdown";
import TextArea from "@/components/ui/TextArea";
// import SearchableDropdown from '@/components/ui/SearchableDropdown'; // optional
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
    serial: "",
    condition: "",
    supplier: "",
    invoice: "",
    price: "",
    modelDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    // Handle API submission here
  };

  return (
    <MainCard title="Add Product" className="max-w-4xl mx-auto">
      <form className="space-y-4 text-sm max-w-[500px]" onSubmit={handleSubmit}>
        {/* Category - dropdown or text */}
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
          label="Product Model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Enter product model"
          required
          showIcon
        />

        {/* Toggle for serial number */}
        <div className="flex items-center justify-between">
          <label className="min-w-[160px] text-primary font-medium">
            Serial Number or Not <span className="text-red-500 ml-0.5">*</span>
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

        {/* Serial Field (conditionally shown) */}
        {hasSerial && (
          <InputField
            label="Product Serial Number"
            name="serial"
            value={formData.serial}
            onChange={handleChange}
            placeholder="Type Serial Number"
            showIcon
          />
        )}

        {/* Condition */}
        <InputField
          label="Product Condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          placeholder="Enter product condition"
          required
          showIcon
        />

        {/* Supplier (optional) */}
        <InputField
          label="Supplier Name (optional)"
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          placeholder="Enter supplier name"
        />

        {/* Invoice (optional) */}
        <InputField
          label="Invoice No (optional)"
          name="invoice"
          value={formData.invoice}
          onChange={handleChange}
          placeholder="Enter invoice number"
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
        <TextArea
          label="Model description (optional)"
          name="modelDescription"
          placeholder="Model description"
          value={formData.modelDescription}
          onChange={handleChange}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <AppButton
            type="button"
            text="Discard"
            onClick={() =>
              setFormData({
                category: "",
                model: "",
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
