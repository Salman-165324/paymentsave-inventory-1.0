// SupplierViewEdit.tsx
"use client";

import React, { useState, useEffect } from "react";
import { SquarePen } from "lucide-react";
import InputField from "../ui/InputField"; // assumes InputField component is available
import { Dialog } from "@headlessui/react";
import TextArea from "../ui/TextArea";

const SupplierViewEdit = ({
  isOpen,
  onClose,
  supplier,
  initialEditMode = false,
}) => {
    console.log("SupplierViewEdit", supplier);
  const [isEditing, setIsEditing] = useState(initialEditMode);
  const [formData, setFormData] = useState({
    name: supplier?.name || "",
    email: supplier?.email || "",
    phone: supplier?.phone || "",
    address: supplier?.address || "",
    description: supplier?.description || "",
    date: supplier?.date || "12/02/2025",
  });

  useEffect(() => {
    setIsEditing(initialEditMode);
  }, [initialEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiscard = () => {
    setFormData({ ...supplier });
    setIsEditing(false);
  };

  const handleSave = () => {
    onSave?.(formData);
    setIsEditing(false);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-[700px] rounded-md bg-white p-6 shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-[-10] right-[-5] w-6 h-6 bg-red-500 text-white text-sm rounded-full flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>
          <div className="flex gap-2 items-center mb-5">
            <div className="text-base font-semibold">
              {isEditing ? "Supplier" : "Supplier View"}
            </div>
            {!isEditing && (
              <SquarePen
                size={16}
                className="text-gray-500 cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
            )}
          </div>

          {isEditing ? (
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                label="Phone No"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <InputField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <TextArea
              
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
              <div>
                <div className="font-medium text-primary">Name</div>
                <div className="text-secondary">{formData.name}</div>
              </div>
              <div>
                <div className="font-medium text-primary">Phone No</div>
                <div className="text-secondary">{formData.phone}</div>
              </div>
              <div>
                <div className="font-medium text-primary">Email Address</div>
                <div className="text-secondary">{formData.email}</div>
              </div>
              <div>
                <div className="font-medium text-primary">Address</div>
                <div className="text-secondary">{formData.address}</div>
              </div>
              <div>
                <div className="font-medium text-primary">
                  Description (optional)
                </div>
                <div className="text-secondary">{formData.description}</div>
              </div>
              <div>
                <div className="font-medium text-primary">Date</div>
                <div className="text-secondary">{formData.date}</div>
              </div>
            </div>
          )}

          {isEditing && (
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={handleDiscard}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Discard
              </button>
              <button
                onClick={onclose}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SupplierViewEdit;
