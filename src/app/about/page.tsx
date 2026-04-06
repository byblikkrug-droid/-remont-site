import Link from 'next/link'
import { CallbackForm } from '@/components/forms/CallbackForm'

const stats = [
  { num: '12+', label: 'Лет опыта' },
  { num: '850+', label: 'Проектов' },
  { num: '98%', label: 'Довольных клиентов' },
  { num: '50+', label: 'Мастеров' },
]

const team = [
  { name: 'Алексей Петров', role: 'Основатель, директор', exp: '15 лет опыта' },
  { name: 'Мария Сидорова', role: 'Главный дизайнер', exp: '10 лет опыта' },
  { name: 'Иван Козлов', role: 'Главный прораб', exp: '12 лет опыта' },
  { name: 'Елена Новикова', role: 'Менеджер проектов', exp: '8 лет опыта' },
]

const values = [
  { icon: '🎯', title: 'Качество', desc: 'Используем только проверенные материалы и технологии' },
  { icon: '⏰', title: 'Сроки', desc: 'Соблюдаем оговоренные сроки или возвращаем деньги' },
  { icon: '💰', title: 'Цена', desc: 'Прозрачное ценообразование без скрытых платежей' },
  { icon: '🛡️', title: 'Гарантия', desc: '3 года гарантии на все виды работ' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">О компании</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Мы создаём комфортное пространство для жизни с 2012 года. 
              Каждый проект — это история успеха наших клиентов.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-3xl border border-primary-100">
                <div className="text-5xl font-bold text-primary-600 mb-2">{s.num}</div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Наша миссия</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Превращать обычные квартиры в уютные дома, где каждая деталь продумана. 
                Мы не просто делаем ремонт — мы создаём пространства, в которые хочется возвращаться.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наша команда — это более 50 профессионалов: дизайнеры, архитекторы, инженеры и мастера. 
                Каждый из них любит своё дело и вкладывает душу в каждый проект.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span>Лицензия</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span>Страховка</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span>Сертификаты</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl aspect-square flex items-center justify-center">
                <span className="text-9xl">🏢</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-primary-600">12+</div>
                <div className="text-gray-600">лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши ценности</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Принципы, которыми мы руководствуемся в каждом проекте</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  👤
                </div>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-primary-400 mb-1">{t.role}</p>
                <p className="text-gray-400 text-sm">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Оставьте заявку</h2>
                <p className="text-lg text-gray-600 mb-6">Бесплатная консультация и расчёт стоимости за 24 часа</p>
                <CallbackForm />
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Наш офис</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-600">г. Москва, ул. Строителей, 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+7 (900) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@remontpro.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-gray-600">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
