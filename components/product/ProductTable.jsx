"use client";

import { EllipsisVertical } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import TableActionMenu from "../ui/TableActionMenu";
import { useState } from "react";
import ProductOverviewModal from "./ProductOverviewModal";

export default function ProductTable({ products }) {
  const [openIndex, setOpenIndex] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F5F5F5]">
            <TableHead className="text-center">Action</TableHead>
            <TableHead>
              Model
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </TableHead>
            <TableHead className="text-center">Product Category</TableHead>
            <TableHead className="text-center">Stock</TableHead>
            <TableHead className="flex items-center justify-center gap-1">
              Low Stock Threshold
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </TableHead>
            {/* <TableHead>
            Price
           
          </TableHead>
          <TableHead>
            Supplier
           
          </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">
                <TableActionMenu
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  onView={() => {
                    setSelectedProduct(product);
                    setShowModal(true);
                  }}
                  onEdit={() => console.log("Edit item")}
                  onDelete={() => console.log("Delete item")}
                  onClose={() => setOpenIndex(null)}
                />
              </TableCell>
              <TableCell className="flex items-center">{product.id}</TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.stock}</TableCell>
              <TableCell className="text-center">
                {product.lowStockThreshold}
              </TableCell>
              {/* <TableCell>{product.price}</TableCell>
            <TableCell>{product.supplier}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ProductOverviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </>
  );
}
