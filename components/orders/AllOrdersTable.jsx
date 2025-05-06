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
    orderId: "ORD-0123456",
    orderDate: "12/05/2024",
    tradingName: "ABC Electronics",
    status: "Pending",
    priority: "Urgent",
    bdmEmail: "bdm1@example.com",
  },
  {
    id: 2,
    orderId: "ORD-0789123",
    orderDate: "15/05/2024",
    tradingName: "Tech Solutions Ltd",
    status: "Processing",
    priority: "Normal",
    bdmEmail: "bdm2@example.com",
  },
  {
    id: 3,
    orderId: "ORD-0456789",
    orderDate: "20/05/2024",
    tradingName: "Global Retail Inc",
    status: "Completed",
    priority: "Low",
    bdmEmail: "bdm3@example.com",
  },
  {
    id: 4,
    orderId: "ORD-0987654",
    orderDate: "22/05/2024",
    tradingName: "Quick Mart",
    status: "Pending",
    priority: "High",
    bdmEmail: "bdm4@example.com",
  },
  {
    id: 5,
    orderId: "ORD-0654321",
    orderDate: "25/05/2024",
    tradingName: "Food Express",
    status: "Processing",
    priority: "Normal",
    bdmEmail: "bdm5@example.com",
  },
  {
    id: 6,
    orderId: "ORD-0321654",
    orderDate: "28/05/2024",
    tradingName: "City Pharmacy",
    status: "Completed",
    priority: "Low",
    bdmEmail: "bdm6@example.com",
  },
  {
    id: 7,
    orderId: "ORD-0147258",
    orderDate: "30/05/2024",
    tradingName: "Fashion Hub",
    status: "Pending",
    priority: "High",
    bdmEmail: "bdm7@example.com",
  },
  {
    id: 8,
    orderId: "ORD-0963852",
    orderDate: "02/06/2024",
    tradingName: "Coffee Corner",
    status: "Completed",
    priority: "Normal",
    bdmEmail: "bdm8@example.com",
  },
];

// Function to get priority badge color
const getPriorityBadgeColor = (priority) => {
  switch (priority) {
    case "Urgent":
      return "bg-[#F13016] text-white";
    case "High":
      return "bg-[#FFAA3A] text-white";
    case "Normal":
      return "bg-[#2B98FF] text-white";
    case "Low":
      return "bg-[#858D9D] text-white";
    default:
      return "bg-[#858D9D] text-white";
  }
};

export default function AllOrdersTable({ tableTitle }) {
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
            filterOptions={["Status", "Priority"]}
          />
        </div>
      </div>
      <div className="overflow-auto rounded-md">
        <div className="min-w-full rounded-md">
          <table className="min-w-full text-sm text-left">
            <TableHead
              heads={[
                "Action",
                "Order ID",
                "OrderDate",
                "Trading Name",
                "Status",
                "Priority",
                "BDM Email",
              ]}
            />
            <tbody className="divide-y divide-gray-100 text-gray-700 text-center">
              {data.map((item, i) => (
                <tr key={i} className="border-b border-[#D9D9D9]">
                  <td className="px-4 py-2 flex justify-center relative z-10">
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
                    {item.orderId}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.orderDate}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.tradingName}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.status}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${getPriorityBadgeColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.bdmEmail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

