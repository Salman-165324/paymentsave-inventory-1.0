import React from "react";

function TableHead({ heads = [] }) {
  return (
    <thead className="bg-[#F5F5F5] text-gray-600">
      <tr className="border-b border-[#D9D9D9]">
        {heads.map((head, index) => (
          <th key={index} className="px-4 py-2 font-medium">{head}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
