import styled, { css } from 'styled-components'

interface ContainerProps {
  isBlur: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  display: flex;
  ${({ isBlur }) =>
    isBlur &&
    css`
      filter: blur(8px);
    `}
`

export const Content = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 0.5rem;
  padding: 2.5rem 0.5rem;
  flex-grow: 1;
`

export const Section = styled.section`
  margin-top: 6.875rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  gap: 6.25rem;
`

export const CountdownContainer = styled.div`
  min-width: 398px;

  div + div {
    margin-top: 3.5rem;
  }
`

export const ChallengeContainer = styled.div``
