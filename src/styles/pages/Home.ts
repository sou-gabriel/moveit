import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primaryBlue};
`

export const Content = styled.section`
  margin-left: 7.58rem;

  > img {
    margin-bottom: 6rem;
  }

  > strong {
    display: block;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.875rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > div {
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;

    > p {
      margin-left: 1.5rem;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.textHighlight};
    }
  }
`
