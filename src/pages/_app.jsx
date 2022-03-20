import Head from 'next/head'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Yumemiti-クリエイター向け適職診断-</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
