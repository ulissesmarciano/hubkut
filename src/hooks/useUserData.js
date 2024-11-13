import { useState, useEffect } from "react";
import useFetchUserData from "./useFetchUserData";
import useFetchReposData from "./useFetchReposData";
import useFetchStarredData from "./useFetchStarredData";
import useFetchFollowersData from "./useFetchFollowersData";
import useFetchFollowingData from "./useFetchFollowingData";


const useUserData = (username) => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        picture: '',
    })

    const userData = useFetchUserData(username);
    const reposData = useFetchReposData(username);
    const starredData = useFetchStarredData(username);
    const followersData = useFetchFollowersData(username);
    const followingData = useFetchFollowingData(username);

    useEffect(() => {
        if (userData) {
            setUser(prevState => ({
                ...prevState,
                
            }))
        }
    }, [userData])

    return user
    
};

export default useUserData;