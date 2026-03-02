import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Renove Estamparia | Brindes & Personalização',
  description:
    'Transformamos suas ideias em estampas incríveis. Camisetas, canecas, sacolas, abadás e brindes personalizados com a melhor qualidade.',
  keywords: 'estamparia, personalização, camisetas, canecas, brindes, sublimação, silk screen, DTF',
  openGraph: {
    title: 'Renove Estamparia | Brindes & Personalização',
    description: 'Transformamos suas ideias em estampas incríveis.',
    type: 'website',
    images: ['/images/logo.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0FB9B1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
