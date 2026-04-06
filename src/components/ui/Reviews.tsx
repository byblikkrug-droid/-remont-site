const reviews = [
  {
    name: 'Мария Ковалёва',
    date: 'Март 2026',
    location: 'Москва',
    type: 'Капитальный ремонт',
    area: '65 м²',
    cost: '520 000 ₽',
    text: 'Делали ремонт в двушке на Выхино. РемонтPro себя зарекомендовали отлично! Сроки соблюдены, качество на высоте. Особенно понравилось, что прораб Сергей всегда на связи и отчитывался о каждом этапе. Рекомендую!',
    rating: 5,
    avatar: '👩',
    photos: 3,
  },
  {
    name: 'Алексей Петренко',
    date: 'Февраль 2026',
    location: 'Подольск',
    type: 'Авторский',
    area: '42 м²',
    cost: '680 000 ₽',
    text: 'Заказывали дизайнерский ремонт студии. Дизайнер Анна предложила несколько вариантов планировки, учла все наши пожелания. Результат превзошёл ожидания! Квартира выглядит как с картинки из журнала.',
    rating: 5,
    avatar: '👨',
    photos: 5,
  },
  {
    name: 'Екатерина Соколова',
    date: 'Январь 2026',
    location: 'Москва',
    type: 'Косметический',
    area: '78 м²',
    cost: '273 000 ₽',
    text: 'Быстро и качественно сделали косметический ремонт трёхкомнатной квартиры. Покрасили стены, поменяли обои, уложили ламинат. Всё аккуратно, без пыли. Мастера вежливые и пунктуальные.',
    rating: 5,
    avatar: '👩',
    photos: 2,
  },
  {
    name: 'Дмитрий Волков',
    date: 'Март 2026',
    location: 'Химки',
    type: 'Капитальный ремонт',
    area: '120 м²',
    cost: '1 050 000 ₽',
    text: 'Ремонтировали частный дом. Работы было много: замена всех коммуникаций, электрики, отопления. Бригада работала слаженно, уложились в срок. Отдельное спасибо прорабу за оперативность!',
    rating: 5,
    avatar: '👨',
    photos: 8,
  },
]

const ratings = [
  { name: 'Яндекс Карты', stars: 5, count: 127, rating: '4.9' },
  { name: 'Google Maps', stars: 5, count: 89, rating: '4.7' },
  { name: '2ГИС', stars: 5, count: 156, rating: '4.8' },
]

export function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600">Более 850 довольных заказчиков</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ratings.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{r.rating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={j < r.stars ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <div className="text-gray-600">{r.name}</div>
              <div className="text-sm text-gray-400">{r.count} оценок</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-2xl text-white">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.location} · {review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className={j < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{review.type}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{review.area}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{review.cost}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{review.text}</p>

              {review.photos > 0 && (
                <div className="flex items-center gap-2 text-primary-600 text-sm">
                  <span>📷</span>
                  <span>{review.photos} фото в отзыве</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition">
            Все отзывы ({reviews.length * 12}+)
          </button>
        </div>
      </div>
    </section>
  )
}
