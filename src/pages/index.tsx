import { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'

import { ChallengeContext } from '../contexts/ChallengeContext'

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
  const { isNewLevelModalOpen } = useContext(ChallengeContext)

  return (
    <>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <Container isBlur={isNewLevelModalOpen}>
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
