import { createContext, ReactNode, useState, useEffect } from 'react'

interface CountdownContextData {
  timeInSeconds: number
  isCountdownActive: boolean
  hasCountdownEnded: boolean
  currentProgress: number
  handleStartCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode | ReactNode[]
}

export const CountdownContext = createContext({} as CountdownContextData)

const defaultTime = 0.1 * 60

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const [timeInSeconds, setTimeInSeconds] = useState(defaultTime)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasCountdownEnded, setHasCountdownEnded] = useState(false)

  const currentProgress = Math.floor((timeInSeconds / defaultTime) * 100)

  useEffect(() => {
    const shouldDecrementTime = isCountdownActive && timeInSeconds > 0

    if (shouldDecrementTime) {
      setTimeout(() => {
        setTimeInSeconds(prevTimeInSeconds => prevTimeInSeconds - 1)
      }, 1000)
      return
    }

    const isCountdownEnded = timeInSeconds === 0

    if (isCountdownEnded) {
      setHasCountdownEnded(true)
    }
  }, [isCountdownActive, timeInSeconds])

  const handleStartCountdown = () => {
    setIsCountdownActive(true)
  }

  return (
    <CountdownContext.Provider
      value={{
        timeInSeconds,
        isCountdownActive,
        hasCountdownEnded,
        currentProgress,
        handleStartCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
