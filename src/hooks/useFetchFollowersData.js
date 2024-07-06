import {useEffect, useState} from 'react';
import api from '../services/api';

const useFetchFollowersData = (isUsername) => {
  const [followers, setFollowers] = useState('');
    
  useEffect(() => {
    const fetchFollowersData = async () => {
      try {
        const userFollowers = await api.get(`/${isUsername}/followers`);
        const follower = userFollowers.data;
        setFollowers(follower);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchFollowersData();
  }, [isUsername])

    return followers;
}

export default useFetchFollowersData;
