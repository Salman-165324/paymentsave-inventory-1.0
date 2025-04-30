// AllSupplierTable.tsx
"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import TableActionMenu from "@/components/ui/TableActionMenu";
import Swal from "sweetalert2";
import SupplierViewEdit from "./SupplierViewEdit";

const AllSupplierTable = ({ suppliers }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDelete = async (supplier) => {
    const res = await Swal.fire({
      title: `Delete ${supplier.name}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (res.isConfirmed) {
      Swal.fire("Deleted!", `${supplier.name} has been removed.`, "success");
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F5F5F5]">
            <TableHead className="text-center">Action</TableHead>
            <TableHead>Supplier Name</TableHead>
            <TableHead>Phone No</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier, index) => (
            <TableRow key={supplier.id}>
              <TableCell className="text-center">
                <TableActionMenu
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  onView={() => {
                    setSelectedProduct(supplier);
                    setEditMode(false);
                    setShowModal(true);
                  }}
                  onEdit={() => {
                    setSelectedProduct(supplier);
                    setEditMode(true);
                    setShowModal(true);
                  }}
                  onDelete={() => handleDelete(supplier)}
                  onClose={() => setOpenIndex(null)}
                />
              </TableCell>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.phone}</TableCell>
              <TableCell>{supplier.email}</TableCell>
              <TableCell>{supplier.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SupplierViewEdit
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        supplier={selectedProduct}
        initialEditMode={editMode}
      />
    </>
  );
};

export default AllSupplierTable;
