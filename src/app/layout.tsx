import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QualiSolo - Avaliação da Qualidade do Solo',
  description: 'Avalie a qualidade do seu solo de forma simples e visual através de observações práticas.',
  keywords: 'solo, agricultura, qualidade, avaliação, sustentabilidade, produção',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}