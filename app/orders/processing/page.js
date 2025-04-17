import AdminLayout from '@/components/layout/AdminLayout';
import OrderList from '@/components/order/OrderList';

export default function ProcessingOrdersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Processing Orders</h2>
        </div>
        
        <OrderList />
      </div>
    </AdminLayout>
  );
}