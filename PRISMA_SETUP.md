# Установка и настройка Prisma

## Установка

```bash
npm install prisma @prisma/client
```

## Инициализация Prisma

```bash
npx prisma init
```

## Настройка базы данных

1. Скопируйте `.env.example` в `.env`
2. Измените `DATABASE_URL` на ваше подключение к PostgreSQL

```env
DATABASE_URL="postgresql://user:password@localhost:5432/remontdb?schema=public"
```

## Миграции

```bash
# Создание миграции
npx prisma migrate dev --name init

# Применение миграций
npx prisma migrate deploy

# Генерация клиента
npx prisma generate
```

## Команды Prisma Studio (GUI для базы)

```bash
npx prisma studio
```

## Переключение между демо и базой данных

В текущей версии сайт работает в демо-режиме (данные в памяти). 

Для переключения на реальную базу данных:
1. Установите и настройте PostgreSQL
2. Выполните миграции
3. Замените API маршруты на использование Prisma

Пример замены (`/api/callbacks/route.ts`):

```typescript
import { prisma } from '@/lib/prisma';

export async function GET() {
  const callbacks = await prisma.callback.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json({ callbacks });
}

export async function POST(request: NextRequest) {
  const { name, phone, message } = await request.json();
  
  const callback = await prisma.callback.create({
    data: { name, phone, message }
  });
  
  return NextResponse.json({ callback });
}
```
