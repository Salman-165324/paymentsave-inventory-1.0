import InputField from "@/components/ui/InputField";
import AppSelect from "@/components/ui/AppSelect";

export default function AddOrderForm() {
  return (
    <div className="p-8 lg:max-w-4xl xl:max-w-6xl mx-auto bg-white shadow-[0px_4px_20px_0px_#00000040] rounded-xl space-y-6">
      <h2 className="text-[#383E49] text-xl font-bold font-lato">Create New Order</h2>

      {/* Top Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-15 text-base font-medium text-[#48505E]">
        <InputField label="MID" placeholder="Enter MID" required />
        <InputField
          label="Trading Name"
          placeholder="Enter Trading Name"
          required
        />
        <InputField
          label="Merchant Name"
          placeholder="Enter Merchant Name"
          required
        />
        <InputField
          label="Merchant Mobile"
          placeholder="Enter Merchant Mobile"
          required
        />
        <InputField
          label="Merchant Alt. Mobile (optional)"
          placeholder="Enter Merchant Alt. Mobile"
        />
        <InputField label="Merchant Email" placeholder="Enter Merchant Email" />
        <InputField label="BDM Email" placeholder="Enter BDM Email" required />
        <InputField label="Priority" placeholder="Select Priority" required />
      </div>

      {/* Terminals Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">Terminals</h3>
          <button className="text-sm px-3 py-1 border border-[#D0D5DD] text-[#383E49] rounded-md">
            + Add Terminals
          </button>
        </div>

        <div className="border border-[#C4C4C4] rounded-lg p-8">
          <h3 className="text-base font-medium text-[#48505E] mb-4">
            Terminal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField label="TID" placeholder="Enter TID" required />
            <AppSelect
              label="Terminal Model"
              className="md:flex-col"
              required
            />
            <AppSelect
              label="Terminal Condition"
              className="md:flex-col"
              required
            />
          </div>
          <button className="text-sm px-3 py-1 border border-[#D0D5DD] text-[#383E49] rounded-md float-right">
            + Add Accessories
          </button>
          <AppSelect label="Accessories Model" />
        </div>
      </div>

      {/* Software Add-ons */}
      <div>
        <h3 className="font-medium text-lg mb-4">Software Add-ons</h3>
        <table className="w-full table-fixed text-sm">
          <thead>
            <tr className="border-b-[0.5px] border-[#383E49] text-left pb-3">
              <th className="w-1/3 py-2">Items</th>
              <th className="w-1/3 py-2">Yes</th>
              <th className="w-1/3 py-2">No</th>
            </tr>
          </thead>
          <tbody>
            {[
              "PS APP",
              "Weblink",
              "AMEX",
              "Diners",
              "Cash Back",
              "Gratuity",
              "Pre-Auth",
              "MOTO/CNP",
            ].map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item}</td>
                <td className="py-2">
                  <input type="radio" name={item} />
                </td>
                <td className="py-2">
                  <input type="radio" name={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Auto Batch Settings */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Auto Batch Settings</h3>
        <AppSelect label="Auto Batch" className="w-1/2" required />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField label="Till Roll Text 1" required />
          <InputField label="Till Roll Text 2" required />
          <InputField label="Till Roll Text 3" />
        </div>
      </div>

      {/* Delivery Info */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Delivery Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppSelect label="Delivery Address Type" required />
          <InputField label="Fist Line / Street" required />
          <InputField label="Second Line / Town" />
          <InputField label="Delivery Contact Name" required />
          <InputField label="Postcode" required />
          <InputField label="Phone Number" required />
        </div>
        <InputField label="Order Note (optional)" textarea />
      </div>

      <div className="pt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
          Add Order
        </button>
      </div>
    </div>
  );
}

// Reusable Components
// function Input({ label, required, textarea }) {
//   return (
//     <div className="flex flex-col">
//       <label className="text-sm mb-1">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       {textarea ? (
//         <textarea className="border border-gray-300 rounded px-3 py-2" rows={3} />
//       ) : (
//         <input className="border border-gray-300 rounded px-3 py-2" type="text" />
//       )}
//     </div>
//   );
// }

// function Select({ label, required }) {
//   return (
//     <div className="flex flex-col">
//       <label className="text-sm mb-1">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <select className="border border-gray-300 rounded px-3 py-2">
//         <option>Select</option>
//       </select>
//     </div>
//   );
// }
