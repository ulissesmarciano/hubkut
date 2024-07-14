import React from 'react';
import { Container, RepoLink } from './styles';

import RepoIcon from '../../assets/icons/repositories-icon.png'

export default function RepoItem() {
  return (
    <Container>
        <RepoLink>
            <img className='repo-icon' src={RepoIcon} alt='icone do repositório' />
            <p className='repo-url'>ulissesmarciano/angular-blog</p>
        </RepoLink>
        <p className='repo-description'>Repositório criando com angualar baseado em um site dribbble</p>
    </Container>
  )
}
