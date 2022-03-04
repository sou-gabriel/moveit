import { useContext } from 'react'

import { ChallengeContext } from '../../contexts/ChallengeContext'

import LevelIcon from '../../assets/icons/level.svg'

import { Container, Avatar, Username, Level } from './styles'

interface ProfileProps {
  user: {
    name: string
    image: string
  }
}

export const Profile = ({ user }: ProfileProps) => {
  const { level } = useContext(ChallengeContext)

  return (
    <Container>
      <Avatar src={user.image} alt={user.name} width={88} height={88} />
      <div>
        <Username>{user.name}</Username>
        <Level>
          <LevelIcon />
          Level {level}
        </Level>
      </div>
    </Container>
  )
}
