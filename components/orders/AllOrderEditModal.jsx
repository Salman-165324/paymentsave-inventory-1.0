"use client";

import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import InputField from "@/components/ui/InputField";
import AppSelect from "@/components/ui/AppSelect";

const AllOrderEditModal = ({ isOpen, onClose, order, onSave }) => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (order) {
      setFormData(order);
      if (order.terminals && order.terminals.length > 0) {
        setActiveTab(order.terminals[0].id);
      }
    }
  }, [order]);

  if (!order) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTerminalChange = (terminalId, field, value) => {
    setFormData((prev) => ({
      ...prev,
      terminals: prev.terminals.map((terminal) =>
        terminal.id === terminalId ? { ...terminal, [field]: value } : terminal
      ),
    }));
  };

  const handleAccessoryChange = (terminalId, accessoryIndex, field, value) => {
    setFormData((prev) => ({
      ...prev,
      terminals: prev.terminals.map((terminal) =>
        terminal.id === terminalId
          ? {
              ...terminal,
              accessories: terminal.accessories.map((acc, idx) =>
                idx === accessoryIndex ? { ...acc, [field]: value } : acc
              ),
            }
          : terminal
      ),
    }));
  };

  const handleAddAccessory = (terminalId) => {
    setFormData((prev) => ({
      ...prev,
      terminals: prev.terminals.map((terminal) =>
        terminal.id === terminalId
          ? {
              ...terminal,
              accessories: [
                ...(terminal.accessories || []),
                { model: "", quantity: 1 },
              ],
            }
          : terminal
      ),
    }));
  };

  const handleRemoveAccessory = (terminalId, accessoryIndex) => {
    setFormData((prev) => ({
      ...prev,
      terminals: prev.terminals.map((terminal) =>
        terminal.id === terminalId
          ? {
              ...terminal,
              accessories: terminal.accessories.filter(
                (_, idx) => idx !== accessoryIndex
              ),
            }
          : terminal
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-40">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Modal Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 md:p-12 lg:p-16 xl:p-20">
        <Dialog.Panel className="w-full max-w-fit md:max-w-[calc(100vw-320px)] h-[calc(100vh-80px)] bg-white rounded-md shadow-xl relative flex flex-col ml-10 lg:ml-[280px]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-1.5 -right-1.5 w-8 h-8 bg-red-500 text-white text-sm rounded-full flex items-center justify-center hover:bg-red-600 z-10"
          >
            ×
          </button>

          {/* Header */}
          <div className="p-6">
            <Dialog.Title className="text-[28px] font-bold font-lato text-[#141522">
              Edit Order (Model Wise)
            </Dialog.Title>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6 lg:space-y-8 mx-auto">
              {/* Merchant Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Merchant Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-6">
                  <InputField
                    label="MID"
                    value={formData.mid || ""}
                    onChange={(e) => handleChange("mid", e.target.value)}
                    required
                  />
                  <InputField
                    label="Trading Name"
                    value={formData.tradingName || ""}
                    onChange={(e) => handleChange("tradingName", e.target.value)}
                    required
                  />
                  <InputField
                    label="Merchant Name"
                    value={formData.merchantName || ""}
                    onChange={(e) => handleChange("merchantName", e.target.value)}
                    required
                  />
                  <InputField
                    label="Merchant Mobile"
                    value={formData.merchantMobile || ""}
                    onChange={(e) => handleChange("merchantMobile", e.target.value)}
                    required
                  />
                  <InputField
                    label="Merchant Alt. Mobile (Optional)"
                    value={formData.merchantAltMobile || ""}
                    onChange={(e) => handleChange("merchantAltMobile", e.target.value)}
                  />
                  <InputField
                    label="Merchant Email"
                    value={formData.merchantEmail || ""}
                    onChange={(e) => handleChange("merchantEmail", e.target.value)}
                  />
                  <InputField
                    label="BDM Email"
                    value={formData.bdmEmail || ""}
                    onChange={(e) => handleChange("bdmEmail", e.target.value)}
                    required
                  />
                  <InputField
                    label="Priority"
                    value={formData.priority || ""}
                    onChange={(e) => handleChange("priority", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Terminal Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Terminal Information
                </h3>
                
                {/* Terminal Tabs */}
                {formData.terminals && formData.terminals.length > 0 && (
                  <div className="border border-[#D9D9D9] rounded-md">
                    <div className="flex border-b overflow-x-auto">
                      {formData.terminals.map((terminal, index) => (
                        <div
                          key={terminal.id}
                          className={`px-4 py-2 cursor-pointer ${
                            activeTab === terminal.id
                              ? "border-b-2 border-blue-600 text-blue-600"
                              : "text-gray-500"
                          }`}
                          onClick={() => setActiveTab(terminal.id)}
                        >
                          <span>Terminal {index + 1}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Terminal Content */}
                    {formData.terminals.map((terminal) => (
                      <div
                        key={terminal.id}
                        className={`p-4 ${activeTab === terminal.id ? "block" : "hidden"}`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                          <InputField
                            label="TID"
                            value={terminal.tid || ""}
                            onChange={(e) => 
                              handleTerminalChange(terminal.id, "tid", e.target.value)
                            }
                            required
                          />
                          <AppSelect
                            label="Terminal Model"
                            value={terminal.terminalModel || ""}
                            onChange={(value) => 
                              handleTerminalChange(terminal.id, "terminalModel", value)
                            }
                            required
                          />
                          <AppSelect
                            label="Terminal Condition"
                            value={terminal.terminalCondition || ""}
                            onChange={(value) => 
                              handleTerminalChange(terminal.id, "terminalCondition", value)
                            }
                            required
                          />
                        </div>
                        
                        {/* Accessories Section */}
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-medium text-base">Accessories</h4>
                            <button
                              type="button"
                              className="text-sm px-3 py-1 border border-[#D0D5DD] text-[#383E49] rounded-md"
                              onClick={() => handleAddAccessory(terminal.id)}
                            >
                              + Add Accessories
                            </button>
                          </div>
                          
                          {terminal.accessories && terminal.accessories.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4">
                              {terminal.accessories.map((accessory, i) => (
                                <div key={i} className="border border-[#D9D9D9] rounded-md p-3">
                                  <div className="flex flex-wrap items-center gap-4">
                                    <div className="w-[60%]">
                                      <AppSelect
                                        label="Model"
                                        value={accessory.model || ""}
                                        onChange={(value) => 
                                          handleAccessoryChange(terminal.id, i, "model", value)
                                        }
                                      />
                                    </div>
                                    <div className="w-[30%]">
                                      <InputField
                                        label="Quantity"
                                        type="number"
                                        value={accessory.quantity || ""}
                                        onChange={(e) => 
                                          handleAccessoryChange(
                                            terminal.id, 
                                            i, 
                                            "quantity", 
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      className="mt-6 w-8 h-8 text-red-500"
                                      onClick={() => handleRemoveAccessory(terminal.id, i)}
                                    >
                                      ×
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-sm text-gray-500">No accessories added</div>
                          )}
                        </div>
                        
                        {/* Software Add-ons */}
                        <div className="mt-8">
                          <h3 className="font-medium text-lg mb-4">
                            Software Add-ons
                          </h3>

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
                                ["psApp", "PS APP"],
                                ["weblink", "Weblink"],
                                ["amex", "AMEX"],
                                ["diners", "Diners"],
                                ["cashBack", "Cash Back"],
                                ["gratuity", "Gratuity"],
                                ["preAuth", "Pre-Auth"],
                                ["motoCnp", "MOTO/CNP"],
                              ].map(([key, label]) => (
                                <tr key={key} className="border-b">
                                  <td className="py-2">{label}</td>
                                  <td className="py-2">
                                    <input
                                      type="radio"
                                      name={`${key}-${terminal.id}`}
                                      checked={terminal[key] === true}
                                      onChange={() => 
                                        handleTerminalChange(terminal.id, key, true)
                                      }
                                    />
                                  </td>
                                  <td className="py-2">
                                    <input
                                      type="radio"
                                      name={`${key}-${terminal.id}`}
                                      checked={terminal[key] === false}
                                      onChange={() => 
                                        handleTerminalChange(terminal.id, key, false)
                                      }
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Auto Batch Settings */}
                        <div className="mt-8">
                          <h3 className="font-medium text-lg mb-4">
                            Auto Batch Settings
                          </h3>
                          <div className="space-y-4">
                            <AppSelect
                              label="Auto Batch"
                              value={terminal.autoBatch || ""}
                              onChange={(value) => 
                                handleTerminalChange(terminal.id, "autoBatch", value)
                              }
                              required
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <InputField
                                label="Till Roll Text 1"
                                value={terminal.tillRollText1 || ""}
                                onChange={(e) => 
                                  handleTerminalChange(
                                    terminal.id, 
                                    "tillRollText1", 
                                    e.target.value
                                  )
                                }
                                required
                              />
                              <InputField
                                label="Till Roll Text 2"
                                value={terminal.tillRollText2 || ""}
                                onChange={(e) => 
                                  handleTerminalChange(
                                    terminal.id, 
                                    "tillRollText2", 
                                    e.target.value
                                  )
                                }
                                required
                              />
                              <InputField
                                label="Till Roll Text 3"
                                value={terminal.tillRollText3 || ""}
                                onChange={(e) => 
                                  handleTerminalChange(
                                    terminal.id, 
                                    "tillRollText3", 
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Delivery Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Delivery Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                  <AppSelect
                    label="Delivery Address Type"
                    value={formData.deliveryAddressType || ""}
                    onChange={(value) => handleChange("deliveryAddressType", value)}
                    required
                  />
                  <InputField
                    label="First Line / Street"
                    value={formData.firstLine || ""}
                    onChange={(e) => handleChange("firstLine", e.target.value)}
                    required
                  />
                  <InputField
                    label="Second Line / Town"
                    value={formData.secondLine || ""}
                    onChange={(e) => handleChange("secondLine", e.target.value)}
                  />
                  <InputField
                    label="Delivery Contact Name"
                    value={formData.deliveryContactName || ""}
                    onChange={(e) => handleChange("deliveryContactName", e.target.value)}
                    required
                  />
                  <InputField
                    label="Postcode"
                    value={formData.postcode || ""}
                    onChange={(e) => handleChange("postcode", e.target.value)}
                    required
                  />
                  <InputField
                    label="Phone Number"
                    value={formData.phoneNumber || ""}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    required
                  />
                  <div className="col-span-full">
                    <InputField
                      label="Order Note"
                      value={formData.orderNote || ""}
                      onChange={(e) => handleChange("orderNote", e.target.value)}
                      textarea
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AllOrderEditModal;
