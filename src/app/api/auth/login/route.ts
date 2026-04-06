import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
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
      password
    };

    users.push(newUser);

    const cookieStore = await cookies();
    cookieStore.set('session', newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    });

    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      message: 'Вход выполнен',
      user: userWithoutPassword
    });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}
