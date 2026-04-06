import Link from 'next/link'
import { ServiceCard } from '@/components/ui/ServiceCard'

const services = [
  { id: '1', title: 'Косметический ремонт', description: 'Обновление отделки без капитальных изменений', price: 'от 3 500 ₽/м²', image: '/1.jpg', features: ['Покраска стен', 'Поклейка обоев', 'Укладка ламината', 'Натяжные потолки', 'Замена розеток'] },
  { id: '2', title: 'Капитальный ремонт', description: 'Полная замена коммуникаций и отделка', price: 'от 8 000 ₽/м²', image: '/2.jpg', features: ['Замена проводки', 'Замена сантехники', 'Стяжка пола', 'Выравнивание стен', 'Установка дверей'] },
  { id: '3', title: 'Ремонт под ключ', description: 'Комплексный ремонт с материалами', price: 'от 12 000 ₽/м²', image: '/3.jpg', features: ['Дизайн-проект', 'Авторский надзор', 'Черновые материалы', 'Чистовая отделка', 'Меблировка'] },
  { id: '4', title: 'Дизайн интерьера', description: 'Разработка индивидуального проекта', price: 'от 1 500 ₽/м²', image: '/4.jpg', features: ['3D-визуализация', 'Планировка', 'Подбор материалов', 'Авторский надзор'] },
  { id: '5', title: 'Ремонт кухни', description: 'Ремонт с учётом специфики кухни', price: 'от 5 000 ₽/м²', image: '/5.jpg', features: ['Гидроизоляция', 'Вытяжка', 'Розетки для техники'] },
  { id: '6', title: 'Ремонт ванной', description: 'Ремонт санузла под ключ', price: 'от 7 000 ₽/м²', image: '/6.jpg', features: ['Гидроизоляция', 'Плиточные работы', 'Установка сантехники'] },
  { id: '7', title: 'Ремонт офисов', description: 'Профессиональный ремонт офисов', price: 'от 4 500 ₽/м²', image: '/7.jpg', features: ['Работа в нерабочее время', 'Сертификаты'] },
  { id: '8', title: 'Черновые работы', description: 'Подготовка к чистовой отделке', price: 'от 2 000 ₽/м²', image: '/8.jpg', features: ['Электрика', 'Сантехника', 'Стяжка', 'Штукатурка'] },
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Наши услуги</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Полный спектр услуг по ремонту в Москве</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => <ServiceCard key={s.id} {...s} />)}
        </div>
        <div className="mt-16 bg-primary-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Не нашли нужное?</h2>
          <p className="mb-6">Свяжитесь с нами и мы подберём решение</p>
          <Link href="/callback" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100">
            Связаться
          </Link>
        </div>
      </div>
    </div>
  )
}
