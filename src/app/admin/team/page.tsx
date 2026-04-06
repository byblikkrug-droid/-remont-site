'use client';

import { useEffect, useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  rating: number;
  reviews: number;
}

export default function AdminTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState({
    name: '',
    role: '',
    experience: '',
    avatar: '👨‍🔧'
  });

  const loadTeam = async () => {
    try {
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      setTeam(data.team || []);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const openModal = (member?: TeamMember) => {
    if (member) {
      setEditing(member);
      setForm({
        name: member.name,
        role: member.role,
        experience: member.experience,
        avatar: member.avatar
      });
    } else {
      setEditing(null);
      setForm({ name: '', role: '', experience: '', avatar: '👨‍🔧' });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      role: form.role,
      experience: form.experience,
      avatar: form.avatar
    };

    if (editing) {
      await fetch('/api/admin/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing.id, ...payload })
      });
    } else {
      await fetch('/api/admin/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    setShowModal(false);
    loadTeam();
  };

  const deleteMember = async (id: string) => {
    if (confirm('Удалить члена команды?')) {
      await fetch(`/api/admin/team?id=${id}`, { method: 'DELETE' });
      loadTeam();
    }
  };

  const avatars = ['👨‍🔧', '👨‍🎨', '👨‍💼', '👩‍🔧', '👩‍🎨', '👩‍💼', '🧔', '👴'];

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Команда</h1>
        <button
          onClick={() => openModal()}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
        >
          ➕ Добавить члена команды
        </button>
      </div>

      {team.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
          Членов команды пока нет
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary-600 font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-1">{member.experience}</p>
              <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                <span>⭐ {member.rating}</span>
                <span>📝 {member.reviews}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => openModal(member)}
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => deleteMember(member.id)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200"
                >
                  ✕
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
              {editing ? 'Редактировать' : 'Новый член команды'}
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
                <label className="block text-sm font-medium mb-1">Должность</label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Главный прораб"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Опыт</label>
                <input
                  type="text"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="10 лет"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Аватар</label>
                <div className="flex gap-2 flex-wrap">
                  {avatars.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setForm({ ...form, avatar: a })}
                      className={`text-3xl p-2 rounded-lg ${form.avatar === a ? 'bg-primary-100' : 'hover:bg-gray-100'}`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
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
