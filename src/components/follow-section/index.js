import React from 'react';
import { Container } from './styles';
import LinkItem from '../link';
import FollowUser from '../follow-user';

export default function FollowSection() {
  return (
    <Container>
      <p className='section-name'>Seguindo <span>(30)</span></p>
      <ul className='follow-section'>
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <FollowUser />
        <FollowUser />
      </ul>
      <LinkItem name="Ver mais" to="#" variant="seAllLink" />
    </Container>
  )
}
