import {useState, useEffect} from 'react';
import api from '../services/api';


const useFetchUserData = (isUsername) => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await api.get(`/${isUsername}`);
        const username = userResponse.data

        const repoResponse = await api.get(`/${isUsername}/repos`)
        const repositories = repoResponse.data;

        const userStarred = await api.get(`/${isUsername}/starred`)
        const starred = userStarred;

        const userFollowers = await api.get(`/${isUsername}/followers`)
        const followers = userFollowers.data;

        const userFollowing = await api.get(`/${isUsername}/following`)
        const following = userFollowing.data;

        setUser({
          
          ...username,
          ...repositories,
          ...starred,
          ...followers,
          ...following,
        });


      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();

  }, [isUsername]);

  return user;
}

export default useFetchUserData;
