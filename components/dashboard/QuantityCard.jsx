import React from "react";

const LowQuantityStock = () => {
  // Demo data matching your image exactly
  const stockItems = [
    { name: "Pax A920 Pro", quantity: 2 },
    { name: "Pax A80", quantity: 5 },
    { name: "Bluetooth Base", quantity: 7 },
    { name: "SIM", quantity: 10 },
    { name: "Charging Base", quantity: 12 },
    { name: "Pax A920 Pro", quantity: 2 },
    { name: "Pax A80", quantity: 5 },
    { name: "Bluetooth Base", quantity: 7 },
    { name: "SIM", quantity: 10 },
    { name: "Charging Base", quantity: 12 },
  ];

  return (
    <div className="p-5 rounded-2xl w-full space-y-6 bg-white shadow-[0px_4px_20px_0px_#00000040]">
      {/* Card Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Low Quantity Stock
        </h2>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          See All
        </a>
      </div>

      {/* Scrollable Content Area */}
      <div className="overflow-y-auto" style={{ height: "256px" }}>
        {/* Stock Items List */}
        {stockItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-[#41A1D333] transition-colors mb-2.5 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
            <span className="text-[#19499A] bg-[#41A1D366] px-8 py-2 rounded-full font-bold max-w-20 text-center">{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowQuantityStock;
