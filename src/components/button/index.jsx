import React from "react";
import { Container } from "./styles";

const Button = ({ type, onClick, variant }) => {
  return (
    <Container type={type} onClick={onClick} $variant={variant}>
      Entrar
    </Container>
  );
};

export default Button;
