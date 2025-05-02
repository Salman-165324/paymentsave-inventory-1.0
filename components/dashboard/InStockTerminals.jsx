"use client";
import React from "react";
import DonutChart from "../ui/DonutChart";

const InStockTerminals = () => {
  // Example data - replace with actual data source in a real application
  const terminalData = [
    { name: 'Used Terminals', value: 80, color: '#41A1D3' },
    { name: 'New Terminals', value: 20, color: '#FD7F30' },
  ];

  return (
    <div className="rounded-lg shadow-[0px_4px_20px_0px_#00000040] border bg-white p-5">
      <h3 className="text-[#41A1D3] font-medium text-xl mb-2">
        In Stock Terminals
      </h3>
      <p className="text-[#19231F] text-2xl font-semibold mb-2">
        {terminalData[0].value + terminalData[1].value}
      </p>
      <div className="flex flex-col items-center justify-center mb-8">
        <DonutChart
          data={terminalData}
          className=""
        />
      </div>
      {terminalData.map((item, index) => (
        <div className="flex flex-row items-center justify-between">
          <div className= "flex flex-row items-center gap-2">
            <div className={`w-3 h-3 bg-[${item.color}] rounded-full`}></div>
          <p className="text-[#4B5563] text-sm font-medium">{item.name}</p>
        </div>
        <div className="font-medium text-sm">{`(${item.value})`}</div>
      </div>
      ))}
    </div>
  );
};

export default InStockTerminals;
