import React from 'react'
import { UserLink } from './styles'


export default function FollowUser({imageurl, username}) {
  return (
    <li>
        <UserLink to="#" imageurl={imageurl}>
          <p className='username'>{username}</p>
        </UserLink>
    </li>
  )
}
