'use client';

import { EllipsisVertical } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/Table';

// Sort icon (up/down double arrow)
const SortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block ml-1 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

// Badge helpers
const getOrderStatusBadge = (status) => {
  const base = 'px-2 py-0.5 text-xs font-semibold rounded-full';
  switch (status) {
    case 'Processing':
      return `${base} text-white bg-blue-500`;
    case 'Awaiting Shipment':
      return `${base} text-white bg-green-500`;
    case 'Live Base':
      return `${base} text-white bg-red-500`;
    case 'On Hold':
      return `${base} text-white bg-orange-400`;
    default:
      return `${base} text-gray-700 bg-gray-200`;
  }
};

const getConditionBadge = (condition) => {
  const base = 'px-2 py-0.5 text-xs font-semibold rounded-full';
  switch (condition) {
    case 'New':
      return `${base} text-white bg-green-500`;
    case 'Used':
      return `${base} text-white bg-blue-500`;
    default:
      return `${base} text-gray-700 bg-gray-200`;
  }
};

export default function ProductTable({ products }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F5F5F5]">
          <TableHead>Action</TableHead>
          <TableHead>
            Serial Number <SortIcon />
          </TableHead>
          <TableHead>
            Model <SortIcon />
          </TableHead>
          <TableHead>
            Status <SortIcon />
          </TableHead>
          <TableHead>
            Supplier <SortIcon />
          </TableHead>
          <TableHead>
            TID <SortIcon />
          </TableHead>
          <TableHead>
            Product Condition <SortIcon />
          </TableHead>
          <TableHead>
            Product Category <SortIcon />
          </TableHead>
          <TableHead>
            MID <SortIcon />
          </TableHead>
          <TableHead>
            Price <SortIcon />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs font-bold">
                <EllipsisVertical color="white" size={14} />
              </div>
            </TableCell>
            <TableCell>{product.serialNumber}</TableCell>
            <TableCell>{product.model}</TableCell>
            <TableCell>
              <span className={getOrderStatusBadge(product.status)}>
                {product.status}
              </span>
            </TableCell>
            <TableCell>{product.supplier}</TableCell>
            <TableCell>{product.tid}</TableCell>
            <TableCell>
              <span className={getConditionBadge(product.condition)}>
                {product.condition}
              </span>
            </TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.mid}</TableCell>
            <TableCell>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
