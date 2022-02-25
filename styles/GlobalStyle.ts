import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }

  html {
    @media (max-width: 1024px) {
      font-size: 92.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
