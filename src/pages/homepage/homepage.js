import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HomePage() {
  const {username} = useParams();
  

  return (
    <div>
        HomePage
        <Link to='/'>Voltar</Link>

        <p>{username}</p>
    </div>
  )
}
