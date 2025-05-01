"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { SquarePen } from "lucide-react";
import InputField from "@/components/ui/InputField";

const ModelOverview = ({
  isOpen,
  onClose,
  product,
  initialEditMode = false,
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);

  const [formData, setFormData] = useState({
    model: product?.model || "",
    lowStockThreshold: product?.threshold || "",
  });

  useEffect(() => {
    setIsEditing(initialEditMode);
  }, [initialEditMode]);

  if (!product) return null;

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDiscard = () => {
    setFormData({
      model: product.model,
      lowStockThreshold: product.threshold,
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Updated data:", formData);
    setIsEditing(false);
    // Add save logic (API call) here
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

          {/* Title */}
          <Dialog.Title className="text-base font-semibold mb-5 text-gray-900">
            <div className="flex items-center gap-2">
               Model Overview
              {!isEditing && (
                <SquarePen
                  color="#616262"
                  size={16}
                  className="cursor-pointer"
                  onClick={handleEditClick}
                />
              )}
            </div>
          </Dialog.Title>

          {/* Content */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-800">
            {isEditing ? (
              <>
                <InputField
                  label="Model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  readOnly={true}
                />
                <InputField
                  label="Low Stock Threshold"
                  name="lowStockThreshold"
                  value={formData.lowStockThreshold}
                  onChange={handleInputChange}
                  placeholder="Enter low stock threshold"
                  type="number"
                />
              </>
            ) : (
              <>
                <div>
                  <div className="font-medium text-[#48505E]">Model</div>
                  <div className="text-[#858D9D]">{product.model}</div>
                </div>
                <div>
                  <div className="font-medium text-[#48505E]">Product Category</div>
                  <div className="text-[#858D9D]">{product.category}</div>
                </div>
                <div>
                  <div className="font-medium text-[#48505E]">Stock</div>
                  <div className="text-[#858D9D]">{product.stock || "-"}</div>
                </div>
                <div>
                  <div className="font-medium text-[#48505E]">Low Stock Threshold</div>
                  <div className="text-[#858D9D]">{product.threshold}</div>
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          {isEditing && (
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={handleDiscard}
                className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
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

export default ModelOverview;
