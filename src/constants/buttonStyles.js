import { css } from 'styled-components';

export const buttonStyles = {
  primary: css`
    width: 4rem;
    padding: .4rem;
    
    border: 1px solid #000;
    border-radius: 2px;
  `,
  secondary: css`
    background-color: grey;
    color: black;
    border: none;
    &:hover {
      background-color: darkgrey;
    }
  `,
  danger: css`
    background-color: red;
    color: white;
    border: none;
    &:hover {
      background-color: darkred;
    }
  `,
  // Adicione mais estilos conforme necessário
};
