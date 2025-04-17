"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";

export default function ProductList() {
  const products = [
    {
      id: "A920 PRO",
      category: "Accessories",
      stock: 350,
      lowStockThreshold: 350,
      price: "50$",
      supplier: "YELLOW 1 STOR",
    },
    {
      id: "A921 PRO",
      category: "Terminal",
      stock: 210,
      lowStockThreshold: 210,
      price: "410$",
      supplier: "ROOFING STOR",
    },
    {
      id: "A922 PRO",
      category: "Accessories",
      stock: 50,
      lowStockThreshold: 50,
      price: "410$",
      supplier: "MACHICO STO...",
    },
    {
      id: "A923 PRO",
      category: "Terminal",
      stock: 540,
      lowStockThreshold: 540,
      price: "60$",
      supplier: "Tobaco Store LE...",
    },
    {
      id: "A924 PRO",
      category: "Accessories",
      stock: 41,
      lowStockThreshold: 41,
      price: "1000$",
      supplier: "Pran RPL store",
    },
    {
      id: "A925 PRO",
      category: "Accessories",
      stock: 70,
      lowStockThreshold: 70,
      price: "1500$",
      supplier: "Devstream Store",
    },
    {
      id: "A926 PRO",
      category: "Terminal",
      stock: 250,
      lowStockThreshold: 250,
      price: "700$",
      supplier: "Ariana store",
    },
    {
      id: "A927 PRO",
      category: "Accessories",
      stock: 45,
      lowStockThreshold: 45,
      price: "470$",
      supplier: "Daraz store",
    },
    {
      id: "A928 PRO",
      category: "Terminal",
      stock: 350,
      lowStockThreshold: 350,
      price: "600$",
      supplier: "RPL Store",
    },
  ];

  const [dateRange, setDateRange] = useState("01/08/2024 - 10/09/2024");
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1200;
  const itemsPerPage = 50;

  const getProductStatusIcon = (product) => {
    if (product.id === "A921 PRO") {
      return (
        <div className="flex ml-2">
          <div className="w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs font-bold mr-1">
            M
          </div>
          <div className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-xs font-bold">
            S
          </div>
        </div>
      );
    }
    return null;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6 gap-2">
        <h1 className="text-xl font-semibold flex items-center text-[#383E49]">
          All Products (Model Wise)
          <div className="flex ml-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full text-white flex items-center justify-center text-xs font-bold z-10">
              S
            </div>
            <div className="w-6 h-6 bg-purple-600 rounded-full text-white flex items-center justify-center text-xs font-bold -ml-2">
              $
            </div>
          </div>
        </h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-[#1366D9] text-white rounded">
            Add Product
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-3 pr-10 py-2 border border-[#A0A0A0] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              value={dateRange}
              className="pl-3 pr-10 py-2 border border-[#A0A0A0] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Action
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Model
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Product Category
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Stock
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Low Stock Threshold
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Price
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
              <th className="text-left p-3 text-gray-600 font-medium text-sm">
                Supplier
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs font-bold">
                  <EllipsisVertical color="white" size={16} />
                  </div>
                </td>
                <td className="p-3 flex items-center">
                  {product.id}
                  {getProductStatusIcon(product)}
                </td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">{product.lowStockThreshold}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-3">{product.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
