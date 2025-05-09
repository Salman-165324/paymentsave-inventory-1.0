"use client";

import React, { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import TableActionMenu from "@/components/ui/TableActionMenu";
import DateRangePicker from "@/components/ui/DateRangePicker";
import FilterButton from "@/components/ui/FilterButton";
import TableHead from "@/components/ui/TableHead";
import OrderViewModal from "./OrderViewModal";
import OrderEditModal from "./OrderEditModal";

const data = [
  {
    id: 1,
    orderId: "ORD-0123456",
    orderDate: "12/05/2024",
    terminalModel: "PAX A920",
    status: "On Hold",
    addressType: "Business",
    assign: "John Doe",
    priority: "Urgent",
    deliveryChannel: "Express",
    podRef: "POD-001",
    notes: "Handle with care",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A920 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 2,
    orderId: "ORD-0789123",
    orderDate: "15/05/2024",
    terminalModel: "PAX A80",
    status: "Awaiting Shipment",
    addressType: "Residential",
    assign: "Jane Smith",
    priority: "Normal",
    deliveryChannel: "Standard",
    podRef: "POD-002",
    notes: "Signature required",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A80 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 3,
    orderId: "ORD-0456789",
    orderDate: "20/05/2024",
    terminalModel: "PAX A35",
    status: "Live Base",
    addressType: "Business",
    assign: "Mike Johnson",
    priority: "Low",
    deliveryChannel: "Express",
    podRef: "POD-003",
    notes: "Fragile items",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A35 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 4,
    orderId: "ORD-0987654",
    orderDate: "22/05/2024",
    terminalModel: "PAX A920",
    status: "Processing",
    addressType: "Business",
    assign: "John Doe",
    priority: "High",
    deliveryChannel: "Express",
    podRef: "POD-004",
    notes: "Handle with care",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A920 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 5,
    orderId: "ORD-0654321",
    orderDate: "25/05/2024",
    terminalModel: "PAX A80",
    status: "Processing",
    addressType: "Residential",
    assign: "Jane Smith",
    priority: "Normal",
    deliveryChannel: "Standard",
    podRef: "POD-005",
    notes: "Signature required",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A80 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
  },
  {
    id: 6,
    orderId: "ORD-0321654",
    orderDate: "28/05/2024",
    terminalModel: "PAX A35",
    status: "Live Base",
    addressType: "Business",
    assign: "Mike Johnson",
    priority: "Low",
    deliveryChannel: "Express",
    podRef: "POD-006",
    notes: "Fragile items",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A35 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 7,
    orderId: "ORD-0147258",
    orderDate: "30/05/2024",
    terminalModel: "PAX A920",
    status: "Processing",
    addressType: "Business",
    assign: "John Doe",
    priority: "High",
    deliveryChannel: "Express",
    podRef: "POD-007",
    notes: "Handle with care",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A920 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
  {
    id: 8,
    orderId: "ORD-0963852",
    orderDate: "02/06/2024",
    terminalModel: "PAX A80",
    status: "On Hold",
    addressType: "Residential",
    assign: "Jane Smith",
    priority: "Normal",
    deliveryChannel: "Standard",
    podRef: "POD-008",
    notes: "Signature required",
    // Merchant Information
    mid: "MID123456",
    tradingName: "Tech Solutions Ltd",
    merchantName: "John Smith",
    merchantMobile: "07123456789",
    merchantAltMobile: "07987654321",
    merchantEmail: "john.smith@techsolutions.com",
    bdmEmail: "bdm@techsolutions.com",
    // Terminal Information
    tid: "TID789012",
    terminalCondition: "New",
    accessoriesModel: "PAX A80 Accessories Kit",
    // Software Add-ons
    psApp: true,
    weblink: true,
    amex: false,
    diners: false,
    cashBack: true,
    gratuity: false,
    preAuth: true,
    motoCnp: false,
    // Auto Batch Settings
    autoBatch: "Enabled",
    tillRollText1: "Thank you for shopping with us",
    tillRollText2: "Please visit again",
    tillRollText3: "Have a great day!",
    // Delivery Information
    deliveryAddressType: "Business",
    firstLine: "123 Business Park",
    secondLine: "Tech City",
    deliveryContactName: "John Smith",
    postcode: "SW1A 1AA",
    phoneNumber: "07123456789",
    orderNote: "Please deliver during business hours",
  },
];

// Function to get priority badge color
const getPriorityBadgeColor = (priority) => {
  switch (priority) {
    case "Urgent":
      return "bg-[#F13016] text-white";
    case "High":
      return "bg-[#FFAA3A] text-white";
    case "Normal":
      return "bg-[#2B98FF] text-white";
    case "Low":
      return "bg-[#858D9D] text-white";
    default:
      return "bg-[#858D9D] text-white";
  }
};

// Function to get status badge color
const getStatusBadgeColor = (status) => {
  switch (status) {
    case "On Hold":
      return "bg-[#FD7F30] text-white";
    case "Awaiting Shipment":
      return "bg-[#22C55E] text-white";
    case "Live Base":
      return "bg-[#FF6869] text-white";
    case "Processing":
      return "bg-[#2B98FF] text-white";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function SingleOrdersTable({ tableTitle }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleCloseDropdown = () => {
    setOpenDropdownId(null);
  };

  const handleRangeChange = (formatted, startDate, endDate) => {
    console.log(formatted, startDate, endDate);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setShowEditModal(true);
  };

  const handleSaveOrder = (updatedOrder) => {
    console.log("Saving updated order:", updatedOrder);
    // Here you would typically update the order in your data source
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#383E49] mb-4">
          {tableTitle}
        </h2>
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex items-center w-full md:w-auto gap-2 mr-2 xl:mr-8">
            <div className="relative w-full md:w-64">
              <DateRangePicker onRangeChange={handleRangeChange} />
            </div>
          </div>
          <FilterButton
            filterName="Product status"
            filterOptions={[
              "Status",
              "Delivery Channel",
              "Priority",
              "Delivery Type",
            ]}
          />
        </div>
      </div>
      <div className="overflow-auto rounded-md">
        <div className="min-w-full rounded-md">
          <table className="min-w-full text-sm text-left">
            <TableHead
              heads={[
                "Action",
                "Date",
                "Order ID",
                "Terminal Model",
                "Status",
                "Address Type",
                "Assign",
                "Priority",
                "Delivery Channel",
                "POD Ref",
                "Notes",
              ]}
            />
            <tbody className="divide-y divide-gray-100 text-gray-700 text-center">
              {data.map((item, i) => (
                <tr key={i} className="border-b border-[#D9D9D9] text-sm">
                  <td className="px-4 py-2 flex justify-center relative z-10">
                    <TableActionMenu
                      onView={() => handleViewOrder(item)}
                      onEdit={() => handleEditOrder(item)}
                      onDelete={() => console.log(`Delete item ${item.id}`)}
                      isOpen={openDropdownId === item.id}
                      onToggle={() => handleToggleDropdown(item.id)}
                      onClose={handleCloseDropdown}
                    />
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap text-[#48505E] font-medium text-xs">
                    {item.orderDate}
                  </td>
                  <td className="px-2 py-2 text-[#48505E] font-medium text-xs">
                    {item.orderId}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.terminalModel}
                  </td>
                  <td className="px-1 py-2 text-[#48505E] font-medium text-xs flex justify-center">
                    <span
                      className={`px-1.5 py-1 rounded-full text-[10px] lg:text-xs font-medium ${getStatusBadgeColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.addressType}
                  </td>
                  <td className="px-1 py-2 text-[#48505E] font-medium text-xs flex justify-center">
                    <span className="px-1.5 py-1 rounded-full text-[10px] lg:text-xs font-medium bg-[#2B98FF] text-white">
                      {item.assign}
                    </span>
                  </td>
                  <td className="px-1 py-2 text-[#48505E] font-medium text-xs">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityBadgeColor(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.deliveryChannel}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.podRef}
                  </td>
                  <td className="px-4 py-2 text-[#48505E] font-medium text-xs">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <OrderViewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        order={selectedOrder}
      />
      <OrderEditModal 
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        order={selectedOrder}
        onSave={handleSaveOrder}
      />
    </>
  );
}
