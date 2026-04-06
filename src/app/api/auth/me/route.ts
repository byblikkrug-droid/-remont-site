import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const users = [
  { id: 'demo', email: 'demo@example.com', name: 'Demo User', password: 'demo123' }
];

export async function GET() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session');

  if (!sessionId?.value) {
    return NextResponse.json({ user: null });
  }

  const user = users.find(u => u.id === sessionId.value);
  if (!user) {
    return NextResponse.json({ user: null });
  }

  const { password: _, ...userWithoutPassword } = user;
  return NextResponse.json({ user: userWithoutPassword });
}
