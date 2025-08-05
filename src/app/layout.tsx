import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Свадебное приглашение',
    default: 'Александр ❤️ Екатерина',
  },
  description: 'Приглашение на свадьбу Александра и Екатерины. Присоединяйтесь к нам в этот особенный день.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
