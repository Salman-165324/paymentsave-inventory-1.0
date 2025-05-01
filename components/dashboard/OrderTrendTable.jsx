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
  { id: 6, name: "David Green", email: "david@example.com" },
  { id: 7, name: "Eve Black", email: "eve@example.com" },
  { id: 8, name: "Frank Blue", email: "frank@example.com" },
  { id: 9, name: "George Yellow", email: "george@example.com" },
  { id: 10, name: "Helen Purple", email: "helen@example.com" },
];

function OrderTrendTable({ className }) {
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

  const count = 5030;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
        <h2 className="text-[28px] font-medium text-[#41A1D3] mb-4">
          Order Trend
        </h2>
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex flex-col lg:flex-row items-center w-full md:w-auto gap-2">
            <div className="flex items-center w-full lg:w-96 h-[40px] rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex">
                <div className="bg-[#41A1D3] w-[75%] h-full"></div>
                <div className="bg-[#FF8A4C] w-[25%] h-full"></div>
              </div>
              <div className="absolute h-full w-12 left-[63%] overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-14 bg-[#FF8A4C] rounded-tl-full"></div>
              </div>
              <div className="relative z-10 flex w-full">
                <div className="flex-1 p-4 text-[#F0F1F3] text-sm md:text-xl font-medium">
                  Total Order Count
                </div>
                <div className="p-4 text-[#F0F1F3] text-sm md:text-xl font-bold">
                  {count}
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-64 mr-4 ml-4 lg:mr-10 lg:ml-4">
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
            filterOptions={["Accessories", "Terminal"]}
          />
        </div>
      </div>
      <div className="rounded-md border-y border-gray-200 overflow-auto max-h-64">
        <table className="min-w-full text-sm text-center">
          <thead className={`text-[#667085] font-semibold text-sm bg-[#F5F5F5] sticky top-0 z-10 py-4 ${className}`}>
            <tr className="border-b border-[#D9D9D9]">
              <th className="px-4 py-2 font-medium">Product Model</th>
              <th className="px-4 py-2 font-medium">Product Type</th>
              <th className="px-4 py-2 font-medium">Order Count</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {data.map((item, i) => (
              <tr key={i} className="border-b border-[#D9D9D9] py-4 text-sm font-medium">
                
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  154782143241
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  A92{i} PRO
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {i +1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderTrendTable;
