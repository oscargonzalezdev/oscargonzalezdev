import './globals.css'
import Layout from '../components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from '../context/DataContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DataContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
