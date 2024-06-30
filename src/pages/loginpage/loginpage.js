import React, { useState } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; 

import Button from '../../components/button';
import HubKutIcon from '../../assets/icons/hubkut-icon.png';
import LoginInput from '../../components/input';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNavigation();
    }
  };

  const handleButtonClick = () => {
    handleNavigation();
  };

  const handleNavigation = async () => {
    if (username.trim() === '') {
      setError('Por favor, insira um nome de usuário.');
    } else {
      try {
        const response = await api.get(`/${username}`)
        if(response.status === 200) {
          setError('');
          navigate(`/home/${username}`);
        } else {
          setError(`Usuário "${username}" não encontrado.`)
        }
      } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        setError('Erro ao verificar usuário. Por favor, tente novamente.')
      }
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
            error={error} // Passa a prop error para o LoginInput
          />
          {/* Use onClick para redirecionar */}
          <Button onClick={handleButtonClick}>
            Entrar
          </Button>
        </div>
          {error && <p className='error-message'>{error}</p>}
      </section>
    </Container>
  );
}
