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
  isNewLevelModalOpen: boolean
  completedChallenges: number
  handleFailedChallenge: () => void
  handleCompletedChallenge: () => void
  handleCloseNewLevelModal: () => void
}

interface ChallengeProviderProps {
  children: ReactNode | ReactNode[]
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const { hasCountdownEnded, resetCountdown } = useContext(CountdownContext)
  const [challenge, setChallenge] = useState<Challenge | null>({} as Challenge)
  const [completedChallenges, setCompletedChallenges] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [level, setLevel] = useState(1)
  const [isNewLevelModalOpen, setIsNewLevelModalOpen] = useState(false)

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
        setIsNewLevelModalOpen(true)
      }

      setCurrentExperience(finalExperience)
      setCompletedChallenges(
        prevCompletedChallenges => prevCompletedChallenges + 1
      )
      setChallenge(null)
      resetCountdown()
    }
  }

  const handleCloseNewLevelModal = () => {
    setIsNewLevelModalOpen(false)
  }

  return (
    <ChallengeContext.Provider
      value={{
        currentExperience,
        hasCountdownEnded,
        challenge,
        experienceToNextLevel,
        level,
        isNewLevelModalOpen,
        completedChallenges,
        handleFailedChallenge,
        handleCompletedChallenge,
        handleCloseNewLevelModal,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
