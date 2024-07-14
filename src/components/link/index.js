import React from 'react'
import { Container } from './styles';

export default function LinkItem({variant, name, to}) {
  return (
    <Container to={to} variant={variant}>
        {name}
    </Container>
  )
}
