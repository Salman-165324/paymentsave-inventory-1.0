"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import ProductTable from "./ProductTable";
import DateRangePicker from "../ui/DateRangePicker";
import Link from "next/link";
// import ProductTable from '@/components/ui/ProductTable';

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
    {
      id: "A929 PRO",
      category: "Terminal",
      stock: 250,
      lowStockThreshold: 250,
      price: "700$",
      supplier: "Ariana store",
    },
    {
      id: "A930 PRO",
      category: "Accessories",
      stock: 45,
      lowStockThreshold: 45,
      price: "470$",
      supplier: "Daraz store",
    },
    {
      id: "A931 PRO",
      category: "Terminal",
      stock: 350,
      lowStockThreshold: 350,
      price: "600$",
      supplier: "RPL Store",
    },
  ];

  const [dateRange, setDateRange] = useState("01/08/2024 - 10/09/2024");

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5); // Adjust as needed

  const totalItems = products.length;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalItems / limit);

  const paginatedProducts = products.slice(offset, offset + limit);

  const handlePageChange = (pageNumber) => {
    setOffset((pageNumber - 1) * limit);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-xl font-semibold text-[#383E49]">
          All Products (Model Wise)
        </h1>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <Link href={"/products/new"}>
            <button className="px-4 text-sm py-2 bg-[#1366D9] text-white rounded w-full sm:w-auto cursor-pointer">
              Add Product
            </button>
          </Link>

          {/* Search Input */}
          <div className="relative w-full sm:w-52 md:w-56">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm pl-3 pr-10 py-2 border border-[#A0A0A0] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
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

          {/* Date Range Picker */}
          {/* <div className="relative w-full sm:w-52 md:w-56">
            <input
              type="text"
              value={dateRange}
              className="w-full pl-3 pr-10 py-2 border border-[#A0A0A0] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              // readOnly
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
          </div> */}
          <DateRangePicker
            initialRange={{
              startDate: null,
              endDate: null,
            }}
            onRangeChange={(formatted, start, end) => {
              setDateRange(formatted);
              // Optional: setStartDate/startDate, setEndDate/endDate
            }}
          />
        </div>
      </div>

      <ProductTable products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={limit}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
