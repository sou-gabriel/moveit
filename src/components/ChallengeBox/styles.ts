import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex-grow: 1;
  min-width: 346px;
  padding: 25px 61px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.header`
  margin-bottom: 38px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryBlue};
`

export const ChallengeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Title = styled.strong`
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.title};
`

export const CycleMessage = styled.strong`
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.125rem;
`

export const InstructionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > svg {
    margin-bottom: 1rem;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 26px;
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.grayLine};
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ChallengeButton = styled.button`
  height: 5rem;
  font-weight: 500;
  font-size: 1.25rem;
  border: 0;
  transition: all 0.2s;
`

export const FailedChallengeButton = styled(ChallengeButton)`
  border-right: 1px solid ${({ theme }) => theme.colors.grayLine};
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.red)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const CompletedChallengeButton = styled(ChallengeButton)`
  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.green)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`
