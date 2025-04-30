"use client";
import InputField from "@/components/ui/InputField";
import React from "react";
// import InputField from "../ui/InputField";

const SingleProductEdit = ({ formData, handleInputChange }) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-800">
      <InputField label="Product Type" name="productType" value={formData.productType} onChange={handleInputChange} />
      <InputField label="Product Category" name="category" value={formData.category} onChange={handleInputChange} />
      <InputField label="Product Model" name="model" value={formData.model} onChange={handleInputChange} readOnly />
      <InputField label="Product Serial Number" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} />
      <InputField label="Product Condition" name="condition" value={formData.condition} onChange={handleInputChange} />
      <InputField label="Supplier" name="supplier" value={formData.supplier} onChange={handleInputChange} />
      <InputField label="Invoice Number" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleInputChange} />
      <InputField label="Price" name="price" type="text" value={formData.price} onChange={handleInputChange} />
      <InputField label="Order Status" name="orderStatus" value={formData.orderStatus} onChange={handleInputChange} />
      <InputField label="Entry Date" name="entryDate" type="date" value={formData.entryDate} onChange={handleInputChange} />
    </div>
  );
};

export default SingleProductEdit;
