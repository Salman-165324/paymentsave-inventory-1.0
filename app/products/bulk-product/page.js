import AdminLayout from '@/components/layout/AdminLayout';
import BulkAddProduct from '@/components/product/create-product/AddBulkProduct';
import AddProductForm from '@/components/product/create-product/AddProductForm';

export default function BulkProductPage() {
  return (
    <AdminLayout>
     <BulkAddProduct/>
    </AdminLayout>
  );
}