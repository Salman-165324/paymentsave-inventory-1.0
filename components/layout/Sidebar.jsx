import Link from 'next/link';
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Products",
    href: "/products",
    submenu: [
      {
        title: "All Products",
        href: "/products",
      },
      {
        title: "Single Products",
        href: "/products/single-products",
      },
      {
        title: "Add Product",
        href: "/products/new",
      },
      {
        title: "Categories",
        href: "/products/categories",
      }
    ]
  },
  {
    title: "Orders",
    href: "/orders",
    submenu: [
      {
        title: "All Orders",
        href: "/orders",
      },
      {
        title: "Processing",
        href: "/orders/processing",
      },
      {
        title: "Completed",
        href: "/orders/completed",
      }
    ]
  }
];

export default function Sidebar({ className }) {
  return (
    <div className={cn("w-64 bg-background border-r h-screen overflow-y-auto", className)}>
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center space-x-2 font-semibold text-lg px-2 py-4">
          <span>Inventory Admin</span>
        </div>
        
        <nav className="flex-1 mt-6">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href}
                  className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {item.title}
                </Link>
                
                {item.submenu && (
                  <ul className="pl-6 mt-1 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subItem.href}
                          className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
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
        
        <div className="mt-auto pt-4 border-t">
          <div className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors cursor-pointer">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}