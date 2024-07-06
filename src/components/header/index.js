import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

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
                <li><Link>início</Link></li>
                <li><Link>seguidores</Link></li>
                <li><Link>seguindo</Link></li>
            </ul>
            <ul>
                <li><Link>sair</Link></li>
            </ul>
        </nav>
        <div className='sidebar-section'>
            <SidebarHeaderButton />
        </div>
    </Container>
  )
}
