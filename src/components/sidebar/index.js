import React from 'react'
import { Container } from './styles'
import HeaderSidebarButton from '../header-sidebar-button'

export default function Sidebar({active}) {
  const closeSidebar = () => active(false);
  return (
    <Container $active={active}>
      <div className='close-sidebar-section'>
        <HeaderSidebarButton onClick={closeSidebar} variant="closeStyle"/>
      </div>
    </Container>
  )
}
