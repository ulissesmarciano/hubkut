import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import Header from '../../components/header';
import Loader from '../../components/loader';
import RepoItem from '../../components/repoitem';
import FollowUser from '../../components/follow-user';
import UserScreen from '../../components/user-screen';
import ReposScreen from '../../components/repos-screen';
import FollowSection from '../../components/follow-section';

import useUserData from '../../hooks/useUserData';

export default function PerfilPage() {
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const userData = useUserData(username);


  const firstName = userData.name?.split(' ')[0];

  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

  return (
    <>
      <Header
        followersLinkHref={username}
        followingLinkHref={username}
      />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <aside className='user-side'>
            <UserScreen
              src={userData.photo}
              alt={`foto de ${userData.name}`}
              name={userData.name}
              employ={userData.employ}
              city={userData.city}
              email={userData.email}
              portfolio={userData.portfolio}
              portfolioHref={userData.portfolio}
              xUsername={userData.twitter_username}
              xHref={userData.xUserName}
            />
          </aside>
          <section className='info-section'>
            <ReposScreen
              repoScreenTitle={`Últimos repositórios de ${firstName}`}
              repoPageLink={`/repos/${userData.login}`}
              repoItem={userData.lastRepos.map((repo, index) =>
                <RepoItem
                  key={index}
                  repoName={repo.name}
                  repoUrl={repo.full_name}
                  to={repo.svn_url}
                />
              )}
            />
          </section>
          <aside className='follow-side'>
            <section>
              <FollowSection
                typeName="seguindo"
                count={userData.numberOfFollowing}
                to={`/following/${username}`}
                followUser={(userData.followingUsers.map((user, index) =>
                  <FollowUser
                    key={index}
                    imageUrl={user.avatar_url}
                    usernameIn={user.login}
                    variant="secondary"
                    to={user.login}
                  />
                )).slice(0, 6)}
              />
            </section>
            <section>
              <FollowSection
                typeName="seguidores"
                count={userData.numberOfFollowers}
                followUser={(userData.followersUsers.map((user, index) =>
                  <FollowUser
                    key={index}
                    imageUrl={user.avatar_url}
                    usernameIn={user.login}
                    variant="secondary"
                    to={user.login}
                  />
                )).slice(0, 6)}
                to={`/followers/${username}`}
              />
            </section>
          </aside>
        </Container>
      )}
    </>
  );
};

