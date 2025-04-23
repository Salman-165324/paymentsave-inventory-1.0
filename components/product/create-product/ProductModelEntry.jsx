"use client";

import React, { useState } from "react";
import MainCard from "@/components/ui/MainCard";
import InputField from "@/components/ui/InputField";
import AppButton from "@/components/ui/AppButton";


const ProductModelEntry = () => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelDescription: "",
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
    <MainCard title="Product Model Entry">
      <form onSubmit={handleSubmit} className="flex-1 space-y-4 text-sm max-w-4xl mx-auto">
        <InputField
          label="Model Name"
          name="modelName"
          required
          placeholder="Model Name"
          value={formData.modelName}
          onChange={handleChange}
          showIcon
        />

        <InputField
          label="Model Description"
          name="modelDescription"
          required
          placeholder="Type Description"
          value={formData.modelDescription}
          onChange={handleChange}
          showIcon
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
