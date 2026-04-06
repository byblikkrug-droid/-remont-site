'use client';

import { useEffect, useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  active: boolean;
}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    features: ''
  });

  const loadServices = async () => {
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      setServices(data.services || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const openModal = (service?: Service) => {
    if (service) {
      setEditing(service);
      setForm({
        title: service.title,
        description: service.description,
        price: service.price,
        features: service.features.join('\n')
      });
    } else {
      setEditing(null);
      setForm({ title: '', description: '', price: '', features: '' });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const features = form.features.split('\n').filter(f => f.trim());

    const payload = {
      title: form.title,
      description: form.description,
      price: form.price,
      features
    };

    if (editing) {
      await fetch('/api/admin/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing.id, ...payload })
      });
    } else {
      await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    setShowModal(false);
    loadServices();
  };

  const deleteService = async (id: string) => {
    if (confirm('Удалить услугу?')) {
      await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
      loadServices();
    }
  };

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Услуги</h1>
        <button
          onClick={() => openModal()}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          ➕ Добавить услугу
        </button>
      </div>

      {services.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
          Услуг пока нет
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-2xl font-bold text-primary-600">{service.price}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  service.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {service.active ? 'Активна' : 'Неактивна'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                {service.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(service)}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deleteService(service.id)}
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
              {editing ? 'Редактировать услугу' : 'Новая услуга'}
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
                <label className="block text-sm font-medium mb-1">Цена</label>
                <input
                  type="text"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="от 5 000 ₽/м²"
                  required
                />
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
              <div>
                <label className="block text-sm font-medium mb-1">Особенности (по одной на строку)</label>
                <textarea
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  rows={4}
                  placeholder="Замена проводки&#10;Стяжка пола"
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
