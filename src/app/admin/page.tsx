'use client';

import { useEffect, useState } from 'react';

interface Stats {
  callbacks: number;
  newCallbacks: number;
  services: number;
  reviews: number;
  portfolio: number;
  team: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    callbacks: 0,
    newCallbacks: 0,
    services: 0,
    reviews: 0,
    portfolio: 0,
    team: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [callbacksRes, servicesRes, reviewsRes, portfolioRes, teamRes] = await Promise.all([
          fetch('/api/admin/callbacks'),
          fetch('/api/admin/services'),
          fetch('/api/admin/reviews'),
          fetch('/api/admin/portfolio'),
          fetch('/api/admin/team'),
        ]);

        const [callbacks, services, reviews, portfolio, team] = await Promise.all([
          callbacksRes.json(),
          servicesRes.json(),
          reviewsRes.json(),
          portfolioRes.json(),
          teamRes.json(),
        ]);

        setStats({
          callbacks: callbacks.callbacks?.length || 0,
          newCallbacks: callbacks.callbacks?.filter((c: { status: string }) => c.status === 'new').length || 0,
          services: services.services?.length || 0,
          reviews: reviews.reviews?.length || 0,
          portfolio: portfolio.items?.length || 0,
          team: team.team?.length || 0
        });
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    };

    loadStats();
  }, []);

  const cards = [
    { title: 'Заявки', value: stats.callbacks, new: stats.newCallbacks, icon: '📞', color: 'bg-blue-500', href: '/admin/callbacks' },
    { title: 'Услуги', value: stats.services, icon: '🔧', color: 'bg-green-500', href: '/admin/services' },
    { title: 'Отзывы', value: stats.reviews, icon: '⭐', color: 'bg-yellow-500', href: '/admin/reviews' },
    { title: 'Портфолио', value: stats.portfolio, icon: '🖼️', color: 'bg-purple-500', href: '/admin/portfolio' },
    { title: 'Команда', value: stats.team, icon: '👥', color: 'bg-pink-500', href: '/admin/team' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Панель управления</h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-xl text-white text-2xl`}>
                {card.icon}
              </div>
              {card.new !== undefined && (
                <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded-full font-medium">
                  {card.new} новых
                </span>
              )}
            </div>
            <div className="text-3xl font-bold">{card.value}</div>
            <div className="text-gray-500">{card.title}</div>
          </a>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Быстрые действия</h2>
          <div className="space-y-3">
            <a href="/admin/services" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span>➕</span>
              <span>Добавить услугу</span>
            </a>
            <a href="/admin/portfolio" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span>🖼️</span>
              <span>Добавить работу в портфолио</span>
            </a>
            <a href="/admin/reviews" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span>⭐</span>
              <span>Добавить отзыв</span>
            </a>
            <a href="/" target="_blank" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span>🌐</span>
              <span>Открыть сайт</span>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">О системе</h2>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span>Версия:</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Платформа:</span>
              <span className="font-medium">Next.js</span>
            </div>
            <div className="flex justify-between">
              <span>Режим:</span>
              <span className="font-medium">Демо (в памяти)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
