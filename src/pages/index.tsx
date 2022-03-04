import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
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

interface HomeProps {
  user: {
    name: string
    image: string
  }
}

const Home = ({ user }: HomeProps) => {
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
              <Profile user={user} />
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

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  return {
    props: {
      user: {
        name: session.user!.name,
        image: session.user!.image,
      },
    },
  }
}

export default Home
