'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  FileText,
  Briefcase,
  Server,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Products',
    href: '/products',
    icon: <Package className="h-4 w-4 mr-2" />,
    submenu: [
      { title: 'All Products', href: '/products' },
      { title: 'Product Model Entry', href: '/products/product-model-entry' },
      { title: 'Single Products', href: '/products/single-products' },
      { title: 'Add Product', href: '/products/new' },
      { title: 'Bulk Product Entry', href: '/products/bulk-product' },
      { title: 'Add Damage/Loss Products', href: '/products/add-damage-loss-products' },
      { title: 'Add In Repair', href: '/products/add-in-repair' },
      { title: 'Categories', href: '/products/categories' },
    ],
  },
  {
    title: 'Orders',
    href: '/orders',
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
    submenu: [
      { title: 'All Orders', href: '/orders' },
      { title: 'Processing', href: '/orders/processing' },
      { title: 'Completed', href: '/orders/completed' },
    ],
  },
  {
    title: 'Live Base',
    href: '/live-base',
    icon: <Server className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Businesses',
    href: '/businesses',
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Orders to Supplier',
    href: '/orders-to-supplier',
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Invoice',
    href: '/invoice',
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <Users className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Account',
    href: '/account',
    icon: <Users className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
];

export default function Sidebar({ className }) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);

  const isActive = (href) => pathname.startsWith(href);

  return (
    <div className={cn('w-64 bg-[#0F3B69] text-white h-screen overflow-y-auto', className)}>
      <div className="flex flex-col h-full p-4">
        {/* Logo Section */}
        <div className="flex items-center px-4 py-4 space-x-3">
          <img src="/logo.svg" alt="Paymentsave" className="h-6 w-auto" />
          <div className="text-white font-bold text-sm">Paymentsave</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors',
                    isActive(item.href) ? 'bg-white/10 font-semibold' : 'hover:bg-white/10'
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>

                {/* Submenu */}
                {item.submenu && openIndex === index && (
                  <ul className="pl-8 mt-1 space-y-1 text-sm">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            'block py-1 transition-colors hover:text-white',
                            isActive(subItem.href) ? 'text-white font-medium' : 'text-gray-300'
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center px-3 py-2 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md transition-colors">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
