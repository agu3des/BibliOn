import { Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { BookProvider } from '@/context/booksContext'


const oswald = Oswald({style: 'normal', weight: '400', preload: false, display: 'swap', serif: false})


export const metadata = {
  title: 'Livraria Biblion',
  description: 'Aplicação de uma livraria de livros',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      <head>
        <link rel="icon" href="/public/favicon.ico" type="image/icon" />
      </head>
      <body className={oswald.className}>
        <Header />
        <div>
          <BookProvider>{children}</BookProvider>
        </div>
        <Footer />
      </body>
    </html>
  )
}
