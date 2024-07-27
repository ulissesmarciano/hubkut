import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import useFetchStarredData from '../../hooks/useFetchStarredData'

import Header from '../../components/header';
import FollowUser from '../../components/follow-user';
import LinkItem from '../../components/link';

export default function FollowersPage() {
  const data = useParams();
  const username = data.username;
  const starredData = useFetchStarredData(username);
      
  return (
    <Container>
      <Header 
        followersLinkHref={username}
        followingLinkHref={username}
        homepageLinkHref={username}
      />
      <section className='followers-section'> 
        <div className='link-section'>
          <LinkItem 
            name="Voltar"
            to={`/home/${username}`}
            variant="seAllLink"
          />
        </div>
        <ul className='list'>
          {starredData.map((user, index) => 
            <FollowUser 
              key={index}
              usernameOut={user.login}
              imageUrl={user.avatar_url}
              variant="primary"
              to={user.login}
            />
          )}
        </ul>
      </section>
    </Container>
    
  );
};
