import styled from 'styled-components'

export const Container = styled.button`
  height: 5rem;
  padding: 0 2.25rem;
  border: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.textHighlight};
  background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  > span {
    display: inline-block;
    margin-right: 1.375rem;
  }
`
