import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengeProvider } from '../contexts/ChallengeContext'

import { NewLevelModal } from '../components/NewLevelModal'

import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <CountdownProvider>
          <ChallengeProvider>
            <Component {...pageProps} />
            <NewLevelModal />
          </ChallengeProvider>
        </CountdownProvider>

        <GlobalStyle />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
