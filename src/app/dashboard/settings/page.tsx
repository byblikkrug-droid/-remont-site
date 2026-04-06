'use client'
import { useState } from 'react'

export default function SettingsPage() {
  const [notif, setNotif] = useState({ email: true, sms: true, calls: true })
  const [saved, setSaved] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Настройки уведомлений</h1>
      <div className="space-y-4 max-w-md">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={notif.email} onChange={(e) => setNotif({...notif, email: e.target.checked})} className="w-5 h-5" />
          <div>
            <span className="font-medium">Уведомления на email</span>
            <p className="text-sm text-gray-500">Информация о статусе заявок</p>
          </div>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={notif.sms} onChange={(e) => setNotif({...notif, sms: e.target.checked})} className="w-5 h-5" />
          <div>
            <span className="font-medium">SMS-уведомления</span>
            <p className="text-sm text-gray-500">Короткие уведомления</p>
          </div>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={notif.calls} onChange={(e) => setNotif({...notif, calls: e.target.checked})} className="w-5 h-5" />
          <div>
            <span className="font-medium">Звонки от менеджера</span>
            <p className="text-sm text-gray-500">Согласие на входящие звонки</p>
          </div>
        </label>
      </div>
      {saved && <p className="text-green-600 text-sm mt-4 bg-green-50 p-3 rounded-lg">Настройки сохранены!</p>}
      <button onClick={() => setSaved(true)} className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700">
        Сохранить
      </button>
      <hr className="my-8" />
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Опасная зона</h2>
        <p className="text-gray-600 mb-4">Удаление аккаунта необратимо.</p>
        <button className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
          Удалить аккаунт
        </button>
      </div>
    </div>
  )
}
