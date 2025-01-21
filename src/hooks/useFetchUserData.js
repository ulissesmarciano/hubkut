import { useState, useEffect } from "react";
import api from "../services/api";

const useFetchUserData = (isUsername) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/${isUsername}`);
        const username = response.data;

        setUser(username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [isUsername]);

  return user;
};

export default useFetchUserData;
