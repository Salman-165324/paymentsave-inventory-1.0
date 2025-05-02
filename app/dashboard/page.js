"use client";

import AdminLayout from "@/components/layout/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="font-semibold">Products</h2>
            <p className="mt-1 text-3xl font-bold">250</p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="font-semibold">Suppliers</h2>
            <p className="mt-1 text-3xl font-bold">12</p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="font-semibold">Categories</h2>
            <p className="mt-1 text-3xl font-bold">8</p>
          </div>
        </div>
        <div className="rounded-lg border p-4 shadow-sm">
          <h2 className="font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">New Product Added</p>
                <p className="text-sm text-muted-foreground">iPhone 14 Pro</p>
              </div>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Supplier Updated</p>
                <p className="text-sm text-muted-foreground">
                  Tech Suppliers Ltd
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Yesterday</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Damage Product Reported</p>
                <p className="text-sm text-muted-foreground">
                  Samsung Galaxy S22
                </p>
              </div>
              <span className="text-sm text-muted-foreground">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
