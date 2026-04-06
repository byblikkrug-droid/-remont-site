interface ServiceCardProps {
  id: string
  title: string
  description: string
  price: string
  features: string[]
}

export function ServiceCard({ title, description, price, features }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl mb-6 flex items-center justify-center">
        <span className="text-6xl group-hover:scale-110 transition-transform">
          {title.includes('Дизайн') ? '🎨' : title.includes('ключ') ? '🏠' : title.includes('Капитальный') ? '🔧' : '✨'}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {features.map((f, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{f}</span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-2xl font-bold text-primary-600">{price}</span>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all group-hover:shadow-lg">
          Подробнее
        </button>
      </div>
    </div>
  )
}
