import { CallbackForm } from '@/components/forms/CallbackForm'

export const metadata = { title: 'Контакты | РемонтПро' }

export default function CallbackPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h1>
        <p className="text-gray-600 text-center mb-12">Оставьте заявку и мы перезвоним за 15 минут</p>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
            <CallbackForm />
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div><p className="font-semibold">Телефон</p><a href="tel:+79001234567" className="text-primary-600">+7 (900) 123-45-67</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div><p className="font-semibold">Email</p><a href="mailto:info@remontpro.ru" className="text-primary-600">info@remontpro.ru</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div><p className="font-semibold">Адрес</p><p className="text-gray-600">Москва, ул. Примерная, 1</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div><p className="font-semibold">Режим работы</p><p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">Преимущества</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Бесплатная консультация</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Выезд замерщика бесплатно</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Расчёт сметы за 24 часа</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Гарантия 3 года</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
