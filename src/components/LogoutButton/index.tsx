import { signOut } from 'next-auth/react'
import { CgLogOut } from 'react-icons/cg'

import { Container } from './styles'

export const LogoutButton = () => {
  return (
    <Container type="button" onClick={() => signOut()}>
      <CgLogOut size={36} color="#5965E0" />
    </Container>
  )
}
