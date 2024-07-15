import React from 'react';
import { Link, useParams } from 'react-router-dom';
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

const HomePage = () => {
  const {username} = useParams();
  const userData = useFetchUserData(username);
  // const followersData = useFetchFollowersData(username);
  // const followingData = useFetchFollowingData(username);
  // const reposData = useFetchReposData(username);
  // const starredData = useFetchStarredData(username);
  
  console.log(userData);
  // console.log(followersData);
  // console.log(followingData);
  // console.log(reposData);
  // console.log(starredData);

  return (
    <div>
      <Header />
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
            xTwitter={userData.twitter_username}
          />
        </aside>
        <section className='info-section'>
          <GreetingScreen />
          <ToDoScreen />
          <ReposScreen />
        </section>
        <aside className='follow-section'>
            <FollowSection />
            <FollowSection />
        </aside>
      </Container>
    </div>
  )
}

export default HomePage;
