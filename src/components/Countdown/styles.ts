import styled from 'styled-components'

interface ProgressBarProps {
  currentProgress: number
}

export const Container = styled.div``

export const TimeUnitsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TimeUnit = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  > span {
    flex: 1 1;
    display: inline-block;
    font-family: 'Rajdhani', sans-serif;
    font-size: 8.5rem;
    line-height: 176px;
    color: ${({ theme }) => theme.colors.title};
    text-align: center;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`

export const Separator = styled.span`
  display: inline-block;
  padding: 0 0.5rem;
  font-family: 'Rajdhani', sans-serif;
  font-size: 8.5rem;
  color: ${({ theme }) => theme.colors.title};
`

const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  overflow: hidden;
`

export const StartCountdownButton = styled(CountdownButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const AbandonCountdownButton = styled(CountdownButton)`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  position: relative;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.grayLine};

  > div {
    width: 100%;
    right: ${({ currentProgress }) => currentProgress}%;
    height: 0;
    height: 4px;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.green};
    transition: right 0.2s;
    border-radius: 0 0 5px 0;
  }
`

export const CountdownEndButton = styled(CountdownButton)`
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: not-allowed;
`
