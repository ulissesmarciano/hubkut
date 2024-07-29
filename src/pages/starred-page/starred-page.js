import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import useFetchStarredData from '../../hooks/useFetchStarredData';

import Header from '../../components/header';
import LinkItem from '../../components/link';
import RepoItem from '../../components/repoitem';
import Loader from '../../components/loader';

export default function ReposPage() {
  const [loading, setLoading] = useState(true);
  
  const userParams = useParams();
  const username = userParams.username;
  const starredData = useFetchStarredData(username);

  useEffect(() => {
    if (
      starredData
    ){
      setLoading(false);
    }
  }, [starredData])

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ):(
        <Container>
          <div className='link-section'>
            <LinkItem 
              name="Voltar"
              to={`/home/${username}`}
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
                to={starred.html_url}
              />
            )}
          </div>
      </Container>
      )}
    </>
  )
}
