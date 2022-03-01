import styled from 'styled-components'

interface ProgressProps {
  currentExperience: number
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ProgressBar = styled.div`
  flex-grow: 1;
  height: 4px;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.grayLine};
  margin: 0 1.5rem 0 0.9375rem;
  position: relative;
`

export const Progress = styled.div<ProgressProps>`
  transition: width 0.8s ease-in-out;
  width: ${({ currentExperience }) => `${currentExperience}%`};
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
`

export const CurrentExperience = styled.span<ProgressProps>`
  margin-top: 6px;
  font-weight: 500;
  position: absolute;
  left: ${({ currentExperience }) => currentExperience}%;
  transform: translateX(-50%);
`
