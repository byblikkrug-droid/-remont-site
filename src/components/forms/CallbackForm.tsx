'use client'
import { useState, FormEvent } from 'react'

export function CallbackForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/callbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Ошибка')
      setSuccess(true)
      form.reset()
    } catch {
      setError('Произошла ошибка. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-2">✅</div>
        <h3 className="font-semibold text-green-800">Заявка отправлена!</h3>
        <p className="text-green-700 text-sm">Мы перезвоним вам в ближайшее время</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Ваше имя *</label>
        <input name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Иван Иванов" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Телефон *</label>
        <input name="phone" type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+7 (___) ___-__-__" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Сообщение</label>
        <textarea name="message" rows={3} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Расскажите о проекте..." />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50">
        {loading ? 'Отправка...' : 'Перезвоните мне'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-primary-600">политикой конфиденциальности</a>
      </p>
    </form>
  )
}
