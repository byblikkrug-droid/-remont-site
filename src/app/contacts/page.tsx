import { CallbackForm } from '@/components/forms/CallbackForm'

const offices = [
  { city: 'Москва', address: 'ул. Строителей, 15', phone: '+7 (900) 123-45-67', email: 'moscow@remontpro.ru' },
  { city: 'Санкт-Петербург', address: 'пр. Невский, 100', phone: '+7 (900) 234-56-78', email: 'spb@remontpro.ru' },
  { city: 'Краснодар', address: 'ул. Красная, 50', phone: '+7 (900) 345-67-89', email: 'krasnodar@remontpro.ru' },
]

export default function ContactsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-primary-100">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Оставьте заявку</h2>
              <p className="text-gray-600 mb-8">Мы перезвоним в течение 15 минут и ответим на все вопросы</p>
              <CallbackForm />
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100">
              <h3 className="text-2xl font-bold mb-6">Наши офисы</h3>
              <div className="space-y-6">
                {offices.map((o, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-xl font-bold text-primary-600 mb-3">{o.city}</div>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-3">
                        <span>📍</span>
                        <span>{o.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>📞</span>
                        <a href={`tel:${o.phone}`} className="hover:text-primary-600">{o.phone}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>✉️</span>
                        <a href={`mailto:${o.email}`} className="hover:text-primary-600">{o.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Мы на карте</h2>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e8b8c8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e&amp;source=constructor&amp;ll=37.617644%2C55.755819&amp;z=11"
              width="100%" 
              height="400" 
              frameBorder="0"
              title="Карта офиса"
              className="w-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 mt-4">Москва, ул. Строителей, 15</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Сколько стоит ремонт квартиры?', a: 'Стоимость зависит от объёма работ и материалов. Косметический ремонт от 3 500 ₽/м², капитальный от 8 000 ₽/м².' },
              { q: 'За сколько дней можно сделать ремонт?', a: 'Косметический ремонт — 2-3 недели. Капитальный — 1-3 месяца в зависимости от площади.' },
              { q: 'Нужна ли предоплата?', a: 'Нет! Мы работаем без предоплат. Оплата производится по факту выполнения работ.' },
              { q: 'Даёте ли гарантию?', a: 'Да, 3 года гарантии на все виды работ. Гарантийный талон выдаём после завершения проекта.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-sm group">
                <summary className="p-6 cursor-pointer font-semibold text-lg hover:text-primary-600 transition">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
