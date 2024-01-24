// Nav bar & footer go in this layout file
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // title of my application below
  title: 'Travel',
  description: 'Travel UI/UX app for London',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
