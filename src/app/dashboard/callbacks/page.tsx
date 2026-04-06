'use client'
import { useState } from 'react'
import { CallbackForm } from '@/components/forms/CallbackForm'

const callbacks = [
  { id: '1', name: 'Иван Иванов', phone: '+7 (900) 123-45-67', status: 'processing', date: '15.03.2024', message: 'Ремонт в двушке' },
  { id: '2', name: 'Иван Иванов', phone: '+7 (900) 123-45-67', status: 'completed', date: '10.03.2024' },
]

const statusLabels: Record<string, { label: string; class: string }> = {
  new: { label: 'Новая', class: 'bg-blue-100 text-blue-700' },
  processing: { label: 'В обработке', class: 'bg-yellow-100 text-yellow-700' },
  completed: { label: 'Завершена', class: 'bg-green-100 text-green-700' },
}

export default function CallbacksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Мои заявки</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Новая заявка</h2>
          <CallbackForm />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">История</h2>
          {callbacks.length === 0 ? (
            <p className="text-gray-500">У вас пока нет заявок</p>
          ) : (
            <div className="space-y-4">
              {callbacks.map((c) => {
                const s = statusLabels[c.status as keyof typeof statusLabels] || statusLabels.new
                return (
                  <div key={c.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${s.class}`}>{s.label}</span>
                      <span className="text-sm text-gray-500">{c.date}</span>
                    </div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-gray-600">{c.phone}</p>
                    {c.message && <p className="text-sm text-gray-500 mt-2">{c.message}</p>}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
