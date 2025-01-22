import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import RepositoriesIcon from "../../assets/icons/repositories-icon.png";
import FavoritesIcon from "../../assets/icons/starred-icon.png";
import FollowersIcon from "../../assets/icons/user-icon.png";
import FollowingIcon from "../../assets/icons/following-icon.png";

const GreetingsSection = ({
  name,
  bio,
  repoCount,
  starredCount,
  followersCount,
  followingCount,
  reposHref,
  starredHref,
  followersHref,
  followingHref,
}) => {
  return (
    <Container>
      <h2 className="greeting-name">Bem vindo(a), {name}</h2>
      <p className="bio">{bio}</p>
      <ul className="stats-info">
        <li className="item">
          <p className="name">Repositórios</p>
          <Link className="link" to={`/repos/${reposHref}`}>
            <img src={RepositoriesIcon} alt="icone repositórios" />
            <p>{repoCount}</p>
          </Link>
        </li>
        <li className="item">
          <p className="name">Favoritos</p>
          <Link className="link" to={`/starred/${starredHref}`}>
            <img src={FavoritesIcon} alt="icone repositórios" />
            <p>{starredCount}</p>
          </Link>
        </li>
        <li className="item">
          <p className="name">Seguidores</p>
          <Link className="link" to={`/followers/${followersHref}`}>
            <img src={FollowersIcon} alt="icone repositórios" />
            <p>{followersCount}</p>
          </Link>
        </li>
        <li className="item">
          <p className="name">Seguindo</p>
          <Link className="link" to={`/following/${followingHref}`}>
            <img src={FollowingIcon} alt="icone repositórios" />
            <p>{followingCount}</p>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default GreetingsSection;
