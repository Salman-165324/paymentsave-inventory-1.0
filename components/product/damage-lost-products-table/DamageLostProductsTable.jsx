'use client'

import React from "react";
import { EllipsisVertical } from "lucide-react";

function DamageLostProductsTable() {
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
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i}>
              <td className="px-4 py-2">
                <button className="text-blue-600 bg-[#19499A] rounded-full p-1">
                  <EllipsisVertical width={20} height={20} color="#FFFFFF" />
                </button>
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

export default DamageLostProductsTable;
