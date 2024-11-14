import { useState, useEffect } from "react";
import useFetchUserData from "./useFetchUserData";
import useFetchReposData from "./useFetchReposData";
import useFetchStarredData from "./useFetchStarredData";
import useFetchFollowersData from "./useFetchFollowersData";
import useFetchFollowingData from "./useFetchFollowingData";


const useUserData = (username) => {
    const [user, setUser] = useState({
        name: '',
        photo: '',
        username: '',
    })

    const userData = useFetchUserData(username);
    const reposData = useFetchReposData(username);
    const starredData = useFetchStarredData(username);
    const followersData = useFetchFollowersData(username);
    const followingData = useFetchFollowingData(username);
console.log(userData);

    useEffect(() => {
        if (userData) {
            setUser(prevState => ({
                ...prevState,
               name: userData.name,
               photo: userData.avatar_url
            }))
        }
    }, [userData])

    return user
    
};

export default useUserData;