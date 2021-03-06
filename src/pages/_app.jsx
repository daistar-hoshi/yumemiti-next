import Head from 'next/head'
import 'src/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "src/theme/theme";
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Yumemiti-クリエイター向け適職診断-</title>
    </Head>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
    </>
  )
}

export default MyApp
