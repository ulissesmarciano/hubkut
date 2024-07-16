import React from 'react';
import { Container, RepoLink } from './styles';

import RepoIcon from '../../assets/icons/repositories-icon.png'

export default function RepoItem({repoUrl, repoName}) {
  return (
    <Container>
        <RepoLink>
            <img className='repo-icon' src={RepoIcon} alt='icone do repositório' />
            <p className='repo-url'>{repoUrl}</p>
        </RepoLink>
        <p className='repo-description'>{repoName}</p>
    </Container>
  )
}
