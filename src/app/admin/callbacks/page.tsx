'use client';

import { useEffect, useState } from 'react';

interface Callback {
  id: string;
  name: string;
  phone: string;
  message?: string;
  createdAt: Date;
  status: 'new' | 'processed';
}

export default function AdminCallbacks() {
  const [callbacks, setCallbacks] = useState<Callback[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCallbacks = async () => {
    try {
      const res = await fetch('/api/admin/callbacks');
      const data = await res.json();
      setCallbacks(data.callbacks || []);
    } catch (error) {
      console.error('Error loading callbacks:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCallbacks();
  }, []);

  const updateStatus = async (id: string, status: 'new' | 'processed') => {
    await fetch('/api/admin/callbacks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status })
    });
    loadCallbacks();
  };

  const deleteCallback = async (id: string) => {
    if (confirm('Удалить заявку?')) {
      await fetch(`/api/admin/callbacks?id=${id}`, { method: 'DELETE' });
      loadCallbacks();
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('ru-RU');
  };

  if (loading) {
    return <div className="text-center py-20">Загрузка...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Заявки на обратный звонок</h1>

      {callbacks.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
          Заявок пока нет
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Статус</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Имя</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Телефон</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Сообщение</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Дата</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {callbacks.map((cb) => (
                <tr key={cb.id} className={cb.status === 'new' ? 'bg-blue-50' : ''}>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cb.status === 'new' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {cb.status === 'new' ? 'Новая' : 'Обработана'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{cb.name}</td>
                  <td className="px-6 py-4">
                    <a href={`tel:${cb.phone}`} className="text-primary-600 hover:underline">
                      {cb.phone}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                    {cb.message || '-'}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {formatDate(cb.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {cb.status === 'new' && (
                        <button
                          onClick={() => updateStatus(cb.id, 'processed')}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200"
                        >
                          Обработана
                        </button>
                      )}
                      <button
                        onClick={() => deleteCallback(cb.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200"
                      >
                        Удалить
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
