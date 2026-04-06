'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/dashboard/profile', label: 'Профиль' },
  { href: '/dashboard/addresses', label: 'Мои адреса' },
  { href: '/dashboard/callbacks', label: 'Заявки' },
  { href: '/dashboard/settings', label: 'Настройки' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4 px-4">Личный кабинет</h2>
              <nav className="space-y-1">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className={`block px-4 py-2 rounded-lg ${pathname === n.href ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t space-y-1">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">← На главную</Link>
                <Link href="/api/auth/logout" className="block px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">Выйти</Link>
              </div>
            </div>
          </aside>
          <main className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
