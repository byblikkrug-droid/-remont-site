'use client'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      setError('Неверный email или пароль')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Вход в аккаунт</h1>
          <p className="text-gray-600 mt-2">Войдите для доступа к личному кабинету</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-4 py-2 border rounded-lg" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Пароль</label>
              <input name="password" type="password" required className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" />
            </div>
            {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}
            <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700">
              Войти
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Нет аккаунта? <Link href="/auth/register" className="text-primary-600 font-semibold">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
