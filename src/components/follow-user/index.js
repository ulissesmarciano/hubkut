import React from 'react'
import { Container, UserLink } from './styles'

export default function FollowUser({ imageUrl, usernameIn, usernameOut, variant }) {
  return (
    <Container $variant={variant}>
      <UserLink to="#" imageurl={imageUrl}>
        <p className='username-in'>{usernameIn}</p>
      </UserLink>
      <p className='username-out'>{usernameOut}</p>
    </Container>
  )
}
