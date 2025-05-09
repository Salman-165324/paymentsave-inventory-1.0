"use client";
import InputField from "@/components/ui/InputField";
import AppSelect from "@/components/ui/AppSelect";
import { useState } from "react";

export default function AddOrderForm() {
  const [terminals, setTerminals] = useState([
    { terminalKey: "t1", accessories: [{ accessoryKey: "a1" }] },
  ]);
  const [activeTab, setActiveTab] = useState("t1");

  const addTerminal = () => {
    const newKey = `t${terminals.length + 1}`;
    const newTerminal = { 
      terminalKey: newKey, 
      accessories: [{ accessoryKey: `${newKey}-a1` }] 
    };
    setTerminals([...terminals, newTerminal]);
    setActiveTab(newKey);
  };

  const addAccessory = (terminalKey) => {
    setTerminals((prev) =>
      prev.map((t) => {
        if (t.terminalKey === terminalKey) {
          const accessoriesCount = t.accessories?.length || 0;
          return {
            ...t,
            accessories: [
              ...(t.accessories || []),
              { accessoryKey: `${terminalKey}-a${accessoriesCount + 1}` },
            ],
          };
        }
        return t;
      })
    );
  };

  const removeTerminal = (terminalKey) => {
    if (terminals.length === 1) return;
    const updatedTerminals = terminals.filter((terminal) => terminal.terminalKey !== terminalKey);
    setTerminals(updatedTerminals);
    setActiveTab(updatedTerminals[0].terminalKey);
  };

  const removeAccessory = (terminalKey, accessoryKey) => {
    const targetTerminal = terminals.find((t) => t.terminalKey === terminalKey);

    if (!targetTerminal || !targetTerminal.accessories || targetTerminal.accessories.length <= 1) return;

    setTerminals((prev) =>
      prev.map((t) =>
        t.terminalKey === terminalKey
          ? {
              ...t,
              accessories: t.accessories.filter((a) => a.accessoryKey !== accessoryKey),
            }
          : t
      )
    );
  };

  return (
    <div className="p-8 lg:max-w-4xl xl:max-w-6xl mx-auto bg-white shadow-[0px_4px_20px_0px_#00000040] rounded-xl space-y-6">
      <h2 className="text-[#383E49] text-xl font-bold font-lato">
        Create New Order
      </h2>

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
          <button
            className="text-sm px-3 py-1 border border-[#D0D5DD] text-[#383E49] rounded-md"
            onClick={addTerminal}
          >
            + Add Terminals
          </button>
        </div>

        <div className="border border-[#C4C4C4] rounded-lg p-4">
          {/* Terminal Tabs */}
          <div className="flex border-b mb-4 overflow-x-auto">
            {terminals.map((terminal, index) => (
              <div
                key={terminal.terminalKey}
                className={`px-4 py-2 cursor-pointer flex items-center ${
                  activeTab === terminal.terminalKey
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(terminal.terminalKey)}
              >
                <span>Terminal {index + 1}</span>
                {terminals.length > 1 && (
                  <button
                    className="ml-2 text-gray-400 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTerminal(terminal.terminalKey);
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Content */}
          {terminals.map((terminal) => (
            <div
              key={terminal.terminalKey}
              className={activeTab === terminal.terminalKey ? "block" : "hidden"}
            >
              <div className="p-4">
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

                <div className="w-full space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Accessories Model
                    </label>
                    <button
                      className="text-xs md:text-sm px-1 md:px-3 py-1 border border-[#D0D5DD] text-[#383E49] rounded-md"
                      onClick={() => addAccessory(terminal.terminalKey)}
                    >
                      + Add Accessories
                    </button>
                  </div>

                  {terminal.accessories && terminal.accessories.map((accessory) => (
                    <div
                      key={accessory.accessoryKey}
                      className="flex flex-wrap lg:flex-nowrap items-center gap-4 mb-2"
                    >
                      <div className="w-full lg:w-[50%] xl:w-[60%]">
                        <AppSelect />
                      </div>
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Enter Quantity"
                        className="w-2/3 lg:w-[30%] border border-gray-300 rounded-md px-2 py-1.5"
                      />
                      <button
                        type="button"
                        className="w-1/4 lg:w-[5%] py-1 flex items-center justify-center text-[#383E49] text-xl border border-[#D0D5DD] rounded-md"
                        onClick={() =>
                          removeAccessory(terminal.terminalKey, accessory.accessoryKey)
                        }
                      >
                        &minus;
                      </button>
                    </div>
                  ))}
                </div>

                {/* Software Add-ons */}
                <div className="mt-8">
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
                            <input
                              type="radio"
                              name={`${item}-${terminal.terminalKey}`}
                            />
                          </td>
                          <td className="py-2">
                            <input
                              type="radio"
                              name={`${item}-${terminal.terminalKey}`}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Auto Batch Settings */}
                <div className="space-y-4 mt-8">
                  <h3 className="font-medium text-lg">Auto Batch Settings</h3>
                  <AppSelect label="Auto Batch" className="w-1/2" required />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InputField label="Till Roll Text 1" required />
                    <InputField label="Till Roll Text 2" required />
                    <InputField label="Till Roll Text 3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
