"use client";

import React, { useState } from "react";
import MainCard from "@/components/ui/MainCard";
import InputField from "@/components/ui/InputField";
import AppButton from "@/components/ui/AppButton";
import SearchableDropdown from "@/components/ui/SearchableDropdown";
import TextArea from "@/components/ui/TextArea";
const serialOptions = [
  { value: "1234565475", label: "SIM" },
  { value: "1234565474", label: "Live Base" },
  { value: "1234565477", label: "Terminal" },
];
const ProductModelEntry = () => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelDescription: "",
    category: "",
    threshold: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <MainCard title="Product Model Entry" className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 text-sm max-w-[500px]">
        <InputField
          label="Model Name"
          name="modelName"
          required
          placeholder="Model Name"
          value={formData.modelName}
          onChange={handleChange}
          showIcon
        />
       
        <SearchableDropdown
          label="Product Category"
          name="category"
          placeholder="Select Category"
          options={serialOptions}
          selected={formData.category}
          onChange={(val) => setFormData({ ...formData, category: val })}
          required
        />
        <SearchableDropdown
          label="Low Stock Threshold"
          name="threshold"
          options={serialOptions}
          selected={formData.threshold}
          onChange={(val) => setFormData({ ...formData, threshold: val })}
          required
        />
      <TextArea
          label="Model description (optional)"
          name="modelDescription"
          placeholder="Model description"
          value={formData.modelDescription}
          onChange={handleChange}
        />

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <AppButton
            text="Discard"
            bg="bg-white"
            color="text-black"
            onClick={() => setFormData({ modelName: "", modelDescription: "" })}
            className="border border-white hover:bg-gray-200"
          />
          <AppButton
            type="submit"
            text="Add Product"
            bg="bg-blue-600"
            color="text-white"
            className="hover:bg-blue-700"
          />
        </div>
      </form>
    </MainCard>
  );
};

export default ProductModelEntry;
