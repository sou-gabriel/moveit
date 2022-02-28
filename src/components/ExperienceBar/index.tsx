import { Container, ProgressBar, Progress, CurrentExperience } from './styles'

export const ExperienceBar = () => {
  return (
    <Container>
      <span>0 xp</span>
      <ProgressBar>
        <Progress currentExperience={50} />
        <CurrentExperience currentExperience={50}>400 xp</CurrentExperience>
      </ProgressBar>
      <span>600 xp</span>
    </Container>
  )
}
