"use client";

import { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import InputField from "@/components/ui/InputField";
import MainCard from "@/components/ui/MainCard";
import SearchableDropdown from "@/components/ui/SearchableDropdown";
import TextArea from "@/components/ui/TextArea";

const productTypeOptions = [
  { value: "Accessory", label: "Accessory" },
  { value: "Terminal", label: "Terminal" },
];

export default function AddCategory() {
  const [formData, setFormData] = useState({
    productType: "",
    categoryName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle API submission here
  };

  return (
    <MainCard title="Add Product Category" className="max-w-4xl mx-auto">
      <form className="space-y-4 text-sm max-w-[500px]" onSubmit={handleSubmit}>
        {/* Product Type Dropdown */}
        <SearchableDropdown
          label="Product Type"
          name="productType"
          options={productTypeOptions}
          selected={formData.productType}
          onChange={(val) => setFormData({ ...formData, productType: val })}
          required
        />

        {/* Category Name */}
        <InputField
          label="Category Name"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          placeholder="Enter category name"
          required
        />

        {/* Optional Description */}
        <TextArea
          label="Description (optional)"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <AppButton
            type="button"
            text="Discard"
            onClick={() =>
              setFormData({
                productType: "",
                categoryName: "",
                description: "",
              })
            }
            bg="bg-[#F0F1F3]"
            color="text-black"
            className="border border-[#F0F1F3] hover:bg-gray-200"
          />

          <AppButton
            type="submit"
            text="Add Category"
            bg="bg-[#1366D9]"
            color="text-white"
            className="hover:bg-blue-700"
          />
        </div>
      </form>
    </MainCard>
  );
}
