
import { Inter } from 'next/font/google'
import './styles.css'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// @ts-ignore
export default function Layout({ children }) {
  return (
      <html lang="en">
      <body className={inter.variable}>
      {children}
      </body>
      </html>
  )
}