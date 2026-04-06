'use client'
import { useState } from 'react'

interface CalculatorProps {
  compact?: boolean
}

const typeOptions = [
  { id: 'flat', label: 'Квартира', icon: '🏠' },
  { id: 'house', label: 'Дом, таунхаус', icon: '🏡' },
]

const repairTypes = [
  { id: 'cosmetic', label: 'Косметический', price: 3500, desc: 'Обновление отделки', days: '2-3 недели' },
  { id: 'capital', label: 'Капитальный', price: 8000, desc: 'Полная замена коммуникаций', days: '1-3 месяца' },
  { id: 'euro', label: 'Авторский', price: 12000, desc: 'Индивидуальный дизайн', days: '2-4 месяца' },
  { id: 'elite', label: 'Премиум', price: 18000, desc: 'Премиум материалы', days: '3-6 месяцев' },
]

const buildingTypes = [
  { id: 'new', label: 'Новостройка' },
  { id: 'secondary', label: 'Вторичка' },
]

export function Calculator({ compact = false }: CalculatorProps) {
  const [type, setType] = useState('flat')
  const [repairType, setRepairType] = useState('capital')
  const [building, setBuilding] = useState('new')
  const [area, setArea] = useState(65)
  const [result, setResult] = useState<{ cost: number; materials: number; works: number; days: string } | null>(null)
  const [showForm, setShowForm] = useState(false)

  const calculate = () => {
    const selected = repairTypes.find(r => r.id === repairType)
    if (!selected) return

    const worksCost = selected.price * area
    const materialsCost = Math.round(worksCost * 0.6)
    const totalCost = worksCost + materialsCost

    const baseDays: Record<string, { new: string; secondary: string }> = {
      cosmetic: { new: '2 недели', secondary: '2-3 недели' },
      capital: { new: '1-2 месяца', secondary: '2-3 месяца' },
      euro: { new: '2-3 месяца', secondary: '3-4 месяца' },
      elite: { new: '3-4 месяца', secondary: '5-6 месяцев' },
    }

    let srok = building === 'new' ? baseDays[repairType].new : baseDays[repairType].secondary
    
    if (area > 50) {
      const extraWeeks = Math.ceil((area - 50) / 20) * 2
      if (repairType === 'cosmetic') {
        srok = area > 80 ? '3-4 недели' : '2-3 недели'
      } else if (area <= 80) {
        srok = building === 'new' ? '2-3 месяца' : '3-4 месяца'
      } else if (area <= 120) {
        srok = building === 'new' ? '3-4 месяца' : '4-5 месяцев'
      } else {
        srok = building === 'new' ? '4-6 месяцев' : '6-8 месяцев'
      }
    }

    setResult({
      cost: totalCost,
      materials: materialsCost,
      works: worksCost,
      days: srok,
    })
  }

  const formatNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num)

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Калькулятор стоимости</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-primary-100 mb-2">Тип помещения</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              {typeOptions.map(t => (
                <option key={t.id} value={t.id} className="text-gray-900">{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-primary-100 mb-2">Площадь, м²</label>
            <input 
              type="number" 
              value={area} 
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
              min="10"
              max="500"
            />
          </div>
        </div>
        <button 
          onClick={calculate}
          className="w-full py-4 bg-white text-primary-700 rounded-xl font-bold hover:bg-primary-50 transition"
        >
          Рассчитать стоимость
        </button>
        {result && (
          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{formatNumber(result.cost)} ₽</div>
              <div className="text-primary-200">≈ {result.days}</div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Калькулятор стоимости ремонта</h2>
          <p className="text-primary-100">Узнайте примерную стоимость за 30 секунд</p>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-4">Тип помещения</label>
            <div className="grid grid-cols-2 gap-4">
              {typeOptions.map(t => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    type === t.id 
                      ? 'border-primary-600 bg-primary-50 text-primary-700' 
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <span className="text-3xl mb-2 block">{t.icon}</span>
                  <span className="font-semibold">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold mb-4">Тип ремонта</label>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {repairTypes.map(r => (
                <button
                  key={r.id}
                  onClick={() => setRepairType(r.id)}
                  className={`p-4 rounded-2xl border-2 transition-all text-left ${
                    repairType === r.id 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="font-bold mb-1">{r.label}</div>
                  <div className="text-sm text-gray-500 mb-2">{r.desc}</div>
                  <div className="text-primary-600 font-bold">от {r.price.toLocaleString()} ₽/м²</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-lg font-semibold mb-4">Жильё</label>
              <div className="space-y-2">
                {buildingTypes.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBuilding(b.id)}
                    className={`w-full p-3 rounded-xl border-2 transition ${
                      building === b.id 
                        ? 'border-primary-600 bg-primary-50 text-primary-700' 
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold mb-4">Площадь: {area} м²</label>
              <input
                type="range"
                min="20"
                max="300"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>20 м²</span>
                <span>300 м²</span>
              </div>
            </div>
          </div>

          <button 
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-bold text-lg hover:shadow-lg transition"
          >
            Рассчитать стоимость →
          </button>

          {result && (
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4 text-center">Результат расчёта</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-primary-600">{formatNumber(result.cost)} ₽</div>
                  <div className="text-sm text-gray-500">Итого</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-gray-700">{formatNumber(result.works)} ₽</div>
                  <div className="text-sm text-gray-500">Работы</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-gray-700">{formatNumber(result.materials)} ₽</div>
                  <div className="text-sm text-gray-500">Материалы</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-gray-700">{result.days}</div>
                  <div className="text-sm text-gray-500">Срок</div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                * Точная стоимость и срок рассчитываются после замера объекта
              </p>
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowForm(true)}
                  className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition"
                >
                  Получить точный расчёт
                </button>
              </div>
            </div>
          )}

          {showForm && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Оставьте контакты для связи</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border rounded-xl"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 border rounded-xl"
                />
                <button 
                  type="submit" 
                  className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold"
                >
                  Отправить
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
