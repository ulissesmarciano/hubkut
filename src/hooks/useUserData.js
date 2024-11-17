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
        followingUsers: [],
        numberOfFollowers: '',
        followersUsers: [],
        lastRepos: [],
    })

    const userData = useFetchUserData(username);
    const starredData = useFetchStarredData(username);
    const followersData = useFetchFollowersData(username);
    const followingData = useFetchFollowingData(username);

    const reposData = useFetchReposData(username);
    const sortedReposData = [...reposData].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 5);
    console.log(useFetchUserData("ulissesmarciano"));

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
    }, [userData]);

    useEffect(() => {
        if (
            followingData && 
            followersData && 
            starredData &&
            reposData
        ) {
            setUser(prevState => ({
                ...prevState,
                followingUsers: followingData.slice(0, 6),
                followersUsers: followersData,
                numberOfStarredRepos: starredData.length,
                lastRepos: sortedReposData,
            }))
        }
    },[followingData, followersData, starredData, reposData])

    return user

};

export default useUserData;