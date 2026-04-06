import Link from 'next/link'

export const metadata = { title: 'Политика cookies | РемонтПро' }

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-2">Политика cookies</h1>
          <p className="text-gray-500 mb-8">Обновлено: 1 марта 2024</p>
          
          <div className="prose max-w-none">
            <h2>1. Что такое cookies?</h2>
            <p>Cookies — небольшие текстовые файлы, сохраняемые на вашем устройстве при посещении сайта.</p>
            
            <h2>2. Типы cookies</h2>
            <h3>Обязательные</h3>
            <p>Необходимы для работы сайта (авторизация, безопасность).</p>
            
            <h3>Аналитические</h3>
            <p>Помогают понять, как посетители используют сайт (Google Analytics).</p>
            
            <h3>Функциональные</h3>
            <p>Сохраняют ваши предпочтения (язык, регион).</p>
            
            <h2>3. Управление cookies</h2>
            <p>Вы можете управлять настройками через браузер или панель настроек на сайте.</p>
            
            <h2>4. Согласие</h2>
            <p>При первом посещении вам будет предложено согласиться на использование cookies.</p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <Link href="/privacy" className="text-primary-600 hover:underline">Политика конфиденциальности →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
