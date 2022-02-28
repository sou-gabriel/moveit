import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  background: transparent;
  transition: filter 200ms;

  &:hover {
    filter: brightness(0.8);
  }
`
