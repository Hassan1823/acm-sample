import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from '@next/font/google'
import Footer from '@/components/footer/Footer'
import Provider from '../../context/Provider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* <Provider> */}
      <body className={inter.className}>
        <div className='container'>
        {children}
        <ToastContainer/>
        </div>
        </body>
        {/* </Provider> */}
    </html>
  )
}
