"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { SquarePen } from "lucide-react";
import SingleProductView from "./SingleProductView";
import SingleProductEdit from "./SingleProductEdit";

const SingleProductOverView = ({
  isOpen,
  onClose,
  product,
  initialEditMode = false,
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);
  const [formData, setFormData] = useState({
    model: product?.model || "",
    serialNumber: product?.serialNumber || "",
    productType: product?.productType || "",
    category: product?.category || "",
    condition: product?.condition || "",
    supplier: product?.supplier || "",
    price: product?.price || "",
    entryDate: product?.entryDate || "",
    invoiceNumber: product?.invoiceNumber || "",
    orderStatus: product?.orderStatus || "",
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

  const handleEditClick = () => setIsEditing(true);

  const handleDiscard = () => {
    setFormData({ ...product });
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Updated:", formData);
    setIsEditing(false);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-[800px] rounded-md bg-white p-6 shadow-xl relative">
        <button
            onClick={onClose}
            className="absolute top-[-10] right-[-5] w-6 h-6 bg-red-500 text-white text-sm rounded-full flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>

          <Dialog.Title className="text-base font-semibold mb-5 text-gray-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isEditing
                ? "Single Terminals Edit"
                : "Single Terminals Overview"}
              {!isEditing && (
                <SquarePen
                  color="#616262"
                  size={16}
                  className="cursor-pointer"
                  onClick={handleEditClick}
                />
              )}
            </div>
            {!isEditing && (
              <button className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded">
                History
              </button>
            )}
          </Dialog.Title>

          {isEditing ? (
            <SingleProductEdit
              formData={formData}
              handleInputChange={handleInputChange}
            />
          ) : (
            <SingleProductView product={product} />
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
                onClick={handleSave}
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

export default SingleProductOverView;
