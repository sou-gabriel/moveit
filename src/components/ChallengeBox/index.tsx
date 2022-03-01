import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import BodyIcon from '../../assets/icons/body.svg'
import EyeIcon from '../../assets/icons/eye.svg'
import LevelUpIcon from '../../assets/icons/level-up.svg'

import {
  Container,
  Content,
  Header,
  ChallengeInfo,
  Title,
  CycleMessage,
  InstructionBox,
  Description,
  Footer,
  FailedChallengeButton,
  CompletedChallengeButton,
} from './styles'

export const ChallengeBox = () => {
  const {
    hasCountdownEnded,
    challenge,
    handleFailedChallenge,
    handleCompletedChallenge,
  } = useContext(ChallengeContext)

  return (
    <Container>
      {hasCountdownEnded && challenge ? (
        <>
          <Content>
            <Header>Ganhe {challenge.amount} xp</Header>
            <ChallengeInfo>
              {challenge.type === 'body' ? <BodyIcon /> : <EyeIcon />}
              <Title>Exercite-se</Title>
              <Description>{challenge.description}</Description>
            </ChallengeInfo>
          </Content>
          <Footer>
            <FailedChallengeButton
              type="button"
              onClick={handleFailedChallenge}
            >
              Falhei
            </FailedChallengeButton>
            <CompletedChallengeButton
              type="button"
              onClick={handleCompletedChallenge}
            >
              Completei
            </CompletedChallengeButton>
          </Footer>
        </>
      ) : (
        <Content>
          <CycleMessage>
            Inicie um ciclo para receber desafios a serem completados
          </CycleMessage>
          <InstructionBox>
            <LevelUpIcon />
            <Description>
              Complete-os e ganhe experiência e avance de level.
            </Description>
          </InstructionBox>
        </Content>
      )}
    </Container>
  )
}
