import React from 'react'
import { Container } from './styles';

export default function LinkItem({variant, name, to, target}) {
  return (
    <Container to={to} variant={variant} target={target}>
        {name}
    </Container>
  )
}
