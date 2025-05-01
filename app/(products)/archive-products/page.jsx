'use client';

import AdminLayout from '@/components/layout/AdminLayout';
import ArchiveProductPage from '@/components/product/archive-products/ArchiveProductPage';
import SingleProductList from '@/components/product/single-products/SingleProductList';

export default function ProductsPage() {
  return (
    <AdminLayout>
      <div className="p-0 md:p-2">
        <ArchiveProductPage />
      
      </div>
    </AdminLayout>
  );
}