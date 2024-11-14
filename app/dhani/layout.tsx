import '../globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Dhani | Lightning Fast Transactions',
  description: 'Experience secure, instant money transfers with session-bound transactions and smart user discovery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.className}>
      <body>{children}</body>
    </html>
  )
}
