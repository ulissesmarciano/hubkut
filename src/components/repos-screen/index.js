import React from 'react'
import { Container } from './styles'
import LinkItem from '../link'

export default function ReposScreen({repoItem}) {
  return (
    <Container>
      <h4>Meus últimos repositórios:</h4>
      <div>
        <ul className='repo-section'>
          {repoItem}
        </ul>
        <LinkItem name="Ver todos" to="#" variant="seAllLink" />
      </div>
    </Container>
  )
}
