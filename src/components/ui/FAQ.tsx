'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'Сколько стоит ремонт квартиры?',
    answer: 'Стоимость зависит от типа ремонта и площади. Косметический ремонт — от 3 500 ₽/м², капитальный — от 8 000 ₽/м², авторский — от 12 000 ₽/м². Для точного расчёта воспользуйтесь нашим калькулятором или закажите бесплатный замер.',
    popular: true,
  },
  {
    question: 'За сколько дней можно сделать ремонт?',
    answer: 'Сроки зависят от объёма работ: косметический ремонт — 2-3 недели, капитальный — 1-3 месяца, авторский — 2-4 месяца. Точные сроки определяются после осмотра объекта и замера.',
    popular: true,
  },
  {
    question: 'Нужна ли предоплата?',
    answer: 'Нет! Мы работаем без предоплат. Оплата производится поэтапно — вы платите только за已完成ные работы, которые приняли.',
    popular: true,
  },
  {
    question: 'Какую гарантию вы даёте?',
    answer: 'Предоставляем официальную гарантию 3 года на все виды работ. Гарантийный талон выдаём после завершения проекта. При возникновении гарантийного случая устраняем бесплатно.',
    popular: true,
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Оплата поэтапная — по факту выполнения каждого этапа работ. Принимаете работу → оплачиваете → переходим к следующему этапу. Способы оплаты: наличные, безналичный расчёт, рассрочка 0% до 24 месяцев.',
    popular: false,
  },
  {
    question: 'Выезжаете ли за пределы Москвы?',
    answer: 'Да, работаем по Московской области. Выезд замерщика бесплатный в пределах 50 км от МКАД. За пределами этого расстояния — по договорённости.',
    popular: false,
  },
  {
    question: 'Помогаете ли с выбором материалов?',
    answer: 'Да! Наши специалисты помогут подобрать материалы под ваш бюджет, рассчитают точное количество и организуют доставку на объект. Также у нас есть скидки до 30% у поставщиков.',
    popular: false,
  },
  {
    question: 'Можно ли заказать только дизайн-проект?',
    answer: 'Да, мы предлагаем услугу разработки дизайн-проекта отдельно. В него входит: обмерочный план, планировочные решения, 3D-визуализация, подбор материалов и мебели. Также можем выполнить ремонт по вашему проекту.',
    popular: false,
  },
  {
    question: 'Как контролировать ход работ?',
    answer: 'Прораб отправляет ежедневные фото- и видеоотчёты в мессенджер. Вы всегда знаете, на каком этапе ремонт и что происходит на объекте. Также можете приехать и посмотреть в любое время.',
    popular: false,
  },
  {
    question: 'Убираете ли после ремонта?',
    answer: 'Да, после завершения всех работ мы проводим финальную уборку: вывозим строительный мусор, пылесосим, моем полы. Вы получаете готовую квартиру, готовую к жизни.',
    popular: false,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-xl text-gray-600">Ответы на популярные вопросы о ремонте</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`mb-4 rounded-2xl overflow-hidden border-2 transition ${
                openIndex === i 
                  ? 'border-primary-500 shadow-lg' 
                  : 'border-gray-100 hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  {faq.popular && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                      HOT
                    </span>
                  )}
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                <span className={`text-2xl text-primary-600 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition">
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  )
}
