import Link from 'next/link'

export const metadata = { title: 'Политика конфиденциальности | РемонтПро' }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-2">Политика конфиденциальности</h1>
          <p className="text-gray-500 mb-8">Обновлено: 1 марта 2024</p>
          
          <div className="prose max-w-none">
            <h2>1. Общие положения</h2>
            <p>Настоящая Политика определяет порядок обработки персональных данных пользователей сайта remontpro.ru.</p>
            
            <h2>2. Сбор данных</h2>
            <p>Мы собираем: имя, email, телефон, адрес, информацию об объекте ремонта.</p>
            
            <h2>3. Цели обработки</h2>
            <ul>
              <li>Заключение и исполнение договора</li>
              <li>Связь с клиентом</li>
              <li>Информирование о статусе заказа</li>
              <li>Рассылка уведомлений (с согласия)</li>
            </ul>
            
            <h2>4. Защита данных</h2>
            <p>Мы используем HTTPS, ограничиваем доступ сотрудников к данным.</p>
            
            <h2>5. Права пользователя</h2>
            <p>Вы можете запросить доступ, исправление или удаление ваших данных.</p>
            
            <h2>6. Контакты</h2>
            <p>privacy@remontpro.ru</p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <Link href="/cookies" className="text-primary-600 hover:underline">Политика cookies →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
