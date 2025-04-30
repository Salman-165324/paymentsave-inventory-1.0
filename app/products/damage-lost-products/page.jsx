import AdminLayout from "@/components/layout/AdminLayout";
// import Filter from "@/components/ui/icon/Filter";
// import Search from "@/components/ui/icon/Search";
import { Calendar, Search, Filter } from "lucide-react";
import DamageLostProductsTable from "@/components/product/damage-lost-products-table/DamageLostProductsTable";

export default function DamageLostProducts() {
  
  return (
    <AdminLayout>
      <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-[0px_4px_20px_0px_#00000040] max-w-7xl mx-auto">

        {/* Table */}
        <DamageLostProductsTable />

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1–50 of 1200 items</p>
          <div className="flex items-center gap-1">
            {/* ⬅ Previous Page Icon Placeholder */}
            <button className="px-2 py-1 rounded hover:bg-gray-100">[←]</button>
            <button className="w-8 h-8 rounded-full bg-[#0C99D5] text-white">
              1
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100">
              3
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100">
              4
            </button>
            <span>...50</span>
            {/* ➡ Next Page Icon Placeholder */}
            <button className="px-2 py-1 rounded hover:bg-gray-100">[→]</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
