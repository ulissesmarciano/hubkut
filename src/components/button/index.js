import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function Button() {
  return (
    <Link to='/home'>
        <Container>
            Entrar
        </Container> 
    </Link>
  )
}
