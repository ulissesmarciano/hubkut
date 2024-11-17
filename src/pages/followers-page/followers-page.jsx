import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import useUserData from '../../hooks/useUserData'

import Header from '../../components/header';
import FollowUser from '../../components/follow-user';
import LinkItem from '../../components/link';
import Loader from '../../components/loader';

export default function FollowersPage() {
  const [loading, setLoading] = useState(true);

  const data = useParams();
  const username = data.username;
  const followersData = useUserData(username).followersUsers;
  console.log(followersData);


  useEffect(() => {
    if (
      followersData
    ) {
      setLoading(false);
    }
  }, [followersData])

  return (
    <>
      <Header
        followersLinkHref={username}
        followingLinkHref={username}
        homepageLinkHref={username}
      />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <section className='followers-section'>
            <div className='link-section'>
              <p>Seguidores</p>
              <LinkItem
                name="Voltar"
                to={`/home/${username}`}
                variant="seAllLink"
              />
            </div>
            <ul className='list'>
              {followersData.map((user, index) =>
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
        )}
      </Container>
    </>
  );
};
