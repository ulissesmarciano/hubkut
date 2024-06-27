import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function Button({to}) {
  return (
    <Link to={to}>
        <Container>
            Entrar
        </Container> 
    </Link>
  )
}
