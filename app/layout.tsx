import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import EnhancedCursor from '../components/EnhancedCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'snatch.fx - Digital Products Showcase',
  description: 'Professional video editing and motion graphics tools.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468021976_1257946828737736_5425093873213144242_n.jpg-CwF6H5WQyygApnDZc7Fb3zQgoEUB5h.jpeg',
        sizes: '32x32',
        type: 'image/jpeg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <EnhancedCursor />
      </body>
    </html>
  )
}

