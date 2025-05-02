"use client";

import { EllipsisVertical } from "lucide-react";
import { ChevronRight } from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import { useState } from "react";
import Swal from "sweetalert2";
import TableActionMenu from "@/components/ui/TableActionMenu";
import SingleProductOverView from "./SingleProductOverview";

// Sort icon (up/down double arrow)
const SortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block ml-1 text-gray-500"
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
);

// Badge helpers
const getOrderStatusBadge = (status) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-xs font-semibold text-white rounded-full";

  switch (status) {
    case "Processing":
      return `${base} bg-blue-500`;
    case "Awaiting Shipment":
      return `${base} bg-green-600`;
    case "Live Base":
      return `${base} bg-red-500`;
    case "On Hold":
      return `${base} bg-orange-400`;
    default:
      return `${base} bg-gray-300 text-gray-800`;
  }
};

const getConditionBadge = (condition) => {
  const base =
    "inline-flex items-center justify-between gap-1 px-2 py-1 text-xs font-medium text-white rounded";

  switch (condition) {
    case "New":
      return (
        <span className={`${base} bg-green-500`}>
          New <ChevronRight size={16} color="white" />
        </span>
      );
    case "Used":
      return (
        <span className={`${base} bg-blue-500`}>
          Used <ChevronRight size={16} />
        </span>
      );
    default:
      return (
        <span className={`${base} bg-gray-400`}>
          Unknown <ChevronRight size={16} />
        </span>
      );
  }
};

export default function ProductTable({ products }) {
  const [openIndex, setOpenIndex] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleDelete = async (product) => {
    const result = await Swal.fire({
      title: `Delete ${product.serialNumber}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      // Call backend or parent callback
      // onDeleteProduct?.(product);

      Swal.fire("Deleted!", `${product.model} has been deleted.`, "success");
    }
  };
  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F5F5F5]">
            <TableHead className="text-center">
              <div className="flex justify-center items-center whitespace-nowrap">
                Action
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Entry Date <SortIcon />
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Serial Number
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Model
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Status
              </div>
            </TableHead>

            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                TID
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Product Condition
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Product Category
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                MID
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex justify-center items-center gap-x-1 whitespace-nowrap">
                Supplier
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto">
                  <TableActionMenu
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                    onView={() => {
                      setSelectedProduct(product);
                      setEditMode(false);
                      setShowModal(true);
                    }}
                    onEdit={() => {
                      setSelectedProduct(product);
                      setEditMode(true);
                      setShowModal(true);
                    }}
                    onDelete={() => handleDelete(product)}
                    onClose={() => setOpenIndex(null)}
                  />
                </div>
              </TableCell>
              <TableCell className="text-center">{product.price}</TableCell>
              <TableCell className="text-center">
                {product.serialNumber}
              </TableCell>
              <TableCell className="text-center">{product.model}</TableCell>
              <TableCell className="text-center">
                <span className={getOrderStatusBadge(product.status)}>
                  {product.status}
                </span>
              </TableCell>

              <TableCell className="text-center">{product.tid}</TableCell>
              <TableCell className="text-center">
                {getConditionBadge(product.condition)}
              </TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.mid}</TableCell>
              <TableCell className="text-center">{product.supplier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SingleProductOverView
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
        initialEditMode={editMode}
      />
    </div>
  );
}
