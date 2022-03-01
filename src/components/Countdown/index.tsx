import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'

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

export const Countdown = () => {
  const {
    timeInSeconds,
    isCountdownActive,
    hasCountdownEnded,
    currentProgress,
    handleStartCountdown,
    handleAbandonCountdown,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(Math.floor(timeInSeconds / 60))
    .padStart(2, '0')
    .split('')
  const [secondsLeft, secondsRight] = String(timeInSeconds % 60)
    .padStart(2, '0')
    .split('')

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
          <AbandonCountdownButton onClick={handleAbandonCountdown}>
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
