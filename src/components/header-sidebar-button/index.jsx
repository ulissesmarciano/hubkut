import React from 'react';
import { Container, TfiMenuIcon, TfiCloseIcon } from './styles';

export default function HeaderSidebarButton({ onClick, variant }) {
  return (
    <Container onClick={onClick}>
      {variant === 'closeStyle' ? <TfiCloseIcon /> : <TfiMenuIcon />}
    </Container>
  );
};
