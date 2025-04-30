'use client'

import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie White", email: "charlie@example.com" },
];

function InRepairTable() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id); // Toggle dropdown for each row
  };  

  const handleCloseDropdown = () => {
    setOpenDropdownId(null); // Close dropdown when clicking outside
  };

  return (
    <div className="overflow-auto rounded-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="px-4 py-2 font-medium">Action</th>
            <th className="px-4 py-2 font-medium flex items-center gap-1">
              Date ⇅
            </th>
            <th className="px-4 py-2 font-medium">Product Serial Number</th>
            <th className="px-4 py-2 font-medium">Model</th>
            <th className="px-4 py-2 font-medium">Product Type</th>
            <th className="px-4 py-2 font-medium">Product Category</th>
            <th className="px-4 py-2 font-medium">Reason</th>
            <th className="px-4 py-2 font-medium">Product Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {data.map((item, i) => (
            <tr key={i}>
              <td className="px-4 py-2">
                {/* <button className="text-blue-600 bg-[#19499A] rounded-full p-1">
                    <EllipsisVertical width={20} height={20} color="#FFFFFF" />
                </button> */}
                <TableActionMenu
                  onView={() => console.log(`View item ${item.id}`)}
                  onEdit={() => console.log(`Edit item ${item.id}`)}
                  onDelete={() => console.log(`Delete item ${item.id}`)}
                  isOpen={openDropdownId === item.id}
                  onToggle={() => handleToggleDropdown(item.id)}
                  onClose={handleCloseDropdown}
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap">02/02/2025</td>
              <td className="px-4 py-2">154782143241</td>
              <td className="px-4 py-2">A92{i} PRO</td>
              <td className="px-4 py-2">
                {i % 2 === 0 ? "Terminal" : "Accessories"}
              </td>
              <td className="px-4 py-2">
                {["SIM", "Charging Base", "Bluetooth Base"][i % 3]}
              </td>
              <td className="px-4 py-2">
                {["Display Issue", "Battery Failure", "Port Damage"][i % 3]}
              </td>
              <td className="px-4 py-2">{i % 2 === 0 ? "Damaged" : "Lost"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InRepairTable;
