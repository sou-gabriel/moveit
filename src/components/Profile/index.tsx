import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import LevelIcon from '../../assets/icons/level.svg'

import { Container, Avatar, Username, Level } from './styles'

export const Profile = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <Container>
      <Avatar
        src="https://github.com/sou-gabriel.png"
        alt="Gabriel Ramos"
        width={88}
        height={88}
      />
      <div>
        <Username>Gabriel Ramos</Username>
        <Level>
          <LevelIcon />
          Level {level}
        </Level>
      </div>
    </Container>
  )
}
