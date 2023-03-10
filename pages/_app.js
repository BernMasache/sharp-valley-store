import MainLayout from '../components/layouts/main.layout'
import '../styles/globals.css'
import { Inter } from "@next/font/google"

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
})
export default function App({ Component, pageProps }) {
  return <MainLayout>

    <Component {...pageProps} />
  </MainLayout>


}
