import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { EditModeProvider } from '@/components/EditModeContext'

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
        <EditModeProvider>
          <Navigation />
          {children}
        </EditModeProvider>
      </body>
    </html>
  )
}

