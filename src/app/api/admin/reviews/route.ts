import { NextResponse } from 'next/server';

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: string;
  avatar: string;
  date: string;
}

const reviews: Review[] = [
  { id: '1', name: 'Анна Петрова', text: 'Отличный ремонт! Всё сделали в срок, мастера вежливые и профессиональные.', rating: 5, source: 'Яндекс', avatar: '👩', date: '2024-01-15' },
  { id: '2', name: 'Михаил Иванов', text: 'Делали ремонт в новостройке. Качество отличное, цены адекватные.', rating: 5, source: 'Google', avatar: '👨', date: '2024-01-10' },
  { id: '3', name: 'Елена Сидорова', text: 'Очень довольна результатом! Дизайн получился именно такой, как хотела.', rating: 5, source: '2ГИС', avatar: '👩‍🦰', date: '2024-01-05' },
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function GET() {
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, text, rating, source, avatar } = body;

    if (!name || !text) {
      return NextResponse.json({ error: 'Имя и текст обязательны' }, { status: 400 });
    }

    const newReview: Review = {
      id: generateId(),
      name,
      text,
      rating: rating || 5,
      source: source || 'Сайт',
      avatar: avatar || '👤',
      date: new Date().toISOString().split('T')[0]
    };

    reviews.push(newReview);
    return NextResponse.json({ message: 'Добавлено', review: newReview });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, text, rating, source, avatar } = body;

    const index = reviews.findIndex(r => r.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    reviews[index] = { ...reviews[index], name, text, rating, source, avatar };
    return NextResponse.json({ message: 'Обновлено', review: reviews[index] });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const index = reviews.findIndex(r => r.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    reviews.splice(index, 1);
    return NextResponse.json({ message: 'Удалено' });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
