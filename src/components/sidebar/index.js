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
            <p>Início</p>
            <p>Seguidores</p>
            <p>Seguindo</p>
            <p>Sair</p>
        </section>
    </Container>
  )
}
