import React from 'react'
import { Container } from './styles';

const LinkItem = ({variant, name, to, target, onClick}) => {
  return (
    <Container to={to} variant={variant} target={target} onClick={onClick}>
        {name}
    </Container>
  );
};

export default LinkItem;