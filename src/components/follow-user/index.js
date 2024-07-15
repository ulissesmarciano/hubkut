import React from 'react'
import { UserLink } from './styles'

const imageUrl = 'https://avatars.githubusercontent.com/u/104742158?v=4';


export default function FollowUser() {
  return (
    <li>
        <UserLink to="#" imageUrl={imageUrl}>
          <p className='username'>ulissesmarciano</p>
        </UserLink>
    </li>
  )
}
