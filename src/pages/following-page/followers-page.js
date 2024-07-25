import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import useFetchFollowingData from '../../hooks/useFetchFollowingData'

import Header from '../../components/header';
import FollowUser from '../../components/follow-user';
import LinkItem from '../../components/link';

export default function FollowingPage() {
  const data = useParams();
  const username = data.username;
  const followingData = useFetchFollowingData(username);
      
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
          {followingData.map((user, index) => 
            <FollowUser 
              key={index}
              usernameOut={user.login}
              imageUrl={user.avatar_url}
              variant="primary"
            />
          )}
        </ul>
      </section>
    </Container>
    
  );
};
