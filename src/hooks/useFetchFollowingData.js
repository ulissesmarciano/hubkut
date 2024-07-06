import {useEffect, useState} from 'react';
import api from '../services/api';

const useFetchFollowing = (isUsername) => {
  const [following, setFollowing] = useState('');
    
  useEffect(() => {
    const fetchFollowingData = async () => {
      try {
        const userFollowing = await api.get(`/${isUsername}/following`);
        const following = userFollowing.data;
        setFollowing(following);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
      fetchFollowingData();
    }
  }, [isUsername])

    return following;
}

export default useFetchFollowing;
