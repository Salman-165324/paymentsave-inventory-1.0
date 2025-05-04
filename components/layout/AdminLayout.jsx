import Sidebar from "./Sidebar";
import Header from "./Header";
import { SidebarProvider } from "../../context/SidebarContext";
import CollapsibleSidebar from "./CollapsibleSidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        {/* Sidebar area - controlled by CollapsibleSidebar component */}
        <CollapsibleSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 px-4 md:px-6 py-6 overflow-auto bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
