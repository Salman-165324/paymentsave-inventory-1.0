'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import SingleProductList from '@/components/product/single-products/SingleProductList';

export default function ProductsPage() {
  return (
    <AdminLayout>
      <div className="p-0 md:p-2">
        <SingleProductList />
      
      </div>
    </AdminLayout>
  );
}