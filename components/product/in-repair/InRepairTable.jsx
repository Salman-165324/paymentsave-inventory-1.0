"use client";

import React, { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";
import DateRangePicker from "@/components/ui/DateRangePicker";
import FilterButton from "@/components/ui/FilterButton";
import TableHead from "@/components/ui/TableHead";
const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie White", email: "charlie@example.com" },
];

function InRepairTable({ tableTitle }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id); // Toggle dropdown for each row
  };

  const handleCloseDropdown = () => {
    setOpenDropdownId(null); // Close dropdown when clicking outside
  };

  const handleRangeChange = (formatted, startDate, endDate) => {
    console.log(formatted, startDate, endDate);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#383E49] mb-4">
          {tableTitle}
        </h2>
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex items-center w-full md:w-auto gap-2 mr-8">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md px-4 py-2 pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* 🔍 Search Icon Placeholder */}
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {/* Search Icon */}
                <Search width={20} height={20} color="#C4C4C4" />
              </div>
            </div>
            <div className="relative w-full md:w-64">
              {/* <input
                  type="text"
                  placeholder="01/08/2024 - 10/09/2024"
                  className="w-full border rounded-md px-4 py-2 pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  <Calendar width={20} height={20} color="#C4C4C4" />
                </div> */}
              <DateRangePicker onRangeChange={handleRangeChange} />
            </div>
          </div>
          <FilterButton
            filterName="Product status"
            filterOptions={["Damaged", "Lost"]}
          />
        </div>
      </div>
      <div className="relative overflow-visible rounded-md">
        <table className="min-w-full text-sm text-left">
          <TableHead
            heads={[
              "Action",
              "Date",
              "Product Serial Number",
              "Product Type",
              "Product Category",
              "Model",
              "Repair Reason",
            ]}
          />
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {data.map((item, i) => (
              <tr key={i} className="border-b border-[#D9D9D9]">
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
                <td className="px-4 py-2">
                  {i % 2 === 0 ? "Damaged" : "Lost"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InRepairTable;
