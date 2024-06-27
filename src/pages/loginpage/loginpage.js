import React, { useState } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button';
import HubKutIcon from '../../assets/icons/hubkut-icon.png';
import LoginInput from '../../components/input';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Redireciona para a página `/home/${username}`
      navigate(`/home/${username}`);
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value); // Atualiza o estado `username` com o valor digitado
  };

  return (
    <Container>
      <section className='login-section'>
        <figure>
          <img src={HubKutIcon} alt='imagem da logotipo Hubkut' />
        </figure>
        <div className='login-input-section'>
          Usuário:
          <LoginInput 
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={username}
          />
          <Button to={`/home/${username}`}>Ir para Home</Button>
        </div>
      </section>
    </Container>
  );
}
