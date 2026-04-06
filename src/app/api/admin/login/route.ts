import { NextRequest, NextResponse } from 'next/server';

interface Admin {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'superadmin';
}

const admins: Admin[] = [
  { id: '1', email: 'admin@remontpro.ru', password: 'admin123', name: 'Администратор', role: 'superadmin' }
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email и пароль обязательны' }, { status: 400 });
    }

    const admin = admins.find(a => a.email === email && a.password === password);
    if (!admin) {
      return NextResponse.json({ error: 'Неверные данные' }, { status: 401 });
    }

    const session = {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
      token: generateId() + '-' + Date.now()
    };

    return NextResponse.json({ 
      message: 'Вход выполнен',
      admin: { id: admin.id, email: admin.email, name: admin.name, role: admin.role },
      token: session.token
    });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ admins });
}
