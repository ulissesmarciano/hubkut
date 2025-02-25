import React, { useState } from "react";
import api from "../../services/api.js";
import { Container } from "./styles.js";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.js";

import Button from "../../components/button";
import LoginInput from "../../components/login-input";

import HubKutIcon from "../../assets/icons/hubkut-icon.png";

export default function LoginScreen() {
  const { setUsername } = useUser();
  const [username, setUsernameLocal] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsernameLocal(e.target.value);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNavigation();
    }
  };

  const handleNavigation = async () => {
    if (username.trim() === "") {
      setError("Por favor, insira um nome de usuário.");
    } else {
      try {
        const response = await api.get(`/${username}`);

        if (response.status === 200) {
          setError("");
          setUsername(username); // Atualizar o contexto
          localStorage.setItem("username", username); // Salvar no localStorage
          navigate(`/home/${username}`);
        } else {
          setError(`Usuário "${username}" não encontrado.`);
        }
      } catch (error) {
        console.error("Erro ao verificar usuário:", error);
        setError("Erro ao verificar usuário. Por favor, tente novamente.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNavigation();
  };

  return (
    <Container>
      <section className="login-container">
        <div className="login-info-container">
          <figure>
            <img src={HubKutIcon} alt="imagem da logotipo Hubkut" />
          </figure>
          <div className="login-page-text">
            <p>
              <span>Conecte-se</span> aos seus amigos e familiares usando
              recados e mensagens instantâneas
            </p>
            <p>
              <span>Conheça</span> novas pessoas através de amigos de seus
              amigos e comunidades
            </p>
            <p>
              <span>Compartilhe</span> seus repositórios, fotos e paixões em um
              só lugar
            </p>
          </div>
        </div>
        <div className="login-section">
          <form className="login-form" onSubmit={handleSubmit}>
            <span>Acesse o Hubkut com sua conta</span>
            <div className="user-form-section">
              <label htmlFor="username">
                <p>Usuário:</p>
              </label>
              <div className="login-box">
                <LoginInput
                  id="username"
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  value={username}
                  error={error}
                  className="login-input"
                />
                <Button type="submit" variant="loginButton" />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
        <div className="singnin-section">
          <p>Ainda não é membro?</p>
          <a
            href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
            target="_blank"
            rel="noreferrer"
          >
            CADASTRE-SE NO GITHUB
          </a>
        </div>
      </section>
    </Container>
  );
}
