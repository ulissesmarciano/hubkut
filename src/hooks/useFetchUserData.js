import {useState, useEffect} from 'react';
import api from '../services/api';


const useFetchUserData = (username) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/${username}`);
        return response.data;

      } catch (error)  {
        console.error('Error fetching Github data: ', error);
      }
    };
  }, []);
}

export default useFetchUserData
