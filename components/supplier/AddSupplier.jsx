"use client";

import React, { useState } from "react";
import InputField from "@/components/ui/InputField";
import TextArea from "@/components/ui/TextArea";
import AppButton from "@/components/ui/AppButton";
import MainCard from "../ui/MainCard";
// import MainCard from "@/components/ui/MainCard";

const AddSupplier = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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
    <MainCard title="Add Supplier" className="max-w-3xl mx-auto">
      <form className="space-y-4 text-sm max-w-[500px]" onSubmit={handleSubmit}>
        {/* Supplier Name */}
        <InputField
          label="Supplier Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter supplier name"
          required
        />

        {/* Supplier Email */}
        <InputField
          label="Supplier Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter supplier email"
          required
        />

        {/* Supplier Phone */}
        <InputField
          label="Supplier Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter supplier phone"
          required
        />

        {/* Supplier Address */}
        <InputField
          label="Supplier Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter supplier address"
          required
        />

        {/* Optional Description */}
        <TextArea
          label="Description (optional)"
          name="description"
          placeholder="Enter a short note"
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
                name: "",
                email: "",
                phone: "",
                address: "",
                description: "",
              })
            }
            bg="bg-[#F0F1F3]"
            color="text-black"
            className="border border-[#F0F1F3] hover:bg-gray-200"
          />

          <AppButton
            type="submit"
            text="Add Supplier"
            bg="bg-[#1366D9]"
            color="text-white"
            className="hover:bg-blue-700"
          />
        </div>
      </form>
    </MainCard>
  );
};

export default AddSupplier;
