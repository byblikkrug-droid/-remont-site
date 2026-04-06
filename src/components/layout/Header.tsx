'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const nav = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/services', label: 'Услуги' },
    { href: '/prices', label: 'Цены' },
    { href: '/portfolio', label: 'Портфолио' },
    { href: '/promos', label: 'Акции' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://t.me/remontpro_bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-2xl text-white shadow-lg hover:scale-110 hover:bg-blue-600 transition-all animate-pulse hover:animate-none"
          title="Написать в Telegram"
        >
          ✈️
        </a>
        <a 
          href="tel:+79001234567"
          className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-2xl text-white shadow-lg hover:scale-110 hover:bg-primary-700 transition-all"
          title="Позвонить"
        >
          📞
        </a>
      </div>

    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            <span className="text-3xl">🏠</span>
            <span>РемонтПро</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`px-4 py-2 rounded-lg transition-all ${pathname === n.href ? 'bg-primary-100 text-primary-700 font-semibold' : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79001234567" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-primary-600 transition">
              <span className="text-xl">📞</span>
              <span>+7 (900) 123-45-67</span>
            </a>
            <Link href="/auth/login" className="px-5 py-2.5 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all">Войти</Link>
            <Link href="/auth/register" className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all">Регистрация</Link>
          </div>

          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t space-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block py-3 px-4 text-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition" onClick={() => setIsOpen(false)}>{n.label}</Link>
            ))}
            <hr className="my-3" />
            <a href="tel:+79001234567" className="block py-3 px-4 text-lg font-semibold text-primary-600">📞 +7 (900) 123-45-67</a>
            <Link href="/auth/login" className="block py-3 px-4 text-lg text-gray-700 hover:text-primary-600">Войти</Link>
            <Link href="/auth/register" className="block py-3 px-4 bg-primary-600 text-white text-center rounded-lg font-semibold">Регистрация</Link>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
