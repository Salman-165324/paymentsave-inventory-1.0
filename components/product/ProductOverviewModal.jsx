"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { SquarePen } from "lucide-react";
import InputField from "../ui/InputField";

const ProductOverviewModal = ({
  isOpen,
  onClose,
  product,
  initialEditMode = false,
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);
  const [formData, setFormData] = useState({
    model: product?.model || "",
    lowStockThreshold: product?.lowStockThreshold || "",
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
      lowStockThreshold: product.lowStockThreshold,
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Updated data:", formData);
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

          {/* Title */}
          <Dialog.Title className="text-base font-semibold mb-5 text-gray-900">
            <div className="flex items-center gap-2">
              Edit Products (Model Wise)
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

          {/* Fields */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-800">
            {isEditing ? (
              <>
                <InputField
                  label={"Model"}
                  name={"model"}
                  value={"A920 PRO"}
                  onChange={handleInputChange}
                  placeholder={"Enter product model"}
                  readOnly={true}
                />

                <InputField
                  label={"Low Stock Threshold"}
                  name={"lowStockThreshold"}
                  value={formData.lowStockThreshold}
                  onChange={handleInputChange}
                  placeholder={"Enter low stock threshold"}
                  type="number"
                />
              </>
            ) : (
              <>
                <div>
                  <div className="font-medium text-primary">Model</div>
                  <div className="text-secondary">{"A920 PRO"}</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Product Type</div>
                  <div className="text-secondary">Terminal</div>
                </div>
                <div>
                  <div className="font-medium text-primary">
                    Product Category
                  </div>
                  <div className="text-secondary">{product.category}</div>
                </div>
                <div>
                  <div className="font-medium text-primary">Stock</div>
                  <div className="text-secondary">{product.stock}</div>
                </div>
                <div>
                  <div className="font-medium text-primary">
                    Low Stock Threshold
                  </div>
                  <div className="text-secondary">
                    {product.lowStockThreshold}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
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

export default ProductOverviewModal;
