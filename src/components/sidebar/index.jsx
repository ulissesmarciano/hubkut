import React from 'react';
import { Container } from './styles';
import HeaderSidebarButton from '../header-sidebar-button';
import LinkItem from '../link';
import { useUser } from '../../context/UserContext';

export default function Sidebar({ active, followingLinkHref, followersLinkHref }) {
  const { username } = useUser();
  const storedUsername = localStorage.getItem('username') || username;
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
                  to={`/home/${storedUsername}`}
                  variant="headerLink"
                />
              </li>
              <li>
                <LinkItem 
                  name="Seguidores"
                  to={`/followers/${storedUsername}`}
                  variant="headerLink"
                />
              </li>
              <li>
                <LinkItem 
                  name="Seguindo"
                  to={`/following/${storedUsername}`}
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
  );
};
