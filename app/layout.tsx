import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from '@/components/Providers'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SkipLink } from '@/components/SkipLink'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Pratik Yapay Zeka | AI Otomasyon & Satış Çözümleri',
  description: 'Satış ve pazarlama süreçlerinizi yapay zeka ile otomatikleştirin. %300 lead artışı, 20+ saat tasarruf.',
  keywords: ['yapay zeka otomasyon', 'satış otomasyonu', 'pazarlama otomasyonu', 'AI automation'],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>
          <SkipLink />
          <Navigation />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
