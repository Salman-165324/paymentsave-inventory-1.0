import AdminLayout from '@/components/layout/AdminLayout'
import { Calendar, Search, Filter } from "lucide-react";
import InRepairTable from '@/components/product/in-repair/InRepairTable'
import FilterButton from '@/components/ui/FilterButton'
import DateRangePicker from '@/components/ui/DateRangePicker'

export default function InRepair() {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#383E49] mb-4">
            In Repair
          </h2>
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
            <div className="flex items-center w-full md:w-auto gap-2">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border rounded-md px-4 py-2 pr-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* 🔍 Search Icon Placeholder */}
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                  {/* Search Icon */}
                  <Search width={20} height={20} color="#C4C4C4" />
                </div>
              </div>
              <div className="relative w-full md:w-64">
                <DateRangePicker />
              </div>
            </div>
            <FilterButton
              filterName="Product category"
              filterOptions={["Accessories", "Terminal"]}
            />
          </div>
        </div>

        {/* Table */}
        <InRepairTable />

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
  )
}