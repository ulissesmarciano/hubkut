import React, { useState } from 'react';
import { Container } from './styles';

import Button from '../../components/button';
import HubKutIcon from '../../assets/icons/hubkut-icon.png';
import LoginInput from '../../components/input';


export default function LoginPage() {
  const [username, setUsername] = useState('');

  return (
    <Container>
        <section className='login-section'>
          <figure>
            <img src={HubKutIcon} alt='imagem da logotipo Hubkut' />
          </figure>
          <div>
            Usuário:
            <LoginInput 
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button to={`/home/${username}`}/>
          </div>
        </section>
    </Container>
  )
}
