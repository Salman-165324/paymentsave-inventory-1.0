import Processing from "../ui/icon/Processing";
import Shipped from "../ui/icon/Shipped";
import Delivered from "../ui/icon/Delivered";
import AwaitReturn from "../ui/icon/AwaitReturn";
import Returned from "../ui/icon/Returned";
import { Calendar, PackageOpen, CirclePause, Radio } from "lucide-react";
import DateRangePicker from "../ui/DateRangePicker";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* date box */}
      <div className="flex justify-end mb-4">
        {/* <div className="bg-white shadow rounded p-4 w-auto max-w-sm flex items-center justify-between">
          <span className="text-[#616262] font-medium mr-4">
            01/08/2024 - 10/09/2024
          </span>
          <button className="text-gray-500 hover:text-[#616262]">
            <Calendar />
          </button>
        </div> */}
        <DateRangePicker />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={<CirclePause width={30} height={30} color="#FFFFFF" />}
          title="Total Products"
          value="256"
          circleColor="bg-[#FF6869]"
        />
        <Card
          icon={<Processing />}
          title="Total Orders"
          value="45"
          circleColor="bg-[#41A1D3]"
        />
        <Card
          icon={<PackageOpen width={30} height={30} color="#FFFFFF" />}
          title="Pending Orders"
          circleColor="bg-[#FD7F30]"
          value="12"
        />
        <Card
          icon={<Shipped />}
          title="Low Stock"
          value="8"
          circleColor="bg-[#22C55E]"
        />
        <Card
          icon={<Delivered />}
          title="Low Stock"
          value="8"
          circleColor="bg-[#3C50E0]"
        />
        <Card
          icon={<AwaitReturn />}
          title="Low Stock"
          value="8"
          circleColor="bg-[#DBA362]"
        />
        <Card
          icon={<Radio width={30} height={30} color="#FFFFFF" />}
          title="Low Stock"
          value="8"
          circleColor="bg-[#FFAA3A]"
        />
        <Card
          icon={<Returned />}
          title="Low Stock"
          value="8"
          circleColor="bg-[#006396]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 shadow-[0px_4px_20px_0px_#00000040]">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-4">Recent Orders</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
              >
                <div>
                  <div className="font-medium">Order #{1000 + i}</div>
                  <div className="text-sm text-muted-foreground">
                    April 17, 2025
                  </div>
                </div>
                <div className="text-sm font-medium">
                  ${(100 * i).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-4">Low Stock Products</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
              >
                <div>
                  <div className="font-medium">Product {i}</div>
                  <div className="text-sm text-muted-foreground">
                    Quantity: {i * 2}
                  </div>
                </div>
                <div className="text-sm font-medium text-destructive">
                  Low Stock
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, value, circleColor }) {
  return (
    <div class="max-w-sm mx-auto bg-white rounded-xl overflow-hidden p-6 shadow-[0px_0px_14px_0px_#00000040] w-56">
      <div className="text-center">
        <div
          className={`relative mx-auto mb-4 w-15 h-15 rounded-full flex items-center justify-center ${circleColor}`}
        >
          {icon}
        </div>

        <div className="space-y-2">
          <h3 className="text-[16px] font-medium text-[#616262]">{title}</h3>
          <p className="text-2xl font-semibold text-[#19231F]">{value}</p>
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
