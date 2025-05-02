"use client";

import React, { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";
import DateRangePicker from "@/components/ui/DateRangePicker";
import FilterButton from "@/components/ui/FilterButton";
import TableHead from "@/components/ui/TableHead";

const data = [
  {
    id: 1,
    date: "12/05/2024",
    serialNumber: "PS0123456789",
    model: "A92 PRO",
    type: "Terminal",
    category: "SIM",
    reason: "Display Issue",
    status: "Damaged"
  },
  {
    id: 2,
    date: "15/05/2024",
    serialNumber: "PS9876543210",
    model: "A95 MAX",
    type: "Accessories",
    category: "Charging Base",
    reason: "Battery Failure",
    status: "Lost"
  },
  {
    id: 3,
    date: "20/05/2024",
    serialNumber: "PS5432167890",
    model: "A92 PRO",
    type: "Terminal",
    category: "Bluetooth Base",
    reason: "Port Damage",
    status: "Damaged"
  },
  {
    id: 4,
    date: "22/05/2024",
    serialNumber: "PS1234098765",
    model: "A95 MAX",
    type: "Accessories",
    category: "SIM",
    reason: "Missing Component",
    status: "Lost"
  },
  {
    id: 5,
    date: "25/05/2024",
    serialNumber: "PS8765432109",
    model: "A92 PRO",
    type: "Terminal",
    category: "Charging Base",
    reason: "Water Damage",
    status: "Damaged"
  },
  {
    id: 6,
    date: "28/05/2024",
    serialNumber: "PS2345678901",
    model: "A90 LITE",
    type: "Accessories",
    category: "Bluetooth Base",
    reason: "Theft",
    status: "Lost"
  },
  {
    id: 7,
    date: "30/05/2024",
    serialNumber: "PS3456789012",
    model: "A92 PRO",
    type: "Terminal",
    category: "SIM",
    reason: "Screen Cracked",
    status: "Damaged"
  },
  {
    id: 8,
    date: "02/06/2024",
    serialNumber: "PS4567890123",
    model: "A95 MAX",
    type: "Accessories",
    category: "Charging Base",
    reason: "Misplaced",
    status: "Lost"
  }
];

function DamageLostProductsTable({ tableTitle }) {
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
              "Model",
              "Product Type",
              "Product Category",
              "Reason",
              "Product Status",
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
                <td className="px-4 py-2 whitespace-nowrap text-[#48505E] font-medium text-xs">
                  {item.date}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs ">
                  {item.serialNumber}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs     ">
                  {item.model}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.type}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.category}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.reason}
                </td>
                <td className="px-4 py-2">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DamageLostProductsTable;
