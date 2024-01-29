import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeezNode Portfolio',
  description: 'Making it happen on this node',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-[#0a0a0a]`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
