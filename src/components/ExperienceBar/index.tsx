import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import { Container, ProgressBar, Progress, CurrentExperience } from './styles'

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengeContext)

  return (
    <Container>
      <span>0 xp</span>
      <ProgressBar>
        <Progress
          currentExperience={(currentExperience / experienceToNextLevel) * 100}
        />
        <CurrentExperience
          currentExperience={(currentExperience / experienceToNextLevel) * 100}
        >
          {currentExperience} xp
        </CurrentExperience>
      </ProgressBar>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}
