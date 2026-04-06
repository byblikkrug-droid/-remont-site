import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <span>🏠</span>
              <span>РемонтПро</span>
            </div>
            <p className="text-gray-400 mb-4">Профессиональный ремонт квартир и домов под ключ с гарантией качества</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">📱</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">💬</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">📺</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition">Косметический ремонт</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Капитальный ремонт</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Ремонт под ключ</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Дизайн интерьера</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">О нас</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Портфолио</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">📞 <a href="tel:+79001234567" className="hover:text-white">+7 (900) 123-45-67</a></li>
              <li className="flex items-center gap-2">✉️ <a href="mailto:info@remontpro.ru" className="hover:text-white">info@remontpro.ru</a></li>
              <li className="flex items-center gap-2">📍 Москва, ул. Строителей, 15</li>
              <li className="flex items-center gap-2">🕐 Пн-Пт: 9:00-20:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} РемонтПро. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Политика конфиденциальности</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition">Политика cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
