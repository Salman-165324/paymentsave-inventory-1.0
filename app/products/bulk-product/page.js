import AdminLayout from '@/components/layout/AdminLayout';
import BulkAddProduct from '@/components/product/create-product/AddBulkProduct';


export default function BulkProductPage() {
  return (
    <AdminLayout>
     <BulkAddProduct/>
    </AdminLayout>
  );
}