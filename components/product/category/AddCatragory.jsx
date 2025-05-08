"use client";

import { useState, useTransition } from "react";
import { toast } from "react-hot-toast";
import AppButton from "@/components/ui/AppButton";
import InputField from "@/components/ui/InputField";
import MainCard from "@/components/ui/MainCard";
import SearchableDropdown from "@/components/ui/SearchableDropdown";
import TextArea from "@/components/ui/TextArea";
import { createCategory } from "@/app/(category)/add-category/actions";

// Updated to match API requirements for "type" field - using correct case and spelling
const productTypeOptions = [
  { value: "TERMINAL", label: "Terminal" },
  { value: "ACCESSORIES", label: "Accessories" },
];

export default function AddCategory() {
  // Store the full option object for selected productType
  const [selectedType, setSelectedType] = useState(null);
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Helper function to handle dropdown selection
  const handleProductTypeChange = (selectedOption) => {
    console.log("Product type selected:", selectedOption);
    setSelectedType(selectedOption);

    if (errors.productType) {
      setErrors((prev) => ({ ...prev, productType: null }));
    }
  };

  const handleFormAction = async (formData) => {
    // Create the data to submit with proper format for API
    const dataToSubmit = {
      productType: selectedType?.value || "",
      categoryName: formData.get("categoryName"),
      description: formData.get("description"),
    };

    console.log("Form data being submitted:", dataToSubmit);

    // Use startTransition to handle the server action
    startTransition(async () => {
      try {
        // Call the server action
        const result = await createCategory(dataToSubmit);

        if (result.success) {
          // Show success message
          toast.success(result.message || "Category created successfully");
          // Reset form
          setFormData({
            categoryName: "",
            description: "",
          });
          setSelectedType(null);

          // Reset the form
          document.getElementById("category-form").reset();
        } else {
          // Show error message and set field errors
          toast.error(result.message || "Failed to create category");
          setErrors(result.errors || {});
        }
      } catch (error) {
        console.error("Error creating category:", error);
        toast.error("An unexpected error occurred");
      }
    });
  };

  return (
    <MainCard title="Add Product Category" className="max-w-4xl mx-auto">
      <form
        action={handleFormAction}
        id="category-form"
        className="space-y-4 text-sm max-w-[500px]"
      >
        {/* Product Type Dropdown */}
        <SearchableDropdown
          label="Product Type"
          name="productType"
          options={productTypeOptions}
          selected={selectedType}
          onChange={handleProductTypeChange}
          error={errors.productType}
          required
        />

        {/* Category Name */}
        <InputField
          label="Category Name"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          placeholder="Enter category name"
          error={errors.categoryName}
          required
        />

        {/* Optional Description */}
        <TextArea
          label="Description (optional)"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <AppButton
            type="button"
            text="Discard"
            onClick={() => {
              setFormData({
                categoryName: "",
                description: "",
              });
              setSelectedType(null);
              setErrors({});
              document.getElementById("category-form").reset();
            }}
            bg="bg-[#F0F1F3]"
            color="text-black"
            className="border border-[#F0F1F3] hover:bg-gray-200"
            disabled={isPending}
          />

          <AppButton
            type="submit"
            text={isPending ? "Adding..." : "Add Category"}
            bg="bg-[#1366D9]"
            color="text-white"
            className="hover:bg-blue-700"
            disabled={isPending}
          />
        </div>
      </form>
    </MainCard>
  );
}
