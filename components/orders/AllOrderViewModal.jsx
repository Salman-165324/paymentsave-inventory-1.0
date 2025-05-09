"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const OrderViewModal = ({ isOpen, onClose, order }) => {
  const [activeTab, setActiveTab] = useState(order?.terminals?.[0]?.id || "");

  if (!order) return null;

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
              Orders ( Model Wise )
            </Dialog.Title>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6 lg:space-y-8 mx-auto">
              {/* Merchant Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Merchant Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-6 text-sm text-gray-800">
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">MID</div>
                    <div className="text-[#858D9D]">{order.mid}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Trading Name
                    </div>
                    <div className="text-[#858D9D]">{order.tradingName}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Merchant Name
                    </div>
                    <div className="text-[#858D9D]">{order.merchantName}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Merchant Mobile
                    </div>
                    <div className="text-[#858D9D]">{order.merchantMobile}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Merchant Alt. Mobile (Optional)
                    </div>
                    <div className="text-[#858D9D]">
                      {order.merchantAltMobile}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Merchant Email
                    </div>
                    <div className="text-[#858D9D]">{order.merchantEmail}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      BDM Email
                    </div>
                    <div className="text-[#858D9D]">{order.bdmEmail}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Priority
                    </div>
                    <div className="text-[#858D9D]">{order.priority}</div>
                  </div>
                </div>
              </div>

              {/* Terminal Information */}
              <div>
                <h3 className="font-medium text-lg mb-4">
                  Terminal Information
                </h3>
                
                {/* Terminal Tabs */}
                {order.terminals && order.terminals.length > 0 && (
                  <div className="border border-[#D9D9D9] rounded-md">
                    <div className="flex border-b overflow-x-auto">
                      {order.terminals.map((terminal, index) => (
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
                    {order.terminals.map((terminal) => (
                      <div
                        key={terminal.id}
                        className={`p-4 ${activeTab === terminal.id ? "block" : "hidden"}`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8 gap-x-6 text-sm text-gray-800">
                          <div>
                            <div className="font-medium text-[#48505E] mb-2">TID</div>
                            <div className="text-[#858D9D]">{terminal.tid}</div>
                          </div>
                          <div>
                            <div className="font-medium text-[#48505E] mb-2">
                              Terminal Model
                            </div>
                            <div className="text-[#858D9D]">
                              {terminal.terminalModel}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-[#48505E] mb-2">
                              Terminal Condition
                            </div>
                            <div className="text-[#858D9D]">
                              {terminal.terminalCondition}
                            </div>
                          </div>
                        </div>
                        
                        {/* Accessories Section */}
                        <div className="mt-6">
                          <h4 className="font-medium text-base mb-3">Accessories</h4>
                          {terminal.accessories && terminal.accessories.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {terminal.accessories.map((accessory, i) => (
                                <div key={i} className="border border-[#D9D9D9] rounded-md p-3">
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <div className="font-medium text-[#48505E] mb-1">Model</div>
                                      <div className="text-[#858D9D]">{accessory.model}</div>
                                    </div>
                                    <div>
                                      <div className="font-medium text-[#48505E] mb-1">Quantity</div>
                                      <div className="text-[#858D9D]">{accessory.quantity}</div>
                                    </div>
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

                          <div className="text-sm text-gray-800">
                            <div className="font-semibold">Items</div>
                            <div className="grid grid-cols-4 gap-x-6 gap-y-2 lg:gap-y-5">
                              {/* Divider */}
                              <div className="col-span-4 border-b border-gray-300 my-2"></div>

                              {/* Data Rows */}
                              {[
                                "psApp",
                                "weblink",
                                "amex",
                                "diners",
                                "cashBack",
                                "gratuity",
                                "preAuth",
                                "motoCnp",
                              ]
                                .reduce((rows, label, i, arr) => {
                                  if (i % 2 === 0) {
                                    rows.push([label, arr[i + 1]]);
                                  }
                                  return rows;
                                }, [])
                                .map(([label1, label2], i) => (
                                  <React.Fragment key={i}>
                                    <div className="font-medium text-[#48505E]">
                                      {label1.replace(/([A-Z])/g, " $1").trim()}
                                    </div>
                                    <div className="text-[#858D9D]">
                                      {terminal?.[label1] ? "Yes" : "No"}
                                    </div>
                                    {label2 ? (
                                      <>
                                        <div className="font-medium text-[#48505E]">
                                          {label2.replace(/([A-Z])/g, " $1").trim()}
                                        </div>
                                        <div className="text-[#858D9D]">
                                          {terminal?.[label2] ? "Yes" : "No"}
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div></div>
                                        <div></div>
                                      </>
                                    )}
                                  </React.Fragment>
                                ))}
                            </div>
                          </div>
                        </div>

                        {/* Auto Batch Settings */}
                        <div className="mt-8">
                          <h3 className="font-medium text-lg mb-4">
                            Auto Batch Settings
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8 gap-x-6 text-sm text-gray-800">
                            <div className="col-span-1 md:col-span-2 lg:col-span-3">
                              <div className="font-medium text-[#48505E] mb-2">
                                Auto Batch
                              </div>
                              <div className="text-[#858D9D]">{terminal.autoBatch}</div>
                            </div>
                            <div>
                              <div className="font-medium text-[#48505E] mb-2">
                                Till Roll Text 1
                              </div>
                              <div className="text-[#858D9D]">
                                {terminal.tillRollText1}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium text-[#48505E] mb-2">
                                Till Roll Text 2
                              </div>
                              <div className="text-[#858D9D]">
                                {terminal.tillRollText2}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium text-[#48505E] mb-2">
                                Till Roll Text 3
                              </div>
                              <div className="text-[#858D9D]">
                                {terminal.tillRollText3}
                              </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8 gap-x-6 text-sm text-gray-800">
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Delivery Address Type
                    </div>
                    <div className="text-[#858D9D]">
                      {order.deliveryAddressType}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      First Line / Street
                    </div>
                    <div className="text-[#858D9D]">{order.firstLine}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Second Line / Town
                    </div>
                    <div className="text-[#858D9D]">{order.secondLine}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Delivery Contact Name
                    </div>
                    <div className="text-[#858D9D]">
                      {order.deliveryContactName}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Postcode
                    </div>
                    <div className="text-[#858D9D]">{order.postcode}</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#48505E] mb-2">
                      Phone Number
                    </div>
                    <div className="text-[#858D9D]">{order.phoneNumber}</div>
                  </div>
                  <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="font-medium text-[#48505E] mb-2">
                      Order Note
                    </div>
                    <div className="text-[#858D9D]">{order.orderNote}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default OrderViewModal;
