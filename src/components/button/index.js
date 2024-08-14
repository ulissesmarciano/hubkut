import React from 'react';
import { Container } from './styles';

export default function Button({type, onClick, variant }) {
  return (
    <Container type={type} onClick={onClick} $variant={variant}>
        Entrar
    </Container> 
  );
};
