"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";
import ProductTable from "./SingleProductTable";
import DateRangePicker from "../../ui/DateRangePicker";
import MainCard from "@/components/ui/MainCard";
// import ProductTable from '@/components/ui/ProductTable';

export default function ProductList() {
    const products = [
        {
          serialNumber: "1853198000",
          model: "A920 PRO",
          status: "Awaiting Shipment",
          supplier: "YELLOW 1 STOR",
          tid: "210206931201",
          condition: "Used",
          category: "Accessories",
          mid: "210206931201",
          price: "50$"
        },
        {
          serialNumber: "1853198001",
          model: "A921 PRO",
          status: "Processing",
          supplier: "ROOFING STOR",
          tid: "210206931202",
          condition: "New",
          category: "Terminal",
          mid: "210206931202",
          price: "100$"
        },
        {
          serialNumber: "1853198002",
          model: "A922 PRO",
          status: "Processing",
          supplier: "MACHICO STORE",
          tid: "210206931203",
          condition: "Used",
          category: "Accessories",
          mid: "210206931203",
          price: "200$"
        },
        {
          serialNumber: "1853198003",
          model: "A923 PRO",
          status: "Live Base",
          supplier: "Tobaco Store",
          tid: "210206931204",
          condition: "Used",
          category: "Terminal",
          mid: "210206931204",
          price: "60$"
        },
        {
          serialNumber: "1853198004",
          model: "A924 PRO",
          status: "Processing",
          supplier: "Pran RPL store",
          tid: "210206931205",
          condition: "Used",
          category: "Accessories",
          mid: "210206931205",
          price: "1000$"
        },
        {
          serialNumber: "1853198005",
          model: "A925 PRO",
          status: "Processing",
          supplier: "Devstream Store",
          tid: "210206931206",
          condition: "New",
          category: "Terminal",
          mid: "210206931206",
          price: "1500$"
        },
        {
          serialNumber: "1853198006",
          model: "A926 PRO",
          status: "Awaiting Shipment",
          supplier: "Ariana store",
          tid: "210206931207",
          condition: "Used",
          category: "Accessories",
          mid: "210206931207",
          price: "200$"
        },
        {
          serialNumber: "1853198007",
          model: "A927 PRO",
          status: "On Hold",
          supplier: "Daraz store",
          tid: "210206931208",
          condition: "New",
          category: "Terminal",
          mid: "210206931208",
          price: "470$"
        },
        {
          serialNumber: "1853198008",
          model: "A928 PRO",
          status: "On Hold",
          supplier: "RPL Store",
          tid: "210206931209",
          condition: "Used",
          category: "Accessories",
          mid: "210206931209",
          price: "600$"
        },
        {
          serialNumber: "1853198009",
          model: "A929 PRO",
          status: "Processing",
          supplier: "Ariana store",
          tid: "210206931210",
          condition: "New",
          category: "Terminal",
          mid: "210206931210",
          price: "700$"
        },
        {
          serialNumber: "1853198010",
          model: "A930 PRO",
          status: "Awaiting Shipment",
          supplier: "Daraz store",
          tid: "210206931211",
          condition: "Used",
          category: "Accessories",
          mid: "210206931211",
          price: "470$"
        },
        {
          serialNumber: "1853198011",
          model: "A931 PRO",
          status: "Processing",
          supplier: "RPL Store",
          tid: "210206931212",
          condition: "New",
          category: "Terminal",
          mid: "210206931212",
          price: "600$"
        }
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
    <MainCard title="" className="bg-white ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-xl font-semibold text-[#383E49]">
          Single Products 
        </h1>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button className="px-4 text-sm py-2 bg-blue-200 text-[#383E49] border border-[#A0A0A0] rounded w-full sm:w-auto">
            History
          </button>

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
    </MainCard>
  );
}
