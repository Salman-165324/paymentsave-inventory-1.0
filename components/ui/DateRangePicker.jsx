'use client';

import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalendarRange } from "lucide-react";

export default function DateRangePicker({ onRangeChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [selectedRangeText, setSelectedRangeText] = useState(""); // Initially empty

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setRange([ranges.selection]);

    const formatted = `${format(startDate, "dd/MM/yyyy")} - ${format(endDate, "dd/MM/yyyy")}`;
    setSelectedRangeText(formatted); // Set visual text
    onRangeChange(formatted, startDate, endDate);
    setShowPicker(false);
  };

  return (
    <div className="relative w-full sm:w-52 md:w-56">
      <input
        type="text"
        readOnly
        value={selectedRangeText}
        placeholder="Select date range"
        onClick={() => setShowPicker(!showPicker)}
        className="w-full text-sm pl-3 pr-10 py-2 border border-[#A0A0A0] rounded focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer placeholder:text-gray-400"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
        <CalendarRange color="#141522" size={18} />
      </div>

      {showPicker && (
        <div className="absolute z-50 mt-2 shadow-lg bg-white rounded right-[-26]">
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={["#1366D9"]}
            months={1}
            direction="vertical"
          />
        </div>
      )}
    </div>
  );
}
