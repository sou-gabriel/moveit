import BodyIcon from '../../assets/icons/body.svg'
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
  const hasCountdownEnded = true

  return (
    <Container>
      {hasCountdownEnded ? (
        <>
          <Content>
            <Header>Ganhe 400 xp</Header>
            <ChallengeInfo>
              <BodyIcon />
              <Title>Exercite-se</Title>
              <Description>
                É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e
                estique suas pernas pra você ficar saudável.
              </Description>
            </ChallengeInfo>
          </Content>
          <Footer>
            <FailedChallengeButton type="button" onClick={() => {}}>
              Falhei
            </FailedChallengeButton>
            <CompletedChallengeButton type="button" onClick={() => {}}>
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
