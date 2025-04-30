"use client";
import React from "react";

const SingleProductView = ({ product }) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-800">
      <div>
        <div className="font-medium text-primary">Product Type</div>
        <div className="text-secondary">{product.productType}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Product Category</div>
        <div className="text-secondary">{product.category}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Product Model</div>
        <div className="text-secondary">{product.model}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Product Serial Number</div>
        <div className="text-secondary">{product.serialNumber}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Product Condition</div>
        <div className="text-secondary">{product.condition}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Supplier</div>
        <div className="text-secondary">{product.supplier}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Invoice Number</div>
        <div className="text-secondary">{product.invoiceNumber}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Price</div>
        <div className="text-secondary">{product.price}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Order Status</div>
        <div className="text-secondary">{product.orderStatus}</div>
      </div>
      <div>
        <div className="font-medium text-primary">Entry Date</div>
        <div className="text-secondary">{product.entryDate}</div>
      </div>
    </div>
  );
};

export default SingleProductView;
