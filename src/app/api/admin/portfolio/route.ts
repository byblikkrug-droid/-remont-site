import { NextResponse } from 'next/server';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  createdAt: Date;
}

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Квартира на Ленина', description: 'Капитальный ремонт 2-комнатной квартиры', category: 'Квартиры', beforeImage: '', afterImage: '', createdAt: new Date() },
  { id: '2', title: 'Дом в Подмосковье', description: 'Ремонт под ключ частного дома', category: 'Дома', beforeImage: '', afterImage: '', createdAt: new Date() },
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function GET() {
  return NextResponse.json({ items: portfolioItems });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, category } = body;

    if (!title) {
      return NextResponse.json({ error: 'Название обязательно' }, { status: 400 });
    }

    const newItem: PortfolioItem = {
      id: generateId(),
      title,
      description: description || '',
      category: category || 'Квартиры',
      beforeImage: '',
      afterImage: '',
      createdAt: new Date()
    };

    portfolioItems.push(newItem);
    return NextResponse.json({ message: 'Добавлено', item: newItem });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, category } = body;

    const index = portfolioItems.findIndex(item => item.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    portfolioItems[index] = { ...portfolioItems[index], title, description, category };
    return NextResponse.json({ message: 'Обновлено', item: portfolioItems[index] });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const index = portfolioItems.findIndex(item => item.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    portfolioItems.splice(index, 1);
    return NextResponse.json({ message: 'Удалено' });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
