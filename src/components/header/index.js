import React from 'react';
import { Container } from './styles';

import HubkutLogo from '../../assets/icons/hubkut-icon.png';
import SidebarHeaderButton from '../sidebar-header-button';

export default function Header() {
  return (
    <Container>
        <div className='logo-section'>
            <picture >
                <img src={HubkutLogo} alt='Logotipo do Hubkut'/>
            </picture>
        </div>
        <nav className='menu-section'>
            <ul>
                <li>início</li>
                <li>Seguidores</li>
                <li>Seguindo</li>
            </ul>
        </nav>
        <div className='sidebar-section.'>
            <SidebarHeaderButton />
        </div>
    </Container>
  )
}
