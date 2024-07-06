import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetchUserData from '../../hooks/useFetchUserData';

const HomePage = () => {
  const {username} = useParams();
  const userData = useFetchUserData(username);
  
  console.log(userData)
  console.log(username);
  return (
    <div>
        HomePage
        <Link to='/'>Voltar</Link>

        <p>{username}</p>
    </div>
  )
}

export default HomePage;
