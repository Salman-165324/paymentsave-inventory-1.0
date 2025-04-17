import AdminLayout from '@/components/layout/AdminLayout';
import DashboardOverview from '@/components/dashboard/DashboardOverview';

export default function DashboardPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardOverview />
    </AdminLayout>
  );
}