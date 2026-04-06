'use client';

import { useEffect, useState } from 'react';

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: string;
  avatar: string;
  date: string;
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Review | null>(null);
  const [form, setForm] = useState({
    name: '',
    text: '',
    rating: 5,
    source: 'Сайт',
    avatar: '👤'
  });

  const loadReviews = async () => {
    try {
      const res = await fetch('/api/admin/reviews');
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const openModal = (review?: Review) => {
    if (review) {
      setEditing(review);
      setForm({
        name: review.name,
        text: review.text,
        rating: review.rating,
        source: review.source,
        avatar: review.avatar
      });
    } else {
      setEditing(null);
      setForm({ name: '', text: '', rating: 5, source: 'Сайт', avatar: '👤' });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      text: form.text,
      rating: form.rating,
      source: form.source,
      avatar: form.avatar
    };

    if (editing) {
      await fetch('/api/admin/reviews', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing.id, ...payload })
      });
    } else {
      await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    setShowModal(false);
    loadReviews();
  };

  const deleteReview = async (id: string) => {
    if (confirm('Удалить отзыв?')) {
      await fetch(`/api/admin/reviews?id=${id}`, { method: 'DELETE' });
      loadReviews();
    }
  };

  const sources = ['Сайт', 'Яндекс', 'Google', '2ГИС', 'Отзовик', 'VK'];

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Отзывы</h1>
        <button
          onClick={() => openModal()}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          ➕ Добавить отзыв
        </button>
      </div>

      {reviews.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
          Отзывов пока нет
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{review.avatar}</div>
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <div className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                  <span className="text-sm text-gray-500">{review.source}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="text-sm text-gray-400 mb-4">{review.date}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(review)}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deleteReview(review.id)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6">
              {editing ? 'Редактировать отзыв' : 'Новый отзыв'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Оценка</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>{r} ★</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Источник</label>
                <select
                  value={form.source}
                  onChange={(e) => setForm({ ...form, source: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  {sources.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Текст отзыва</label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
