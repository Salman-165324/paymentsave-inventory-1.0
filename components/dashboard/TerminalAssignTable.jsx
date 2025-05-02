"use client";

import React, { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";
import DateRangePicker from "@/components/ui/DateRangePicker";
import FilterButton from "@/components/ui/FilterButton";

const demoUsers = [
  {
    id: 1,
    username: "john_doe",
    terminals: 3,
    phone: "+1 (555) 123-4567",
    email: "john@example.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    username: "jane_smith",
    terminals: 5,
    phone: "+1 (555) 234-5678",
    email: "jane@example.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    username: "mike_lee",
    terminals: 2,
    phone: "+1 (555) 345-6789",
    email: "mike@example.com",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 4,
    username: "Alex",
    terminals: 3,
    phone: "+1 (555) 123-4567",
    email: "john@example.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    username: "John",
    terminals: 3,
    phone: "+1 (555) 123-4567",
    email: "john@example.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
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
        <table className="min-w-full text-sm text-center">
          <thead className="text-sm">
            <tr className="border-b border-[#8E92BC]">
              <th className="px-4 py-2 font-medium text-center text-[#141522] ">Action</th>
              <th className="px-4 py-2 font-medium text-[#141522]  flex items-center gap-1 justify-center">
                Username
              </th>
              <th className="px-4 py-2 font-medium text-[#141522]  text-center">
                Terminals Count
              </th>
              <th className="px-4 py-2 font-medium text-[#141522]  text-center">Phone</th>
              <th className="px-4 py-2 font-medium text-[#141522]  text-center">Email</th>
              <th className="px-4 py-2 font-medium text-[#141522]  text-center">Image</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 text-center">
            {demoUsers.map((item, i) => (
              <tr key={i} className="border-b border-[#D9D9D9]">
                <td className="px-4 py-2 text-center">
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

                <td className="px-4 py-2 text-[#54577A] font-normal text-sm text-center">
                  {item.username}
                </td>
                <td className="px-4 py-2 text-[#141522] font-normal text-sm text-center">
                  {item.terminals}
                </td>
                <td className="px-4 py-2 text-[#141522] font-normal text-sm text-center">
                  {item.phone}
                </td>
                <td className="px-4 py-2 text-[#141522] font-normal text-sm text-center">
                  {item.email}
                </td>
                <td className="px-4 py-2 text-center">
                  <img
                    src={item.image}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border border-[#D9D9D9] mx-auto"
                  />
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
