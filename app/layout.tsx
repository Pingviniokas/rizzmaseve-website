// app/layout.tsx
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Background from '@/components/Background'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RizmasEve',
  description: 'Ho Ho Ho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Background />
        <CustomCursor />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}