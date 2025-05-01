"use client";

import React, { useState } from "react";
import MainCard from "@/components/ui/MainCard";
import InputField from "@/components/ui/InputField";
import AppButton from "@/components/ui/AppButton";
import SearchableDropdown from "@/components/ui/SearchableDropdown";
import TextArea from "@/components/ui/TextArea";

const categoryOptions = [
  { value: "accessories", label: "Accessories" },
  { value: "terminal", label: "Terminal" },
  { value: "charging-base", label: "Charging Base" },
];

const ProductModelEntry = () => {
  const [formData, setFormData] = useState({
    modelName: "",
    threshold: "",
    category: "",
    modelDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Submit logic
  };

  const handleDiscard = () => {
    setFormData({
      modelName: "",
      threshold: "",
      category: "",
      modelDescription: "",
    });
  };

  return (
    <MainCard title="Product Model Entry" className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {/* Left Column */}
        <InputField
          label="Model Name*"
          name="modelName"
          value={formData.modelName}
          onChange={handleChange}
          placeholder="Type Model Name"
          required
        />
        <SearchableDropdown
          label="Product Category*"
          name="category"
          options={categoryOptions}
          selected={formData.category}
          onChange={(val) => setFormData({ ...formData, category: val })}
          placeholder="Select Category"
          required
        />
        <InputField
          label="Low Stock Threshold*"
          name="threshold"
          type="number"
          value={formData.threshold}
          onChange={handleChange}
          placeholder="Type Stock Threshold"
          required
        />
        <TextArea
          label="Model Description (optional)"
          name="modelDescription"
          value={formData.modelDescription}
          onChange={handleChange}
          placeholder="Type Description"
        />

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-2 pt-4">
          <AppButton
            type="button"
            text="Discard"
            onClick={handleDiscard}
            bg="bg-white"
            color="text-black"
            className="border border-gray-300 hover:bg-gray-100"
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
};

export default ProductModelEntry;
