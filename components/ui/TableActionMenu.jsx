"use client";

import { Menu } from "@headlessui/react";
import { EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useRef } from 'react';
export default function TableActionMenu({
  onView,
  onEdit,
  onDelete,
  isOpen,
  onToggle,onClose
}) {
    const menuRef = useRef();

    // Detect outside click
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
          onClose(); // close dropdown if click is outside
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);
  return (
    <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
      {/* Trigger Button */}
      <button
        className="w-8 h-8 bg-blue-600  cursor-pointer rounded-full text-white flex items-center justify-center hover:bg-blue-700 focus:outline-none transition"
        onClick={onToggle}
      >
        <EllipsisVertical size={18} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && 
      <div className="absolute left-10 top-[-25] border-0 border-none z-50 mt-3 w-44 origin-top-left rounded  shadow-xl bg-gray-100   focus:outline-none">
        <div className="flex flex-col py-1 text-sm font-medium text-gray-700">
          {/* View */}
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={onView}
                className={`flex items-center gap-2 px-4 py-2 transition-colors cursor-pointer ${
                  active ? "bg-gray-200" : ""
                }`}
              >
                <Eye size={16} />
                View
              </button>
            )}
          </Menu.Item>

          {/* Edit */}
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={onEdit}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors ${
                  active ? "bg-gray-200" : ""
                }`}
              >
                <Pencil size={16} />
                Edit
              </button>
            )}
          </Menu.Item>

          {/* Delete */}
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={onDelete}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors text-red-600 ${
                  active ? "bg-red-50 text-red-700" : ""
                }`}
              >
                <Trash2 size={16} />
                Delete
              </button>
            )}
          </Menu.Item>
        </div>
      </div>
}
    </Menu>
  );
}
