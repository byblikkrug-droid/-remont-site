import { NextRequest, NextResponse } from 'next/server';

interface Callback {
  id: string;
  name: string;
  phone: string;
  message?: string;
  createdAt: Date;
  status: 'new' | 'processed';
}

const callbacks: Callback[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function GET() {
  return NextResponse.json({ callbacks });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 });
    }

    const newCallback: Callback = {
      id: generateId(),
      name,
      phone,
      message,
      createdAt: new Date(),
      status: 'new'
    };

    callbacks.push(newCallback);

    return NextResponse.json({ message: 'Заявка отправлена', callback: newCallback });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    const index = callbacks.findIndex(c => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    callbacks[index].status = status;
    return NextResponse.json({ message: 'Обновлено', callback: callbacks[index] });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const index = callbacks.findIndex(c => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    }

    callbacks.splice(index, 1);
    return NextResponse.json({ message: 'Удалено' });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
