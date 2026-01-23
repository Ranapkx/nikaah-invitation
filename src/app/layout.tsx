import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Great_Vibes, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Nikaah Invitation | Jaseem & Haifa',
  description: 'You are cordially invited to the Nikaah ceremony of Jaseem and Haifa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
