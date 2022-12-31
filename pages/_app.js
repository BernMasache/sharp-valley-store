
import MainLayout from '../components/layouts/main.layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <MainLayout>
    <Component {...pageProps} />
    </MainLayout>

}
