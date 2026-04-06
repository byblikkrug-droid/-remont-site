import { NextResponse } from 'next/server';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  rating: number;
  reviews: number;
}

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Иван Петров', role: 'Главный прораб', experience: '15 лет', avatar: '👨‍🔧', rating: 4.9, reviews: 156 },
  { id: '2', name: 'Алексей Сидоров', role: 'Дизайнер', experience: '10 лет', avatar: '👨‍🎨', rating: 4.8, reviews: 98 },
  { id: '3', name: 'Олег Козлов', role: 'Электрик', experience: '12 лет', avatar: '👨‍💼', rating: 4.9, reviews: 203 },
  { id: '4', name: 'Сергей Николаев', role: 'Плиточник', experience: '8 лет', avatar: '👨‍🔧', rating: 4.7, reviews: 87 },
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function GET() {
  return NextResponse.json({ team: teamMembers });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, experience, avatar } = body;

    if (!name || !role) {
      return NextResponse.json({ error: 'Имя и роль обязательны' }, { status: 400 });
    }

    const newMember: TeamMember = {
      id: generateId(),
      name,
      role,
      experience: experience || '',
      avatar: avatar || '👤',
      rating: 5.0,
      reviews: 0
    };

    teamMembers.push(newMember);
    return NextResponse.json({ message: 'Добавлено', member: newMember });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, role, experience, avatar } = body;

    const index = teamMembers.findIndex(m => m.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    teamMembers[index] = { ...teamMembers[index], name, role, experience, avatar };
    return NextResponse.json({ message: 'Обновлено', member: teamMembers[index] });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const index = teamMembers.findIndex(m => m.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    teamMembers.splice(index, 1);
    return NextResponse.json({ message: 'Удалено' });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
