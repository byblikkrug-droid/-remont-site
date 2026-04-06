import Link from 'next/link'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CallbackForm } from '@/components/forms/CallbackForm'
import { Calculator } from '@/components/ui/Calculator/Calculator'
import { Reviews } from '@/components/ui/Reviews'
import { FAQ } from '@/components/ui/FAQ'
import { Promos } from '@/components/ui/Promos'
import { Team } from '@/components/ui/Team'

const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const currentMonthIndex = new Date().getMonth()
const monthName = monthNames[currentMonthIndex]

const services = [
  { id: '1', title: 'Косметический ремонт', description: 'Обновление отделки без капитальных изменений', price: 'от 3 500 ₽/м²', features: ['Покраска стен', 'Поклейка обоев', 'Укладка ламината'] },
  { id: '2', title: 'Капитальный ремонт', description: 'Полная замена коммуникаций и отделка', price: 'от 8 000 ₽/м²', features: ['Замена проводки', 'Стяжка пола', 'Выравнивание стен'] },
  { id: '3', title: 'Ремонт под ключ', description: 'Комплексный ремонт с материалами', price: 'от 12 000 ₽/м²', features: ['Дизайн-проект', 'Черновые материалы', 'Чистовая отделка'] },
  { id: '4', title: 'Дизайн интерьера', description: 'Разработка индивидуального проекта', price: 'от 1 500 ₽/м²', features: ['3D-визуализация', 'Планировка', 'Подбор материалов'] },
]

const advantages = [
  { icon: '🏆', title: '10+ лет опыта', desc: 'Более 850 успешных проектов' },
  { icon: '🛡️', title: 'Гарантия 3 года', desc: 'Официальная гарантия на все работы' },
  { icon: '💳', title: 'Без предоплат', desc: 'Оплата по факту выполнения' },
  { icon: '👷', title: 'Свои бригады', desc: 'Опытные мастера со стажем от 5 лет' },
]

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку или позвоните нам' },
  { num: '02', title: 'Замер', desc: 'Бесплатный выезд специалиста на объект' },
  { num: '03', title: 'Смета', desc: 'Подробный расчёт стоимости за 24 часа' },
  { num: '04', title: 'Ремонт', desc: 'Выполняем работы под контролем прораба' },
  { num: '05', title: 'Сдача', desc: 'Принимаете работу и наслаждаетесь результатом' },
]

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-red-500/80 rounded-full text-sm mb-6 animate-bounce">
              🔥 Скидка 15% при заказе до конца {monthName}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Ремонт квартир и домов <span className="text-primary-300">под ключ</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 leading-relaxed">
              Профессиональный ремонт с гарантией качества. Бесплатный выезд замерщика и расчёт стоимости за 24 часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prices" className="px-8 py-4 bg-white text-primary-800 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Рассчитать стоимость
              </Link>
              <Link href="/portfolio" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Смотреть работы
              </Link>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-primary-200">объектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">12+</div>
                <div className="text-primary-200">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">3 года</div>
                <div className="text-primary-200">гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Promos />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-3xl border border-primary-100 hover:shadow-xl hover:-translate-y-1 transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">5 простых шагов к вашему идеальному ремонту</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary-200 mb-4">{s.num}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по ремонту</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => <ServiceCard key={s.id} {...s} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all hover:shadow-lg">
              Все услуги
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      <FAQ />

      <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Оставить заявку</h2>
              <p className="text-lg text-gray-600 mb-6">Мы перезвоним вам в течение 15 минут и ответим на все вопросы</p>
              <CallbackForm />
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">🏠</div>
                  <div className="text-2xl font-bold">РемонтПро</div>
                  <div className="text-gray-600">Ремонт с заботой о вас</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-sm text-gray-600">Бесплатная линия</div>
                      <div className="font-bold text-lg">+7 (900) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-bold">info@remontpro.ru</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать ремонт?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Получите бесплатную консультацию и скидку 10% при заказе в этом месяце
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacts" className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-500 transition">
                Оставить заявку
              </a>
              <a href="tel:+79001234567" className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
