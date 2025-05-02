"use client";
import Processing from "../ui/icon/Processing";
import Shipped from "../ui/icon/Shipped";
import Delivered from "../ui/icon/Delivered";
import AwaitReturn from "../ui/icon/AwaitReturn";
import Returned from "../ui/icon/Returned";
import { Calendar, PackageOpen, CirclePause, Radio } from "lucide-react";
import DateRangePicker from "../ui/DateRangePicker";
import OrderTrendTable from "./OrderTrendTable";
import SummaryCard from "./SummaryCard";
import QuantityCard from "./QuantityCard";
import DamageLostProductsTable from "../product/damage-lost-products-table/DamageLostProductsTable";
import TerminalAssignTable from "./TerminalAssignTable";
import InStockTerminals from "./InStockTerminals";

export default function DashboardOverview() {
  const handleRangeChange = (formatted, startDate, endDate) => {
    console.log(formatted, startDate, endDate);
  };
  return (
    <div className="space-y-6">
      {/* date box */}
      <div className="flex justify-end mb-8">
        {/* <div className="bg-white shadow rounded p-4 w-auto max-w-sm flex items-center justify-between">
          <span className="text-[#616262] font-medium mr-4">
            01/08/2024 - 10/09/2024
          </span>
          <button className="text-gray-500 hover:text-[#616262]">
            <Calendar />
          </button>
        </div> */}
        <DateRangePicker onRangeChange={handleRangeChange} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-8">
        <Card
          icon={<CirclePause width={40} height={40} color="#FFFFFF" />}
          title="On Hold"
          value="2565"
          circleColor="bg-[#FF6869]"
        />
        <Card
          icon={<Processing width={40} height={40} color="#FFFFFF" />}
          title="Processing"
          value="450"
          circleColor="bg-[#41A1D3]"
        />
        <Card
          icon={<PackageOpen width={40} height={40} color="#FFFFFF" />}
          title="Awaiting Shipment"
          circleColor="bg-[#FD7F30]"
          value="1200"
        />
        <Card
          icon={<Shipped width={40} height={40} color="#FFFFFF" />}
          title="Shipped"
          value="598"
          circleColor="bg-[#22C55E]"
        />
        <Card
          icon={<Delivered width={40} height={40} color="#FFFFFF" />}
          title="Delivered"
          value="328"
          circleColor="bg-[#3C50E0]"
        />
        <Card
          icon={<Radio width={40} height={40} color="#FFFFFF" />}
          title="Live Base"
          value="58"
          circleColor="bg-[#FFAA3A]"
        />
        <Card
          icon={<AwaitReturn width={40} height={40} color="#FFFFFF" />}
          title="Awaiting Return"
          value="88"
          circleColor="bg-[#DBA362]"
        />
        <Card
          icon={<Returned width={40} height={40} color="#FFFFFF" />}
          title="Returned"
          value="80"
          circleColor="bg-[#006396]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-8">
        <SummaryCard />
        <InStockTerminals />
        <QuantityCard />
      </div>
      <div className="bg-[#F9F9F9] p-6 rounded-md shadow-[0px_4px_20px_0px_#00000040] mx-auto mb-8">
        <OrderTrendTable />
      </div>
      <div className="bg-[#41A1D333] p-6 rounded-md shadow-[0px_4px_4px_0px_#00000040] mx-auto mb-8">
        <TerminalAssignTable />
      </div>
    </div>
  );
}

function Card({ icon, title, value, circleColor }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden p-6 shadow-[0px_0px_14px_0px_#00000040] hover:shadow-[0px_0px_20px_0px_#00000050] transition-all duration-300">
      <div className="text-center flex flex-col items-center space-y-4">
        <div
          className={`relative w-16 sm:w-18 md:w-20 aspect-square rounded-full flex items-center justify-center ${circleColor}`}
        >
          <div className="text-xl sm:text-2xl md:text-3xl">{icon}</div>
        </div>

        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-medium text-[#616262]">
            {title}
          </h3>
          <p className="text-xl sm:text-2xl font-semibold text-[#19231F]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function BoxIcon({ strokeColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
