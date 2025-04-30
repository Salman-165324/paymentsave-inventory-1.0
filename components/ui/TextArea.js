import { ChevronRight } from "lucide-react";

export default function TextArea({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  required = false,
  showIcon = false,
  className = "",
  name,
}) {
  return (
    <div className="flex flex-col md:flex-col items-start md:items-left gap-2 md:gap-2 w-full">
    {/* <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full"> */}
      <label className="w-full md:min-w-[160px] md:w-[160px] text-primary font-medium text-sm">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      <div className="relative w-full">
        <textarea
          rows={3}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className={`text-secondary w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
        />
        {showIcon && (
          <ChevronRight
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        )}
      </div>
    </div>
  );
}
