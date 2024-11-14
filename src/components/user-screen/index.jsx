import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import EmployEmoji from '../../assets/icons/company-icon.png';
import PinIcon from '../../assets/icons/pin-icon.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkIcon from '../../assets/icons/link-icon.png';
import XIcon from '../../assets/icons/x_icon.svg';
import InfoListItem from '../info-list-item';
import { MdMarkEmailRead } from 'react-icons/md';


export default function UserScreen({
  src,
  alt,
  name,
  profession,
  employ,
  city,
  email,
  portfolio,
  portfolioHref,
  xUsername,
  xHref
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
          <InfoListItem 
            itemEmoji={EmployEmoji}
            itemName={employ}
          />
          <InfoListItem 
            itemEmoji={PinIcon}
            itemName={city}
          />
          <InfoListItem 
            itemEmoji={MailIcon}
            itemName={email}
          />
          <InfoListItem 
            itemEmoji={LinkIcon}
            itemName={employ}
          />
          <InfoListItem 
            itemEmoji={EmployEmoji}
            itemName={portfolio}
            to={portfolioHref}
          />
          <InfoListItem 
            itemEmoji={XIcon}
            itemName={xUsername}
            to={`https://x.com/${xHref}`} 
          />
        </ul>
        <span />
    </Container>
  );
};
