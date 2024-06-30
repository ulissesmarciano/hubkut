import React, { useState } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button';
import HubKutIcon from '../../assets/icons/hubkut-icon.png';
import LoginInput from '../../components/input';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError(''); // Limpa o erro ao começar a digitar novamente
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNavigation();
    }
  };

  const handleButtonClick = () => {
    handleNavigation();
  };

  const handleNavigation = () => {
    if (username.trim() === '') {
      setError('Por favor, insira um nome de usuário.');
    } else {
      setError('');
      navigate(`/home/${username}`);
    }
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
          <Button onClick={handleButtonClick}/>
        </div>
          {error && <p className='error-message'>{error}</p>}
      </section>
    </Container>
  );
}
