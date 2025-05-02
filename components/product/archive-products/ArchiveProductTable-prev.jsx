"use client";

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
import SingleProductOverView from "../single-products/SingleProductOverview";
// import SingleProductOverView from "./SingleProductOverview";

// Badge component for product condition
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
    case "Use":
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

export default function ArchiveProductTable({ products }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleDelete = async (product) => {
    const result = await Swal.fire({
      title: `Delete ${product.model}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      Swal.fire("Deleted!", `${product.model} has been deleted.`, "success");
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F5F5F5]">
            {[
              "Action",
              "Date",
              "Product Category",
              "Product Model",
              "Product Name",
              "Serial Number",
              "Product Serial Number",
              "Product Condition",
              "Supplier Name",
              "Invoice Number",
              "Price",
            ].map((heading, idx) => (
              <TableHead key={idx} className="text-center whitespace-nowrap">
                {heading}
              </TableHead>
            ))}
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
              </TableCell>
              <TableCell className="text-center">{product.date}</TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.model}</TableCell>
              <TableCell className="text-center">{product.name}</TableCell>
              <TableCell className="text-center">
                {product.hasSerial ? "Yes" : "No"}
              </TableCell>
              <TableCell className="text-center">{product.serialNumber}</TableCell>
              <TableCell className="text-center">
                {getConditionBadge(product.condition)}
              </TableCell>
              <TableCell className="text-center">{product.supplier}</TableCell>
              <TableCell className="text-center">{product.invoice}</TableCell>
              <TableCell className="text-center">{product.price}</TableCell>
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
