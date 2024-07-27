import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchStarredData from '../../hooks/useFetchStarredData';

import Header from '../../components/header';
import { Container } from './styles';
import LinkItem from '../../components/link';
import RepoItem from '../../components/repoitem';

export default function ReposPage() {
  const userParams = useParams();
  const username = userParams.username;
  const starredData = useFetchStarredData(username);

  console.log(starredData);

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
            {starredData.map((starred, index) => 
              <RepoItem 
                key={index}
                repoName={starred.name}
                repoUrl={starred.full_name}
                language={starred.language}
              />
            )}
          </div>
      </Container>
    </>
  )
}
