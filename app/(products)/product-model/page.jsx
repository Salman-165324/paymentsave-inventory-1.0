'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import ProducModel from '@/components/product/product-model/ProductModelPage';


export default function ProductsPage() {
  return (
    <AdminLayout>
      <div className="p-0 md:p-2">
        <ProducModel />
      
      </div>
    </AdminLayout>
  );
}