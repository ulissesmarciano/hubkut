import React, { useState } from "react";
import { Container } from "./styles";
import { useUser } from "../../contexts/UserContext";
import LinkItem from "../LinkItem";

import HubkutLogo from "../../assets/icons/hubkut-icon.png";

export default function Header({ followersLinkHref, followingLinkHref }) {
  const { username } = useUser();
  const storedUsername = localStorage.getItem("username") || username;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleLinkClick = () => setSidebar(false);
  return (
    <Container>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={HubkutLogo} alt="Logotipo do site" />
        </div>
        <nav>
          <input
            type="checkbox"
            id="menu-hamburguer"
            checked={sidebar}
            onChange={showSidebar}
          />
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul className={sidebar ? "active" : ""}>
            <li>
              <LinkItem
                name="Início"
                variant="headerLink"
                onClick={handleLinkClick}
                to={`/home/${storedUsername}`}
              />
            </li>
            <li>
              <LinkItem
                name="Seguidores"
                variant="headerLink"
                onClick={handleLinkClick}
                to={`/followers/${followersLinkHref}`}
              />
            </li>
            <li>
              <LinkItem
                name="Seguindo"
                variant="headerLink"
                onClick={handleLinkClick}
                to={`/following/${followingLinkHref}`}
              />
            </li>
            <li>
              <LinkItem
                name="Sair"
                variant="headerLink"
                onClick={handleLinkClick}
                to="/"
              />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
