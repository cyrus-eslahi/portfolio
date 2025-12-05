import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Cyrus Eslahi — Builder & Student',
  description: 'Designing clean products, tools, and experiments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F5F5F7] text-[#050608]">
        <Navigation />
        {children}
      </body>
    </html>
  )
}

