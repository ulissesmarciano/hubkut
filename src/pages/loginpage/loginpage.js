import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Button from '../../components/button';
import HubKutIcon from '../../assets/icons/hubkut-icon.png';


export default function LoginPage() {
  return (
    <Container>
        <section className='login-section'>
          <figure>
            <img src={HubKutIcon} alt='imagem da logotipo Hubkut' />
          </figure>
          <div>
            Usuário:
            <input type='text' />
            <Button />
          </div>
        </section>
    </Container>
  )
}
