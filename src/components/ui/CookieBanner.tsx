'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Мы используем cookies для улучшения работы сайта.{' '}
          <Link href="/cookies" className="text-primary-600 hover:underline">Подробнее</Link>
        </p>
        <div className="flex gap-3">
          <button onClick={accept} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700">
            Принять
          </button>
        </div>
      </div>
    </div>
  )
}
