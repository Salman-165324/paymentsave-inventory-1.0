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
    date: "02/05/2024",
    serialNumber: "154782143241",
    productType: "A921 PRO",
    productCategory: "Terminal",
    model: "SIM",
    repairReason: "Display Issue",
    status: "Damaged"
  },
  {
    id: 2,
    date: "03/15/2024",
    serialNumber: "987654321098",
    productType: "A922 LITE",
    productCategory: "Accessories",
    model: "Charging Base",
    repairReason: "Battery Failure",
    status: "Lost"
  },
  {
    id: 3,
    date: "01/20/2024",
    serialNumber: "456789012345",
    productType: "B100 MAX",
    productCategory: "Terminal",
    model: "Bluetooth Base",
    repairReason: "Port Damage",
    status: "Damaged"
  },
  {
    id: 4,
    date: "04/10/2024",
    serialNumber: "123456789012",
    productType: "A925 MINI",
    productCategory: "Accessories",
    model: "SIM",
    repairReason: "Screen Cracked",
    status: "Lost"
  },
  {
    id: 5,
    date: "03/27/2024",
    serialNumber: "567890123456",
    productType: "C200 PRO",
    productCategory: "Terminal",
    model: "Charging Base",
    repairReason: "Power Issue",
    status: "Damaged"
  },
  {
    id: 6,
    date: "02/18/2024",
    serialNumber: "345678901234",
    productType: "B150 LITE",
    productCategory: "Accessories",
    model: "Bluetooth Base",
    repairReason: "Button Malfunction",
    status: "Lost"
  },
  {
    id: 7,
    date: "05/02/2024",
    serialNumber: "234567890123",
    productType: "A930 MAX",
    productCategory: "Terminal",
    model: "SIM",
    repairReason: "Connectivity Problem",
    status: "Damaged"
  },
  {
    id: 8,
    date: "04/15/2024",
    serialNumber: "678901234567",
    productType: "D300 PRO",
    productCategory: "Accessories",
    model: "Charging Base",
    repairReason: "Software Issue",
    status: "Lost"
  }
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
      <div className="relative overflow-auto rounded-md">
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
              "Status"
            ]}
          />
          <tbody className="divide-y divide-gray-100 text-gray-700 text-center">
            {data.map((item, i) => (
              <tr key={i} className="border-b border-[#D9D9D9]">
                <td className="px-4 py-2 flex justify-center">
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
                <td className="px-4 py-2 whitespace-nowrap">{item.date}</td>
                <td className="px-4 py-2">{item.serialNumber}</td>
                <td className="px-4 py-2">{item.productType}</td>
                <td className="px-4 py-2">{item.productCategory}</td>
                <td className="px-4 py-2">{item.model}</td>
                <td className="px-4 py-2">{item.repairReason}</td>
                <td className="px-4 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InRepairTable;
