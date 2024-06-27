import React from 'react'
import { Container } from './styles'

export default function LoginInput({onChange}) {
  return (
    <Container>
        <input type='text' placeholder='Nome de usuário' onChange={onChange}/>
    </Container>
  )
}
