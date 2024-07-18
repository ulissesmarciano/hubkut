import React, { useState } from 'react';
import { Container } from './styles';

import HeaderSidebarButton from '../header-sidebar-button';

import HubkutLogo from '../../assets/icons/hubkut-icon.png';
import LinkItem from '../link';
import Sidebar from '../sidebar';

export default function Header({ homepageLinkHref, followersLinkHref, followingLinkHref }) {
    
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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
                        <LinkItem 
                            name="Inicio" 
                            to={`/home/${homepageLinkHref}`} 
                            variant="headerLink"
                        />
                    </li>
                    <li>
                        <LinkItem 
                            name="Seguidores" 
                            to={`/followers/${followersLinkHref}`} 
                            variant="headerLink" 
                        />
                    </li>
                    <li>
                        <LinkItem 
                            name="Seguindo" 
                            to={`/following/${followingLinkHref}`} 
                            variant="headerLink" 
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <LinkItem 
                            name="Sair" 
                            to="/" 
                            variant="headerLink" 
                        />
                    </li>
                </ul>
            </nav>
            <div className='sidebar-section'>
                <HeaderSidebarButton 
                    variant="menu"
                    onClick={showSidebar}
                />
                {sidebar && <Sidebar active={setSidebar} />}
            </div>
        </Container>
    )
}
