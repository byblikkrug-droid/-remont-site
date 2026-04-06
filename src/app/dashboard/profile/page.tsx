'use client'
import { useState, FormEvent } from 'react'

export default function ProfilePage() {
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Профиль пользователя</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Имя</label>
          <input defaultValue="Иван Иванов" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input defaultValue="ivan@example.com" type="email" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Телефон</label>
          <input defaultValue="+7 (900) 123-45-67" type="tel" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        {saved && <p className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">Профиль сохранён!</p>}
        <button type="submit" className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700">
          Сохранить
        </button>
      </form>
      <hr className="my-8" />
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Смена пароля</h2>
        <form className="space-y-4">
          <input type="password" placeholder="Текущий пароль" className="w-full px-4 py-2 border rounded-lg" />
          <input type="password" placeholder="Новый пароль" className="w-full px-4 py-2 border rounded-lg" />
          <button type="button" className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50">
            Изменить пароль
          </button>
        </form>
      </div>
    </div>
  )
}
