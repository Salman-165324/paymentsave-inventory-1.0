import AdminLayout from '@/components/layout/AdminLayout';
import AddProductForm from '@/components/product/create-product/AddProductForm';

export default function NewProductPage() {
  return (
    <AdminLayout>
     <AddProductForm/>
    </AdminLayout>
  );
}