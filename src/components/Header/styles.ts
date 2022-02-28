import styled, { css } from 'styled-components'

interface StyledLinkProps {
  isRouteActive: boolean
}

export const Container = styled.header`
  width: 112px;
  padding: 32px 0;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Navigation = styled.nav`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledLink = styled.a<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  position: relative;

  & + a {
    margin-top: 1rem;
  }

  ${({ isRouteActive }) => {
    return (
      isRouteActive &&
      css`
        & {
          color: ${({ theme }) => theme.colors.primaryBlue};
        }

        &:before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 100%;
          background: ${({ theme }) => theme.colors.primaryBlue};
          border-radius: 0 5px 5px 0;
          position: absolute;
          left: 0;
        }
      `
    )
  }}
`
