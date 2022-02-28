import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const Username = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
`

export const Level = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
`
