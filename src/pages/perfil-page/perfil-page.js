import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import Header from '../../components/header';
import UserScreen from '../../components/user-screen';

import useFetchUserData from '../../hooks/useFetchUserData';
import useFetchFollowersData from '../../hooks/useFetchFollowersData';
import useFetchFollowingData from '../../hooks/useFetchFollowingData';
import useFetchReposData from '../../hooks/useFetchReposData';
import useFetchStarredData from '../../hooks/useFetchStarredData';
import GreetingScreen from '../../components/greetings-screen';
import ToDoScreen from '../../components/to-do-screen';
import ReposScreen from '../../components/repos-screen';
import FollowSection from '../../components/follow-section';
import FollowUser from '../../components/follow-user';
import RepoItem from '../../components/repoitem';

export default function PerfilPage () {
  const {username} = useParams();
  const userData = useFetchUserData(username);
  const followingData = useFetchFollowingData(username);
  const followersData = useFetchFollowersData(username);
  const reposData = useFetchReposData(username);
  const starredData = useFetchStarredData(username);
  
  return (
    <div>
      <Header 
        followersLinkHref={username}
        followingLinkHref={username}
      />
      <Container>
        <aside className='user-section'>
          <UserScreen
            src={userData.avatar_url}
            alt={`foto de ${userData.name}`}
            name={userData.name}
            employ={userData.company}
            city={userData.location}
            email={userData.email}
            portfolio={userData.blog}
            portfolioHref={userData.blog}
            xUsername={userData.twitter_username}
            xHref={userData.twitter_username}
          />
        </aside>
        <section className='info-section'>
          <ReposScreen 
            repoItem={reposData.map((repo, index) => 
              <RepoItem 
                key={index}
                repoName={repo.name}
                repoUrl={repo.full_name}
                to={repo.svn_url}
              />
            ).slice(0, 5)}
          />
        </section>
        <aside className='follow-side'>
          <section>
            <FollowSection
                typeName="seguindo"
                count={userData.following}
                to={`/following/${username}`}
                followUser={(followingData.map((user, index) =>
                  <FollowUser
                    key={index} 
                    imageUrl={user.avatar_url}
                    usernameIn={user.login}
                    variant="secondary"
                    to={user.login}
                  />
                ).slice(0, 6))}
            />
          </section>
          <section>
            <FollowSection
                typeName="seguidores"
                count={userData.followers}
                followUser={(followersData.map((user, index) =>
                  <FollowUser
                    key={index} 
                    imageUrl={user.avatar_url}
                    usernameIn={user.login}
                    variant="secondary"
                  />
                ).slice(0, 6))}
                to={`/followers/${username}`}
            />
          </section>
        </aside>
      </Container>
    </div>
  );
};

