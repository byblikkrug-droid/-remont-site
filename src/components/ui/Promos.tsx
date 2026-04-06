'use client'

import { useState, useEffect } from 'react'

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

export function Promos() {
  const [projectsLeft, setProjectsLeft] = useState(10)

  useEffect(() => {
    setProjectsLeft(getWeekProjects())
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-red-500 rounded-full text-sm font-semibold mb-4 animate-pulse">
            Акции и спецпредложения
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Выгодные предложения</h2>
          <p className="text-xl text-primary-100">Спешите воспользоваться — количество ограничено!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div 
              key={promo.id} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${promo.badgeColor}`}>
                  {promo.badge}
                </span>
                <span className="text-3xl">{promo.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="text-primary-200 text-sm mb-3">{promo.subtitle}</p>
              <p className="text-primary-100 text-sm">{promo.desc}</p>
              <div className="mt-4 text-sm text-primary-300">
                {promo.id === 3 ? `Осталось ${projectsLeft} из 10 проектов` : promo.expires}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/promos" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:shadow-xl transition hover:scale-105"
          >
            Все акции
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

const promos = [
  {
    id: 1,
    title: 'Скидка 15%',
    subtitle: 'При заказе ремонта в апреле',
    desc: 'Успейте забронировать скидку до конца месяца',
    badge: 'Акция',
    badgeColor: 'bg-red-500',
    icon: '🔥',
    expires: 'до 30 апреля',
  },
  {
    id: 2,
    title: 'Бесплатный клининг',
    subtitle: 'При заказе капитального ремонта',
    desc: 'Полная уборка помещения с вывозом мусора',
    badge: 'Подарок',
    badgeColor: 'bg-green-500',
    icon: '✨',
    expires: 'Весь год',
  },
  {
    id: 3,
    title: 'Бесплатный дизайн-проект',
    subtitle: 'При авторском ремонте от 80 м²',
    desc: 'Профессиональный дизайн-проект до 150 000 ₽ бесплатно',
    badge: 'Премиум',
    badgeColor: 'bg-purple-500',
    icon: '🎨',
    expires: 'Осталось 10 проектов',
  },
  {
    id: 4,
    title: 'Рассрочка 0% до 24 месяцев',
    subtitle: 'Без переплаты и скрытых условий',
    desc: 'Оформите рассрочку прямо у нас в офисе',
    badge: 'Кредит',
    badgeColor: 'bg-blue-500',
    icon: '💳',
    expires: 'Круглый год',
  },
]