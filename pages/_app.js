import '../styles/globals.css'
import Layout from '../components/shared/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
