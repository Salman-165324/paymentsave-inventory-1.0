"use client";

import React, { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";
import DateRangePicker from "@/components/ui/DateRangePicker";
import FilterButton from "@/components/ui/FilterButton";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie White", email: "charlie@example.com" },
];

function TerminalAssignTable() {
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
          Terminal Assigned
        </h2>
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex items-center w-full md:w-auto gap-2">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md px-4 py-2 pr-10 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* 🔍 Search Icon Placeholder */}
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                {/* Search Icon */}
                <Search width={20} height={20} color="#C4C4C4" />
              </div>
            </div>
            {/* <div className="relative w-full md:w-64">
              
              <DateRangePicker onRangeChange={handleRangeChange} />
            </div> */}
          </div>
          {/* <FilterButton
            filterName="Product status"
            filterOptions={["Damaged", "Lost"]}
          /> */}
        </div>
      </div>
      <div className="relative overflow-visible rounded-md">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600">
            <tr className="border-b border-[#D9D9D9]">
              <th className="px-4 py-2 font-medium">Action</th>
              <th className="px-4 py-2 font-medium flex items-center gap-1">
                Username
              </th>
              <th className="px-4 py-2 font-medium">Terminals Count</th>
              <th className="px-4 py-2 font-medium">Phone</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Image</th>
            </tr>
          </thead>
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
                
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs     ">
                  A92{i} PRO
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {i % 2 === 0 ? "Terminal" : "Accessories"}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {["SIM", "Charging Base", "Bluetooth Base"][i % 3]}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
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

export default TerminalAssignTable;
