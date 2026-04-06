'use client';

import { useEffect, useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  createdAt: Date;
}

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<PortfolioItem | null>(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Квартиры'
  });

  const loadItems = async () => {
    try {
      const res = await fetch('/api/admin/portfolio');
      const data = await res.json();
      setItems(data.items || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const openModal = (item?: PortfolioItem) => {
    if (item) {
      setEditing(item);
      setForm({
        title: item.title,
        description: item.description,
        category: item.category
      });
    } else {
      setEditing(null);
      setForm({ title: '', description: '', category: 'Квартиры' });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      category: form.category
    };

    if (editing) {
      await fetch('/api/admin/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing.id, ...payload })
      });
    } else {
      await fetch('/api/admin/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    setShowModal(false);
    loadItems();
  };

  const deleteItem = async (id: string) => {
    if (confirm('Удалить работу?')) {
      await fetch(`/api/admin/portfolio?id=${id}`, { method: 'DELETE' });
      loadItems();
    }
  };

  const categories = ['Квартиры', 'Дома', 'Офисы', 'Коммерция'];

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Портфолио</h1>
        <button
          onClick={() => openModal()}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          ➕ Добавить работу
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
          Работ в портфолио пока нет
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openModal(item)}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6">
              {editing ? 'Редактировать работу' : 'Новая работа'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Название</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Категория</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Описание</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  rows={3}
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
