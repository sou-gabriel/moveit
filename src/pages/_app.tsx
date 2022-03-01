import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { CountdownProvider } from '../contexts/CountdownContext'

import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
