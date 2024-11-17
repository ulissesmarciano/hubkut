import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../components/header';

import useUserData from '../../hooks/useUserData';

import UserScreen from '../../components/user-screen';
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
import { useUser } from '../../context/UserContext';
import Loader from '../../components/loader';

export default function HomePage() {
  
  
  const [loading, setLoading] = useState(true);
  
  const { username: urlUsername } = useParams();
  const { username: contextUsername } = useUser();
  const storedUsername = localStorage.getItem('username');
  const username = urlUsername || contextUsername || storedUsername;
  
  const userData = useUserData(username);
console.log(userData);
  const followingData = useFetchFollowingData(username);
  const followersData = useFetchFollowersData(username);
  const reposData = useFetchReposData(username);
  const starredData = useFetchStarredData(username);

  useEffect(() => {
    if (
      userData &&
      followingData &&
      followersData &&
      reposData &&
      starredData
    ) {
      setLoading(false);
    }
  }, [userData, followingData, followersData, reposData, starredData]);

  return (
    <>
      <Header
        homepageLinkHref={username}
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
              xUsername={userData.xUserName}
              xHref={userData.xUserName}
            />
          </aside>
          <section className='info-section'>
            <GreetingScreen
              name={userData.name}
              bio={userData.bio}
              repoCount={userData.numberOfRepos}
              starredCount={userData.numberOfStarredRepos}
              followersCount={userData.numberOfFollowers}
              followingCount={userData.numberOfFollowing}
              reposHref={username}
              followersHref={username}
              followingHref={username}
              starredHref={username}
            />
            <ToDoScreen username={username} />
            <ReposScreen
              repoScreenTitle={'Meus últimos repositórios:'}
              repoPageLink={`/repos/${username}`}
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
            <FollowSection
              typeName="seguidores"
              count={userData.followers}
              followUser={(followersData.map((user, index) =>
                <FollowUser
                  key={index}
                  imageUrl={user.avatar_url}
                  usernameIn={user.login}
                  variant="secondary"
                  to={user.login}
                />
              ).slice(0, 6))}
              to={`/followers/${username}`}
            />
          </aside>
        </Container>
      )}
    </>
  );
};
