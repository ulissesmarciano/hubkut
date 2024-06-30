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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNavigation();
  };

  return (
    <Container>
      <section className='login-container'>
        <figure>
          <img src={HubKutIcon} alt='imagem da logotipo Hubkut' />
        </figure>
        <div className='login-page-text'>
          <p><span>Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><span>Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><span>Compartilhe</span> seus repositórios, fotos e paixões em um só lugar</p>
        </div>
        <section className='login-input-section'>
          <form  onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <LoginInput 
              id="username"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={username}
              error={error}
            />
            <Button type="submit">
              Entrar
            </Button>
            {error && <p className='error-message'>{error}</p>}
          </form>
        </section>
        
      </section>
    </Container>
  );
}

