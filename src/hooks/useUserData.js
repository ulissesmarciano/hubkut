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
        employ: '',
        email: '',
        portfolio: '',
        city: '',
        xUserName: '',
        bio: '',
        numberOfRepos: '',
        numberOfStarredRepos: '',
        numberOfFollowing: '',
        numberOfFollowers: '',
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
                photo: userData.avatar_url,
                employ: userData.company,
                email: userData.email,
                portfolio: userData.blog,
                city: userData.location,
                xUserName: userData.twitter_username,
                bio: userData.bio,
                numberOfRepos: userData.public_repos,
                numberOfFollowing: userData.following,
                numberOfFollowers: userData.followers,
            }))
        }
    }, [userData])

    useEffect(() => {
        if(starredData) {
            setUser(prevState => ({
                ...prevState,
                numberOfStarredRepos: starredData.length,
            }))
        }
    }, [starredData])

    return user

};

export default useUserData;