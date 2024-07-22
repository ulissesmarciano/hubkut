import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header';

export default function FollowersScreen() {
  const data = useParams();
  const username = data.username;
      
  return (
    <div>
      <Header 
        followersLinkHref={username}
        followingLinkHref={username}
        homepageLinkHref={username}
      />
        FollowersScreen
        <Link to="/home/ulissesmarciano">Voltar</Link>
    </div>
    
  )
}
