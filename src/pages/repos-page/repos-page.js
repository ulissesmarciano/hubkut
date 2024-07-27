import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useFetchReposData from '../../hooks/useFetchReposData';

import Header from '../../components/header';
import { Container } from './styles';
import LinkItem from '../../components/link';
import RepoItem from '../../components/repoitem';

export default function ReposPage() {
  const userParams = useParams();
  const username = userParams.username;
  const repos = useFetchReposData(username);

  return (
    <>
      <Header />
      <Container>
          <div className='link-section'>
            <LinkItem 
              name="Voltar"
              to="/"
              variant="seAllLink"
            />
          </div>
          <div className='repos-section'>
            {repos.map((repo, index) => 
              <RepoItem 
                key={index}
                repoName={repo.name}
                repoUrl={repo.full_name}
                language={repo.language}
              />
            )}
          </div>
      </Container>
    </>
  )
}
