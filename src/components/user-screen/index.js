import React from 'react';
import { Container } from './styles';

import EmployEmoji from '../../assets/icons/company-icon.png';
import PinIcon from '../../assets/icons/pin-icon.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkIcon from '../../assets/icons/link-icon.png';
import TwitterIcon from '../../assets/icons/twitter-icon.png';


const ProfilePicture = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4';

export default function UserScreen({
  src,
  alt,
  name,
  profession,
  employ,
  city,
  email,
  portfolio,
  xTwitter
}) {
  return (
    <Container>
      	<picture className='user-profile-picture'>
          <img src={src} alt={alt} />
        </picture>
        <span />
        <div className='username-section'>
          <h3>{name}</h3>
          <p>{profession}</p>
        </div>
        <span />
        <ul className='info-list-section'>
          <li>
            <img src={EmployEmoji} alt='ícone empresa'/>
            <p>{employ}</p>
          </li>
          <li>
            <img src={PinIcon} alt='ícone localização'/>
            <p>{city}</p>
          </li>
          <li>
            <img src={MailIcon} alt='ícone email'/>
            <p>{email}</p>
          </li>
          <li>
            <img src={LinkIcon} alt='ícone link'/>
            <p>{portfolio}</p>
          </li>
          <li>
            <img src={TwitterIcon} alt='ícone twitter'/>
            <p>{xTwitter}</p>
          </li>
        </ul>
        <span />
    </Container>
  )
}
