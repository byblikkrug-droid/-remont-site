import { NextResponse } from 'next/server';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  active: boolean;
}

const services: Service[] = [
  { id: '1', title: 'Косметический ремонт', description: 'Обновление отделки без капитальных изменений', price: 'от 3 500 ₽/м²', features: ['Покраска стен', 'Поклейка обоев', 'Укладка ламината'], active: true },
  { id: '2', title: 'Капитальный ремонт', description: 'Полная замена коммуникаций и отделка', price: 'от 8 000 ₽/м²', features: ['Замена проводки', 'Стяжка пола', 'Выравнивание стен'], active: true },
  { id: '3', title: 'Ремонт под ключ', description: 'Комплексный ремонт с материалами', price: 'от 12 000 ₽/м²', features: ['Дизайн-проект', 'Черновые материалы', 'Чистовая отделка'], active: true },
  { id: '4', title: 'Дизайн интерьера', description: 'Разработка индивидуального проекта', price: 'от 1 500 ₽/м²', features: ['3D-визуализация', 'Планировка', 'Подбор материалов'], active: true },
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function GET() {
  return NextResponse.json({ services });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, price, features } = body;

    if (!title || !price) {
      return NextResponse.json({ error: 'Название и цена обязательны' }, { status: 400 });
    }

    const newService: Service = {
      id: generateId(),
      title,
      description: description || '',
      price,
      features: features || [],
      active: true
    };

    services.push(newService);
    return NextResponse.json({ message: 'Добавлено', service: newService });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, price, features, active } = body;

    const index = services.findIndex(s => s.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    services[index] = { ...services[index], title, description, price, features, active };
    return NextResponse.json({ message: 'Обновлено', service: services[index] });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const index = services.findIndex(s => s.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    services.splice(index, 1);
    return NextResponse.json({ message: 'Удалено' });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
