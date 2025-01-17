// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import SquidLoader from '@/components/SquidLoader'
import FloatingShapes from '@/components/FloatingShapes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hack-n-Win 2.0',
  description: 'Join the ultimate coding challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-darkBg transition-colors duration-300`}>
        <ThemeProvider>
          <SquidLoader />
          <FloatingShapes />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}