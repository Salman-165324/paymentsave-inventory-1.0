export default function ConfigureTerminal() {
  return (
    <div className="max-w-5xl mx-auto px-12 py-8 space-y-6 bg-white shadow-[0px_4px_20px_0px_#00000040] rounded-xl">
      {/* Terminal Info */}
      <h3 className="text-base lg:text-lg xl:text-xl font-medium text-[#383E49] mb-7">
        Configure Terminal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 text-sm lg:text-base text-[#48505E] space-y-2">
        <div>
          <div className="font-medium mb-3">MID</div>
          <div className="text-[#858D9D] font-normal">210206931201</div>
        </div>
        <div>
          <div className="font-medium mb-3">Trading Name</div>
          <div className="text-[#858D9D] font-normal">Devstream Store</div>
        </div>
        <div>
          <div className="font-medium mb-3">Merchant Name</div>
          <div className="text-[#858D9D] font-normal">Zakaria Rahman</div>
        </div>
        <div>
          <div className="font-medium mb-3">Merchant Mobile</div>
          <div className="text-[#858D9D] font-normal">+447822031221</div>
        </div>
        <div>
          <div className="font-medium mb-3">Merchant Alt. Mobile</div>
          <div className="text-[#858D9D] font-normal">+447822031712</div>
        </div>
        <div>
          <div className="font-medium mb-3">Merchant Email</div>
          <div className="text-[#858D9D] font-normal">
            zakaria@paymentsave.com
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="font-medium mb-3">BDM Email</div>
          <div className="text-[#858D9D] font-normal">
            zakaria@paymentsave.com
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-wrap gap-6 mt-4 mb-4 border border-[#c4c4c4] rounded-md px-7.5 py-5 justify-between">
          {[
            ["SIM", "Yes"],
            ["AMEX", "Yes"],
            ["Gratuity", "Yes"],
            ["PS APP", "Yes"],
            ["Auto Batch", "23:55"],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="font-medium mb-3">{label}</div>
              <div className="text-[#858D9D] font-normal">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Terminal Serial Number */}
      <div className="bg-white px-7.5 py-10 rounded-xl shadow-[0px_2px_20px_0px_#00000040] mb-12">
        <h3 className="text-sm lg:text-base font-medium text-[#48505E] mb-5">
          Add Terminal Serial Number
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-4 lg:gap-x-24">
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              TID
            </label>
            <div className="mt-2.5 text-[#858D9D] text-base">2451754136465</div>
          </div>
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              Terminal Serial No<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Select Serial No"
              className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              Terminal Condition<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Select Condition"
                className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              Terminal Model<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Select Condition"
              className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Add Accessories Serial Number */}
      <div className="bg-white px-7.5 py-10 rounded-xl shadow-[0px_2px_20px_0px_#00000040] mb-12 space-y-5">
        <h3 className="text-sm lg:text-base font-medium text-[#48505E] mb-5">
          Add Accessories Serial Number
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-4 lg:gap-x-24">
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              Model
            </label>
            <div className="mt-2.5 text-[#858D9D] text-base">A920 Pro</div>
          </div>
          <div>
            <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
              Accessories Serial No<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Add Serial No"
              className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-[#858D9D]"
            />
          </div>
        </div>
      </div>

      {/* POD Ref and Delivery Channel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-4 lg:gap-x-24 mb-12">
        <div>
          <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
            POD Ref<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Type POD Ref"
            className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm lg:text-base font-medium text-[#48505E]">
            Delivery Channel (optional)
          </label>
          <input
            type="text"
            placeholder="Type Delivery channel"
            className="mt-2.5 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-4 text-right mb-4">
        <button className="bg-[#1366D9] text-white px-10 py-2.5 rounded-sm text-sm font-medium hover:bg-blue-700 transition w-full md:w-auto">
          Save
        </button>
      </div>
    </div>
  );
}
