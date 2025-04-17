import Sidebar from './Sidebar';
import Header from './Header';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar className="hidden md:block" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}