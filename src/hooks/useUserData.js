import { useState, useEffect } from "react";
import useFetchUserData from "./useFetchUserData";
import useFetchReposData from "./useFetchReposData";
import useFetchStarredData from "./useFetchStarredData";
import useFetchFollowersData  from "./useFetchFollowersData ";
import useFetchFollowingData from "./useFetchFollowingData";


const user = {
    name: '',
    username: '',
    picture: '',
    
};