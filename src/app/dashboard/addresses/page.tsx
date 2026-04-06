'use client'
import { useState } from 'react'

interface Address { id: string; city: string; street: string; building: string; isPrimary: boolean }

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: '1', city: 'Москва', street: 'ул. Примерная', building: '10', isPrimary: true }
  ])
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Мои адреса</h1>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary-600 text-white rounded-lg">+ Добавить</button>
      </div>
      {addresses.length === 0 ? (
        <p className="text-gray-500">У вас пока нет адресов</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((a) => (
            <div key={a.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{a.city}, {a.street}, {a.building}</p>
                {a.isPrimary && <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">Основной</span>}
              </div>
              <button onClick={() => setAddresses(addresses.filter(x => x.id !== a.id))} className="text-red-600 hover:bg-red-50 px-3 py-1 rounded">
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Новый адрес</h2>
            <div className="space-y-3">
              <input placeholder="Город" className="w-full px-4 py-2 border rounded-lg" />
              <input placeholder="Улица" className="w-full px-4 py-2 border rounded-lg" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Дом" className="w-full px-4 py-2 border rounded-lg" />
                <input placeholder="Квартира" className="w-full px-4 py-2 border rounded-lg" />
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-4">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 border rounded-lg">Отмена</button>
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-primary-600 text-white rounded-lg">Сохранить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
