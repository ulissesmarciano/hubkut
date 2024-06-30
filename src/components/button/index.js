import React from 'react'
import { Container } from './styles'

export default function Button({onClick}) {
  return (
    <Container onClick={onClick}>
        Entrar
    </Container> 
  )
}
