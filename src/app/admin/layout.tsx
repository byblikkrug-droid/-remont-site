'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  { href: '/admin', icon: '📊', label: 'Панель управления' },
  { href: '/admin/callbacks', icon: '📞', label: 'Заявки' },
  { href: '/admin/portfolio', icon: '🖼️', label: 'Портфолио' },
  { href: '/admin/services', icon: '🔧', label: 'Услуги' },
  { href: '/admin/reviews', icon: '⭐', label: 'Отзывы' },
  { href: '/admin/team', icon: '👥', label: 'Команда' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<{ name: string; email: string } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (!user) {
      router.push('/admin/login');
    } else {
      setAdmin(JSON.parse(user));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            {sidebarOpen && <span className="font-bold text-lg">Админ-панель</span>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg">
              {sidebarOpen ? '◀' : '▶'}
            </button>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition"
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
            {sidebarOpen && (
              <div className="text-sm">
                <div className="font-medium">{admin.name}</div>
                <div className="text-gray-400 text-xs">{admin.email}</div>
              </div>
            )}
            <button onClick={handleLogout} className="p-2 hover:bg-gray-800 rounded-lg text-red-400" title="Выйти">
              🚪
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
