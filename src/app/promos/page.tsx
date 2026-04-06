import Link from 'next/link'
import { CallbackForm } from '@/components/forms/CallbackForm'

function getWeekProjects(): number {
  const now = new Date()
  const day = now.getDate()
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const weeksInMonth = Math.ceil(daysInMonth / 7)
  const currentWeek = Math.ceil(day / 7)
  
  const initial = 10
  const perWeek = Math.ceil(initial / weeksInMonth)
  
  return Math.max(0, initial - (currentWeek - 1) * perWeek)
}

const promos = [
  {
    id: 1,
    title: 'Скидка 15% на ремонт',
    badge: 'Акция месяца',
    badgeColor: 'bg-red-500',
    icon: '🔥',
    expires: 'до 30 апреля 2026',
    desc: 'Успейте забронировать скидку 15% при заказе ремонта в апреле. Акция ограничена количеством бригад.',
    conditions: [
      'Минимальная сумма заказа — 150 000 ₽',
      'Скидка применяется к работам, не к материалам',
      'Акция не суммируется с другими предложениями',
    ],
    image: '💰',
  },
  {
    id: 2,
    title: 'Бесплатный клининг после ремонта',
    badge: 'Подарок',
    badgeColor: 'bg-green-500',
    icon: '✨',
    expires: 'Весь год',
    desc: 'При заказе капитального ремонта мы проводим полный клининг помещения перед сдачей — вы получаете квартиру готовой к жизни.',
    conditions: [
      'Ремонт от 40 м²',
      'Только при капитальном ремонте',
      'Включает вывоз строительного мусора',
    ],
    image: '🎁',
  },
  {
    id: 3,
    title: 'Бесплатный дизайн-проект',
    badge: 'Премиум',
    badgeColor: 'bg-purple-500',
    icon: '🎨',
    expires: 'Осталось 10 проектов',
    desc: 'При авторском ремонте от 80 м² получаете профессиональный дизайн-проект стоимостью до 150 000 ₽ бесплатно.',
    conditions: [
      'Авторский ремонт от 80 м²',
      '3D-визуализация включена',
      'Подбор материалов и мебели',
    ],
    image: '✨',
  },
  {
    id: 4,
    title: 'Рассрочка 0% до 24 месяцев',
    badge: 'Кредит',
    badgeColor: 'bg-blue-500',
    icon: '💳',
    expires: 'Круглый год',
    desc: 'Оформите рассрочку на ремонт без переплаты. Нужен только паспорт, одобрение за 1 день.',
    conditions: [
      'Без переплаты',
      'Без первоначального взноса',
      'Одобрение за 15 минут',
    ],
    image: '💰',
  },
  {
    id: 5,
    title: 'Бесплатный замер и смета',
    badge: 'Услуга',
    badgeColor: 'bg-yellow-500',
    icon: '📏',
    expires: 'Круглый год',
    desc: 'Выезд специалиста и расчёт сметы — бесплатно и без обязательств.',
    conditions: [
      'Выезд в удобное время',
      'Точный расчёт за 24 часа',
      'Не обязывает к заказу',
    ],
    image: '📋',
  },
  {
    id: 6,
    title: 'Помощь с материалами со скидкой',
    badge: 'Сервис',
    badgeColor: 'bg-orange-500',
    icon: '🛒',
    expires: 'Круглый год',
    desc: 'Помогаем с закупкой материалов со скидкой до 30% у наших партнёров-поставщиков.',
    conditions: [
      'Только проверенные поставщики',
      'Доставка на объект',
      'Расчёт точного количества',
    ],
    image: '📦',
  },
]

export default function PromosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 Время ограничено!
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Акции и спецпредложения</h1>
          <p className="text-xl text-red-100">Выгодные условия для наших клиентов</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promos.map((p) => {
              const projectsLeft = p.id === 3 ? getWeekProjects() : null
              return (
                <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <div className="relative">
                    <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <span className="text-8xl">{p.image}</span>
                    </div>
                    <span className={`absolute top-4 left-4 ${p.badgeColor} px-3 py-1 rounded-full text-xs font-semibold text-white`}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">{p.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p className="text-red-500 text-sm font-medium">
                          {projectsLeft !== null 
                            ? `Осталось ${projectsLeft} из 10 проектов` 
                            : `⏱️ ${p.expires}`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{p.desc}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700">Условия:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {p.conditions.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href="/contacts" 
                      className="block w-full py-3 bg-primary-600 text-white text-center rounded-xl font-semibold hover:bg-primary-700 transition"
                    >
                      Получить предложение
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Получить персональное предложение</h2>
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Расскажите о вашем проекте</h3>
                  <p className="text-gray-600 mb-6">
                    Оставьте заявку и получите бесплатную консультацию с расчётом стоимости вашего ремонта
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Бесплатная консультация</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Точный расчёт за 24 часа</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Скидка при заказе</span>
                    </div>
                  </div>
                </div>
                <CallbackForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}