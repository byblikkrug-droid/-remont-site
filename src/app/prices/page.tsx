import { Calculator } from '@/components/ui/Calculator/Calculator'

const prices = {
  cosmetic: [
    { item: 'Покраска стен', unit: 'м²', price: '350' },
    { item: 'Поклейка обоев', unit: 'м²', price: '400' },
    { item: 'Укладка ламината', unit: 'м²', price: '550' },
    { item: 'Установка плинтусов', unit: 'п.м.', price: '250' },
    { item: 'Замена розеток', unit: 'шт.', price: '350' },
    { item: 'Покраска потолка', unit: 'м²', price: '300' },
    { item: 'Укладка плитки', unit: 'м²', price: '850' },
    { item: 'Монтаж натяжного потолка', unit: 'м²', price: '550' },
  ],
  capital: [
    { item: 'Демонтаж старой отделки', unit: 'м²', price: '250' },
    { item: 'Штукатурка стен', unit: 'м²', price: '600' },
    { item: 'Стяжка пола', unit: 'м²', price: '800' },
    { item: 'Разводка электропроводки', unit: 'точка', price: '1200' },
    { item: 'Замена труб водоснабжения', unit: 'точка', price: '2500' },
    { item: 'Установка сантехники', unit: 'шт.', price: '3500' },
    { item: 'Монтаж электрощита', unit: 'шт.', price: '5000' },
    { item: 'Выравнивание потолка', unit: 'м²', price: '500' },
  ],
}

const apartments = [
  { rooms: 'Однокомнатная', area: '40 м²', cosmetic: '207 360 ₽', capital: '499 200 ₽', author: '652 800 ₽' },
  { rooms: 'Двухкомнатная', area: '55 м²', cosmetic: '285 120 ₽', capital: '686 400 ₽', author: '897 600 ₽' },
  { rooms: 'Трёхкомнатная', area: '70 м²', cosmetic: '362 880 ₽', capital: '873 600 ₽', author: '1 142 400 ₽' },
  { rooms: 'Четырёхкомнатная', area: '85 м²', cosmetic: '440 640 ₽', capital: '1 060 800 ₽', author: '1 387 200 ₽' },
]

export default function PricesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Цены на ремонт</h1>
          <p className="text-xl text-primary-100">Прозрачное ценообразование без скрытых платежей</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Стоимость ремонта квартир под ключ</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="p-4 text-left">Квартира</th>
                  <th className="p-4 text-center">Площадь</th>
                  <th className="p-4 text-center">Косметический</th>
                  <th className="p-4 text-center">Капитальный</th>
                  <th className="p-4 text-center">Авторский</th>
                </tr>
              </thead>
              <tbody>
                {apartments.map((apt, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold">{apt.rooms}</td>
                    <td className="p-4 text-center text-gray-600">{apt.area}</td>
                    <td className="p-4 text-center font-semibold text-primary-600">{apt.cosmetic}</td>
                    <td className="p-4 text-center font-semibold text-primary-600">{apt.capital}</td>
                    <td className="p-4 text-center font-semibold text-primary-600">{apt.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            * Цены указаны ориентировочные. Точная стоимость рассчитывается после замера объекта.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Косметический ремонт</h2>
              <div className="space-y-4">
                {prices.cosmetic.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold">{p.item}</div>
                      <div className="text-gray-500 text-sm">{p.unit}</div>
                    </div>
                    <div className="text-xl font-bold text-primary-600">{p.price} ₽</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Капитальный ремонт</h2>
              <div className="space-y-4">
                {prices.capital.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold">{p.item}</div>
                      <div className="text-gray-500 text-sm">{p.unit}</div>
                    </div>
                    <div className="text-xl font-bold text-primary-600">{p.price} ₽</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Что влияет на стоимость?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="font-bold mb-2">Площадь</h3>
              <p className="text-gray-600 text-sm">Чем больше площадь, тем ниже стоимость за м²</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-bold mb-2">Состояние</h3>
              <p className="text-gray-600 text-sm">Вторичка требует больше подготовки</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-bold mb-2">Материалы</h3>
              <p className="text-gray-600 text-sm">Качественные материалы увеличивают бюджет</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
