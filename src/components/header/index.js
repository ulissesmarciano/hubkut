import React from 'react';
import { Container } from './styles';

import HubkutLogo from '../../assets/icons/hubkut-icon.png';
import SidebarHeaderButton from '../sidebar-header-button';
import LinkItem from '../link';

export default function Header({homepageLinkHref, followersLinkHref, followingLinkHref}) {
  return (
    <Container>
        <div className='logo-section'>
            <picture >
                <img src={HubkutLogo} alt='Logotipo do Hubkut'/>
            </picture>
        </div>
        <nav className='menu-section'>
            <ul>
                <li>
                    <LinkItem name="Inicio" to={`/home/${homepageLinkHref}`} variant="headerLink" />
                </li>
                <li>
                    <LinkItem name="Seguidores" to={`/followers/${followersLinkHref}`} variant="headerLink" />
                </li>
                <li>
                    <LinkItem name="Seguindo" to={`/following/${followingLinkHref}`} variant="headerLink" />
                </li>
            </ul>
            <ul>
                <li>
                    <LinkItem name="Sair" to="/" variant="headerLink" />
                </li>
            </ul>
        </nav>
        <div className='sidebar-section'>
            <SidebarHeaderButton />
        </div>
    </Container>
  )
}
