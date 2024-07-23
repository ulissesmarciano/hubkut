import React from 'react';
import { Container } from './styles';
import HeaderSidebarButton from '../header-sidebar-button';
import LinkItem from '../link';

export default function Sidebar({ active, homepageLinkHref, followingLinkHref, followersLinkHref }) {
  const closeSidebar = () => active(false);
  return (
    <Container $active={active}>
        <div className='close-sidebar-section'>
            <HeaderSidebarButton onClick={closeSidebar} variant="closeStyle"/>
        </div>
        <section className='menu-section'>
            <ul className='list'>
              <li>
                <LinkItem 
                  name="Início"
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
              <li>
                <LinkItem 
                  name="Sair"
                  to="/"
                  variant="headerLink"
                />
              </li>
            </ul>
        </section>
    </Container>
  )
}
