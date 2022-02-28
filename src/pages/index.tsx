import { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/Header'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

import {
  Container,
  Content,
  Section,
  CountdownContainer,
  ChallengeContainer,
} from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <Container>
        <Header />
        <Content>
          <ExperienceBar />
          <Section>
            <CountdownContainer>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </CountdownContainer>
            <ChallengeContainer>
              <ChallengeBox />
            </ChallengeContainer>
          </Section>
        </Content>
      </Container>
    </>
  )
}

export default Home
