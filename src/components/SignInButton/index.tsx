import { FaGithub } from 'react-icons/fa'

import { Container } from './styles'

export const SignInButton = () => {
  return (
    <Container type="button" onClick={() => {}}>
      <span>Fazer login com Github</span>
      <FaGithub color="#B3B9FF" size={48} />
    </Container>
  )
}
