import React from 'react';
import { Container } from './styles';

import EmployEmoji from '../../assets/icons/company-icon.png';
import PinIcon from '../../assets/icons/pin-icon.png';
import MailIcon from '../../assets/icons/mail-icon.png';
import LinkIcon from '../../assets/icons/link-icon.png';
import TwitterIcon from '../../assets/icons/twitter-icon.png';


const ProfilePicture = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4';

export default function UserScreen() {
  return (
    <Container>
      	<picture className='user-profile-picture'>
          <img src={ProfilePicture} alt='foto do usuário' />
        </picture>
        <span />
        <div className='username-section'>
          <h3>Ulisses Marciano</h3>
          <p>front-end developer</p>
        </div>
        <span />
        <ul className='info-list-section'>
          <li>
            <img src={EmployEmoji} alt='ícone empresa'/>
            <p>RocketSeat</p>
          </li>
          <li>
            <img src={PinIcon} alt='ícone localização'/>
            <p>Cubatão</p>
          </li>
          <li>
            <img src={MailIcon} alt='ícone email'/>
            <p>ulisses2104@gmail.com</p>
          </li>
          <li>
            <img src={LinkIcon} alt='ícone link'/>
            <p>ulissesmarciano.dev</p>
          </li>
          <li>
            <img src={TwitterIcon} alt='ícone twitter'/>
            <p>@ulissesmarciano</p>
          </li>
        </ul>
        <span />
    </Container>
  )
}
