import styled from 'styled-components'

import { transparentize } from 'polished'

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) =>
    transparentize(0.5, theme.colors.background)};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentStyle = styled.div`
  position: relative;
  min-height: 22.625rem;
  padding: 2.875rem 3.75rem;
  background: linear-gradient(180deg, #fff 0%, #fff 100%);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const CloseModalButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 0;
  border: transparent;
`

export const Header = styled.header`
  width: 100%;
  display: block;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 8.75rem;
  line-height: 6.25rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  background: url('/levelup.svg') no-repeat center;
  background-size: contain;
`

export const Congratulations = styled.strong`
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.title};
`

export const Description = styled.p`
  font-size: 1.25rem;
`
