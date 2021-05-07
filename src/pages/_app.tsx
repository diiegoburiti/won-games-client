import Head from 'next/head'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { CartProvider } from 'hooks/use-cart'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
