import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import EmployEmoji from '../../assets/icons/company-icon.png';
import PinIcon from '../../assets/icons/pin-icon.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkIcon from '../../assets/icons/link-icon.png';
import XIcon from '../../assets/icons/x_icon.svg';


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
            <Link to={`https://${portfolioHref}`} target='_blank'><p>{portfolio}</p></Link>
          </li>
          <li>
            <img src={XIcon} alt='ícone twitter'/>
            <Link to={`https://x.com/${xHref}`} target='_blank'><p>{xUsername}</p></Link>
          </li>
        </ul>
        <span />
    </Container>
  );
};
