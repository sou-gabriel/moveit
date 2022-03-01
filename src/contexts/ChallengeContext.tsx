import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react'

import challenges from '../../challenges.json'

import { CountdownContext } from './CountdownContext'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengeContextData {
  hasCountdownEnded: boolean
  currentExperience: number
  challenge: Challenge | null
  experienceToNextLevel: number
  level: number
  handleFailedChallenge: () => void
  handleCompletedChallenge: () => void
}

interface ChallengeProviderProps {
  children: ReactNode | ReactNode[]
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const { hasCountdownEnded, resetCountdown } = useContext(CountdownContext)
  const [challenge, setChallenge] = useState<Challenge | null>({} as Challenge)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [level, setLevel] = useState(1)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    if (hasCountdownEnded) {
      const randomChallengeIndex = Math.round(
        Math.random() * (challenges.length - 1)
      )
      setChallenge(challenges[randomChallengeIndex] as Challenge)
      return
    }
  }, [hasCountdownEnded])

  const handleFailedChallenge = () => {
    resetCountdown()
  }

  const handleCompletedChallenge = () => {
    if (challenge) {
      let finalExperience = currentExperience + challenge.amount
      const isItToLevelUp = finalExperience >= experienceToNextLevel

      if (isItToLevelUp) {
        finalExperience -= experienceToNextLevel
        setLevel(prevLevel => prevLevel + 1)
      }

      setCurrentExperience(finalExperience)
      setChallenge(null)
      resetCountdown()
    }
  }

  return (
    <ChallengeContext.Provider
      value={{
        currentExperience,
        hasCountdownEnded,
        challenge,
        experienceToNextLevel,
        level,
        handleFailedChallenge,
        handleCompletedChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
