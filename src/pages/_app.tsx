import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
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
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <Component {...pageProps} />
              <NextNprogress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
              />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
