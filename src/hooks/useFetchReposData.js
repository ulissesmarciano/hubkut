import { useEffect, useState } from "react";
import api from "../services/api";


const useFetchReposData = (isUsername) => {
  const [repos, setRepos] = useState('');

  useEffect(() => {
    const fetchReposData = async () => {
        try {
            const response = await api.get(`/${isUsername}/repos`);
            const repositorie = response.data;
            setRepos(repositorie);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        fetchReposData();
    }
  }, [isUsername]);

  return repos;
}

export default useFetchReposData;
