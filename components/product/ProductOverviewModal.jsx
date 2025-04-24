"use client";

import React from "react";
import { Dialog } from "@headlessui/react";

const ProductOverviewModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Centered Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-3xl rounded-md bg-white p-6 shadow-xl relative">
          {/* Close (X) Button - inside panel */}
          <button
            onClick={onClose}
            className="absolute top-[-9] right-[-7] w-6 h-6 bg-red-500 text-white text-sm rounded-full flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>

          {/* Title */}
          <Dialog.Title className="text-base font-semibold mb-5 text-gray-900">
            Products Overview (Model Wise)
          </Dialog.Title>

          {/* Field Layout */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-800">
            <div>
              <div className="font-medium text-primary">Model</div>
              <div className="text-secondary">{ "A920 PRO"}</div>
            </div>
            <div>
              <div className="font-medium text-primary">Product Type</div>
              <div className="text-secondary">
                {"Terminal"}
              </div>
            </div>
            <div>
              <div className="font-medium text-primary">Product Category</div>
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
              <div className="text-secondary">{product.lowStockThreshold}</div>
            </div>
          </div>

          {/* Bottom Close Button */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProductOverviewModal;
