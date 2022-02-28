import { useEffect, useState } from 'react'

import CheckCircleIcon from '../../assets/icons/check-circle.svg'
import PlayIcon from '../../assets/icons/play.svg'
import CloseIcon from '../../assets/icons/close.svg'

import {
  Container,
  TimeUnitsContainer,
  TimeUnit,
  Separator,
  StartCountdownButton,
  AbandonCountdownButton,
  ProgressBar,
  CountdownEndButton,
} from './styles'

const configuredTime = 0.8 * 60

export const Countdown = () => {
  const [time, setTime] = useState(configuredTime) // 1500s -> 25 minutes
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasCountdownEnded, setHasCountdownEnded] = useState(false)

  const currentProgress = Math.floor((time / configuredTime) * 100)

  const [minuteLeft, minuteRight] = String(Math.floor(time / 60))
    .padStart(2, '0')
    .split('')
  const [secondsLeft, secondsRight] = String(time % 60)
    .padStart(2, '0')
    .split('')

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      const countdownId = setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)

      return () => clearTimeout(countdownId)
    }

    if (time === 0) {
      setHasCountdownEnded(true)
    }
  }, [isCountdownActive, time])

  const handleStartCountdown = () => {
    setIsCountdownActive(true)
  }

  return (
    <Container>
      <TimeUnitsContainer>
        <TimeUnit>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </TimeUnit>
        <Separator>:</Separator>
        <TimeUnit>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </TimeUnit>
      </TimeUnitsContainer>

      {isCountdownActive ? (
        hasCountdownEnded ? (
          <CountdownEndButton type="button" disabled>
            Ciclo encerrado
            <CheckCircleIcon />
          </CountdownEndButton>
        ) : (
          <AbandonCountdownButton onClick={() => {}}>
            Abandonar ciclo
            <CloseIcon />
            <ProgressBar currentProgress={currentProgress}>
              <div />
            </ProgressBar>
          </AbandonCountdownButton>
        )
      ) : (
        <StartCountdownButton onClick={handleStartCountdown}>
          Iniciar novo ciclo
          <PlayIcon />
        </StartCountdownButton>
      )}
    </Container>
  )
}
