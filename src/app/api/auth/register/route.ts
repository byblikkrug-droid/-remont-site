import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
}

const users: User[] = [];

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Все поля обязательны' },
        { status: 400 }
      );
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 400 }
      );
    }

    const newUser: User = {
      id: generateId(),
      email,
      name,
      password,
      createdAt: new Date()
    };

    users.push(newUser);

    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      message: 'Регистрация успешна',
      user: userWithoutPassword
    });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}
