import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useFetchUserData from '../../hooks/useFetchUserData';
import useFetchFollowersData from '../../hooks/useFetchFollowersData';
import useFetchFollowingData from '../../hooks/useFetchFollowingData';
import useFetchReposData from '../../hooks/useFetchReposData';
import useFetchStarredData from '../../hooks/useFetchStarredData';
import Header from '../../components/header';

const HomePage = () => {
  const {username} = useParams();
  // const userData = useFetchUserData(username);
  // const followersData = useFetchFollowersData(username);
  // const followingData = useFetchFollowingData(username);
  // const reposData = useFetchReposData(username);
  // const starredData = useFetchStarredData(username);
  
  // console.log(userData);
  // console.log(followersData);
  // console.log(followingData);
  // console.log(reposData);
  // console.log(starredData);
  return (
    <div>
      <Header />
        
    </div>
  )
}

export default HomePage;
