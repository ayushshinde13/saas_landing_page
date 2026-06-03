import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RootProvider } from '@/components/root-provider'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans-alt',
  weight: ['400', '500', '600'],
})

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SaaSFlow - Build, Launch, Grow',
  description: 'Everything you need to scale your SaaS',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <RootProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </RootProvider>
      </body>
    </html>
  )
}