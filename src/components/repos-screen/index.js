import React from 'react'
import { Container } from './styles'
import RepoItem from '../repoitem'
import LinkItem from '../link'

export default function ReposScreen() {
  return (
    <Container>
      <h4>Meus últimos repositórios:</h4>
      <div>
        <ul className='repo-section'>
          <RepoItem />
          <RepoItem />
          <RepoItem />
          <RepoItem />
          <RepoItem />
        </ul>
        <LinkItem name="Ver todos" to="#" variant="seAllLink" />
      </div>
    </Container>
  )
}
