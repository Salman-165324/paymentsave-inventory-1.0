import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Sidebar - Desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 z-30 bg-primary text-primary-foreground">
        <Sidebar />
      </div>

      {/* Main Content with left padding to account for sidebar */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        <Header />
        <main className="flex-1 px-4 md:px-6 py-6 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
