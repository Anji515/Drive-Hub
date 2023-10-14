import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Drive Hub',
  description: 'Explore the finest global automobile exhibition app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  )
}
