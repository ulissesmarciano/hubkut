import React from 'react'
import { Container } from './styles'

export default function Button({type, onClick}) {
  return (
    <Container type={type} onClick={onClick} >
        Entrar
    </Container> 
  )
}
