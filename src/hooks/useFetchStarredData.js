import {useEffect, useState } from 'react';
import api from '../services/api';

const useFetchStarredData = (isUsername) => {
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const fetchStarredData = async () => {
        try {
            const response = await api.get(`/${isUsername}/starred`);
            const repoStars = response.data;
            setStarred(repoStars);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    fetchStarredData();
  }, [isUsername]);
  
  return starred;
}

export default useFetchStarredData;