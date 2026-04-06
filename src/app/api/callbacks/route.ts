import { NextResponse } from 'next/server';

const callbacks: any[] = [];

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

export async function GET() {
  return NextResponse.json({ callbacks });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    
    let name = '';
    let phone = '';
    let message = '';

    if (contentType.includes('application/json')) {
      const json = await request.json();
      name = json.name || '';
      phone = json.phone || '';
      message = json.message || '';
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.text();
      const params = new URLSearchParams(formData);
      name = params.get('name') || '';
      phone = params.get('phone') || '';
      message = params.get('message') || '';
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    const newCallback = {
      id: generateId(),
      name,
      phone,
      message,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    callbacks.push(newCallback);

    return NextResponse.json({
      message: 'Заявка отправлена!',
      callback: newCallback
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: 'Ошибка: ' + e.message },
      { status: 500 }
    );
  }
}