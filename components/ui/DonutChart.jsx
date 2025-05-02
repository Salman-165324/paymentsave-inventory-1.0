"use client";
import React from "react";
import { cn } from "../../lib/utils";

const DonutChart = ({ value, max, className, size = 200, thickness = 20, colors = ["#41A1D3", "#FD7F30"] }) => {
  const percentage = (value / max) * 100 || 0;
  const dashArray = 2 * Math.PI * (size / 2 - thickness / 2);
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - thickness / 2}
          fill="none"
          stroke={colors[1]}
          strokeWidth={thickness}
          className="opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - thickness / 2}
          fill="none"
          stroke={colors[0]}
          strokeWidth={thickness}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-4xl font-bold"
          fill="#1E293B"
        >
          {value}
        </text>
      </svg>
    </div>
  );
};

export default DonutChart; 