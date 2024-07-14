import React from 'react';
import { Container } from './styles';
import LinkItem from '../link';

export default function ToDoScreen() {
  return (
    <Container>
      <h4>O que você deseja fazer?</h4>
      <div className='link-container'>
        <LinkItem variant="todoLinkPrimary" name="Criar repositório"/>
        <LinkItem variant="todoLinkSecondary" name="Clonar repositório"/>
        <LinkItem variant="todoLinkSecondary" name="Suas estrelas"/>
        <LinkItem variant="todoLinkSecondary" name="Novo Gist"/>
      </div>
    </Container>
  );
};
