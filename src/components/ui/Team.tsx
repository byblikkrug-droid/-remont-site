const masters = [
  {
    name: 'Михаил Ващенко',
    role: 'Плиточник',
    exp: '9 лет',
    objects: 289,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    specialties: ['Керамическая плитка', 'Керамогранит', 'Мозаика'],
    rating: 4.9,
    reviews: 127,
  },
  {
    name: 'Денис Кретов',
    role: 'Паркетчик',
    exp: '7 лет',
    objects: 93,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    specialties: ['Паркет', 'Ламинат', 'Массив'],
    rating: 4.8,
    reviews: 45,
  },
  {
    name: 'Дмитрий Началов',
    role: 'Электрик',
    exp: '4 года',
    objects: 49,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    specialties: ['Электропроводка', 'Щитовое оборудование', 'Освещение'],
    rating: 4.9,
    reviews: 23,
  },
  {
    name: 'Данил Соколов',
    role: 'Прораб',
    exp: '12 лет',
    objects: 241,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    specialties: ['Общее руководство', 'Контроль качества', 'Сметы'],
    rating: 5.0,
    reviews: 189,
  },
  {
    name: 'Алексей Морозов',
    role: 'Сантехник',
    exp: '8 лет',
    objects: 156,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    specialties: ['Трубопроводы', 'Сантехника', 'Отопление'],
    rating: 4.7,
    reviews: 78,
  },
  {
    name: 'Сергей Волков',
    role: 'Маляр-штукатур',
    exp: '6 лет',
    objects: 112,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    specialties: ['Штукатурка', 'Покраска', 'Декоративная отделка'],
    rating: 4.8,
    reviews: 56,
  },
]

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши мастера</h2>
          <p className="text-xl text-gray-600">Опытные специалисты с многолетним стажем</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masters.map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition group">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={m.avatar} 
                  alt={m.name} 
                  className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-primary-600 font-medium">{m.role}</p>
                  <p className="text-gray-500 text-sm">Опыт: {m.exp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{m.rating}</span>
                  <span className="text-gray-400 text-sm">({m.reviews})</span>
                </div>
                <span className="text-gray-400">·</span>
                <span className="text-gray-600">{m.objects} объектов</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {m.specialties.map((s, j) => (
                  <span key={j} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Все мастера прошли проверку и имеют необходимые допуски</p>
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition"
          >
            Подробнее о команде →
          </a>
        </div>
      </div>
    </section>
  )
}
