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
    date: "02/03/2024",
    terminalModel: "A92 PRO",
    serialNumber: "TM2405789321",
    status: "Active",
    deliveryAddressType: "Business",
    priority: "High",
    deliveryChannel: "Courier",
    podRef: "POD34521",
    note: "Delivered to reception"
  },
  {
    id: 2,
    date: "15/03/2024",
    terminalModel: "A95 MAX",
    serialNumber: "TM2405123456",
    status: "Pending",
    deliveryAddressType: "Residential",
    priority: "Medium",
    deliveryChannel: "Royal Mail",
    podRef: "POD78932",
    note: "Leave with neighbor if unavailable"
  },
  {
    id: 3,
    date: "22/03/2024",
    terminalModel: "A88 LITE",
    serialNumber: "TM2406543210",
    status: "In Transit",
    deliveryAddressType: "Business",
    priority: "Low",
    deliveryChannel: "DPD",
    podRef: "POD45678",
    note: "Requires signature"
  },
  {
    id: 4,
    date: "01/04/2024",
    terminalModel: "A92 PRO",
    serialNumber: "TM2407891234",
    status: "Delivered",
    deliveryAddressType: "Residential",
    priority: "High",
    deliveryChannel: "Courier",
    podRef: "POD56789",
    note: "Delivered to mailbox"
  },
  {
    id: 5,
    date: "10/04/2024",
    terminalModel: "A95 MAX",
    serialNumber: "TM2408765432",
    status: "Active",
    deliveryAddressType: "Business",
    priority: "Medium",
    deliveryChannel: "Royal Mail",
    podRef: "POD12345",
    note: "Installation scheduled"
  },
  {
    id: 6,
    date: "15/04/2024",
    terminalModel: "A88 LITE",
    serialNumber: "TM2409876543",
    status: "Pending",
    deliveryAddressType: "Residential",
    priority: "Low",
    deliveryChannel: "DPD",
    podRef: "POD23456",
    note: "Contact customer before delivery"
  },
  {
    id: 7,
    date: "20/04/2024",
    terminalModel: "A92 PRO",
    serialNumber: "TM2410234567",
    status: "In Transit",
    deliveryAddressType: "Business",
    priority: "High",
    deliveryChannel: "Courier",
    podRef: "POD34567",
    note: "Deliver during business hours"
  },
  {
    id: 8,
    date: "30/04/2024",
    terminalModel: "A95 MAX",
    serialNumber: "TM2411345678",
    status: "Delivered",
    deliveryAddressType: "Residential",
    priority: "Medium",
    deliveryChannel: "Royal Mail",
    podRef: "POD45612",
    note: "Left at secure location"
  }
];

function MyTerminalTable() {
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
          My Terminals
        </h2>
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex items-center w-full md:w-auto gap-2">
            {/* <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md px-4 py-2 pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <Search width={20} height={20} color="#C4C4C4" />
              </div>
            </div> */}
            <div className="relative w-full md:w-64 mr-8">
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
            filterName=""
            filterOptions={["Status", "Delivery Channel", "Priority"]}
          />
        </div>
      </div>
      <div className="relative overflow-visible rounded-md">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <TableHead heads={["Action", "Date", "Terminal Model", "Serial Number", "Status", "Delivery Address Type", "Priority", "Delivery Channel", "POD Ref", "Note"]} />
                
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
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.terminalModel}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.serialNumber}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.status}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.deliveryAddressType}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.priority}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.deliveryChannel}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.podRef}
                </td>
                <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                  {item.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyTerminalTable;
