'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import ProductModelEntry from '@/components/product/create-product/ProductModelEntry';


export default function ProductModelEntryPage() {
  return (
    <AdminLayout>
      <div className="p-0 md:p-2">
        <ProductModelEntry />
      
      </div>
    </AdminLayout>
  );
}