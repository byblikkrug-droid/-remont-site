const projects = [
  { id: 1, title: 'Квартира ЖК "Солнечный"', area: '85 м²', type: 'Капитальный', time: '2.5 месяца', desc: 'Полный ремонт трёхкомнатной квартиры с заменой всех коммуникаций', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop' },
  { id: 2, title: 'Дом в Подмосковье', area: '220 м²', type: 'Под ключ', time: '5 месяцев', desc: 'Дизайн и ремонт загородного дома с ландшафтным дизайном', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop' },
  { id: 3, title: 'Офис IT-компании', area: '150 м²', type: 'Коммерческий', time: '1.5 месяца', desc: 'Современный офис open space с переговорными комнатами', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
  { id: 4, title: 'Студия в центре', area: '42 м²', type: 'Под ключ', time: '1 месяц', desc: 'Стильный ремонт маленькой квартиры с зонированием', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop' },
  { id: 5, title: 'Таунхаус', area: '180 м²', type: 'Капитальный', time: '4 месяца', desc: 'Ремонт двухэтажного таунхауса с гаражом', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop' },
  { id: 6, title: 'Пентхаус', area: '320 м²', type: 'Премиум', time: '8 месяцев', desc: 'Премиум ремонт пентхауса с панорамными окнами', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop' },
]

const beforeAfter = [
  { title: 'Кухня', before: 'Устаревший ремонт 90-х', after: 'Современный минимализм', beforeImg: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', afterImg: 'https://images.unsplash.com/photo-1556909114-44e3e9699e2b?w=400&h=300&fit=crop' },
  { title: 'Ванная', before: 'Плитка советских времён', after: 'Итальянская плитка, тёплый пол', beforeImg: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop', afterImg: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop' },
  { title: 'Гостиная', before: 'Тёмные обои, тяжёлая мебель', after: 'Светлый интерьер, зонирование', beforeImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', afterImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop' },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Портфолио</h1>
          <p className="text-xl text-primary-100">Более 850 реализованных проектов</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{p.area}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{p.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.desc}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium">
                    <span>⏱️</span>
                    <span>{p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">До и после</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {beforeAfter.map((b, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={b.beforeImg} alt="До" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-center py-1 text-sm font-bold">БЫЛО</div>
                  </div>
                  <div className="relative">
                    <img src={b.afterImg} alt="После" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-1 text-sm font-bold">СТАЛО</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Хотите так же?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию дизайнера
          </p>
          <a href="/contacts" className="inline-block px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            Связаться с нами
          </a>
        </div>
      </section>
    </>
  )
}
