import { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'
import { SignInButton } from '../components/SignInButton'

import { Container, Content } from '../styles/pages/Home'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <Container>
        <img src="/symbol.svg" />

        <Content>
          <img src="/logo.svg" alt="Move.it" />
          <strong>Bem-vindo</strong>
          <div>
            <FaGithub color="#B2B9FF" size={40} />
            <p>
              Faça login com seu Github <br /> para começar
            </p>
          </div>
          <SignInButton />
        </Content>
      </Container>
    </>
  )
}

export default Login
