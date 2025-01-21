import React from "react";
import { Container } from "./styles";
import LinkItem from "../link";

export default function ToDoScreen({ username }) {
  return (
    <Container>
      <h4>O que você deseja fazer?</h4>
      <div className="link-container">
        <LinkItem
          variant="todoLinkPrimary"
          name="Criar repositório"
          to="https://github.com/new"
          target="_blank"
        />
        <LinkItem
          variant="todoLinkSecondary"
          name="Configurações"
          to="https://github.com/settings/profile"
          target="_blank"
        />
        <LinkItem
          variant="todoLinkSecondary"
          name="Suas estrelas"
          to={`https://github.com/${username}?tab=stars`}
          target="_blank"
        />
        <LinkItem
          variant="todoLinkSecondary"
          name="Novo Gist"
          to="https://gist.github.com/"
          target="_blank"
        />
      </div>
    </Container>
  );
}
