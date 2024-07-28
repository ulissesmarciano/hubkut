import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetchReposData from '../../hooks/useFetchReposData';

import Header from '../../components/header';
import { Container } from './styles';
import LinkItem from '../../components/link';
import RepoItem from '../../components/repoitem';

export default function ReposPage() {
  const [loading, setLoading] = useState(true);

  const userParams = useParams();
  const username = userParams.username;
  const reposData = useFetchReposData(username);

  useEffect(() => {
    if (
      reposData
    ){
      setLoading(false);
    }
  }, [reposData])

  return (
    <>
      <Header />
      <Container>
          <div className='link-section'>
            <LinkItem 
              name="Voltar"
              to={`/home/${username}`}
              variant="seAllLink"
            />
          </div>
          <div className='repos-section'>
            {reposData.map((repo, index) => 
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
