// AllSupplierPage.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import MainCard from "@/components/ui/MainCard";
import Pagination from "@/components/ui/Pagination";
import AllSupplierTable from "./AllSupplierTable";

const dummySuppliers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: "Devsstream Store",
  email: "devsstream@gmail.com",
  phone: "+44 20 3225 2905",
  address: `${i % 2 === 0 ? "39B Katherine Road, London E7 8LT" : "Mirpur02, Dhaka, Bangladesh"}`,
}));

export default function AllSupplierPage() {
  const dropdownRef = useRef(null);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filteredSuppliers, setFilteredSuppliers] = useState(dummySuppliers);

  useEffect(() => {
    if (search) {
      const lowerSearch = search.toLowerCase();
      setFilteredSuppliers(
        dummySuppliers.filter(
          (s) =>
            s.name.toLowerCase().includes(lowerSearch) ||
            s.email.toLowerCase().includes(lowerSearch) ||
            s.phone.includes(lowerSearch) ||
            s.address.toLowerCase().includes(lowerSearch)
        )
      );
    } else {
      setFilteredSuppliers(dummySuppliers);
    }
  }, [search]);

  const totalItems = filteredSuppliers.length;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalItems / limit);
  const paginatedSuppliers = filteredSuppliers.slice(offset, offset + limit);

  const handlePageChange = (pageNumber) => {
    setOffset((pageNumber - 1) * limit);
  };

  return (
    <MainCard title="" className="bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-[#383E49]">
          All Supplier
        </h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

      <AllSupplierTable suppliers={paginatedSuppliers} />

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
