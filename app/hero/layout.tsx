import '../globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],  // multiple weights for flexibility
})

export const metadata = {
  title: 'BootCamp',
  description: 'Join the next generation social platform for athletes. Share moments, connect with friends, and discover amazing fitness content.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  )
}
