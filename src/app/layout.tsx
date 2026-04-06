import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'

export const metadata: Metadata = {
  title: 'РемонтПро - Ремонт квартир и домов под ключ',
  description: 'Профессиональный ремонт квартир и домов под ключ. Качество, гарантия, доступные цены.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
