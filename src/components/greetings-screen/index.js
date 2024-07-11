import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import RepositoriesIcon from '../../assets/icons/repositories-icon.png';
import FavoritesIcon from '../../assets/icons/starred-icon.png';
import FollowersIcon from '../../assets/icons/user-icon.png';
import FollowingIcon from '../../assets/icons/following-icon.png';


export default function GreetingScreen() {
  return (
    <Container>
      <h2 className='greeting-name'>Bem vindo(a), Ulisses Marciano Gonçalves</h2>
      <p className='bio' >Developer Sudent | JavaScript | CSS | java | React Native</p>
      <ul className='stats-info'>
        <li className='item'>
          <p className='name'>Repositórios</p>
          <Link className='link' to={'#'}>
              <img src={RepositoriesIcon} alt='icone repositórios' />
              <p>33</p>
          </Link>
        </li>
        <li className='item'>
          <p className='name'>Favoritos</p>
          <Link className='link' to={'#'}>
              <img src={FavoritesIcon} alt='icone repositórios' />
              <p>33</p>
          </Link>
        </li>
        <li className='item'>
          <p className='name'>Seguidores</p>
          <Link className='link' to={'#'}>
              <img src={FollowersIcon} alt='icone repositórios' />
              <p>33</p>
          </Link>
        </li>
        <li className='item'>
          <p className='name'>Seguindo</p>
          <Link className='link' to={'#'}>
              <img src={FollowingIcon} alt='icone repositórios' />
              <p>33</p>
          </Link>
        </li>
      </ul>
    </Container>
  )
}
