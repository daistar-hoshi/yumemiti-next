import Head from 'next/head'
import 'src/styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Yumemiti-クリエイター向け適職診断-</title>
    </Head>
    <ChakraProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
    </>
  )
}

export default MyApp
