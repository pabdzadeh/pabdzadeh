import { Button } from 'antd'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedram Abdzadeh',
  description: 'Front-end Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const linkClasses = " h-12 w-36 text-black font-inter text-center p-3 "

  return (
    <html lang="en">
      <body className={inter.className + ' scrollbar'}>
        {children}
      </body >
    </html >
  )
}
