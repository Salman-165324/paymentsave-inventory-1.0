import { ChevronRight } from "lucide-react";

export default function InputField({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  required = false,
  showIcon = false,
  className = "",
  name,readOnly = false,
}) {
  return (
    <div className="flex flex-col md:flex-col items-start md:items-left gap-2 md:gap-2 w-full">
      <label className=" text-[#48505E] font-medium">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      <div className="relative w-full">
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          placeholder={placeholder}
          className={`text-[#858D9D] w-full border bg-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
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
