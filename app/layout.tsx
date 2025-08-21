import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Altha Contabilidade',
  description: 'Created with for Pedro',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
