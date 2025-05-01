"use client";
import React from "react";
import DonutChart from "../ui/DonutChart";

const InStockTerminals = () => {
  // Example data - replace with actual data source in a real application
  const terminalData = {
    inStock: 20,
    total: 100,
  };

  return (
    <div className="rounded-lg shadow-[0px_4px_20px_0px_#00000040] border bg-white p-6">
      <h3 className="text-[#41A1D3] font-medium text-xl mb-4">In Stock Terminals</h3>
      <div className="flex flex-col items-center justify-center">
        <DonutChart 
          value={terminalData.inStock} 
          max={terminalData.total} 
          colors={["#41A1D3", "#FD7F30"]} 
          size={180}
          thickness={30}
          className="mb-4"
        />
        <p className="text-sm text-gray-500">
          {terminalData.inStock} / {terminalData.total}
        </p>
      </div>
    </div>
  );
};

export default InStockTerminals; 