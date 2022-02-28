import { useRouter } from 'next/router'
import Link from 'next/link'
import { BiHome, BiAward } from 'react-icons/bi'

import { LogoutButton } from '../LogoutButton'
import { Container, Content, Navigation, StyledLink } from './styles'

export const Header = () => {
  const router = useRouter()

  const activeRoute = router.asPath

  return (
    <Container>
      <Content>
        <img src="/reduced-logo.svg" alt="Move.it" />

        <Navigation>
          <Link href="/" passHref>
            <StyledLink isRouteActive={activeRoute === '/'}>
              <BiHome size={32} />
            </StyledLink>
          </Link>
          <Link href="/leadboard" passHref>
            <StyledLink isRouteActive={activeRoute === '/leadboard'}>
              <BiAward size={32} />
            </StyledLink>
          </Link>
        </Navigation>

        <LogoutButton />
      </Content>
    </Container>
  )
}
