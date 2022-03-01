import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import { Container, Title, AmountCompletedChallenges } from './styles'

export const CompletedChallenges = () => {
  const { completedChallenges } = useContext(ChallengeContext)

  const completedChallengesFormatted = String(completedChallenges).padStart(
    2,
    '0'
  )

  return (
    <Container>
      <Title>Desafios completados</Title>
      <AmountCompletedChallenges>
        {completedChallengesFormatted}
      </AmountCompletedChallenges>
    </Container>
  )
}
