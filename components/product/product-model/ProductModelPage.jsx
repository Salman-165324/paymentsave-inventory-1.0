"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";
// import MainCard from "../ui/MainCard";
import ProductModelTable from "./ProductModelTable";
import Link from "next/link";
import MainCard from "@/components/ui/MainCard";

export default function ProducModel() {
  const products = [
    { model: "A920 PRO", category: "Charging Base", threshold: 350, date: "22/02/2025" },
    { model: "A921 PRO", category: "SIM", threshold: 210, date: "22/02/2025" },
    { model: "A922 PRO", category: "Bluetooth Base", threshold: 50, date: "22/02/2025" },
    { model: "A923 PRO", category: "Bluetooth Base", threshold: 540, date: "22/02/2025" },
    { model: "A924 PRO", category: "Charging Base", threshold: 41, date: "22/02/2025" },
    { model: "A925 PRO", category: "SIM", threshold: 70, date: "22/02/2025" },
    { model: "A926 PRO", category: "SIM", threshold: 250, date: "22/02/2025" },
    { model: "A927 PRO", category: "Bluetooth Base", threshold: 45, date: "22/02/2025" },
    { model: "A928 PRO", category: "Charging Base", threshold: 350, date: "22/02/2025" },
  ];

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  const totalItems = products.length;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalItems / limit);

  const paginatedProducts = products.slice(offset, offset + limit);

  const handlePageChange = (pageNumber) => {
    setOffset((pageNumber - 1) * limit);
  };

  return (
    <MainCard title="" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-xl font-semibold text-[#383E49]">Product Models</h1>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* <Link href="/add">
            <button className="px-4 text-sm py-2 bg-[#1366D9] text-white rounded w-full sm:w-auto">
              Add Product
            </button>
          </Link> */}

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
        </div>
      </div>

      <ProductModelTable products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={limit}
        onPageChange={handlePageChange}
      />
    </MainCard>
  );
}
