import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export default function GreetingScreen() {
  return (
    <Container>
      <h2>Bem vindo(a), Ulisses Marciano Gonçalves</h2>
      <p>Developer Sudent | JavaScript | CSS | java | React Native</p>
      <ul className='stats-info'>
        <li className='item'>
          <p>Repositórios</p>
          <Link className='link' to={'#'}>
              <img src='#' alt='icone repositórios' />
              33
          </Link>
        </li>
        <li className='item'>
          <p>Repositórios</p>
          <Link className='link' to={'#'}>
              <img src='#' alt='icone repositórios' />
              33
          </Link>
        </li>
        <li className='item'>
          <p>Repositórios</p>
          <Link className='link' to={'#'}>
              <img src='#' alt='icone repositórios' />
              33
          </Link>
        </li>
        <li className='item'>
          <p>Repositórios</p>
          <Link className='link' to={'#'}>
              <img src='#' alt='icone repositórios' />
              33
          </Link>
        </li>
      </ul>
    </Container>
  )
}
