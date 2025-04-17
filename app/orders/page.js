import AdminLayout from '@/components/layout/AdminLayout';
import OrderList from '@/components/order/OrderList';

export default function OrdersPage() {
  return (
    <AdminLayout>
      <OrderList />
    </AdminLayout>
  );
}